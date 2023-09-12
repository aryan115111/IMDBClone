'use client'
import React from 'react'
import Link from 'next/link'
import {useSearchParams} from "next/navigation"
export default function NavbarItem({title, pram}) {
    const searchPrams = useSearchParams()
    const genre = searchPrams.get('genre')
  return (
    <div>
      <Link 
      className={`m-4 hover:text-amber-600 font-semibold p-2 ${genre===pram && "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"}`}
      href={`/?genre=${pram}`}>
        {title}
      </Link>
    </div>
  )
}
