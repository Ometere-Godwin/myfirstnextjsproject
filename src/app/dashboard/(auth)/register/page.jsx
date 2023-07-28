"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const router = useRouter()
  const [error, setError] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const name = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      res.status === 201 && router.push("/dashboard/login?success=Account has been created")
    }catch(error) {
        setError(true)
      }
    }


  return <div className="flex flex-col items-center w-full gap-4 justify-center">
    <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" required className="p-2 outline-none rounded-lg w-[400px] bg-transparent border-[2px] border-[#bbb]"/>
      <input type="email" placeholder="Email" required className="p-2 outline-none rounded-lg w-[400px] bg-transparent border-[2px] border-[#bbb]"/>
      <input type="password" placeholder="Password" required className="p-2 outline-none rounded-lg w-[400px] bg-transparent border-[2px] border-[#bbb]"/>
      <button className="bg-[#53c28b] text-[#eee] font-bold p-2 w-[400px] rounded-lg">Register</button>
    </form>
    {error && "Something went wrong!"}
    <Link href= "/dashboard/login" className="text-green-400">Login in with an existing account</Link>
  </div>;
}
