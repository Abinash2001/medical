import { BsChevronDown } from "react-icons/bs";
import Link from 'next/link';
import React from 'react'

const data = [
    { id: 1, name: "Contact us", url: "/" },
    { id: 2, name: "Login", url: "/" },
    { id: 4, name: "Register", url: "/" },
];
const MenuMobile = ({showCatMenu,setShowCatMenu,setMobileMenu}) => {
  return (
    <ul className='flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black'>
        {data.map((item)=>{
            return(
                <React.Fragment key={item.id}>
                        <li className='py-4 px-5 border-b'>
                            <Link href={item?.url} onClick={()=>setMobileMenu(false)}>
                                {item.name}
                            </Link>
                        </li>
                </React.Fragment>
            )
        })}
    </ul>
  )
}

export default MenuMobile