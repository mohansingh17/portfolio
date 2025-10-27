"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  {
    id: 1,
    link: "/",
    text: "Home",
  },
  {
    id: 2,
    link: "/about",
    text: "About",
  },
  {
    id: 3,
    link: "/skills",
    text: "Skills",
  },
  {
    id: 4,
    link: "/projects",
    text: "Projects",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className=""
      classNames={{
        wrapper: "max-w-[1400px] px-8",
      }}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <p className="font-bold md:text-3xl text-2xl font-jost">
          {" "}
          <span className="text-primary">Portfo</span>
          <span className="text-secondary">lio</span>{" "}
        </p>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4 font-jost"
        justify="center"
      >
        {LINKS.map((i) => {
          return (
            <NavbarItem key={i.id} className="text-lg">
              <Link
                className={`font-medium px-3 py-2 rounded ${
                  pathname === i.link
                    ? "text-secondary"
                    : "text-primary hover:text-secondary"
                }`}
                href={i.link}
              >
                {i.text}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="">
          <Link
            className="text-white bg-primary px-4 py-2 rounded"
            href="tel:+919720125830"
          >
            +91-9720125830
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="pt-5">
        {LINKS.map((i) => (
          <NavbarMenuItem key={i.id} className="my-1">
            <Link
              className={`font-semibold px-3 py-2 rounded ${
                pathname === i.link
                  ? "text-secondary"
                  : "text-primary hover:text-secondary"
              }`}
              href={i.link}
              onClick={() => setIsMenuOpen(false)}
            >
              {i.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
