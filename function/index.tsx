import emailjs from "@emailjs/browser"
import {Project } from "../type/projectType"


export const getData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/project`)
    const project  = await res.json()
    return project.project as Project[] 
  } catch (e: any) {
    throw e
  }
}

export const getDataPage = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/project/${id}`)
    const project = await res.json()
    return project.project as Project[] 
  } catch (e: any) {
    throw e
  }
}

export const validatedEmail = (email: string) => {
  const re = email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )

  if (re === null) return true
  else return false
}

export const sentEmail = (
  email: string,
  from_name: string,
  message: string
) => {
  const form = {
    to_name: "Siritep Tongdoung",
    email,
    from_name,
    message,
  }

  emailjs
    .send(
      process.env.NEXT_PUBLIC_KEY_SERVICE_EMAILJS as string,
      process.env.NEXT_PUBLIC_KEY_TEMPLATE_EMAILJS as string,
      form,
      process.env.NEXT_PUBLIC_KEY_USER_EMAILJS as string
    )
    .then((res) => {
      console.log("sucess", res.status)
      return res.status
    })
    .catch((err) => {
      console.log(err)
      return 400
    })
}
