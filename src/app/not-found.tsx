import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6">
      <div className="w-24 h-24 relative mb-8 opacity-50 grayscale">
        <Image src={logo} alt="Solvire" fill className="object-contain" />
      </div>
      <h1 className="text-6xl md:text-8xl font-black text-foreground mb-4 tracking-tighter">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
        System Offline
      </h2>
      <p className="text-textSecondary max-w-md text-center mb-10 leading-relaxed">
        The infrastructure page you are looking for is currently offline, has been relocated, or does not exist on this grid.
      </p>
      <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-all shadow-md group">
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Return to Main Grid
      </Link>
    </div>
  );
}
