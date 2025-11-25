"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/products", label: "产品展示" },
  { href: "/cases", label: "案例中心" },
  { href: "/news", label: "新闻资讯" },
  { href: "/warranty", label: "质保查询" },
  { href: "/stores", label: "门店授权" },
  { href: "/contact", label: "联系我们" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-2xl font-semibold text-cyan-300">量佳膜</div>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-white ${
                  isActive ? "text-white font-semibold" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/warranty"
          className="hidden rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2 text-sm font-medium text-black shadow-lg shadow-cyan-500/40 md:inline-flex"
        >
          电子质保
        </Link>
      </div>
    </header>
  );
}

