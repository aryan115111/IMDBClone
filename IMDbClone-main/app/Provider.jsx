'use client'
import React from 'react'
import { ThemeProvider } from 'next-themes'
export default function Provider({children}) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
       <div className="dark:bg-black dark:text-gray-200 text-gray-700 duration-300 min-h-screen select-none">{children}</div> 
    </ThemeProvider>

  )
}
