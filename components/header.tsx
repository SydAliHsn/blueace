import { Button } from './ui/button';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-slate-900/80 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-900/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-2 sm:px-6">
        <Image
          alt="blueace-logo"
          width={192}
          height={64}
          className=""
          src="/images/blueace-logo.png"
        />
        <Button className="bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white border-0 shadow-lg sm:text-lg hover:shadow-sky-500/25 transition-all duration-300">
          Contact Us
        </Button>
      </div>
    </header>
  );
}
