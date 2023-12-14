import React from 'react';
import {ReactNavbar} from "overlay-navbar" ;
import logo from "./logo.png";


const Header = () => {
  return (
   <ReactNavbar
   burgerColor="white"
   burgerColorHover= "#eb4034"
   logo={logo}
  logoWidth= "20vmax"
  logoHeight="10vmax"
  navColor1= "white"
  logoHoverSize= "10px"
  logoHoverColor= "#eb4034"
  link1Text= "Vegetables"
  link2Text= "Green"
  link3Text= "Fruits"
  link4Text= "Exotics"
  link1Url= "/vegetables"
  link2Url= "/green"
  link3Url= "/fruits"
  link4Url= "/exotics"
 link1Size= "1.3vmax"
  link1Color = "rgba(35, 35, 35,0.8)"
  nav1justifyContent= "flex-end"
  nav2justifyContent= "flex-end"
  nav3justifyContent = "flex-start"
  nav4justifyContent= "flex-start"
  link1ColorHover= "#eb4034"
  link1Margin= "1vmax"
  profileIconUrl= "/login"
  profileIconColor= "rgba(35, 35, 35,0.8)"
  searchIconColor= "rgba(35, 35, 35,0.8)"
  cartIconColor= "rgba(35, 35, 35,0.8)"
  profileIconColorHover= "#eb4034"
  searchIconColorHover= "#eb4034"
  cartIconColorHover= "#eb4034"
  cartIconMargin= "1vmax"
   />

  );
};

export default Header;
