import React from 'react'
import { asset } from '../../assets/assets';

const Category = () => {
  const height = {
    height : 'calc(100vh - 104px)',
  }
  return (
    <section className="bg-sky-100 w-full p-10 ">
      <h2 className="text-3xl font-bold uppercase text-center">
        Our Product Categories
      </h2>
      <div className="flex flex-col lg:flex-row item-center justify-center gap-7 ">
        <p className="mt-7 sm:text-lg md:text-xl leading-loose lg:w-[55%]">
          <p className='font-semibold'>✔Agricultural & Organic Products –</p>
          <p>
            Jaggery, Mustard Oil, Mentha Oil, Honey, Tea, Coffee, Turmeric,
            Cumin, Cardamom, Black Pepper, Ginger, Onion, Sugar, Aloe Vera.
          </p>
          <p className='font-semibold'>✔ Eco-friendly & Sustainable –</p>
          <p>Jute Bags, Bamboo.</p>
          <p className='font-semibold'>✔ Handcrafted & Leather Goods – </p>
          <p>Handicraft Products, Leather Bags, Belts, Wallets.</p>
        </p>
        
          <img
            src={asset.agriculture}
            alt="photo"
            className="rounded-lg cursor-pointer hover:scale-105 transition-all duration-200 w-[400px] m-auto"
          />
      </div>
    </section>
  );
}

export default Category