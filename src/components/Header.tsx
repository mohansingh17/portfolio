"use client"

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import {AcmeLogo} from "./AcmeLogo.jsx";

const LINKS = [
    {
        id: 1,
        link: "/",
        text: "Home"
    },
    {
        id: 2,
        link: "/about",
        text: "About"
    },
    {
        id: 3,
        link: "/skills",
        text: "Skills"
    },
]

// const menuItems = [
//     "Home",
//     "About",
//     "Skills",
//     "Projects",
//     "Education",
//     "Contact",
//     "Log Out",
// ];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pathname = usePathname();

    console.log(isMenuOpen)
    return (
        <Navbar shouldHideOnScroll isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="">
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
            />
            <NavbarBrand>
                <p className="font-bold text-3xl font-jost"> <span className="text-primary">Portfo</span><span className="text-secondary">lio</span> </p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4 font-jost" justify="center">
                {
                    LINKS.map((i) => {
                        return (
                            <NavbarItem key={i.id} className="text-lg">
                                <Link className={`font-medium px-3 py-2 rounded ${pathname === i.link ? "text-secondary" : "text-primary hover:text-secondary"}`} href={i.link}>
                                    {i.text}
                                </Link>
                            </NavbarItem>
                        )
                    })
                }

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
                {LINKS.map((i) => (
                    <NavbarMenuItem key={i.id} className="my-1">
                        <Link
                            className={`font-semibold px-3 py-2 rounded ${pathname === i.link ? "text-secondary" : "text-primary hover:text-secondary"}`} href={i.link}
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
