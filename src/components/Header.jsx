import React, { useRef, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import logo from '../assets/images/siyou.png'

const mainNav = [
    {
        display: "Home",
        path: "/"
    },
    {
        display:"Catalog",
        
        path: "/catalog"
    },
    {
        display: "Accessories ",
        path: "/accessories"
    },
    {
        display: "Contact",
        path: "/contact"
    }
]

const Header = () => {
    //creating currency state
const [ip, setIP] = useState('');

//creating function to load currency from the API
const getData = async () => {
  const res = await axios.get('https://ipapi.co/currency/')
  console.log(res.data);
  setIP(res.data)
}

useEffect( () => {
  //passing getData method to the lifecycle method
  getData()

}, [])
const [lng, setlng] = useState('');

//creating function to load currency from the API
const getlng = async () => {
  const res = await axios.get('https://ipapi.co/languages/')
  console.log(res.data);
  setlng(res.data)
}

useEffect( () => {
  //passing getData method to the lifecycle method
    getlng()

},[]);

    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    const headerRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener("scroll")
        };
    }, []);

    const menuLeft = useRef(null)

    const menuToggle = () => menuLeft.current.classList.toggle('active')

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
               
                <div className="header__logo">
              
                <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
              
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <i className='bx bx-menu-alt-left'></i>
                    </div>
                    <div className="header__menu__left" ref={menuLeft}>
                        <div className="header__menu__left__close" onClick={menuToggle}>
                            <i className='bx bx-chevron-left'></i>
                        </div>
                        {
                            mainNav.map((item, index) => (
                                <div
                                    key={index}
                                    className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active' : ''}`}
                                    onClick={menuToggle}
                                >
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="header__menu__right">
                    <div className="header__menu__item header__menu__right__item">
                        <i className="bx bx-currency"> <p>{ip}</p> </i></div>
                        <div className="header__menu__item header__menu__right__item">
                        <i className="bx bx-currency"> <p>{lng}</p> </i></div>

                        <div className="header__menu__item header__menu__right__item">
                            <i className="bx bx-search"></i>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <Link to="/cart">
                                <i className="bx bx-shopping-bag"></i>
                            </Link>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <i className="bx bx-user"></i>
                        </div>
                    </div>
                </div>
            </div>
</div>   )
}

export default Header
