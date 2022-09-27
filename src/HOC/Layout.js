import React from 'react'
import FooterTheme from '../Components/FooterTheme/FooterTheme'
import HeaderTheme from '../Components/HeaderTheme/HeaderTheme'

export default function Layout({Component}) {
  return (
    <div className="text-white bg-bg-main">
        <HeaderTheme/>
        <Component/>
        <FooterTheme/>
    </div>
  )
}
