import { ShowById } from '@/lib/showingData';
import Image from 'next/image';
import Link from 'next/link';
 
export default async function ShowPage({ params }) {
          const { id } = await params;
           
  const show = ShowById(Number(id));
  const image = show.image?.original || "/spiderman.jpg";
          
          return (
            <section className=" w-full min-h-screen ">
              <div className=" h-[600px] sm:h-[700px] lg:h-[1000px] relative w-full  overflow-hidden ">
                <Image
                  fill
                  priority
                  src={image}
                  alt={show.name}
                  sizes="100vw"
                  className=" opacity-50 object-cover object-center"
                />
                <div className="flex flex-col gap-3 absolute bottom-1/15 left-4">
                  <div className="text-fuchsia-700 text-5xl">{show.name}</div>
                  <div className="flex gap-8">
                    <div className="bg-fuchsia-700 p-1 text-white align-middle rounded-lg">
                      ⭐{show?.rating.average ?? "N/A"}
                    </div>
                    <div className="bg-zinc-500 rounded-lg p-1 align-middle">
                      {show.status}
                    </div>
                    <div className="bg-zinc-500 rounded-lg p-1 align-middle">
                      {" "}
                      {show.language}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-evenly">
                <div className="flex flex-col ">
                  <div className="text-fuchsia-800 mb-2 flex flex-col text-3xl mb-4">
                    Information
                  </div>
                  <div className= " text-xl">🎬 Type: {show?.type ?? "N/A"}</div>
                  <div className= " text-xl">📅 Premiered: {show?.premiered ?? "N/A"}</div>
                  <div className= " text-xl">⏰ Runtime: {show?.runtime ?? "N/A"} min</div>
                  <div className= " text-xl">🌐 Status: {show?.status ?? "N/A"}</div>
                </div>
                <div className=" mb-2 flex flex-col">
                  <div className="text-fuchsia-800 text-3xl mb-4">Geners</div>
                  <div className="flex gap-4">
                    {show.genres.map((genre) => (
                      <Link
                        key={genre}
                        href={`/categories/${genre}`}
                        className="text-white bg-zinc-500 px-2 py-1 rounded-lg  "
                      >
                        {genre}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className='mx-2 my-5 text-white text-lg'>
                {show.summary}
              </div>
            </section>
          );
}