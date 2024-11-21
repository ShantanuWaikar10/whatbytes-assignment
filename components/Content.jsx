import React from 'react'
import LeftSidebar from './LeftSidebar'
import MainContent from './MainContent'

const Content = () => {
  return (
    <div className='flex'>
        <LeftSidebar/>
        <MainContent/>
    </div>
  )
}

export default Content