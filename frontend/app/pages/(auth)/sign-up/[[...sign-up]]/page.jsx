// "use client";
// import { useState } from "react";
// import { User, Mail, Lock, Loader2 } from "lucide-react";
// import Link from "next/link";

// const Page = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setIsLoading(false);
//   };

//   return (
//     <div className="w-full h-screen bg-[#19232D] flex flex-col justify-center items-center">
//       <div className="flex-col text-center space-y-6 bg-[#19232D] w-full max-w-sm">
//         <h1 className="text-[#DCBB87] text-3xl font-bold">Create Account</h1>
//         <p className="text-[#A1A1AA]">Already have an account?</p>
//         <Link
//           href="/pages/Login"
//           className="text-[#DCBB87] text-sm font-semibold hover:underline hover:underline-offset-4"
//         >
//           Log in
//         </Link>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <label htmlFor="name" className="text-[#DCBB87] flex mt-2">
//             Name
//           </label>
//           <div className="relative">
//             <User className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
//             <input
//               type="text"
//               id="name"
//               placeholder="Enter your full name"
//               className="pl-9 w-full h-10 bg-zinc-800/50 text-[#DCBB87] placeholder:text-sm placeholder:text-zinc-500 placeholder:bg-zinc-800/50 rounded-md border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-black"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>

//           <label htmlFor="email" className="text-[#DCBB87] flex mt-4">
//             Email
//           </label>
//           <div className="relative">
//             <Mail className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               className="pl-9 w-full h-10 bg-zinc-800/50 text-[#DCBB87] placeholder:text-sm placeholder:text-zinc-500 placeholder:bg-zinc-800/50 rounded-md border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-black"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               autoComplete="new-email"
//             />
//           </div>

//           <label htmlFor="password" className="text-[#DCBB87] flex mt-4">
//             Password
//           </label>
//           <div className="relative">
//             <Lock className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               className="pl-9 w-full h-10 bg-zinc-800/50 text-[#DCBB87] placeholder:text-sm placeholder:text-zinc-500 placeholder:bg-zinc-800/50 rounded-md border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-black"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               autoComplete="new-password"
//             />
//           </div>

//           <label
//             htmlFor="terms"
//             className="flex items-center text-[#A1A1AA] mt-4"
//           >
//             <div className="relative flex items-center">
//               <input
//                 type="checkbox"
//                 id="terms"
//                 className="peer w-4 h-4 opacity-0 absolute"
//                 required
//               />
//               <div className="mr-2 w-4 h-4 bg-transparent border border-zinc-600 rounded-sm peer-checked:bg-[#DCBB87] peer-checked:border-transparent"></div>
//             </div>
//             I agree to the{" "}
//             <Link
//               href="/terms"
//               className="text-[#DCBB87] hover:underline hover:underline-offset-4 ml-1 mr-1"
//             >
//               Terms of Service
//             </Link>{" "}
//             and{" "}
//             <Link
//               href="/privacy"
//               className="text-[#DCBB87] hover:underline hover:underline-offset-4 ml-1"
//             >
//               Privacy Policy
//             </Link>
//           </label>

//           <button
//             type="submit"
//             className="w-full h-12 bg-[#DCBB87] text-[#19232D] rounded-md font-semibold"
//             disabled={isLoading}
//           >
//             <div className="flex justify-center items-center space-x-2">
//               {isLoading ? (
//                 <>
//                   <Loader2 className="h-4 w-4 animate-spin" />
//                   <span>Signing up...</span>
//                 </>
//               ) : (
//                 <span>Create account</span>
//               )}
//             </div>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Page;
