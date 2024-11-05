import { Pacifico } from "next/font/google";
import Link from "next/link";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Header() {
  return (
    <header className="bg-black p-4">
      <div className="grid grid-cols-6 items-center gap-4 text-white">
        {/* Name section with custom styling */}
        <Link
          href={"/"}
          className={`col-span-2 text-2xl font-bold ${pacifico.className}`}
        >
          <span className="text-rose-500">R</span>
          <span className="text-white">upesh </span>
          <span className="text-rose-500">B</span>
          <span className="text-white">iswas</span>
        </Link>

        {/* Navbar links */}
        <nav className="col-span-4 flex justify-between">
          <Link href="#hero" className="text-rose-500 hover:text-white">
            Home
          </Link>
          <Link href="#about" className="text-gray-400 hover:text-white">
            About
          </Link>
          <Link href="#resume" className="text-gray-400 hover:text-white">
            Resume
          </Link>
          <Link href="#projects" className="text-gray-400 hover:text-white">
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}
