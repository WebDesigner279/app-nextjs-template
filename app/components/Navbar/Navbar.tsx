"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // Estado do menu mobile

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      {/* Botão do menu (☰ para abrir, ✕ para fechar) */}
      <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Lista de links, com classe condicional para mobile */}
      <ul className={`${styles.navList} ${isOpen ? styles.open : ""}`}>
        <li>
          <Link
            href="/home"
            className={`${styles.link} ${pathname === "/home" ? styles.active : ""}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`${styles.link} ${pathname === "/about" ? styles.active : ""}`}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`${styles.link} ${pathname === "/contact" ? styles.active : ""}`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
