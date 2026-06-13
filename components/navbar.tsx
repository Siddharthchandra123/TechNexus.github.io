"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useSyncExternalStore } from "react";
import { Logo } from "./logo";

const links = [
  ["What we offer", "#offer"],
  ["Community", "#community"],
  ["Weekly plan", "#weekly"],
  ["Stories", "#stories"],
];

const emptySubscribe = () => () => {};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header className="nav-shell">
      <nav className="navbar" aria-label="Main navigation">
        <a href="#top" className="logo-link">
          <Logo />
        </a>
        <div className="nav-links">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <button
            className="icon-button"
            aria-label="Toggle color theme"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun size={16} />
            ) : (
              <Moon size={16} />
            )}
          </button>
          <a className="button button-small" href="#join">
            Join community
          </a>
          <button
            className="menu-button"
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a href="#join" onClick={() => setOpen(false)}>
              Join the WhatsApp community <span>↗</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
