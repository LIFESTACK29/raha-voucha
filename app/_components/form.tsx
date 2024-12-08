"use client";

import React, { FormEvent, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  // DialogFooter,
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

const ModalForm = () => {
  const [senderDetails, setSenderDetails] = useState({
    sender_name: "",
    sender_email: "",
    sender_business_name: "",
    sender_tel: "",
  });
  const [receiverPackage, setReceiverPackage] = useState([
    {
      id: 1,
      receiver_name: "",
      receiver_tel: "",
      receiver_address: "",
      receiver_note: "",
      package_name: "",
      package_offer: "",
    },
  ]);

  const reqBody = { senderDetails, receiverDetails: receiverPackage };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(reqBody);
  };

  const addReceiverPackage = () => {
    setReceiverPackage([
      ...receiverPackage,
      {
        id: receiverPackage.length + 1,
        receiver_name: "",
        receiver_tel: "",
        receiver_address: "",
        receiver_note: "",
        package_name: "",
        package_offer: "",
      },
    ]);
  };

  const removeReceiverPackage = (id: number) => {
    if (receiverPackage.length <= 1) return;
    setReceiverPackage(receiverPackage.filter((pkg) => pkg.id !== id));
  };

  const handleSenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSenderDetails({
      ...senderDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleReceiverChange = (id: number, field: string, value: string) => {
    setReceiverPackage(
      receiverPackage.map((pkg) =>
        pkg.id === id ? { ...pkg, [field]: value } : pkg
      )
    );
  };
  return (
    <>
      <Dialog>
        <DialogTrigger>Select Package</DialogTrigger>
        <DialogContent className="py-12 px-10">
          <DialogHeader>
            <DialogTitle>Place an Order </DialogTitle>
            <DialogDescription className="h-[70vh] overflow-y-auto">
              <form onSubmit={handleSubmit}>
                <h1 className="font-semibold pt-5 px-2">
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

                {receiverPackage.map((pkg) => (
                  <>
                    <div className="flex justify-between px-2 h-auto items-center">
                      <h1 className="font-semibold">
                        Reciever&apos;s information & package
                      </h1>
                      <button
                        onClick={() => removeReceiverPackage(pkg.id)}
                        className="text-red-500"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="flex flex-col gap-8 md:flex-row p-2">
                      <input
                        type="text"
                        required
                        name="reciever_name"
                        className="border p-3 h-12 bg-[#ecebf382] rounded-md text-sm md:text-base block outline-none w-full focus:border-green-400 duration-200"
                        onChange={(event) =>
                          handleReceiverChange(
                            pkg.id,
                            "reciever_name",
                            event.target.value
                          )
                        }
                        placeholder="Reciever's Name"
                      />
                      <input
                        type="text"
                        required
                        name="reciever_tel"
                        className="border p-3 h-12 bg-[#ecebf382] rounded-md text-sm md:text-base block outline-none w-full focus:border-green-400 duration-200"
                        onChange={(event) =>
                          handleReceiverChange(
                            pkg.id,
                            "reciever_tel",
                            event.target.value
                          )
                        }
                        placeholder="Reciever's Phone Number"
                      />
                    </div>

                    <div className="flex flex-col gap-8 md:flex-row p-2">
                      <input
                        type="text"
                        required
                        name="reciever_address"
                        className="border p-3 h-12 bg-[#ecebf382] rounded-md text-sm md:text-base block outline-none w-full focus:border-green-400 duration-200"
                        onChange={(event) =>
                          handleReceiverChange(
                            pkg.id,
                            "reciever_address",
                            event.target.value
                          )
                        }
                        placeholder="Reciever's Address"
                      />
                      <input
                        type="text"
                        required
                        name="reciever_note"
                        className="border p-3 h-12 bg-[#ecebf382] rounded-md text-sm md:text-base block outline-none w-full focus:border-green-400 duration-200"
                        onChange={(event) =>
                          handleReceiverChange(
                            pkg.id,
                            "reciever_note",
                            event.target.value
                          )
                        }
                        placeholder="Drop a note, you would like the reciever to get"
                      />
                    </div>

                    <div className="flex flex-col gap-8 md:flex-row p-2">
                      <Select
                        onValueChange={(value) =>
                          handleReceiverChange(pkg.id, "package_name", value)
                        }
                      >
                        <SelectTrigger className=" h-12 focus:border-green-400">
                          <SelectValue placeholder="Choose your Package" />
                        </SelectTrigger>
                        <SelectContent>
                          {christmasPackages.map((christmasPackage) => (
                            <SelectItem
                              key={christmasPackage.packageValue}
                              value={`${christmasPackage.packageValue}`}
                            >
                              <h1>
                                {christmasPackage.packageName} -{" "}
                                {`${christmasPackage.packagePrice}`}
                              </h1>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <Select
                        onValueChange={(value) =>
                          handleReceiverChange(pkg.id, "package_offer", value)
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

                <button
                  onClick={addReceiverPackage}
                  className=" text-green-400 mb-4 px-2"
                >
                  Deliver to another person
                </button>

                <button className="w-full text-center bg-green-400 py-5 rounded-md duration-200 text-white">
                Place your Order
              </button>
              </form>

              
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ModalForm;
