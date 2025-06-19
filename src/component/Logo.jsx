// components/Logo.js
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Home">
      <Image
        src="https://assets.aceternity.com/logo-dark.png"
        alt="Lamp Logo"
        width={40}
        height={40}
        priority
        className="h-10 w-10 object-contain"
      />
      <span className="font-bold text-2xl tracking-tight text-neutral-800 dark:text-neutral-100">
        lAMP
      </span>
    </Link>
  );
}
