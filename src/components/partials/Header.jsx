import React from 'react'
import { CiBellOn } from 'react-icons/ci'
import { LiaAngleDownSolid, LiaKeySolid, LiaSignOutAltSolid, LiaUserCircle } from 'react-icons/lia'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../store/StoreContext'
import { checkLocalStorage } from '../helpers/functions-general'

const Header = () => {
  const [showDropDown, setshowDropDown] = React.useState(false);
  const {store} = React.useContext(StoreContext)
  const name = store.credentials?.data.user_name

  const handleDropDown = () => setshowDropDown(!showDropDown)

  const handleLogout = () => {
    setTimeout(() => {
      if (checkLocalStorage() !== null) {
        localStorage.removeItem("glatoken");
           window.location.replace(`/login`);
        return;
      }
    }, 1500);
  };

  return (
    <header className='header px-4 py-3 border-b border-line'>
        <div className='flex justify-end items-center gap-4 w-full relative'>
            <button className='text-3xl'><CiBellOn/></button>
            <img src="https://via.placeholder.com/40x40" className='size-[40px] rounded-full object-cover' alt="" />
            <div>
            <button className='flex items-center gap-5' onClick={handleDropDown}>{name}<LiaAngleDownSolid/></button>
            <div className={`${showDropDown ? "block" : "hidden"} header-dropdown absolute bg-secondary p-4 rounded-md right-0 top-[calc(100%+10px)] text-center shadow-md z-50`}>
                <img src="https://via.placeholder.com/40x40" className='size-[40px] rounded-full object-cover mx-auto' alt="" />
                <h4 className='mb-1'>Muh Bambang</h4>
                <p className='text-sm w-[150px] truncate'>muh.bambang@gmail.com</p>
                <ul className='flex justify-center gap-5 '>
                    <li><Link to="#" className='text-2xl'><LiaUserCircle/></Link></li>
                    <li><Link to="#" className='text-2xl'><LiaKeySolid/></Link></li>
                    <li><button className='text-2xl' onClick={handleLogout}><LiaSignOutAltSolid/></button></li>
                </ul>
            </div>
            </div>
        </div>
    </header>
  )
}

export default Header