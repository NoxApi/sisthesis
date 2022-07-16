import Image from '../image'
import MarketplaceBox from '../../assets/marketplace-box.svg'
import Avatar from '../../assets/header/Avatar.png'
import Wallet from '../../assets/header/wallet.svg'
import mm from '../../assets/header/metamask.svg'
import { GlobalContext } from '../../state/global'
import { useContext } from 'react'
import { GoldButton } from '../button/goldButton'
import { useWeb3Context } from '../../state'
import { toast } from 'react-toastify'

export default function MobileConnect(props: any) {
  interface ConnectProps {
    connect: (() => Promise<void>) | null
  }
  const ConnectButton = ({ connect }: ConnectProps) => {
    return connect ? (
      <div className="w-[7rem] mr-[2rem]">
      <GoldButton
        className="hover:cursor-pointer text-sm"
        onClick={()=>connect()}
      >
        <Image className="w-5 " src={mm} alt="Wallet" /> CONNECT
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
      <div className="w-[7rem] mr-[2rem]">
      <GoldButton
        className="hover:cursor-pointer text-sm"
        onClick={()=>disconnect()}
      >
        <Image className="w-4 " src={Wallet} alt="Wallet" />
        <div>{address!.substring(0, 7)+".."}</div>
      </GoldButton>
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
