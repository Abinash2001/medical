// import { BsChevronDown } from "react-icons/bs";
import Link from 'next/link';
import React from 'react'

const data = [
    { id: 1, name: "Contact us", url: "/" },
    { id: 2, name: "Login", url: "/" },
    { id: 4, name: "Register", url: "/" },
];

const Menu = ({showCatMenu,setShowCatMenu}) => {
  return (
    <ul className='hidden md:flex items-center gap-5 font-medium text-black'>
        {data.map((item)=>{
            return(
                <React.Fragment key={item.id}>
                        <li className='cursor-pointer'>
                            <Link href={item?.url}>
                                {item.name}
                            </Link>
                        </li>
                </React.Fragment>
            )
        })}
    </ul>
  )
}

export default Menu