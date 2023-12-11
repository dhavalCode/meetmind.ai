"use client";
import Image from "next/image";
import Shape1 from "@/assets/shape/shape-01.png";
import Shape2 from "@/assets/shape/shape-02.svg";
import Shape3 from "@/assets/shape/shape-03.svg";
import HeroLight from "@/assets/hero/hero-light.svg";
import HeroDark from "@/assets/hero/hero-dark.svg";

function Hero(): JSX.Element {
  return (
    <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
          <div className=" md:w-1/2">
            <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
              🔥 AI-Powered Meeting notes
            </h4>
            <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
              Automatically Record and Transcribe {"   "}
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                Meetings
              </span>
            </h1>
            <p>
              Utilize advanced generative AI to extract meeting-related answers
              and insights from transcripts, enabling swift access to specific
              information within the discussions.
            </p>
          </div>

          <div className="animate_right hidden md:w-1/2 lg:block">
            <div className="relative 2xl:-mr-7.5">
              <Image
                alt="shape"
                className="absolute -left-11.5 top-0"
                height={246}
                src={Shape1}
                width={46}
              />
              <Image
                alt="shape"
                className="absolute bottom-0 right-0 z-10"
                height={36.7}
                src={Shape2}
                width={36.9}
              />
              <Image
                alt="shape"
                className="absolute -right-6.5 bottom-0 z-1"
                height={21.66}
                src={Shape3}
                width={21.64}
              />
              <div className=" relative aspect-[700/444] w-full">
                <Image
                  alt="Hero"
                  className="shadow-solid-l dark:hidden"
                  fill
                  src={HeroLight}
                />
                <Image
                  alt="Hero"
                  className="hidden shadow-solid-l dark:block"
                  fill
                  src={HeroDark}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
