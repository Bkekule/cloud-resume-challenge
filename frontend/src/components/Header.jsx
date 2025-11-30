import React from "react";

export default function Header({ active = "./resume.html" }) {
    const links = [
        { label: "Home", href: "." },
        { label: "Resume", href: "./resume.html" },
        { label: "Projects", href: "./projects.html" },
    ];

    return (
        <header>
            <nav>
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className={link.href === active ? "active" : undefined}
                        aria-current={link.href === active ? "page" : undefined}
                    >
                        {link.label}
                    </a>
                ))}
            </nav>
        </header>
    );
}
