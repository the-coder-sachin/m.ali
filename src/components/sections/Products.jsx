import React from 'react'

const Products = () => {

    const numbers = Array.from({ length: 70 }, (_, index) => index + 1);
    
  return (
    <section className='p-10 bg-sky-100'>
      <div className="our-products">
        <h3 className="text-3xl font-bold text-center uppercase underline">
          our products
        </h3>
        <div className="flex flex-wrap justify-center items-center py-5">
          {numbers.map((num) => (
            <div key={num} className="card bg-white nd:w-48 md:h-60 h-40 w-32 shadow p-3 rounded-lg m-2 cursor-pointer ">
              {/* Replace with your image source, here using a placeholder */}
              <img
                src={`/products/${num}.jpg`}
                alt={`Image ${num}`}
                className="w-full h-full object-cover rounded-lg"
              />
              {/* <p className="text-center font-semibold mt-2">Image {num}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products