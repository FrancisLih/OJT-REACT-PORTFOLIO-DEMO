import React from 'react'
import { AiOutlineMessage } from 'react-icons/ai'
import { CiFileOn } from 'react-icons/ci'
import { HiOutlineChartBar } from 'react-icons/hi'
import { IoSettingsOutline } from 'react-icons/io5'
import { LuCalendarDays } from 'react-icons/lu'
import { RxDashboard } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import Logo from './svg/Logo'

const Navigation = () => {
  return (
    <aside className='px-4 py-6 w-[250px] text-primary h-screen border-r border-line'>
      <div className='flex items-center gap-4'>
        <Logo/>
      <h2 className='mb-0'>School</h2>
      </div>
        

        <ul className='nav'>
            <li className='nav-link active'><Link to="#"><RxDashboard/>Dashboard</Link></li>
            <li className='nav-link'><Link to="#"><AiOutlineMessage />Messenger</Link></li>
            <li className='nav-link'><Link to="#"><LuCalendarDays/>Calendar</Link></li>
            <li className='nav-link'><Link to="#"><CiFileOn/>Database</Link></li>
            <li className='nav-link'><Link to="#"><HiOutlineChartBar/>Attendance</Link></li>
            <li className='nav-link'><Link to="#"><IoSettingsOutline/>Settings</Link></li>
        </ul>
    </aside>
  )
}

export default Navigation