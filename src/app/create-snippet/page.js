"use client"
import React from 'react'
import {useState} from 'react';
import { useRouter } from 'next/navigation'


const CreateSnippet = () => {
const router = useRouter()
const[snippet,setSnippet] = useState("");
const saveSnippet = async () => {
  const response = await fetch("/api/snippets",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",  
  },
  body:JSON.stringify({snippet,}),
})
const createdSnippet = await response.json();
router.push(`/${createdSnippet.slug}`)
}


  return (
    <div className="text-center mt-4">
      <h1>Upload your snippet now! </h1>
      <p>Paste text content in text area.Save it and share the link with friends.</p>
      <div className="flex flex-col items-center mt-4">
      <textarea
        className="w-1/2 h-64 p-2 border border-gray-600 rounded-md mt-4 focus:outline-none"
        placeholder="Paste your snippet here..." onChange={(e) =>setSnippet(e.target.value)}></textarea> 
         <button  className="rounded-md my-3 px-3 py-2 text-sm font-medium text-white bg-blue-500 cursor-pointer" onClick={saveSnippet}>Save Snippet</button>
    </div>
    </div>
  )
}

export default CreateSnippet