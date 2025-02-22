import React from 'react'
import { asset } from '../../assets/assets'
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex flex-col md:flex-row lg:items-start items-center bg-sky-800 px-12 py-8 gap-4 justify-between">
          <div className="flex gap-3 flex-col lg:flex-row justify-center items-center">
            <div className="logo w-[100px] flex items-center gap-1 cursor-pointer">
              <img
                src="/logo.jpg"
                alt=""
                className="h-20 w-fit cursor-pointer "
              />
            </div>
            <div className="flex flex-col text-neutral-300 text-sm gap-3 items-center">
              <p>M.ALI EXPORTS PRIVATE LIMITED</p>
              <p className="capitalize text-center">
                OUR GOAL IS TO INCREASE YOUR BUSINESS
              </p>
              <div className="social-links">
                <ul className="flex gap-3 text-xl">
                  <li className="cursor-pointer hover:text-white">
                    <FaFacebook />
                  </li>
                  <li className="cursor-pointer hover:text-white">
                    <AiFillTwitterCircle />
                  </li>
                  <li className="cursor-pointer hover:text-white">
                    <AiFillInstagram />
                  </li>
                  <li className="cursor-pointer hover:text-white">
                    <FaLinkedin />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <ul className="lg:flex gap-2 text-neutral-400 justify-between font-bold hidden ">
              <li className="cursor-pointer hover:text-white">Home</li>
              <li className="cursor-pointer hover:text-white">About</li>
              <li className="cursor-pointer hover:text-white">Contact Us</li>
              <li className="cursor-pointer hover:text-white">Help</li>
            </ul>
            <div className="flex text-neutral-200 gap-3 flex-col md:flex-row">
              <div className="flex items-center gap-2 justify-center">
                <img src={asset.gmail} alt="mail" className="h-6" />
                <p className="font-semibold">info@maliexim.co.in</p>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <img src={asset.call} alt="call" className="h-6" />
                <p className="font-semibold">+91 7017797772</p>
              </div>
            </div>
            <div className="flex items-center gap-2 ml-[-10px] justify-center">
              <img src="/gps.png" alt="gps" className="h-10" />
              <p className="text-white">
                01 graund floor ward no 03 kakrala budaun Uttar Pradesh
              </p>
            </div>
          </div>
        </div>
        <hr />
        <p className="bg-neutral-900 text-neutral-400 text-center">
          Copyright by M.ALI EXPORTS Pvt Ltd
        </p>
      </footer>
    </>
  );
}

export default Footer