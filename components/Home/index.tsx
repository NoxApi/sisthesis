import { useState } from "react"
import { useLP } from "../../hooks"
import { useGlobalContext } from "../../state"
import { ApiEndpoint } from "../../config/constants/endpoint";
//import context
import { ApolloClient, InMemoryCache, gql ,useQuery } from '@apollo/client';

export const Home= () => {
    const {U} = ApiEndpoint()
    const {get} = useLP()!
    const {z,t} = useGlobalContext()!
    const [x,setx] = useState("kuy")
    const [x2,setx2] = useState("AA000003")
    const [url,seturl] = useState("") 
    const [time,settime] = useState(0) 
    const URI = U[97]
    async function getU(v:any){
      const client = new ApolloClient({
      uri: URI,
      cache: new InMemoryCache()
    });
    var start = Date.now();


    const {data} = await client.query({
      variables: {v},
      query: gql`
        query getvalue($v: String){
            urls (where:{id:$v}){
                url
        }   }
      `
    });
    var end = Date.now(); // this happens AFTER you've fetched the data
    console.log(data.urls[0].url)
    console.log(v)
    seturl(data.urls[0].url)
    settime(end - start)
    }
    return (
      <div className="md:max-w-7xl mx-auto  px-8 h-[835px] w-full">

        <div className="mt-[30px] flex flex-col">
        <input   className="bg-[#0C0F1A] text-white h-[50px] w-[70%] rounded-lg border-[1px] text-center font-bold font-serif text-xl mt-[40px]"
                    type="text"
                    onChange={(e)=>setx(e.target.value)}
                    placeholder="enter code"
                    />
        <button  className="button-gold w-[20%] m-[10px] h-[60px]">
            <p className="font-bold text-black" onClick={()=>get(x)}>get URL by Code (Blockchain)</p>
          </button>
          <a>{z}</a>
          <a>{"excecute time = "+t+" ms"}</a>
        </div>
        <div className="mt-[30px] flex flex-col">
        <input   className="bg-[#0C0F1A] text-white h-[50px] w-[70%] rounded-lg border-[1px] text-center font-bold font-serif text-xl mt-[40px]"
                    type="text"
                    onChange={(e)=>setx2(e.target.value)}
                    placeholder="enter code"
                    />
        <button  className="button-gold w-[20%] m-[10px] h-[60px]" onClick={()=>getU(x2)}>
            <p className="font-bold text-black">get URL by Code (The Graph)</p>
          </button>
          <a>{url}</a>
          <a>{"excecute time = "+time+" ms"}</a>
        </div>
      </div>
    )
  }