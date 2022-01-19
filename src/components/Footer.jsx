import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/Logo-2.png'

const footerAboutLinks = [
    {
        display: "About",
        path: "/about"
    },
    {
        display: "Contact",
        path: "/contact"
    },
    {
        display: "recruiter",
        path: "/about"
    },
    {
        display: "News",
        path: "/about"
    },
    {
        display: "Store system",
        path: "/about"
    }
]

const footerCustomerLinks = [
    {
        display: "Return policy",
        path: "/about"
    },
    {
        display: "Warranty policy",
        path: "/about"
    },
    {
        display: "Refund policy",
        path: "/about"
    }
]
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                        Support switchboard
                        </div>
                        <div className="footer__content">
                            <p>
                            Order Contact <strong> 0123456789</strong>
                            </p>
                            <p>
                            Order questions <strong> 0123456789</strong>
                            </p>
                            <p>
                            Comments, complaints<strong> 0123456789</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                        About Siyou
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                        Customer care

                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo" alt="" />
                            </Link>
                        </p>
                        <p>
                        Aiming to bring new dress joy every day to millions of consumers.Let's work with Yolo towards a more active, positive life.
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
