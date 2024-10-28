'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";



function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href="#about">
                    <MenuItem setActive={setActive} active={active} item="About">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="https://github.com/shubham-1020">Developer</HoveredLink>
                            {/* <HoveredLink href="#programmer">Programmer</HoveredLink> */}
                            <HoveredLink href="https://leetcode.com/u/sibbu_69/">DSA</HoveredLink>
                        </div>
                    </MenuItem>
                </Link>

                <MenuItem setActive={setActive} active={active} item="Experience">
                <div className="flex space-y-4 text-sm  flex-col">
                            <HoveredLink href="#html-css">HTML & CSS</HoveredLink>
                            <HoveredLink href="#javascript">Javascript</HoveredLink>
                            <HoveredLink href="#mongodb">MongoDB</HoveredLink>
                            <HoveredLink href="#express">Express</HoveredLink>
                            <HoveredLink href="#node-js">Node Js</HoveredLink>
                            <HoveredLink href="#react">React</HoveredLink>
                            <HoveredLink href="#next-js">Next JS</HoveredLink>
                </div>
                </MenuItem>

                <MenuItem setActive={setActive} active={active} item="Projects">
                    <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="#projects">Pokedex (React)</HoveredLink>
                            <HoveredLink href="#projects">Music App</HoveredLink>
                    </div>
                </MenuItem>

                <MenuItem setActive={setActive} active={active} item="Contact">
                    <div className="flex flex-col space-y-4 text-sm text-black">
                            <a href="mailto:sk200310y@gmail.com">E-mail</a>
                            <HoveredLink href="#contact">Contact Form</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    )
}

export default Navbar;
