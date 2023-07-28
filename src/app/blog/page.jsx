import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' })
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Blog() {
  const data = await getData();
  return (
    <div className="flex flex-col items-center gap-[50px] my-[50px]">
      {data.map((blog) => (
        <div key={blog.id}>
          <Link href={`/blog/${blog._id}`} className="flex items-center gap-7">
            <div className="flex-1">
              <Image
                src={blog.img}
                alt=""
                width={400}
                height={150}
                className="object-cover"
              />
            </div> 
            <div className="w-[50em]">
              <h1 className="text-lg font-extrabold">{blog.title}</h1>
              <p>{blog.desc}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
