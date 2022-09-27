import React from 'react'
import Lottie from 'lottie-react'
import bgAnimate from "../../assets/loginAnimate.json"
export default function LoginAnimate() {
  return (
    <div>
        <Lottie animationData={bgAnimate} />
    </div>
  )
}
