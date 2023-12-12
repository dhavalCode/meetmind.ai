"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import shape4 from "@/assets/shape/shape-04.png";
import shape5 from "@/assets/shape/shape-05.png";
import dottedShapeLight from "@/assets/shape/shape-dotted-light-02.svg";
import dottedShapeDark from "@/assets/shape/shape-dotted-dark-02.svg";

function FunFact(): JSX.Element {
  return (
    <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
      <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] py-22.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5">
        <Image
          alt="Man"
          className="absolute -left-15 -top-25 -z-1 lg:left-0"
          height={384}
          src={shape4}
          width={335}
        />
        <Image
          alt="Doodle"
          className="absolute bottom-0 right-0 -z-1"
          height={132}
          src={shape5}
          width={132}
        />

        <Image
          alt="Dotted"
          className="absolute left-0 top-0 -z-1 dark:hidden"
          fill
          src={dottedShapeLight}
        />
        <Image
          alt="Dotted"
          className="absolute left-0 top-0 -z-1 hidden dark:block"
          fill
          src={dottedShapeDark}
        />

        <motion.div
          className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
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
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
            Trusted by Global Companies.
          </h2>
          <p className="mx-auto lg:w-11/12">
            Chosen by teams worldwide, revolutionizing meetings with AI. Trusted
            for efficient, insightful collaboration and productivity enhancement
            across global companies.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
          <motion.div
            className="animate_top text-center"
            initial="hidden"
            transition={{ duration: 1, delay: 0.5 }}
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
            <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              1K
            </h3>
            <p className="text-lg lg:text-para2">World Wide Clients</p>
          </motion.div>
          <motion.div
            className="animate_top text-center"
            initial="hidden"
            transition={{ duration: 1, delay: 0.7 }}
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
            <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              50k+
            </h3>
            <p className="text-lg lg:text-para2">Recordings</p>
          </motion.div>
          <motion.div
            className="animate_top text-center"
            initial="hidden"
            transition={{ duration: 1, delay: 0.8 }}
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
            <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              2
            </h3>
            <p className="text-lg lg:text-para2">Winning Award</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FunFact;
