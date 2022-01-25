export const getData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/project`)
    const project = await res.json()
    return project.project
  } catch (e: any) {
    throw e
  }
}

export const getDataPage = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/project/${id}`)
    const project = await res.json()
    return project.project
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
