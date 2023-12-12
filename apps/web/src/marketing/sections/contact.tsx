"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import shapeDottedLight from "@/assets/shape/shape-dotted-light.svg";
import shapeDottedDark from "@/assets/shape/shape-dotted-dark.svg";

function Contact(): JSX.Element | null {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <section className="px-4 md:px-8 2xl:px-0" id="support">
      <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]" />
        <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
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
            src={shapeDottedDark}
          />
        </div>

        <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
          <motion.div
            className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            initial="hidden"
            transition={{ duration: 1, delay: 0.1 }}
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
              Send a message
            </h2>

            <form method="POST">
              <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  placeholder="Full name"
                  type="text"
                />

                <input
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  placeholder="Email address"
                  type="email"
                />
              </div>

              <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  placeholder="Subject"
                  type="text"
                />

                <input
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  placeholder="Phone number"
                  type="text"
                />
              </div>

              <div className="mb-11.5 flex">
                <textarea
                  className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  placeholder="Message"
                  rows={4}
                />
              </div>

              <div className="flex flex-wrap gap-4 xl:justify-between ">
                <div className="mb-4 flex md:mb-0">
                  <input
                    className="peer sr-only"
                    id="default-checkbox"
                    type="checkbox"
                  />
                  <span className="group mt-2 flex h-5 min-w-[20px] items-center justify-center rounded border-gray-300 bg-gray-100 text-blue-600 peer-checked:bg-primary dark:border-gray-600 dark:bg-gray-700">
                    <svg
                      className="opacity-0 peer-checked:group-[]:opacity-100"
                      fill="none"
                      height="8"
                      viewBox="0 0 10 8"
                      width="10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29304 0.792787C8.48057 0.605316 8.73488 0.5 9.00004 0.5C9.26521 0.5 9.51951 0.605316 9.70704 0.792787Z"
                        fill="white"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>
                  <label
                    className="flex max-w-[425px] cursor-pointer select-none pl-5"
                    htmlFor="default-checkbox"
                  >
                    By clicking Checkbox, you agree with T&C.
                  </label>
                </div>

                <button
                  aria-label="send message"
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
                  type="button"
                >
                  Send Message
                  <svg
                    className="fill-white"
                    fill="none"
                    height="14"
                    viewBox="0 0 14 14"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                      fill=""
                    />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            initial="hidden"
            transition={{ duration: 2, delay: 0.1 }}
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
              Find us
            </h2>

            <div className="5 mb-7">
              <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                Our Loaction
              </h3>
              <p>290 Maryam Springs 260, Courbevoie, Paris, France</p>
            </div>
            <div className="5 mb-7">
              <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                Email Address
              </h3>
              <p>
                <a href="/">contact@dhavalcode.com</a>
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                Phone Number
              </h4>
              <p>
                <a href="/">+009 42334 6343 843</a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
