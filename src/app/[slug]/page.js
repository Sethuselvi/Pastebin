import React from 'react'
import { Snippet } from '../../models/Snippet';
import { connect } from "../../utils/db";
import CopyButton from './CopyButton'

 export default async function CreateSnippet  ({params}) {
  const {slug} = await params
  await connect()
const snippetObject = await Snippet.findOne({ slug })
const snippetText = snippetObject?.snippet || ''

  return (
    <div className="text-center mt-4">
      <h1>Snippet</h1>
      <CopyButton />
     
      <div className="flex flex-col items-center mt-4">
      <textarea
        className="w-1/2 h-64 p-2 border border-gray-300 rounded-md mt-4 bg-gray-100 text-gray-800 focus:outline-none"
        placeholder="Paste your snippet here..."  value={snippetText}  disabled></textarea>  
    </div>
    </div>
  )
}


// export async function getServerSideProps(context) {
//  const slug = context.params.slug;
//  const snippetObject = await Snippet.findOne({slug,});

//  await connect();
//   // Pass data to the page via props
//   return { snippetText:snippetObject.snippet, }
// }
