import Link from "next/link";

import logoImg from "./../../assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-Link";
import GetUsername from '../../helpers/getUsername'

export default function MainHeader() {

  return (
    <>
      <MainHeaderBackground></MainHeaderBackground>
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with the food" />
          Cuisine Crafters
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
            <li>
              <NavLink href="/userDetails/profile">
                <GetUsername></GetUsername>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
