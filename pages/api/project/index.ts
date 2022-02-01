// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import db from "../../../config/firebase"


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const dataRef = db.collection("project")
    const snap = await dataRef.get()
    const project = snap.docs.map(doc=> doc.data())
    
    if (!project) {
        console.log('No such document!');
      } else {
        return res.status(200).json({project})
      }


  } catch (e : any) {
    return res.status(500).json({e:"error"})
  }
}

export default handler
