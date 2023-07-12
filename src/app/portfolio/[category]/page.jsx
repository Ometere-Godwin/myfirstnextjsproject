import Button from "@/components/button/Button";
import Image from "next/image";
import portfolio from "../../../../public/assets/portfolio.png";

export default function Category({ params }) {
  console.log(params);
  return (
    <div>
      <h1 className="text-[#53c28b] text-[20px]">{params.category}</h1>
      <div className="flex gap-[100px] mt-[50px] mb-[100px]">
        <div className="flex-1 flex flex-col gap-5 justify-center">
          <h1 className="text-3xl font-bold">Creative Portfolio</h1>
          <p className="text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
            quisquam eum at pariatur beatae consequuntur dicta labore doloremque
            debitis! Molestias iusto nesciunt molestiae quod labore illum
            consequuntur laborum natus delectus!
          </p>
          <Button text="See more" url="#" />
        </div>
        <div className="flex-1 h-[300px] relative ">
          <Image src={portfolio} alt="" className="object-cover h-[300px]" />
        </div>
      </div>
    </div>
  );
}
