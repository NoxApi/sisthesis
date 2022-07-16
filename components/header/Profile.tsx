import Image from '../image'
import MarketplaceBox from '../../assets/marketplace-box.svg'
import Avatar from '../../assets/header/Avatar.png'
import Wallet from '../../assets/header/wallet.svg'
import Copy from '../../assets/header/copy.svg'
import { useGlobalContext } from '../../state'
import { GoldButton } from '../button/goldButton'
import { useWeb3Context } from '../../state'
import { toast } from 'react-toastify'
import CountUp from 'react-countup';

export default function Profile(props: any) {
  interface ConnectProps {
    connect: (() => Promise<void>) | null
  }
  function copy(text:string){
    navigator.clipboard.writeText(text)
    toast.success("You've Copy Your Address To Clipboard")
  }
  const ConnectButton = ({ connect }: ConnectProps) => {
    return connect ? (
      <div className="w-56">
      <GoldButton
        className="hover:cursor-pointer text-sm"
        onClick={()=>connect()}
      >
        <Image className="w-4 mr-2 my-2" src={Wallet} alt="Wallet" /> CONNECT
        WALLET
      </GoldButton>
    </div>
    ) : (
      <button>Loading...</button>
    )
  }
  const { web3Provider, connect, disconnect,address } = useWeb3Context()
  
  interface DisconnectProps {
    disconnect: (() => Promise<void>) | null
  }
  const DisconnectButton = ({ disconnect }: DisconnectProps) => {
    
    return disconnect ? (
      <div className={'flex justify-center' + props.className}>
      <div className="flex flex-col items-end mr-3 font-source">
       
        <div
          className="flex text-xs text-[#C2C2C2]"
          onClick={() => {copy(address!)}}
        >
          <Image className="w-4 mr-1" src={Copy} alt="Avatar" />
          <div>{address!.substring(0, 13)+"..."}</div>
        </div>
      </div>
      <Image className="w-12" onClick={()=>disconnect()} src={Avatar} alt="Avatar" />
    </div>
    ) : (
      <button>Loading...</button>
    )
  }
  
  return web3Provider ? (
    <DisconnectButton disconnect={disconnect}/>
  ) : (
    <ConnectButton connect={connect} />
  )
}
