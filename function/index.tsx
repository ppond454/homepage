
export const getData =async()=>{
    try{
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/project`)
      const project = await res.json() 
      return  project.project 
    }
    catch(e : any){
      throw e
    }
  
  }

  
export const getDataPage =async( id : string )=>{
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/project/${id}`)
    const project = await res.json() 
    return  project.project 
  }
  catch(e :any ){
    throw e
  }

}

