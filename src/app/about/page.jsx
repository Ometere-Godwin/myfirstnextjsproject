import Image from "next/image";
import marketing from "../../../public/assets/marketing.jpg";
import Button from "@/components/button/Button";

export default function About() {
  return (
    <div className="mb-7">
      <div className="relative">
        <Image
          src={marketing}
          alt=""
          className="w-full h-[300px] object-cover sepia "
        />
        <div className="absolute top-[12em] left-[1em] bg-red-500 p-1 text-lg text-white">
          <h1 className="text-xl">Digital Marketing</h1>
          <h2 className="text-base">
            Handcrafting awarding winning digital experiences
          </h2>
        </div>
      </div>
      <div className="flex items-center gap-[90px] mt-12">
        <div className="flex gap-10 flex-col flex-1 ">
          <h1 className="text-2xl font-bold tracking-wider">Who are we?</h1>
          <p className="text-xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            aspernatur neque, maiores tempora natus necessitatibus eaque,
            laborum, ullam ipsam et repudiandae! Repellat expedita quos veniam
            quisquam ad voluptate, fugiat nulla.
            <br />
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Error harum amet iusto sit. Repellat rerum, exercitationem tempora
            deleniti illo asperiores placeat perferendis expedita a, quasi, quae
            aliquam eveniet veniam accusantium!
          </p>
        </div>
        <div className="flex gap-10 flex-col flex-1">
          <h1 className="text-2xl font-bold tracking-wider">What we do</h1>
          <p className="text-xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            aspernatur neque, maiores tempora natus necessitatibus eaque,
            laborum, ullam ipsam et repudiandae! Repellat expedita quos veniam
            quisquam ad voluptate, fugiat nulla.
            <br />
            <br /> - Dynamic websites
            <br /> - Fast and Handy
            <br /> - Mobile Apps
          </p>
          <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  );
}
