import Image from "next/image";
import laptops from "../../../../public/assets/laptops.png";
import {notFound} from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' })
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return notFound();
  }
 
  return res.json()
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            facere, unde voluptatibus doloribus laborum dolore ad pariatur
            temporibus nesciunt expedita perspiciatis cupiditate. Eveniet, natus
            vitae exercitationem nihil eaque modi fuga! Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Libero adipisci magnam, accusamus
            laboriosam corporis quo suscipit nemo, ex tempora eius iste quam
            distinctio aut minima eaque? Eum nesciunt blanditiis eius.
          </p>
        </div>
        <div className="flex-1 flex">
          <Image src={laptops} alt="" width={400} height={250} />
        </div>
      </div>
      <div className="flex flex-col gap-5 text-justify">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi
          dolorum quisquam unde rerum quo fugiat, quidem facilis, voluptatem
          magnam consequatur totam earum impedit officia accusamus, voluptate
          illo blanditiis eaque! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Labore sequi molestiae nesciunt fuga vero ad nemo
          provident quidem sunt. Enim minima sed ad culpa itaque veritatis
          consequuntur ipsam deleniti voluptate.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          iure numquam quaerat, voluptatem adipisci explicabo quidem iste quod
          blanditiis doloremque maxime odit perspiciatis velit laborum maiores
          placeat fugiat autem eligendi.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          laudantium fugiat quis repudiandae dolores, sequi esse nihil
          dignissimos consequatur exercitationem id repellat ut illum accusamus
          delectus. Perspiciatis repudiandae eligendi obcaecati! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Fuga cum vero voluptate
          natus quia adipisci incidunt cupiditate, nulla numquam. Consequuntur
          ea, excepturi odit asperiores quos laboriosam quas quisquam ex
        </p>
      </div>
    </div>
  );
}
