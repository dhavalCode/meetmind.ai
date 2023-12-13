import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

function SingleFeature({ feature }: { feature: Feature }): JSX.Element {
  const { icon, title, description } = feature;

  return (
    <motion.div
      className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        hidden: {
          opacity: 0,
          y: -10,
        },

        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      viewport={{ once: true }}
      whileInView="visible"
    >
      <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
        <Image alt="title" height={36} src={icon} width={36} />
      </div>
      <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
        {title}
      </h3>
      <p>{description}</p>
    </motion.div>
  );
}

export default SingleFeature;
