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
      shouldHideOnScroll
      // isBordered
      // onMenuOpenChange={setIsMenuOpen}
      className={"bg-transparent "}
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
            Home
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent className="gap-4" justify="center">
        <NavbarItem>
          <Link
            replace
            href="/stories"
            color="secondary"
            className={"text-zinc-100"}
          >
            All Stories
          </Link>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
}
