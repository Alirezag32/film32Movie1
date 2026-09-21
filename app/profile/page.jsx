"use client"
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Profile() {
          const [userEmail, setUserEmail] = useState("")
          const [userName, setUserName] = useState("")
          
          function Logouthandeler() {
                     localStorage.setItem("name", "");
                     localStorage.setItem("email" , "");
                     router.push("/");
          }

          const router = useRouter();
          useEffect(() => {
                    const email = localStorage.getItem("email");
                    setUserEmail(email)
                    const name = localStorage.getItem("name")
                    setUserName(name)

                              if (localStorage.getItem("name")) {
                                        router.replace("/")
                              }
                    },[router])
         return (
           <div className="flex flex-col gap-4 justify-center items-center min-h-screen mt-20">
             <div className="text-sm text-fuchsia-900 ">Acoount</div>
             <div className="text-6xl text-white">My Profile</div>
             <div className="flex flex-col item-center justify-center ">
               <div className="flex flex-col gap-4">
                 <div className="bg-fuchsia-900 rounded-full w-10 h-10 text-center text-3xl text-white ">
                   {userName?.charAt(0)}
                 </div>
                 <div className="flex flex-col gap-2">
                   <div className="text-white text-2xl">
                     {userName}
                   </div>
                   <div className="text-gray-600 text-sm">
                     {" "}
                     {userEmail}
                   </div>
                 </div>
               </div>
               <div className="bg-zinc-800 rounded-3xl flex flex-col gap-6 p-5 mt-3">
                 <div className="text-gray-700">Name</div>
                 <div className="text-white text-xl">
                   {userName}
                 </div>
               </div>
               <div className="bg-zinc-800 rounded-3xl flex flex-col gap-2 p-5 mt-3 w-75">
                 <div className="text-gray-700">email</div>
                 <div className="text-white text-xl">
                   {userEmail}
                 </div>
               </div>
               <div className="flex gap-2 justify-center items-center mt-6">
                 <Link
                   href={"/"}
                   className="border-2 py-3 px-5 cursor-pointer border-gray-800 rounded-2xl text-white"
                 >
                   back Home{" "}
                 </Link>
                 <button
                   className="text-white py-3 px-5 bg-fuchsia-900 rounded-2xl"
                   onClick={Logouthandeler}
                 >
                   Log Out
                 </button>
               </div>
             </div>
           </div>
         );
}