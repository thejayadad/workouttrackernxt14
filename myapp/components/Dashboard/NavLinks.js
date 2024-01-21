'use client'
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {FiHome, FiList, FiPlus} from "react-icons/fi"

const links = [
    { name: 'Home', href: '/dashboard', icon: FiHome },
    {
      name: 'Workouts',
      href: '/dashboard/workout',
      icon: FiList,
    },
    { name: 'Create', href: '/dashboard/new', icon: FiPlus },
  ];
  


const NavLinks = () => {
    const pathname = usePathname();
  return (
    <div>NavLinks</div>
  )
}

export default NavLinks