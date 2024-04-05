"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

export default function NavBar({ items }) {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      // shouldHideOnScroll
      isBordered
      // onMenuOpenChange={setIsMenuOpen}
      className={"bg-transparent h-10 md:h-20"}
      maxWidth="full"
    >
      <NavbarContent>
        <NavbarItem>
          <Link href="/" replace>
            {/* <Image
              src="/logo/ben2_logo_white.png"
              alt="B Squared Logo"
              width={20}
              height={20}
            /> */}
            <p className="font-thin text-xs md:text-xl tracking-[0.3em]">
              HOME
            </p>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="gap-20" justify="center">
        <NavbarItem>
          <Link replace href="/projects" color="secondary">
            <p className="font-thin text-xs md:text-xl tracking-[0.3em]">
              PROJECTS
            </p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link replace href="/projects" color="secondary">
            <p className="font-thin text-xs md:text-xl tracking-[0.3em]">
              ABOUT
            </p>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
