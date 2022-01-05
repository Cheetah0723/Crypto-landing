import { React, useState } from "react"

import star from "../img/star.png"

export default function () {
  const [image, setImage] = useState("")
  const insertImage = (e) => setImage(<img src={e} />)

  return (
    <div className="home">
      <div className="board">
        <div className="left">
          <div
            className="board-item"
            onClick={() => {
              insertImage(star)
            }}
          >
            <img src={star} />
            <p>Adventure</p>
          </div>
          <div
            className="board-item"
            onClick={() => {
              insertImage(star)
            }}
          >
            <img src={star} />
            <p>Jack of All Trades</p>
          </div>
          <div
            className="board-item"
            onClick={() => {
              insertImage(star)
            }}
          >
            <img src={star} />
            <p>ArchCrafter</p>
          </div>
          <div
            className="board-item"
            onClick={() => {
              insertImage(star)
            }}
          >
            <img src={star} />
            <p>Enchanter</p>
          </div>
        </div>
        <div className="board-main">
          <h2>Adventurer</h2>
          <p>1/500</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            diusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="board-change">{image}</div>
          <input type="text" placeholder="Enter Character Name" />
          <div className="corner">
            <p>RESERVE</p>
            <p id="eth">.01 ETH.</p>
          </div>
        </div>

        <div className="right">
          <div
            className="board-item"
            onClick={() => {
              insertImage(star)
            }}
          >
            <img src={star} />
            <p>Blacksmith</p>
          </div>
          <div
            className="board-item"
            onClick={() => {
              insertImage(star)
            }}
          >
            <img src={star} />
            <p>Jeweler</p>
          </div>
          <div
            className="board-item"
            onClick={() => {
              insertImage(star)
            }}
          >
            <img src={star} />
            <p>Woodworker</p>
          </div>
          <div
            className="board-item"
            onClick={() => {
              insertImage(star)
            }}
          >
            <img src={star} />
            <p>Tallor</p>
          </div>
        </div>
      </div>
      <div className="button-items">
        <div className="button-item">
          <a href="#">
            <p>Tabletop</p>
            <span>RPG-Ready</span>
          </a>
        </div>
        <div className="button-item">
          <a href="#">
            {" "}
            <p>6+</p>
            <span>Professions</span>
          </a>
        </div>
        <div className="button-item">
          <a href="#">
            <p>Unique</p>
            <span>Loot & Gear</span>
          </a>
        </div>
        <div className="button-item">
          <a href="#">
            {" "}
            <p>Amazing</p>
            <span>NFT Art</span>
          </a>
        </div>
        <div className="button-item">
          <a href="#">
            {" "}
            <p>Crafting</p>
            <span>Guilds</span>
          </a>
        </div>
        <div className="button-item">
          <a href="#">
            {" "}
            <p>Passive</p>
            <span>Income</span>
          </a>
        </div>
      </div>
    </div>
  )
}
