import React from "react";
import { Transition } from "@headlessui/react";
import Link from 'next/link'
//import { Link } from "react-scroll";
function Navbar() {
  return (
    <div>
      <nav>
        <div className=" shadow-sm fixed w-full z-10">
          <div className="w-full">
            <div className="flex items-center h-20 w-full ">
              <div className="flex items-center  mx-20  justify-between w-full">
                <div className="flex justify-center items-center flex-shrink-0">
                  <h1 className=" font-bold text-xl cursor-pointer text-white">
                    NFT<span className="text-[#8C52FF]">Certificate</span>
                  </h1>
                </div>
                <div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link
										href="/home"
								
									><a className="cursor-pointer text-lg text-white font-semibold px-3 py-2 text-md hover:font-black">Home</a>
									</Link>
									<Link
										href="/create-certificate"	
									>
										<a className="cursor-pointer text-lg hover:bg-[#8C52FF] font-semibold text-white hover:text-white px-3 py-2 rounded-md  ">Create Certificate</a> 
									</Link>
									<Link
										href="/transferred-certificate"
										
										
									>
										<a className="cursor-pointer hover:bg-[#8C52FF] text-white hover:text-white px-3 py-2 rounded-md text-lg font-semibold">Transferred Certificate</a>
						
									</Link>

									<Link
										href="/my-certificates"
										
										
									>
										<a className="cursor-pointer hover:bg-[#8C52FF] text-white hover:text-white px-3 py-2 rounded-md text-lg font-semibold">My Certificates</a>
									
									</Link>

									<Link
										href="/home"
										
										
									>
										<a className="cursor-pointer bg-[#8C52FF] text-white px-3 py-2 rounded-md text-lg font-semibold hover:bg-black">Connect Wallet</a>
										
									</Link>
								</div>
							</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
