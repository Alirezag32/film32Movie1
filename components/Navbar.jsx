"use client"

import Link from "next/link"
import { HiMenu, HiX } from "react-icons/hi";
import { useEffect, useState , } from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import { usePathname } from "next/navigation";

import { BiChevronDown, BiChevronDownCircle, BiChevronUp } from "react-icons/bi";
export default function Navbar() {
  
  const pathName = usePathname();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [categoryFlage , setCategoryFlage] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(
    false
  );
  useEffect(() => {
    const email = localStorage?.getItem("email") 
      setIsLoggedIn(!!email)
  }, [])
        if (pathName === "/login" || pathName === "/register") {
            return null;
        } else {
          return (
            /*bigcoumputers*/
            <nav>
              <div className=" hidden fixed top-0 z-50 opacity-80 bg-black justify-around items-center h-20 w-full md:flex">
                <Link href={"/"} className="felx">
                  <span className="text-white text-3xl">Flim</span>
                  <span className="text-fuchsia-700 text-3xl">32</span>
                  <span className="text-white text-3xl">Movie</span>
                </Link>

                <div className="flex gap-4 justify-around items-center  text-white">
                  <div className="hover:text-fuchsia-700 cursor-pointer ">
                    Home
                  </div>
                  <div className="hover:text-fuchsia-700  cursor-pointer relative group">
                    <button className="flex gap-1 items-center justify-center">
                      categories
                      <BiChevronUp
                        className="transition-transform duration-300 rotate-180 group-hover:rotate-0"
                        size={20}
                      />
                    </button>
                    <div className="invisible bg-black flex flex-col gap-4 group-hover:visible absolute left-1 p-5 top-full rounded-2xl opacity-95">
                      <Link
                        href={"/categories/Romantic"}
                        className="text-white text-sm block "
                      >
                        Romantic
                      </Link>
                      <Link
                        href={"/categories/Action"}
                        className="text-white text-sm block "
                      >
                        Action
                      </Link>
                      <Link
                        href={"/categories/Horror"}
                        className="text-white text-sm block "
                      >
                        Horror
                      </Link>
                      <Link
                        href={"/categories/Drama"}
                        className="text-white text-sm block "
                      >
                        Drama
                      </Link>
                    </div>
                  </div>
                  <div className="hover:text-fuchsia-700 cursor-pointer">
                    Actors
                  </div>
                  <div className="hover:text-fuchsia-700 cursor-pointer">
                    Series
                  </div>
                </div>
                <div className="flex gap-4  text-white">
                  <div>
                    {isLoggedIn ? (
                      <Link
                        className="bg-[#4c0265f2] px-8 py-3 rounded-lg hover:bg-[#4c0265] cursor-pointer"
                        href={"/profile"}
                      >
                        profile
                      </Link>
                    ) : (
                      <Link
                        className="bg-[#4c0265f2] px-8 py-3 rounded-lg hover:bg-[#4c0265] cursor-pointer"
                        href={"/login"}
                      >
                        login/signUp
                      </Link>
                    )}
                  </div>
                  <div className="hover:text-fuchsia-700 cursor-pointer">
                    <FaBell size={22} />
                  </div>
                  <div className="hover:text-fuchsia-700 cursor-pointer">
                    <FaSearch size={22} />
                  </div>
                </div>
              </div>

              <div className="md:hidden top-0 flex justify-between items-center fixed z-50 opacity-90 bg-black  w-full h-20 px-2">
                <Link href={"/"} className="felx">
                  <span className="text-white text-3xl">Flim</span>
                  <span className="text-fuchsia-700 text-3xl">32</span>
                  <span className="text-white text-3xl">Movie</span>
                </Link>
                {isOpenMenu ? (
                  <HiX
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                    className="text-white text-3xl m-4"
                  />
                ) : (
                  <HiMenu
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                    className="text-white text-3xl m-4"
                  />
                )}
              </div>

              {isOpenMenu && (
                <div className=" flex flex-col md:hidden fixed top-20 left-0 right-0 z-50  bg-black">
                  <div className="flex flex-col gap-4 p-4  border-b-2 border-b-olive-900">
                    <div className="hover:text-fuchsia-700 cursor-pointer text-white text-xl">
                      Home
                    </div>
                    <div
                      onClick={() => {
                        setCategoryFlage(!categoryFlage);
                      }}
                      className="hover:text-fuchsia-700 cursor-pointer text-white text-xl"
                    >
                      <button className="flex gap-1 items-center justify-center">
                        categories
                        {categoryFlage ? (
                          <BiChevronDown size={20} />
                        ) : (
                          <BiChevronUp className="" size={20} />
                        )}
                      </button>
                    </div>
                    {categoryFlage && (
                      <div className="flex flex-col gap-4 p-2 rounded-2xl border-2 border-gray-700">
                        <Link
                          href={"/categories/Romantic"}
                          className="text-white text-lg  "
                        >
                          Romantic
                        </Link>
                        <Link
                          href={"/categories/Action"}
                          className="text-white text-lg  "
                        >
                          Action
                        </Link>
                        <Link
                          href={"/categories/Horror"}
                          className="text-white text-lg  "
                        >
                          Horror
                        </Link>
                        <Link
                          href={"/categories/Drama"}
                          className="text-white text-lg "
                        >
                          Drama
                        </Link>
                      </div>
                    )}

                    <div className="hover:text-fuchsia-700 cursor-pointer text-white text-xl">
                      Actors
                    </div>
                    <div className="hover:text-fuchsia-700 cursor-pointer text-white text-xl">
                      Series
                    </div>
                  </div>
                  <div className="p-4 text-xl felx items-center justify-center text-center my-3 text-white  ">
                    {isLoggedIn ? (
                      <Link
                        className="bg-[#4c0265f2] px-8 py-2 self-center rounded-lg hover:bg-[#4c0265] cursor-pointer"
                        href={"/profile"}
                      >
                        profile
                      </Link>
                    ) : (
                      <Link
                        className="bg-[#4c0265f2] px-8 py-2 self-center rounded-lg hover:bg-[#4c0265] cursor-pointer"
                        href={"/login"}
                      >
                        login/signUp
                      </Link>
                    )}
                  </div>
                  <div className="flex justify-center items-center text-2xl gap-4 p-4 text-white">
                    <FaBell />
                    <FaSearch />
                  </div>
                </div>
              )}
            </nav>
            /*small devices*/
          );
        }
}