import React from 'react'
import Footer from '../components/Footer'

export default function layout({children}) {
  return (
    <div>
      {children}
      <Footer/>
    </div>
  )
}
