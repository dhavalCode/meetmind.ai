"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/marketing/components/header";
import Lines from "@/marketing/components/lines";
import shapeDottedLight from "@/assets/shape/shape-dotted-light.svg";
import shapeDottedDark from "@/assets/shape/shape-dotted-dark.svg";

function Login(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <section className="pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
          <div className="relative z-1 mx-auto max-w-c-1016 px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
            <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]" />
            <div className="absolute bottom-17.5 left-0 -z-1 h-1/3 w-full">
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

            <motion.div
              className="animate_top rounded-lg bg-white px-7.5 pt-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:px-15 xl:pt-15"
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
              <h2 className="mb-15 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Login to Your Account
              </h2>
              <div className="flex flex-col">
                <div className="flex flex-row items-center justify-center">
                  <button
                    aria-label="login with google"
                    className="text-body-color dark:text-body-color-dark dark:shadow-two mb-6 flex w-full max-w-xs items-center justify-center rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none"
                    type="button"
                  >
                    <span className="mr-3">
                      <svg
                        fill="none"
                        height="20"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_95:967)">
                          <path
                            d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L13.722 15.257L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216"
                            fill="#4285F4"
                          />
                          <path
                            d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L4.27957 11.9878L1.12973 14.3766L1.08856 14.4888C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001"
                            fill="#34A853"
                          />
                          <path
                            d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L4.38127 7.88968L1.19282 5.4624L1.08852 5.51101C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z"
                            fill="#EB4335"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_95:967">
                            <rect fill="white" height="20" width="20" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    Loin with Google
                  </button>
                </div>
              </div>
              <div className="mt-12.5 border-t border-stroke py-5 text-center dark:border-strokedark">
                <p>
                  Don't have an account?{" "}
                  <Link
                    className="text-black hover:text-primary dark:text-white hover:dark:text-primary"
                    href="signup"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Lines />
    </>
  );
}

export default Login;
