import { ethers } from "ethers"
import { useWeb3Context } from "../state"
import { useEffect } from "react"
import { AbiItem } from 'web3-utils'
import Web3 from "web3";
import { toast } from 'react-toastify'
//import context
import { useGlobalContext } from "../state"
import { ContractAddresses } from "../config/constants/contracts"

export const useLP = () => {
    let web3 = new Web3(Web3.givenProvider)
    const { web3Provider,address,rerender,setRerender,network} = useWeb3Context()
    const {setz,sett} =useGlobalContext()!
    const currentAccount=address
    const {lptoken,univac} = ContractAddresses()
    let cid = 0
    let abi = require("./../config/abi/Chapel/UniVac.json")
    if (network!==null){
      if ((network!.chainId !== undefined)){
        cid = network!.chainId
      }
    }

    const Contractaddress = univac[cid]
    
    const U = new web3.eth.Contract(abi.abi as AbiItem[] | AbiItem, Contractaddress)

    async function get(y:string) {
          try{
          var start = Date.now();
          const x = await U.methods.getURL_by_code(y).call()  
          console.log(x)
          setz(x[3])
          var end = Date.now(); // this happens AFTER you've fetched the data
          sett(end - start)
          console.log(end - start)
          }
          catch (error) {
            console.log(error)
          }
        }
   
          useEffect(() => {
           
            
          }, [])
    return (
        {get})

}