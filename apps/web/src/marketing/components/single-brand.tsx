import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Brand {
  id: number;
  name: string;
  href: string;
  imageLight: string;
  imageDark: string;
}

function SingleBrand({ brand }: { brand: Brand }): JSX.Element {
  const { imageDark, href, name, imageLight, id } = brand;

  return (
    <motion.a
      className="animate_top mx-w-full relative block h-10 w-[98px]"
      href={href}
      initial="hidden"
      transition={{ duration: 1, delay: id }}
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
      <Image
        className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden"
        src={imageLight}
        alt={name}
        fill
      />
      <Image
        className="hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block"
        src={imageDark}
        alt={name}
        fill
      />
    </motion.a>
  );
}

export default SingleBrand;
