import React, { Fragment, useState,useContext } from 'react'
import Moon from '../assets/moon.png'
import Image from '../image'
import { ComingSoonLink, Link } from './Link'
import NextLink from 'next/link'
import Logo from '../../assets/logo.png'
import Hamburger from '../../assets/hamburger.svg'
import x from '../../assets/general/icon/x.svg'
import Avatar from '../../assets/header/Avatar.png'
import bg from '../../assets/starbg.svg'
import Copy from '../../assets/header/copy.svg'
import NextImage from 'next/image'
import { useWeb3Context } from '../../state'
import { GlobalContext } from '../../state/global'
// import MarketplaceSmall from '../../assets/marketsmall.svg'
import {
  Dialog,
  Disclosure,
  Menu,
  Popover,
  Transition,
} from '@headlessui/react'
import Profile from './Profile'
import MobileConnect from './MobileConnect'
const Header = () => {
  return (
    <header className="relative mx-auto w-full z-[20] bg-[#0E0F19]">
      <div className="px-4 md:px-10 py-5 flex items-center md:max-w-7xl mx-auto bg-[#0E0F19]">
        <div className=" text-3xl">
          <NextLink href="/">
            <a >
              Univac
            </a>
          </NextLink>
        </div>
        <HeaderDesktop />
        <HeaderMobile />
      </div>
      <div className="absolute left-0 right-0   h-[1px] bg-gold opacity-30" />
    </header>
  )
}

export default Header

function HeaderDesktop() {
  const [current,setCurrent] = useState("")
  return (
    <div className="hidden xl:flex w-full bg=[#0E0F19]">
      <div className="flex items-center mr-auto z-0">
        
        
        
          

       
      </div>
      <Profile className="" />
    </div>
  )
}

function HeaderMobile() {
  const { address,rerender} = useWeb3Context()
  let [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <div className="xl:hidden w-full flex justify-end  ">
      <MobileConnect className="w-[]" />
      <button type="button" onClick={openModal} className="mr-2">
        <Image className="w-8 ml-auto " src={Hamburger} alt="logo" />
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-[60] overflow-y-aut"
          onClose={closeModal}
        >
          <div className="min-h-screen text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black/60" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-x-full"
              enterTo="opacity-100 translate-x-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-full"
            >
              <div className="sm:ml-auto sm:w-80 h-screen relative w-full  overflow-hidden text-left align-middle transition-all transform bg-[#0E0E16] shadow-xl">
                <div className="absolute inset-0 -z-10">
                  <NextImage
                    layout="fill"
                    objectFit="cover"
                    className="h-screen"
                    src={bg}
                    alt="bgstart"
                  />
                </div>

                <div className="px-4 pt-2 flex items-center bg-[#0E0E16] border-b-[1px] border-[#5c503a]">
                  <div  className="">
                    <NextLink href="/" >
                      <a>
                        
                      </a>
                    </NextLink>
                  </div>
                  <div className="ml-auto" onClick={closeModal}>
                    <Image className="w-8 " src={x} alt="x" />
                  </div>
                </div>
                {(address!==null)&&
                <div className=" h-[auto] mt-[2rem] flex justify-center" >
                  <div className={'flex flex-col justify-center items-center'}>
                  <Image className="w-[4rem]"  src={Avatar} alt="Avatar" />
                      <div className="flex flex-col items-end  font-source">
                       
                        
                      </div>
                      
                  </div>
                </div>
                }   
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  )

  function NLink({ title, href }: { title: string; href?: string }) {
    if (href) {
      return (
        <div
          onClick={() => {
            closeModal()
            document.getElementById(href)?.scrollIntoView()
          }}
        >
          <NextLink href={href}>
            <a className="block font-source m-6 mt-0 text-white">{title}</a>
          </NextLink>
        </div>
      )
    }
    return <div className="block font-source m-6 mt-0 text-white">{title}</div>
  }

  function CLink({ title }: { title: string }) {
    return (
      <div className="flex items-center">
        <a className="block font-source m-6 mt-0 text-disable">{title}</a>
        <div className="text-[10px] text-gold font-source mb-5">
          COMING SOON
        </div>
      </div>
    )
  }

  function SubLink({ title }: { title: string }) {
    return (
      <div
        className="pb-4"
        onClick={() => {
          closeModal()
          document.getElementById(`/#${title}`)?.scrollIntoView()
        }}
      >
        <NextLink href={`/#${title}`}>
          <a className="block ">{title}</a>
        </NextLink>
        <div className="h-[2px] w-8 rounded-full bg-gold-light scale-x-100 transition-transform origin-top-left" />
      </div>
    )
  }
}
