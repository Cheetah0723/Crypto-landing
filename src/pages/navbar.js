import logo from "../img/logo.png"
import React, { useState } from "react"

function Navbar() {
  const [isShow, setIsShow] = React.useState(false)
  const toggleMiniMenu = () => {
    setIsShow(!isShow)
  }
  return (
    <div>
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} />
        </div>
        <ul className="flex navbar-center">
          <li>
            <a href="#">NFT Marketplace</a>
          </li>
          <li>
            <a href="#">Character Sheet</a>
          </li>
          <li>
            <a href="#">White Paper</a>
          </li>
        </ul>
        <ul className="wallet-buttons">
          <li>
            <a href="#">Join Discord</a>
          </li>
          <a href="#">
            <div className="wallet" />
          </a>
        </ul>
        <button className="menu-icon" onClick={toggleMiniMenu}>
          <i class="bi bi-list-task"></i>
        </button>
      </div>
      <div className={isShow ? "sub-navbar" : "d-none"}>
        <ul>
          <li>
            <a href="#" onClick={toggleMiniMenu}>
              NFT Marketplace
            </a>
          </li>
          <li>
            <a href="#" onClick={toggleMiniMenu}>
              Character Sheet
            </a>
          </li>
          <li>
            <a href="#" onClick={toggleMiniMenu}>
              White Paper
            </a>
          </li>
          <li>
            <a href="#" onClick={toggleMiniMenu}>
              Join Discord
            </a>
          </li>
          <li>
            <a href="#" onClick={toggleMiniMenu}>
              Connect Wallet
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
