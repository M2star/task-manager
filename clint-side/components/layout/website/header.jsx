"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  const [visible, setVisible] = useState(false);
  return (
    <nav className="sticky top-0 left-0 right-0 mt-5">
      {/* <div className="container"> */}
      <div className=" relative bg-card rounded-full py-6 px-8 flex items-center justify-between">
        <div className="w-24">
          <Image
            src="/logo.svg"
            alt="logo"
            width={35}
            height={35}
            className=""
          />
        </div>

        <ul className="md:flex gap-12 items-center hidden">
          <li className="hover:font-semibold text-lg hover:text-purple-400 hover:border-b-2 hover:border-purple-500 transition-all duration-300 ">
            Home
          </li>
          <li className="hover:font-semibold text-lg hover:text-purple-400 hover:border-b-2 hover:border-purple-500 transition-all duration-300 ">
            Feature
          </li>
          <li className="hover:font-semibold text-lg hover:text-purple-400 hover:border-b-2 hover:border-purple-500 transition-all duration-300 ">
            Price
          </li>
          <li className="hover:font-semibold text-lg hover:text-purple-400 hover:border-b-2 hover:border-purple-500 transition-all duration-300 ">
            Contact
          </li>
        </ul>
        <div className="flex items-center gap-9">
          <Link href="/login">
          <Button className="bg-violet-800 md:flex hidden rounded-full font-bold md:text-lg text-base py-7 px-7 hover:bg-transparent hover:border hover:border-violet-700">
            Get Start
          </Button>
          </Link>
          <Button
            onClick={() => setVisible(!visible)}
            className="bg-violet-800 md:hidden visible rounded-full font-bold md:text-lg text-base py-7 px-7 hover:bg-transparent hover:border hover:border-violet-700"
          >
            <RxHamburgerMenu />
          </Button>
        </div>
        <div
          className={`md:hidden ${
            visible ? "hidden" : "visible"
          } absolute bg-card flex items-center transition-all duration-200 ease-in-out flex-col gap-12 top-32 py-8 max-w-64 w-full rounded-3xl right-0`}
        >
          <ul className=" gap-12 items-center flex flex-col">
            <li className="hover:font-semibold text-lg hover:text-purple-400 hover:border-b-2 hover:border-purple-500 transition-all duration-300 ">
              Home
            </li>
            <li className="hover:font-semibold text-lg hover:text-purple-400 hover:border-b-2 hover:border-purple-500 transition-all duration-300 ">
              Feature
            </li>
            <li className="hover:font-semibold text-lg hover:text-purple-400 hover:border-b-2 hover:border-purple-500 transition-all duration-300 ">
              Price
            </li>
            <li className="hover:font-semibold text-lg hover:text-purple-400 hover:border-b-2 hover:border-purple-500 transition-all duration-300 ">
              Contact
            </li>
          </ul>
          <div className="flex items-center gap-9">
            <Button className="bg-violet-800 rounded-full font-bold md:text-lg text-base py-7 px-7 hover:bg-transparent hover:border hover:border-violet-700">
              Get Start
            </Button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Header;
