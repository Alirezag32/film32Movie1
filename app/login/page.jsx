"use client"
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  function handleLogin() {
    if (password.length < 8 || !email.includes("@") || name.length < 4) {
      alert("Please fill in all fields correctly.");
    } else {
     
 
      localStorage.setItem("email", email);
      localStorage.setItem("name", name);
     
      alert("Login successful!");
      router.push("/");
    }
  }

         return (
           <div className="bg-black h-screen w-screen flex justify-center items-center ">
             <div className="flex text-center align-middle flex-col justify-center mb-20 items-center sm:w-[50%] w-[75%]  border-2 border-zinc-700 rounded-lg p-4 gap-4 mt-20">
               <div className="text-4xl">Welcome to Film32Movie</div>
               <div className="text-sm">Login to continue</div>
               <div className="flex flex-col gap-4 mt-4 items-center justify-center">
                 <div className="flex flex-col gap-4">
                   <p className="text-white text-xl">Name</p>
                   <input
                     onChange={(e) => {
                       setName(e.target.value);
                     }}
                     className="p-2 w-[100%] border-2 border-zinc-600 rounded-3xl "
                     type="text"
                     placeholder="YourName"
                   />
                 </div>
                 <div className="flex flex-col gap-4">
                   <p className="text-white text-xl">Email</p>
                   <input
                     onChange={(e) => {
                       setEmail(e.target.value);
                     }}
                     className="p-2 w-[100%] border-2 border-zinc-600 rounded-3xl "
                     type="email"
                     placeholder="Email"
                   />
                 </div>
                 <div className="flex flex-col gap-4">
                   <p className="text-white text-xl">Password</p>
                   <input
                     onChange={(e) => {
                       setPassword(e.target.value);
                     }}
                     className="p-2 w-[100%] border-2 border-zinc-600 rounded-3xl "
                     type="password"
                     placeholder="Password"
                   />
                 </div>
               </div>
               <div>
                 <button
                   onClick={handleLogin}
                   className="bg-fuchsia-800 cursor-pointer text-white px-4 py-2 rounded"
                 >
                   Login
                 </button>
               </div>
               <div className="text-sm text-zinc-700">
                 Demo authentication — no real account is created.
               </div>
               <div>
                 <Link className="cursor-pointer" href="/">
                   Back to Movie
                 </Link>
               </div>
             </div>
           </div>
         );
}