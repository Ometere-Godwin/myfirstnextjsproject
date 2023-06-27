import Image from "next/image";
import digital1 from "../../public/assets/digital1.png";
import Button from "@/components/button/Button";

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
        <Button url="/portfolio" text="Visit our site" />
      </div>
      <div>
        <Image
          src={digital1}
          className=" object-contain w-full h-[500px] homeAnimate"
          alt={digital1}
        />
      </div>
    </div>
  );
}
