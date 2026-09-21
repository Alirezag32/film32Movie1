"use client";
import { PopularMovies } from "@/lib/showingData";
import Image from "next/image";
import Link from "next/link";
import { Autoplay , Pagination } from "swiper/modules";
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
export default function MainCrousel() {
 
  const shows = PopularMovies();
  
          
          return (
            <section className="h-[700px] w-full">
                              <Swiper
                                        className="h-full  w-full"
                slidesPerView={1}
                modules={[Autoplay , Pagination]}
                autoplay={{ delay: 3000 }}
                pagination = {{clickable : true}}
              >
                {shows.slice(0, 5).map((show) => {
                                             const image =
                                               show.image?.original ||
                                               "/spiderman.jpg";

                     
                                          return (
                                            <SwiperSlide
                                              key={show.id}
                                              className="w-full h-full"
                                            >
                                              <div className="w-full h-full relative ">
                                                <Link
                                                  className="h-full w-full block"
                                                  href={`/shows/${show.id}`}
                                                >
                                                  <Image
                                                    className="object-cover  w-full h-full"
                                                    width={300}
                                                    height={450}
                                                    key={show.id}
                                                    src={image}
                                                    // show.image?.original ??

                                                    // src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                                                    alt={show.name}
                                                  />
                                                  <div className="absolute left-1.5 top-1/2">
                                                    <p className="text-white text-5xl">
                                                      {show.name}
                                                    </p>
                                                    <div className="mt-2 text-fuchsia-700 text-2xl">
                                                      ⭐{show.rating?.average}
                                                    </div>
                                                  </div>
                                                </Link>
                                              </div>
                                            </SwiperSlide>
                                          );
                })}
              </Swiper>
            </section>
          );
}