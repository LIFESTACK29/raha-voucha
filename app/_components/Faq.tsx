import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ParentLayout from "./ParentLayout";

const faqData = [
  {
    id: "item-1",
    question: "What is Voucha?",
    answer:
      "Voucha is a gifting service by Raha that lets you send thoughtful hampers, food bundles, or shopping vouchers to loved ones, employees, clients, and more.",
  },
  {
    id: "item-2",
    question: "Where do you deliver?",
    answer:
      "We currently deliver within Port Harcourt and surrounding areas. If you're unsure, contact us, and we'll confirm for you!",
  },
  {
    id: "item-3",
    question: "Can I customize my gift?",
    answer:
      "Yes, you can! Choose from our pre-curated options or create your own custom package to suit your recipient's taste.",
  },
  {
    id: "item-4",
    question: "Can I send a Voucha to multiple people?",
    answer:
      "Yes, you absolutely can! Just let us know the details, and we'll ensure everyone receives their gift hassle-free.",
  },
  {
    id: "item-5",
    question: "How long is the delivery going to take?",
    answer:
      "Delivery typically takes 48 hours from time of order confirmation. We'll keep you updated every step of the way.",
  },
];

const Faq = () => {
  return (
    <ParentLayout>
      <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto py-8 font-bold text-primaryColorText">
        <div>
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl mb-6">
            Frequently Asked Questions
          </h1>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-xl">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base font-light">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </ParentLayout>
  );
};

export default Faq;
