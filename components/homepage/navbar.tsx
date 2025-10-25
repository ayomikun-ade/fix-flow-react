"use client";
import { Button } from "../ui/button";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { isAuthenticated, logout } from "@/lib/auth";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";
import Logo from "@/assets/workflow.svg";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const authenticated = isAuthenticated();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    router.push("/");
    router.refresh();
  };
  return (
    <header className="w-full text-white bg-[#1d1d1d] backdrop-blur-sm shadow sticky top-0 z-20">
      <nav className="max-w-[1440px] mx-auto p-4 flex justify-between items-center gap-2">
        <Link href={"/"} className="flex items-center gap-2">
          <Image src={Logo} width={24} height={24} alt="FixFlow Logo" />
          <h3 className="font-roboto font-bold text-3xl max-md:hidden">
            FixFlow
          </h3>
        </Link>
        {authenticated ? (
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <button
                className={`hover:opacity-75 hover:cursor-pointer text-sm ${
                  pathname === "/dashboard"
                    ? "font-medium underline underline-offset-4"
                    : ""
                }`}
              >
                Dashboard
              </button>
            </Link>
            <Link href="/tickets">
              <button
                className={`hover:opacity-75 hover:cursor-pointer text-sm ${
                  pathname === "/tickets"
                    ? "font-medium underline underline-offset-4"
                    : ""
                }`}
              >
                Tickets
              </button>
            </Link>
            <Button
              variant="secondary"
              onClick={handleLogout}
              className="gap-2"
            >
              <LogOut className="h-4 w-4 max-md:hidden" />
              Logout
            </Button>
          </div>
        ) : (
          <>
            <Button variant={"secondary"} asChild>
              <Link href={"/auth/signup"}>Get Started</Link>
            </Button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
