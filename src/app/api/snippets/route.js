
import { connect } from '@/utils/db';
import { Snippet } from '@/models/Snippet';
import * as randomstring from 'randomstring'
export async function POST(request) {
  await connect();
  const requestBody = await request.json();
  
  const slug = randomstring.generate({
  length: 12,
  charset: 'alphabetic'
});
  const snippet = await Snippet.create({snippet:requestBody.snippet, slug});
  return Response.json(snippet);
}