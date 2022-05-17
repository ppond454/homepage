// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import path from "path"
import fs from "fs"

const filePath = path.resolve(".", "public/file/resume.pdf")
const Buffer = fs.readFileSync(filePath)

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    return res.setHeader("Content-Type", "application/pdf").send(Buffer)
  } catch (e) {
    return res.status(500).json({ error: "error" })
  }
}

export default handler
