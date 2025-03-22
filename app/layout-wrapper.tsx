import type React from "react";
import { Navigation } from "@/components/Navigation";
import Link from "next/link";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="container mx-auto p-4 max-w-4xl flex-1">{children}</main>
      <footer className="border-t py-4 text-center text-sm text-muted-foreground">
        <p>
          Next.js Firebase FCM Example created by{" "}
          <Link
            className="text-red-400 underline"
            href="https://github.com/Ramz001"
          >
            Ramz
          </Link>{" "}
          &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
