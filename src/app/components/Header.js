"use client"
import { useState,useEffect } from "react"
import Wrapper from "./Wrapper";
import React from 'react'
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
// import { IoMdHeartEmpty } from "react-icons/io";
// import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

export const Header = () => {
    const[mobileMenu,setMobileMenu]=useState(false);
    const[showCatMenu,setShowCatMenu]=useState(false);
    const[show,setShow]=useState("translate-y-0");
    const[lastScrolly,setLastScrolly]=useState(0);

    const controlNavbar=()=>{
      if(window.scrollY>200)
      {
        if(window.scrollY>lastScrolly && !mobileMenu)
        {
          setShow("-translate-y-[80px]")
        }
        else{
          setShow("shadow-sm")
        }
      }
      else{
        setShow("translate-y-0")
      }
      setLastScrolly(window.scrollY)
    }

    useEffect(()=>{
      window.addEventListener("scroll",controlNavbar);
      return()=>{
        window.removeEventListener("scroll",controlNavbar);
      }
    })

  return (
    <header className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
        <Wrapper className="h-[60px] flex justify-between items-center">
          
          <Link href="/">
            <img src="/logo.jpeg" className="w-[100px] md:[60px]"/>
          </Link>

          <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu}/>
          {mobileMenu && (
            <MenuMobile showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} setMobileMenu={setMobileMenu}/>
          )}
          {/* mobile icon start */}
          <div  className="w-8 md:q-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
              {mobileMenu?(
                <VscChromeClose className="text-[16px]" onClick={()=>setMobileMenu(false)}/>
              ):(
                <BiMenuAltRight className="text-[20px]" onClick={()=>setMobileMenu(true)}/>
              )}
            </div>
            {/* mobile icon end*/}
        </Wrapper>
    </header>
  )
}

