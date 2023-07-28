import Image from "next/image";
import laptops from "../../../../public/assets/laptops.png";
import {notFound} from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, { cache: 'no-store' })
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return notFound();
  }
 
  return res.json()
}

// Dynamic metadata
export async function generateMetadata({ params }) {
  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPost({params}) { 
  const data = await getData(params.id)
  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-[50px]">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-2xl font-extrabold">
            {" "}
            {data.title}
          </h1>
          <p className="text-lg text-justify">
            {data.desc}
          </p>
          <div className="flex gap-2">
            <Image src={data.img} alt="" width={40} height={40} className="rounded-full"/>
            <p>{data.username}</p>
          </div>
        </div>
        <div className="flex-1 flex">
          <Image src={data.img} alt="" width={400} height={250} />
        </div>
      </div>
      <div className="flex flex-col gap-5 text-justify">
        <p>
          {data.content}
        </p>
      </div>
    </div>
  );
}
