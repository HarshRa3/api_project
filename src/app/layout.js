import Header from '@/components/Header'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
      {/* <Header/> */}
      {children}
      <div>Footer</div>
    </div>
  )
}

export default layout
