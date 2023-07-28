"use client"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  //to protect our route
  const session = useSession();

  const route = useRouter();

  if (session.status === "loading"){
    return <p>Loading</p>
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    signIn ("credentials", {email, password});
  }

  return <div className="flex flex-col items-center w-full gap-4 justify-center">
    <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit} >
      <input type="email" placeholder="Email" required className="p-2 outline-none rounded-lg w-[400px] bg-transparent border-[2px] border-[#bbb]"/>
      <input type="password" placeholder="Password" required className="p-2 outline-none rounded-lg w-[400px] bg-transparent border-[2px] border-[#bbb]"/>
      <button className="bg-[#53c28b] text-[#eee] font-bold p-2 w-[400px] rounded-lg">Login</button>
    </form>
      <button onClick= {() => signIn("google")}>Login with Google</button>
  </div>;
}
