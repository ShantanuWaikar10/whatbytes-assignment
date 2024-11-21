import React from 'react'
import BarChartIcon from '@mui/icons-material/BarChart';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import DescriptionIcon from '@mui/icons-material/Description';

const LeftSidebar = () => {
  return (
    <div className='border-r min-w-[15vw] min-h-screen py-10 hidden lg:block'>
        <div className='flex items-center gap-3 px-4 py-4'><BarChartIcon className='text-gray-500'/><p className='text-gray-500 font-bold'>Dashboard</p></div>
        <div className='flex items-center gap-3 px-4 py-4'><WorkspacePremiumIcon className='text-gray-500'/><p className='text-gray-500 font-bold'>Skill Test</p></div>
        <div className='flex items-center gap-3 px-4 py-4'><DescriptionIcon className='text-gray-500'/><p className='text-gray-500 font-bold'>Internship</p></div>
    </div>
  )
}

export default LeftSidebar