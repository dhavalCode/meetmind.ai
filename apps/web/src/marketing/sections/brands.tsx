"use client";
import React from "react";
import SingleBrand from "@/marketing/components/single-brand";
import brandData from "@/marketing/data/brand-data";

function Brands(): JSX.Element {
  return (
    <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black mb-10">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="grid grid-cols-3 items-center justify-center gap-7.5 md:grid-cols-6 lg:gap-12.5 xl:gap-29">
          {brandData.map((brand) => (
            <SingleBrand brand={brand} key={brand.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
