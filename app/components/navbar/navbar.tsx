import React from 'react';
import logo from '@/public/logo.svg';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <>
        <nav className='flex justify-between my-5 mx-14 items-center'>
            <img src={logo.src} alt="logo" />
            <div className='flex gap-5'>
                <button>написать предложение</button>
                <div>И</div>
            </div>
        </nav>
    </>
  )
}

export default Navbar;