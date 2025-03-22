"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Home, Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
}

// Navigation items based on the PWA project structure
const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: <Home className="h-5 w-5" />,
  },
  {
    title: "Push Notifications",
    href: "/features/push-notifications",
    icon: <Bell className="h-5 w-5" />,
  },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const DesktopNav = () => (
    <div className="hidden md:flex items-center space-x-1 px-0">
      {navItems.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className={cn(
            "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
            pathname === item.href
              ? "bg-primary/10 text-primary"
              : "hover:bg-accent hover:text-accent-foreground"
          )}
        >
          {item.icon}
          <span className="ml-2">{item.title}</span>
          {item.badge && (
            <Badge
              variant="outline"
              className="ml-2 bg-primary/20 text-primary border-primary/30"
            >
              {item.badge}
            </Badge>
          )}
        </Link>
      ))}
    </div>
  );

  const MobileNav = () => (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          // aria-label="Open main menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] sm:w-[350px]">
        <SheetHeader className="border-b pb-4 mb-4">
          <SheetTitle className="text-left flex items-center">
            <span className="font-bold inline-block bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 text-transparent bg-clip-text">
              Firebase FCM Example
            </span>
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "flex items-center px-3 py-3 rounded-md text-base transition-colors",
                pathname === item.href
                  ? "bg-primary/10 text-primary font-medium"
                  : "hover:bg-accent hover:text-accent-foreground"
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              <span className="ml-3">{item.title}</span>
              {item.badge && (
                <Badge
                  variant="outline"
                  className="ml-auto bg-primary/20 text-primary border-primary/30"
                >
                  {item.badge}
                </Badge>
              )}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );

  return (
    <div className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto container flex h-14 items-center">
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-between">
          <Link
            href="/"
            className="font-bold inline-block bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 text-transparent bg-clip-text"
          >
            Firebase FCM Example
          </Link>
          <DesktopNav />
        </div>
      </div>
    </div>
  );
}
