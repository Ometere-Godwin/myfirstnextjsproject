"use client"
import { useSession } from "next-auth/react";
import useSWR from 'swr';
import dynamic from 'next/dynamic';
import { useRouter } from "next/navigation";
import Image from "next/image";


// const DynamicLogin = dynamic(() => import('./(auth)/login/page'), {
//   ssr: false,
// });


export default function Dashboard() {
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function getData() {
  //     setIsLoading(true)
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store', })
      
  //     if (!res.ok) {
  //       // This will activate the closest `error.js` Error Boundary
  //       setErr(true);
  //     }

  //     const data = await res.json();
     
  //    setData(data);
  //    setIsLoading(false)
  //   };
  //   getData();
  // }, []);
const handleSubmit = async (e) =>{
  e.preventDefault();
  const title = e.target[0].value;
  const desc = e.target[1].value;
  const img = e.target[2].value;
  const content = e.target[4].value;

  try{
    await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc,
        img,
        content,
        name: session.data.user.name,
      }),
    });
    mutate();
  }catch(err){
    console.log(err);
  }
};

//Handle delete function
const handleDelete = async (id) => {
  try{
    await fetch(`/api/posts/${id}`)
  }catch(err){
    console.log(err)
  }
}

const session = useSession()

const router = useRouter();

const fetcher = (...args) => fetch(...args).then(res => res.json());

const {data, error, mutate, isLoading} = useSWR(
  `/api/posts?name=${session?.data?.user.name}`, 
  fetcher); 
  console.log(data);

if (session.status === "loading") {
  return <p>Loading...</p>
}

if (session.status === "unauthenticated"){
  router?.push("/dashboard/login");
}

  if (session.status === "authenticated"){
  return <div className="text-red-400 text-3xl font-extrabold">
    <div>
    {isLoading ? "Loading" : data?.map(post => {
      <div>
        <div>
        <Image src={post.img} alt="" height={200} width={200}/>
      </div>
      <h2>{post.title}</h2>
    <span onClick={() => handleDelete (post._id)}>X</span>
    </div>
  })};
    </div>
    <form onSubmit={handleSubmit}>
      <h1>Add A New Post</h1>
      <input type="text" placeholder="Title"/>
      <input type="text" placeholder="Desc"/>
      <input type="text" placeholder="image"/>
      <textarea 
      cols="30" 
      rows="10" 
      placeholder="Content"></textarea>
      <button>Send</button>
    </form>
  </div>;
  }
}
