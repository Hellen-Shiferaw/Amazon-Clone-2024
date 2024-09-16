import React from 'react'
import{ AiOutlineMenu} from "react-icons/ai"
import classes from "./Header.module.css";

function LowerHeader() {
  return (
    <div className={classes.lower_container}>
      <ul>
        <li>
          <AiOutlineMenu />
          <p>All</p>
        </li>
        <li>Todays's Deals</li>
        <li>Costumer Service</li>
        <li>Registery</li>
        <li>Gift Card</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader