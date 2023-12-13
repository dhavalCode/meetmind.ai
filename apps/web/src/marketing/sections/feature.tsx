"use client";
import React from "react";
import { motion } from "framer-motion";
import featuresData from "@/marketing/data/feature-data";
import SingleFeature from "@/marketing/components/single-feature";

function Feature(): JSX.Element {
  return (
    <section className="py-20 lg:py-25 xl:py-30" id="features">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <motion.div
          className="animate_top mx-auto text-center"
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
          <div className="mb-4 inline-block rounded-full bg-zumthor px-4.5 py-1.5 dark:border dark:border-strokedark dark:bg-blacksection">
            <span className="text-sectiontitle font-medium text-black dark:text-white">
              FEATURES
            </span>
          </div>
          <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
            Core Features of Meet Mind
          </h2>
          <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">
            Effortlessly record and transcribe meetings across platforms.
            Analyze conversations with AI insights. Foster collaboration and
            productivity for efficient meetings.
          </p>
        </motion.div>

        {/* <!-- Section Title End --> */}

        <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
          {/* <!-- Features item Start --> */}

          {featuresData.map((feature, key) => (
            <SingleFeature feature={feature} key={key} />
          ))}
          {/* <!-- Features item End --> */}
        </div>
      </div>
    </section>
  );
}

export default Feature;
