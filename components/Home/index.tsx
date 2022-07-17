import { useEffect, useState } from "react"
import { useLP } from "../../hooks"
import { useGlobalContext } from "../../state"
import { ApiEndpoint } from "../../config/constants/endpoint";
//import context
import { ApolloClient, InMemoryCache, gql ,useQuery } from '@apollo/client';
import { setPriority } from "os";

export const Home= () => {
    const {U} = ApiEndpoint()
    const {get} = useLP()!
    const {z,t} = useGlobalContext()!
    const [x,setx] = useState("kuy")
    const [x2,setx2] = useState("ss")
    const [url,seturl] = useState({url:"notfound"}) 
    const [time,settime] = useState(0) 
    const [p,setp] = useState([]) 
    const URI = U[97]
    async function getU(){
      const client = new ApolloClient({
      uri: URI,
      cache: new InMemoryCache()
    });
    
    const {data} = await client.query({
      query: gql`
        query getvalue{
            urls{
                id
                url
        }   }
      `
    });
     // this happens AFTER you've fetched the data
    setp(data.urls)
    console.log(data)
    console.log(p)
  
    }
    async function query(v:any){
      var start = Date.now();
      const x = await p.filter( function(item: { id: any }){return (item.id ==v);} );
      seturl(x[0])
      console.log(x)
      var end = Date.now();
      settime(end - start)
    }
    useEffect(()=>{
      getU()
    },[])

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
        <button  className="button-gold w-[20%] m-[10px] h-[60px]" onClick={()=>query(x2)}>
            <p className="font-bold text-black">get URL by Code (The Graph)</p>
          </button>
          <a>{url.url}</a>
          <a>{"excecute time = "+time+" ms"}</a>
        </div>
      </div>
    )
  }