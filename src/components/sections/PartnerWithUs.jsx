import React from 'react'
import { asset } from '../../assets/assets';

const PartnerWithUs = () => {
  const height = {
      height: "calc(100vh - 104px)",
    };
  return (
    <section className="bg-sky-200 w-full p-10 ">
      <h2 className="text-3xl font-bold uppercase text-center">Partner With Us</h2>
      <div className="flex">
        <p className=" mt-7 sm:text-xl md:leading-loose">
          For the reason that international trade demands precision and
          reliability, we are dedicated to providing well-structured export
          solutions. Whether you are a wholesaler, distributor, or importer, we
          ensure that our requirements-based approach meets your expectations.
          Our professional team is always prepared to assist you in sourcing
          high-quality products that align with global market standards. Let’s
          work together and establish a mutually beneficial collaboration
          that drives success.
        </p>
      </div>
       <div className="diagram flex justify-center items-center md:gap-4 gap-1 mt-10 md:mt-10">
                  <img src={asset.pickUp} alt="" className="md:h-14 h-7 sm:h-10" />
                  <span className="lg:text-4xl text-xs sm:text-2xl md:text-3xl">----</span>
                  <img src={asset.truck} alt="" className="md:h-14 h-7 sm:h-10" />
                  <span className="lg:text-4xl text-xs sm:text-2xl md:text-3xl">----</span>
                  <img src={asset.train} alt="" className="md:h-14 h-7 sm:h-10" />
                  <span className="lg:text-4xl text-xs sm:text-2xl md:text-3xl">----</span>
                  <img src={asset.plane} alt="" className="md:h-14 h-7 sm:h-10" />
                  <span className="lg:text-4xl text-xs sm:text-2xl md:text-3xl">----</span>
                  <img src={asset.ship} alt="" className="md:h-14 h-7 sm:h-10" />
                  <span className="lg:text-4xl text-xs sm:text-2xl md:text-3xl">----</span>
                  <img src={asset.drop} alt="" className="md:h-14 h-7 sm:h-10" />
                </div>
    </section>
  );
}

export default PartnerWithUs