import React from 'react'
import { asset } from '../../assets/assets'


const LandingPage = () => {
  const height = {
    height : 'calc(100vh - 250px)'
  }

  return (
    <section>
      <div className="bg relative w-full py-10">
        <div className="overplay md:h-screen sm:h-[700px] w-full h-full bg-sky-800/60 absolute top-0 left-0 -z-10"></div>
        <img
          src={asset.bg}
          alt="bg"
          className="h-full w-full object-cover -z-20 absolute"
        />
        <div className="content w-full h-full flex flex-col justify-center items-center ">
          <h1 className="text-4xl font-bold text-white text-center sm:mt-10 tracking-wider">
            M.ALI EXPORTS PRIVATE LIMITED
          </h1>
          <h2 className="text-white mt-3 tracking-widest">
            OUR GOAL IS TO INCREASE YOUR BUSINESS
          </h2>
          <p className='text-white lg:px-32 px-5 sm:px-8 md:px-14 text-base mt-10 text-center leading-loose tracking-widest'>
            we take pride in delivering the
            finest quality products to the global market. With a strong
            commitment to excellence, we bridge the gap between premium
            producers and international buyers, ensuring reliability,
            authenticity, and superior standards in every shipment. Our
            objective is to provide value-driven solutions that cater to the
            specific requirements of our clients, fostering long-term business
            relationships.
          </p>
          <div className="diagram flex items-center md:gap-4 gap-1 mt-9 md:mt-20">
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
        </div>
      </div>
    </section>
  );
}

export default LandingPage