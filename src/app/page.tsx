import Image from "next/image";

import ModeToggle from "@/components/common/ThemeToggle";
import HeroImage from "../../public/assets/images/HomeImg.svg";
import { BedDouble, Book, Plane } from "lucide-react";
import Link from "next/link";
import { Icons } from "@/components/common/Icons";
import { Button } from "@/components/ui/button";
import BookingTab from "@/components/common/BookingTab";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-[30px] dark:bg-gray-900 dark:text-slate-200">
      <section className="relative inline-block rounded-3xl">
        <Image
          className="w-full h-full"
          src={HeroImage}
          alt={"Hero Image"}
          width={200}
          height={200}
        />
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black/75 rounded-3xl" />
        <nav className="w-full absolute top-0 left-0 h-24 px-8 py-6 justify-between items-center inline-flex">
          <Link href={"/"}>
            <h1 className="text-white">My Logo</h1>
          </Link>
          <div className="flex gap-8 items-center">
            <Link href={"#"} className="text-white flex items-center gap-1">
              <Plane className="fill-current" />
              <p className="capitalize font-bold">find flight</p>
            </Link>
            <Link href={"#"} className="flex items-center gap-1">
              <Icons.bed />
              <p className="capitalize font-bold text-white">find flight</p>
            </Link>
          </div>
          <div className="flex gap-4 items-center">
            <Link href={"/login"}>
              {" "}
              <Button className="text-white" variant={"link"}>
                Login
              </Button>
            </Link>
            <Link href={"register"}>
              {" "}
              <Button className="bg-white text-black hover:bg-slate-100">
                Sign Up
              </Button>
            </Link>
          </div>
        </nav>
        <div className="absolute top-40 left-0 text-white w-full flex flex-col items-center">
          <h1 className="flex flex-col text-center text-[45px] font-bold">
            Helping Others{" "}
            <span className="text-[80px] font-bold uppercase">
              Live & Travel
            </span>
          </h1>
          <p className="text-center text-xl font-semibold">
            Special offers to suit your plan
          </p>
        </div>

        <div className="absolute -bottom-40 left-0 w-full flex flex-col items-center justify-center">
          <BookingTab />
        </div>
      </section>
    </main>
  );
}
