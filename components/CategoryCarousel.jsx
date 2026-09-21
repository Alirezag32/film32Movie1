"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { CategoryName } from "@/lib/showingData";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
export default function CategoryCrousel({ categoryName }) {
 
 
  return (
    <div className=" w-full  border-b-2 border-b-mauve-700 pb-6">
      <div className="flex justify-between my-5 mx-2">
        <div className="text-white text-2xl">{categoryName}</div>
        <Link className="cursor-pointer" href={`/categories/${categoryName}`}>
                                  <button className="bg-fuchsia-800 opacity-80 text-white px-4 py-2 rounded">
                                    watch all
                                  </button>
        
        </Link>
      </div>
                      <Swiper className= " " slidesPerView={4} spaceBetween={10} breakpoints={{
                                640: {
                                          slidesPerView: 3,
                                          
                
                                }, 1024: {
                                          slidesPerView: 6, 
                                          
                                }, 200: {
                                          slidesPerView : 2
                                }, 800: {
                                          slidesPerView :4
                                }
                      }} >
        {CategoryName(categoryName)
          .slice(0, 10)
          .map((show) => {
             const image = show.image?.original || "/spiderman.jpg";
            
            return (
              <SwiperSlide key={show.id}>
                <div className="relative ">
                  <Link
                    className="block w-full h-full"
                    href={`/shows/${show.id}`}
                  >
                    <Image
                      className="rounded-2xl h-[300px] border-2 border-gray-900 object-cover "
                      src={image}
                      width={200}
                      height={200}
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
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
