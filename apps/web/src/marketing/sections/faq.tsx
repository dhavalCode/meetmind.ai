"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import FAQItem from "@/marketing/components/faq-item";
import faqData from "@/marketing/data/faq-data";
import shapeDottedLight from "@/assets/shape/shape-dotted-light.svg";

function FAQ(): JSX.Element {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqToggle = (id: number): void => {
    activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
  };

  return (
    <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
      <div className="relative mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
        <div className="absolute -bottom-16 -z-1 h-full w-full">
          <Image
            alt="Dotted"
            className="dark:hidden"
            fill
            src={shapeDottedLight}
          />
          <Image
            alt="Dotted"
            className="hidden dark:block"
            fill
            src={shapeDottedLight}
          />
        </div>
        <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center xl:gap-32.5">
          <motion.div
            className="animate_left md:w-2/5 lg:w-1/2"
            initial="hidden"
            transition={{ duration: 1, delay: 0.1 }}
            variants={{
              hidden: {
                opacity: 0,
                x: -20,
              },

              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <span className="font-medium uppercase text-black dark:text-white">
              OUR FAQS
            </span>
            <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
              Frequently Asked
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                Questions
              </span>
            </h2>

            <a
              className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
              href="https://github.com/dhavalcode/meetmind.ai"
              rel="noopener"
              target="_blank"
            >
              <span className="duration-300 group-hover:pr-2">Know More</span>
              <svg
                height="14"
                viewBox="0 0 14 14"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </motion.div>

          <motion.div
            className="animate_right md:w-3/5 lg:w-1/2"
            initial="hidden"
            transition={{ duration: 1, delay: 0.1 }}
            variants={{
              hidden: {
                opacity: 0,
                x: 20,
              },

              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <div className="rounded-lg bg-white shadow-solid-8 dark:border dark:border-strokedark dark:bg-blacksection">
              {faqData.map((faq, key) => (
                <FAQItem
                  key={key}
                  faqData={{ ...faq, activeFaq, handleFaqToggle }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
