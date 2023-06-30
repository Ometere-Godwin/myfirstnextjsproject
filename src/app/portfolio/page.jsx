import Link from "next/link";
import { portfolioLinks } from "@/utils/constants";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div>
      <h1 className="my-5">Choose a gallery</h1>
      <div className="flex gap-[50px]">
        {portfolioLinks.map((portfolioLink) => (
          <div key={portfolioLink.id} className="item hover:text-[#53c28b]">
            <Link href={portfolioLink.url}>
              <span className="absolute right-3 bottom-3 text-[40px] font-bold">
                {portfolioLink.title}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
