import type { NextRequest } from "next/server";
import { createEdit } from '@lib/openAI'


export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) 
{
  const { input, instruction } = (await req.json()) as {
    input: string, 
    instruction: string
  } 

  const data = await createEdit({ input, instruction })
  const textTransformed = data[0].text ?? null

  return new Response(JSON.stringify({
    textTransformed
  }), 
  {
    status: 200, 
    headers: {
      'content-type': 'application/json'
    }
  })
}
