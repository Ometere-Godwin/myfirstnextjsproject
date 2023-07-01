import Image from "next/image";
import { blogs } from "@/utils/constants";
import laptops from "../../../public/assets/laptops.png";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="flex flex-col items-center gap-[50px] mb-[50px]">
      {blogs.map((blog) => (
        <div key={blog.id}>
          <Link href={blog.url} className="flex items-center gap-7">
            <div>
              <Image
                src={blog.image}
                alt=""
                width={400}
                height={250}
                className="object-cover"
              />
            </div>
            <div>
              <h1>{blog.heading}</h1>
              <p>{blog.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
