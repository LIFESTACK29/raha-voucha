"use client";

import React, { FormEvent, useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { christmasPackages, packageOffers } from "@/utils/packages";
import { addOrder } from "@/services/order";
import { toast } from "sonner";
import dynamic from "next/dynamic";
import { DialogClose } from "@radix-ui/react-dialog";

const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  { ssr: false }
);

const publicKey = process.env.NEXT_PUBLIC_RAHA_PAYSTACK_PUBLIC_KEY_TEST;

const ModalForm = () => {
  const closeRef = useRef<HTMLButtonElement>(null);

  const [senderDetails, setSenderDetails] = useState({
    sender_name: "",
    sender_email: "",
    sender_business_name: "",
    sender_tel: "",
  });
  const [recieverPackage, setRecieverPackage] = useState([
    {
      id: 1,
      receiver_name: "",
      receiver_tel: "",
      receiver_address: "",
      receiver_note: "",
      package_name: "",
      package_offer: "",
      package_price: 0,
    },
  ]);
  const [loading, setLoading] = useState(false);

  const reqBody = { senderDetails, receiverDetails: recieverPackage };

  const totalPrice: number = recieverPackage.reduce(
    (totalPrice, recieverPackage) => {
      return (totalPrice += recieverPackage.package_price);
    },
    0
  );

  async function createUserOrder() {
    try {
      setLoading(true);
      const { status, message } = await addOrder(reqBody);
      if (status !== 200) {
        setLoading(false);
        toast.error(message);
      }
      console.log(message);
      setLoading(false);
      toast.success(message);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      toast.error("Unable to place order. Please try again.");
      return;
    }
  }

  async function cancelUserOrder() {
    setLoading(false);
    toast.error("Unable to place order. Please try again.");
  }

  const componentProps = {
    email: senderDetails.sender_email,
    amount: totalPrice * 100, // Convert from kobo naira
    metadata: {
      // name: user?.name,
      // number: "08113848299",
    },
    publicKey,
    text: loading ? "Placing Order..." : "Place your order", //Process Payment
    onSuccess: createUserOrder,
    // SuccessToast("Thanks for doing business with us! Come back soon!!"),
    onClose: cancelUserOrder,
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // setLoading(true);
   
    // console.log(reqBody);
    // console.log(totalPrice);
  };

  const handlePaystackClick = () => {

    // Close the dialog immediately when Paystack button has been clicked
    setTimeout(() => {
      closeRef.current?.click();
    }, 500);
  }

  const addReceiverPackage = () => {
    setRecieverPackage([
      ...recieverPackage,
      {
        id: recieverPackage.length + 1,
        receiver_name: "",
        receiver_tel: "",
        receiver_address: "",
        receiver_note: "",
        package_name: "",
        package_offer: "",
        package_price: 0,
      },
    ]);
  };

  const removeRecieverPackage = (id: number) => {
    if (recieverPackage.length <= 1) return;
    setRecieverPackage(recieverPackage.filter((pkg) => pkg.id !== id));
  };

  const handleSenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSenderDetails({
      ...senderDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleRecieverChange = (
    id: number,
    field: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any
  ) => {
    setRecieverPackage(
      recieverPackage.map((pkg) =>
        pkg.id === id ? { ...pkg, [field]: value } : pkg
      )
    );
  };
  return (
    <>
      <Dialog>
        <DialogTrigger className="bg-primaryColor font-light text-lg text-primaryColorText px-6 py-3 rounded-md ">
          Select Package
        </DialogTrigger>
        <DialogContent className="md:py-12 px-5 py-10 md:px-10 text-primaryColorText">
          <DialogHeader>
            <DialogTitle className="text-left">Place an Order </DialogTitle>
            <DialogDescription className="h-[70vh] overflow-y-auto">
              <form onSubmit={handleSubmit}>
                <h1 className="font-semibold pt-5 px-2 text-left">
                  Sender&apos;s information
                </h1>

                <div className="flex flex-col gap-8 md:flex-row p-2">
                  <input
                    type="text"
                    required
                    name="sender_name"
                    className="border p-3 h-12 bg-[#ecebf382] rounded-md text-sm md:text-base block outline-none w-full focus:border-green-400 duration-200"
                    onChange={handleSenderChange}
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    required
                    name="sender_email"
                    className="border p-3 h-12 bg-[#ecebf382] rounded-md text-sm md:text-base block outline-none w-full focus:border-green-400 duration-200"
                    onChange={handleSenderChange}
                    placeholder="Your Email"
                  />
                </div>

                <div className="flex flex-col gap-8 md:flex-row p-2">
                  <input
                    type="text"
                    name="sender_business_name"
                    className="border p-3 h-12 bg-[#ecebf382] rounded-md text-sm md:text-base block outline-none w-full focus:border-green-400 duration-200"
                    onChange={handleSenderChange}
                    placeholder="Your Business name (optional)"
                  />
                  <input
                    type="text"
                    required
                    name="sender_tel"
                    className="border p-3 h-12 bg-[#ecebf382] rounded-md text-sm md:text-base block outline-none w-full focus:border-green-400 duration-200"
                    onChange={handleSenderChange}
                    placeholder="Your Phone number"
                  />
                </div>

                <div className="mt-4">
                  {recieverPackage.map((pkg, index) => (
                    <>
                      <div className="flex justify-between px-2 h-auto items-center my-2">
                        <h1 className="font-semibold">
                          Receiver&apos;s information & package
                        </h1>
                        {index + 1 > 1 && (
                          <button
                            onClick={() => removeRecieverPackage(pkg.id)}
                            className="text-red-500"
                          >
                            Remove
                          </button>
                        )}
                      </div>

                      <div className="flex flex-col gap-8 md:flex-row p-2">
                        <input
                          type="text"
                          required
                          name="receiver_name"
                          className="border p-3 h-12 bg-[#ecebf382] rounded-md text-sm md:text-base block outline-none w-full focus:border-green-400 duration-200"
                          onChange={(event) =>
                            handleRecieverChange(
                              pkg.id,
                              "receiver_name",
                              event.target.value
                            )
                          }
                          placeholder="Recieier's Name"
                        />
                        <input
                          type="text"
                          required
                          name="receiver_tel"
                          className="border p-3 h-12 bg-[#ecebf382] rounded-md text-sm md:text-base block outline-none w-full focus:border-green-400 duration-200"
                          onChange={(event) =>
                            handleRecieverChange(
                              pkg.id,
                              "receiver_tel",
                              event.target.value
                            )
                          }
                          placeholder="Receiver's Phone Number"
                        />
                      </div>

                      <div className="flex flex-col gap-8 md:flex-row p-2">
                        <input
                          type="text"
                          required
                          name="receiver_address"
                          className="border p-3 h-12 bg-[#ecebf382] rounded-md text-sm md:text-base block outline-none w-full focus:border-green-400 duration-200"
                          onChange={(event) =>
                            handleRecieverChange(
                              pkg.id,
                              "receiver_address",
                              event.target.value
                            )
                          }
                          placeholder="Receiver's Address"
                        />
                        <input
                          type="text"
                          required
                          name="receiver_note"
                          className="border p-3 h-12 bg-[#ecebf382] rounded-md text-sm md:text-base block outline-none w-full focus:border-green-400 duration-200"
                          onChange={(event) =>
                            handleRecieverChange(
                              pkg.id,
                              "receiver_note",
                              event.target.value
                            )
                          }
                          placeholder="Drop a note, you would like the receiver to get"
                        />
                      </div>

                      <div className="flex flex-col gap-8 md:flex-row p-2">
                        <Select
                          onValueChange={(value) => {
                            const [packageName, packagePrice] =
                              value.split(" ");
                            // I'm setting the packages  offer and price synchronously
                            setRecieverPackage(
                              recieverPackage.map((packageVal) =>
                                packageVal.id === pkg.id
                                  ? {
                                      ...packageVal,
                                      package_name: packageName,
                                      package_price: parseInt(packagePrice),
                                    }
                                  : packageVal
                              )
                            );
                          }}
                        >
                          <SelectTrigger className=" h-12 focus:border-green-400">
                            <SelectValue placeholder="Choose your Package" />
                          </SelectTrigger>
                          <SelectContent>
                            {christmasPackages.map((christmasPackage) => (
                              <SelectItem
                                key={christmasPackage.packageValue}
                                // Set package name and package price inside a string
                                value={`${christmasPackage.packageValue} ${christmasPackage.packagePrice}`}
                              >
                                <h1>
                                  {christmasPackage.packageName} -{" "}
                                  {`${christmasPackage.packagePrice.toLocaleString()}`}
                                </h1>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <Select
                          onValueChange={(value) =>
                            handleRecieverChange(pkg.id, "package_offer", value)
                          }
                        >
                          <SelectTrigger className="h-12 focus:border-green-400">
                            <SelectValue placeholder="Choose the Package Offer" />
                          </SelectTrigger>
                          <SelectContent>
                            {packageOffers.map((packageOffer) => (
                              <SelectItem
                                key={packageOffer.packageOfferValue}
                                value={`${packageOffer.packageOfferValue}`}
                              >
                                <h1>{packageOffer.packageOfferName}</h1>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  ))}
                </div>

                <button
                  onClick={addReceiverPackage}
                  className=" text-green-400 mb-4 px-2"
                >
                  Deliver to another person
                </button>

                <button
                  disabled={loading}
                  onClick={handlePaystackClick}
                  className="w-full text-center bg-green-400 disabled:opacity-30 disabled:cursor-wait py-5 rounded-md duration-200 text-white"
                >
                  {/* @ts-expect-error: The PaystackButton component is not typed in the project. */}
                  <PaystackButton {...componentProps} />
                </button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>

        <DialogClose ref={closeRef} className="hidden" />
      </Dialog>
    </>
  );
};

export default ModalForm;
