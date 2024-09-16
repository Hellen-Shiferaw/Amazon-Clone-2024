import React from 'react';
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';



function Header() {
  return (
    <>
    <section>
      <div className={classes.header_container}>
        {/* logo Section */}
        <div className={classes.logo_container}>
          <a href="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
              alt="Amazon logo"
            />
          </a>
          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Deliverd To</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        {/* Search Section */}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" />
          <BsSearch size={25} />
        </div>
        {/* other section */}
        <div className={classes.order_container}>
          <a href="" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png"
              alt="Flag of USA"
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </a>

          <a href="">
            <p>Sign In</p>
            <span>Account & Lists</span>
          </a>

          <a href="">
            <p>Returns</p>
            <span>& Orders</span>
          </a>
          <a href="" className={classes.cart}>
            <BiCart size={35} />
            <span>0</span>
          </a>
        </div>
      </div>
    </section>

    <LowerHeader/>
    </>
  );
};

export default Header