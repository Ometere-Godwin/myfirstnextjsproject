import Image from "next/image";
import digital1 from "../../public/assets/digital1.png";

export default function Home() {
  return (
    <div className="flex gap-[100px] items-center">
      <div className="flex flex-col gap-12 items-center flex-1">
        <h1 className="homeH1 tracking-tight">
          Better design for your digital products.
        </h1>
        <h3 className="text-xl font-[300]">
          Turning your idea into Reality. We bring together the teams from the
          global tech industry.
        </h3>
        <button className="bg-[#194c33] w-full p-3 rounded-lg text-xl font-bold">
          Visit our site
        </button>
      </div>
      <div>
        <Image
          src=""
          className=" object-cover w-full h-[500px]"
          alt={digital1}
        />
      </div>
    </div>
  );
}
