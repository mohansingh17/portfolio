"use client"

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Link from "next/link";
// import {AcmeLogo} from "./AcmeLogo.jsx";

const menuItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Education",
    "Contact",
    "Log Out",
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
        <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} className="">
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
            />
            <NavbarBrand>
                <p className="font-bold text-3xl"> <span className="text-dark-primary">Portfo</span><span className="text-dark-secondary">lio</span> </p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4 font-saira" justify="center">
                <NavbarItem className="">
                    <Link className="text-dark-primary font-semibold px-3 py-2 rounded" href="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="/about" className="text-dark-primary font-semibold px-3 py-2 rounded">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-dark-secondary font-semibold px-3 py-2 rounded" href="#">
                        Skills
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="pt-5">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={item} className="my-1">
                        <Link
                            className="w-full"
                            href="#"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
