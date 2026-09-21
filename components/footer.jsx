import Link from "next/link";
import { FaTwitter, FaGithub , FaInstagram } from "react-icons/fa";
export default function Footer() {
          return (
            <>
              <footer className="flex justify-evenly border-b-2 border-zinc-400 flex-col sm:flex-row py-25">
                <div>
                  <div className="flex flex-col items-center justify-center p-4">
                    <Link href={"/"} className="felx mb-2">
                      <span className="text-white text-3xl">Flim</span>
                      <span className="text-fuchsia-700 text-3xl">32</span>
                      <span className="text-white text-3xl">Movie</span>
                    </Link>
                    <div className="text-gray-700 text-sm">
                      Discover movies and series, explore different categories
                      and enjoy your favorite stories.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 mb-4">
                  <div className="text-white text-xl mb-2">Navigation</div>
                  <div className="text-gray-700 text-sm">Home</div>
                  <div className="text-gray-700 text-sm">Series</div>
                  <div className="text-gray-700 text-sm">Actors</div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 mb-4">
                  <div className="text-white text-xl mb-2">Categories</div>
                  <div className="text-gray-700 text-sm">Action</div>
                  <div className="text-gray-700 text-sm">Drama</div>
                  <div className="text-gray-700 text-sm">Comedy</div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 mb-4">
                  <div className="text-white text-xl mb-2">Fallow US</div>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              transition
              hover:border-purple-500
              hover:text-purple-400
              "
                    >
                      <FaGithub size={20} />
                    </a>

                    <a
                      href="#"
                      className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              transition
              hover:border-purple-500
              hover:text-purple-400
              "
                    >
                      <FaInstagram size={20} />
                    </a>

                    <a
                      href="#"
                      className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              transition
              hover:border-purple-500
              hover:text-purple-400
              "
                    >
                      <FaTwitter size={20} />
                    </a>
                  </div>
                </div>
              </footer>
              <div className="text-gray-500 text-center my-25">all rights reserved 2026</div>
            </>
          );
}