"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import shape6 from "@/assets/shape/shape-06.png";
import iconArrowDark from "@/assets/icon/icon-arrow-dark.svg";
import iconArrowLight from "@/assets/icon/icon-arrow-light.svg";

function CTA(): JSX.Element {
  return (
    <section className="overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0">
      <div className="mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-7.5 py-12.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-0">
        <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
          <motion.div
            className="animate_left md:w-[70%] lg:w-1/2"
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
            <h2 className="mb-4 w-11/12 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle4">
              Join With Us Today & Increase Your Productivity
            </h2>
          </motion.div>
          <motion.div
            className="animate_right lg:w-[45%]"
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
            <div className="flex items-center justify-end xl:justify-between">
              <Image
                alt="Saly"
                className="hidden xl:block"
                height={299}
                src={shape6}
                width={299}
              />
              <Link
                className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
                href="/signup"
              >
                Sign up free
                <Image
                  alt="Arrow"
                  className="dark:hidden"
                  height={20}
                  src={iconArrowDark}
                  width={20}
                />
                <Image
                  alt="Arrow"
                  className="hidden dark:block"
                  height={20}
                  src={iconArrowLight}
                  width={20}
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
