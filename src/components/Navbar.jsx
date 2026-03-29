import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      setScrolled(y > 32);

      if (toggle) {
        setNavVisible(true);
        lastScrollY.current = y;
        return;
      }

      if (y < 48) {
        setNavVisible(true);
      } else if (y > lastScrollY.current) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toggle]);

  const showNav = navVisible || toggle;

  const renderNavItem = (nav) => {
    const isRoute = nav.type === "route";
    const href = isRoute ? nav.path : `/#${nav.id}`;
    const className = `text-[18px] font-medium cursor-pointer ${
      active === nav.title ? "text-white" : "text-secondary"
    } hover:text-white`;

    if (isRoute) {
      return (
        <Link
          to={nav.path}
          className={className}
          onClick={() => {
            setActive(nav.title);
            setToggle(false);
          }}
        >
          {nav.title}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={className}
        onClick={() => {
          setActive(nav.title);
          setToggle(false);
        }}
      >
        {nav.title}
      </a>
    );
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out bg-primary/95 backdrop-blur-md border-b border-white/[0.06] shadow-black/20 ${
        showNav ? "translate-y-0" : "-translate-y-full pointer-events-none"
      } ${scrolled ? "shadow-lg" : ""}`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src='/logo.png'
            alt='Peter Dike'
            className='w-10 h-10 object-contain rounded-lg'
          />
          <p className='text-white text-[18px] font-bold cursor-pointer flex flex-wrap items-center gap-x-1'>
            <span>Peter Dike</span>
            <span className='sm:inline hidden text-secondary'>|</span>
            <span className='sm:inline hidden'>Mercuoory Infinity</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.title}
              className='hover:text-white text-[18px] font-medium cursor-pointer'
              onClick={() => setActive(nav.title)}
            >
              {renderNavItem(nav)}
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center relative z-[60]'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl shadow-xl border border-white/10`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.title}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => setToggle(false)}
                >
                  {renderNavItem(nav)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
