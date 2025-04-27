"use client";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { useState } from "react";
const links = [
  {
    title: "HomePage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/posts",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  //TEMPARARY
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }}></NavLink>
            )}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }}></NavLink>
        )}
      </div>
      <button onClick={()=> setOpen((prev) => !prev)}>Menu</button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
