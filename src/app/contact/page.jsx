import Image from "next/image";
import get from "../../../public/assets/get.png";
import Button from "@/components/button/Button";
//import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[60px] mb-[20px] align-middle">Let's keep In Touch</p>
      <div className="flex items-center gap-[100px]">
        <div className="flex-1 w-[500px] relative">
          <Image
            src={get}
            alt="contactImage"
            className="object-contain animate"
          />
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div className="gap-2 flex flex-col">
              <label>Fullname</label>
              <input
                type="text"
                className=" w-full p-5 outline-none rounded-lg bg-transparent text-[#bbb] border-[#bbb] border-[3px]"
                placeholder="Fullname"
              />
            </div>

            <div className="gap-2 flex flex-col">
              <label>Email</label>
              <input
                type="email"
                className=" w-full p-5 outline-none rounded-lg bg-transparent text-[#bbb] border-[#bbb] border-[3px]"
                placeholder="Email"
              />
            </div>

            <div className="gap-2 flex flex-col">
              <label>Message</label>
              <textarea
                className="bg-transparent border-[#bbb] border-[3px] outline-none rounded-lg"
                cols="30"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>

            <Button url="#" text="Send a Message" />
          </form>
        </div>
      </div>
    </div>
  );
}
