// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

import db from "../../../config/firebase"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let { id }  = req.query
  const pid = Number(id)
  try {
    const dataRef = db.collection("project")
    const snap = await dataRef.where("id", "==", pid).get()
    if (snap.empty) {
      return res.status(400).json({ message: "No matching documents." })
    } else {
      const project = snap.docs.map((doc) => doc.data())
      return res.status(200).json({ project })
    }
  } catch (e: any) {
    return res.status(500).json({ error: id })
  }
}

export default handler
