import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { Link, NavLink } from "react-router-dom"

import React, { useState } from 'react';


const HeaderComponent = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { address, isConnected } = useAccount()
    const { data: ensName } = useEnsName({ address })
    const { connect } = useConnect({
        connector: new InjectedConnector(),
      })
  
    return (
      <header className="header-section">
          <div className="container">
              <div className="header-holder">
                  <div className="header-primary d-flex flex-wrap justify-content-between align-items-center">
                      <div className="brand-logo d-none d-lg-inline-block">
                          <div className="logo">
                              <Link to={'/'}>
                              <img src="/assets/images/logo/smartLogo.png" alt="logo" />
                              </Link>
                          </div>
                      </div>
                      <div className="header-wrapper justify-content-lg-end">
                          <div className="mobile-logo d-lg-none" >
                            <Link to={'/'}><img src="/assets/images/logo/smartLogo.png" alt="logo" /></Link>
                          </div>
                          <div className="menu-area">
                              <ul className={isOpen?"menu active" : "menu"}onClick={() => setIsOpen(false)}>
                                  <li>
                                     <NavLink to={'/'}>Home</NavLink>
                                      
                                  </li>
                                  
                                  <li>
                                      <Link to={'Staking'}>Staking</Link>
                                     
                                  </li>
                                  <li>
                                      <Link to={'BuyToken'}>Buy Now</Link>
                                     
                                  </li>
                                  <li>
                                     <Link to={'Team'}> Team</Link>
                                      
                                  </li>
                                  <li>
                                  <Link to={'BlogPost'}>Blog</Link>    
                                      
                                  </li>
                                  <li> <Link to={'Contact'}> Contact</Link></li>
                                
                              </ul>
                              <a className="wallet-btn" onClick={() => connect()} data-bs-toggle="modal" data-bs-target="#wallet-option">
                              
                                  <span >Connect
                                  </span> <i className="fa-solid fa-wallet"></i></a>
  
                                 
                              <div className={isOpen? "active  header-bar d-lg-none" : "header-bar d-lg-none"} onClick={() => setIsOpen(!isOpen)} >
                                  <span></span>
                                  <span></span>
                                  <span></span>
                              </div>
                          </div>
                      </div>
  
                  </div>
              </div>
          </div>
  
      </header>
    )
  }
  
  export default HeaderComponent 