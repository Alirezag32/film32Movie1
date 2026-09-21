'use client'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function ShowCategory({ category }) {
          const [pageNumber , setPageNumber] = useState(1)
        const image = show.image?.original || "/spiderman.jpg";
          const paginationNumbers = Math.ceil(category.length / 20);
          const [fromToTo, setFromToTo] = useState(category.slice(0, 20));
          const [from, setFrom] = useState(0)
          const [to, setTo] = useState(20 + from * 20)
          useEffect(() => {
            if (to > category.length) {
              setFromToTo(category.slice(from, category.length));
            } else {
              setFromToTo(category.slice(from, to));
            }
          }, [from]);
          console.log(fromToTo)
          return (
            <div className="">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {fromToTo.map((show) => {
                  {
                  }
                  return (
                    <div key={show.id} className="relative ">
                      <Link
                        className="block w-full h-full"
                        href={`/shows/${show.id}`}
                      >
                        <Image
                          className="rounded-2xl border-2 border-gray-900 object-cover "
                          src={image}
                          width={300}
                          height={300}
                          alt={show.name}
                        />
                        <div className="absolute bottom-1/10 left-1">
                          <h3 className=" text-white xl">{show.name}</h3>
                          <div className="mt-2 text-fuchsia-700 text-xl">
                            ⭐{show.rating?.average}
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div >
                {Array.from({ length: paginationNumbers }).map((_, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setPageNumber(index + 1);
                        setFrom(index * 20);
                        setTo(20 + index * 20);
                      }}
                      className={`  text-white px-4 py-2 rounded m-2 ${pageNumber === index + 1 ? " bg-black" : "bg-fuchsia-700"}`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          );
          
}