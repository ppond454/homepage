// Import the functions you need from the SDKs you need
import * as admin from "firebase-admin"

try {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail:process.env.FIREBASE_CLIENT_EMAIL ,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
  })
  console.log("initializeApp")
} catch (e: any) {
  if (!/already exists/u.test(e.message)) {
    console.error("Firebase admin initialization error", e.stack)
  }
}

export default admin.firestore()
