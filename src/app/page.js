
import Link from "next/link";
export default function App() {
  return (
   <div>
    <nav className="relative bg-gray-800">
    <div className="relative flex h-16 items-center justify-between">  
          <div className="flex space-x-4">
            <a href="#" aria-current="page" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Home</a>
            <a href="/create-snippet"><button  className="rounded-md px-3 py-2 text-sm font-medium text-white bg-blue-500 cursor-pointer">Create a snippet</button></a>
          </div> 
  </div>  
</nav>
<div className="align-center flex flex-col h-screen w-full items-center justify-center">
    <h1 className="font-bold text-3xl">Welcome to PasteBucket</h1><br></br>
     <p>This is an application for people to upload and share various snippets of text</p>
      <Link href="/create-snippet"><button  className="rounded-md my-3 px-3 py-2 text-sm font-medium text-white bg-blue-500 cursor-pointer">Create a snippet</button></Link>
     </div>
   
   
   </div>
  );
}
