import Image from "next/image";
import Link from "next/link";
import { portfolioLinks } from "@/utils/constants";

export default function Portfolio() {
  return (
    <div>
      <h1>Choose a gallery</h1>
      <div>
        {portfolioLinks.map((portfolioLink) => (
          <div key={portfolioLink.id}>
            <Link href={portfolioLink.url}>
              <span>{portfolioLink.title}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
