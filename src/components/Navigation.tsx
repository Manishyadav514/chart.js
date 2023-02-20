import React, {
  useState,
  useEffect,
  createRef,
  useRef,
  useCallback,
} from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { ButtonBW } from "./Button";

export const Header = () => {
  // for mweb
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // slide header hide
  const headerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollYPostition] = useState(0);
  const onScroll = useCallback((event: any) => {
    const { pageYOffset, scrollY } = window;
    setScrollYPostition(scrollY);
    console.log({
      pageYOffset,
      scrollY,
      scrollPosition,
    });
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, true);
    };
  }, []);

  const MenuList = () => (
    <>
      <span className="hover:text-pink-500 pb-2 ml-[30px]">
        <Link href="#barChart">Bar</Link>
      </span>
      <span className="hover:text-pink-500 pb-2 ml-[30px]">
        <Link href="#bubbleChart">Bubble</Link>
      </span>
      <span className="hover:text-pink-500 pb-2 ml-[30px]">
        <Link href="#doughnutChart">Doughnut</Link>
      </span>
      <span className="hover:text-pink-500 pb-2 ml-[30px]">
        <Link href="#lineChart">Line</Link>
      </span>
      <span className="hover:text-pink-500 pb-2 ml-[30px]">
        <Link href="#pieChart">Pie</Link>
      </span>
      <span className="hover:text-pink-500 pb-2 ml-[30px]">
        <Link href="#polarAreaChart">Polar Area</Link>
      </span>
      <span className="hover:text-pink-500 pb-2 ml-[30px]">
        <Link href="#radarChart">Radar</Link>
      </span>
      <span className="hover:text-pink-500 pb-2 ml-[30px]">
        <Link href="#scatterChart">Scatter</Link>
      </span>
    </>
  );

  return (
    <div
      className="sticky text-[#34173c bg-black z-[999] top-0 left-0 w-full flex justify-between items-center p-1 px-[50px] tablet:p-[25px] phone:px-4 phone:bg-[#232a34] transition-all"
      id="navbar"
      ref={headerRef}
    >
      <div className="flex align-middle items-center justify-center text-white font-bold text-2xl">
        <Image
          width={50}
          height={50}
          src={"svg/chartjs.svg"}
          alt="logo"
          priority
        />
        Chart.js
      </div>
      <div
        className="cursor-pointer items-center hidden tablet:block phone:block"
        onClick={toggle}
      >
        <FaBars className="text-white text-[26px]" />
      </div>
      <div className="text-[1em] font-medium text-white navbar_links">
        <div className={`navbar_link`}>
          <MenuList></MenuList>
        </div>
      </div>
      <div className={isOpen ? "navbar_sidebar" : "navbar_sidebar_open"}>
        <div
          className="absolute top-5 right-6 bg-transparent text-[2rem] cursor-pointer outline-none"
          onClick={toggle}
        >
          <FaWindowClose color="#fff" />
        </div>
        <div
          className="h-full flex flex-col gap-5 mt-32 items-center text-[1.5rem] text-white"
          onClick={toggle}
        >
          <MenuList></MenuList>
        </div>
      </div>
      <style>
        {`
      .navbar_sidebar {
        position: fixed;
        width: 100%;
        height: 100%;
        background: #2184a7;
        opacity: 0.8;
        display: grid;
        align-items: center;
        top: 0;
        left: 0;
        transition: 0.5s ease-in-out;
        opacity: 1;
        z-index: 999;
      }
      .navbar_sidebar_open {
        position: fixed;
        width: 100%;
        height: 100%;
        background: #0d0d0d;
        align-items: center;
        left: 0;
        transition: 0.5s ease-in-out;
        z-index: 999;
        opacity: 0;
        top: 100%;
      }
      .navbar_link a {
        position: relative;
        transition: 0.3s ease;
      }
      .navbar_link a:before {
        content: "";
        position: absolute;
        background: cyan;
        width: 0;
        height: 3px;
        bottom: 0;
        left: 0;
        transition: 0.3s ease;
      }
      .navbar_links .navbar_link a:hover:before {
        width: 100%;
      }
      
      @media (max-width: 1080px) {
        .navbar_links {
          display: none;
        }
      
        .navbar .navbar_links .navbar_link a {
          color: #222;
          font-size: 1.2em;
          margin: 20px;
        }
      
        .navbar .navbar_links .navbar_link a:before {
          background: #222;
          height: 5px;
        }
      
        .navbar .navbar_links .active .navbar_link {
          background: #fff;
          width: 600px;
          max-width: 600px;
          margin: 20px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-radius: 5px;
          box-shadow: 0 5px 25px rgb(1 1 1 / 20%);
        }
      }
      `}
      </style>
    </div>
  );
};
