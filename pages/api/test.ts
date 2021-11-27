// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  name: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    return res.status(200).json({ name: "John Doe" })
  } catch (e) {
    // return res.status(500).json({error:"error"})
  }
}

export default handler
