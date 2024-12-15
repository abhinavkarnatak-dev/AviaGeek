// "use client";
// import { useState } from "react";
// import { Mail, Lock, Loader2 } from "lucide-react";
// import Link from "next/link";

// const Page = () => {
//   const [isLoading, setIsLoading] = useState(false);
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
//         <h1 className="text-[#DCBB87] text-3xl font-bold">Welcome Back</h1>
//         <p className="text-[#A1A1AA]">Don't have an account?</p>
//         <Link
//           href="/pages/Signup"
//           className="text-[#DCBB87] text-sm font-semibold hover:underline hover:underline-offset-4"
//         >
//           Sign up
//         </Link>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <label htmlFor="email" className="text-[#DCBB87] flex">
//             Email
//           </label>
//           <div className="relative">
//             <Mail className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               className="pl-9 w-full h-10 bg-zinc-800/50 text-[#DCBB87] placeholder:text-sm placeholder:text-zinc-500 placeholder:bg- rounded-md border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-black"
//               value={email}zinc-800/50
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               autoComplete="new-email"
//             />
//           </div>

//           <label htmlFor="password" className="text-[#DCBB87] flex">
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

//           <button
//             type="submit"
//             className="w-full h-12 bg-[#DCBB87] text-[#19232D] rounded-md font-semibold"
//             disabled={isLoading}
//           >
//             <div className="flex justify-center items-center space-x-2">
//               {isLoading ? (
//                 <>
//                   <Loader2 className="h-4 w-4 animate-spin" />
//                   <span>Logging in...</span>
//                 </>
//               ) : (
//                 <span>Log in</span>
//               )}
//             </div>
//           </button>
//         </form>
//         {/* <Link
//           href="/pages/forgot-password"
//           className="flex justify-center text-[#A1A1AA] text-sm font-semibold hover:text-[#DCBB87] hover:underline hover:underline-offset-4"
//         >
//           Forgot password?
//         </Link> */}
//       </div>
//     </div>
//   );
// };

// export default Page;
