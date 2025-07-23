import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="p-4">
      <nav className="container mx-auto flex items-center justify-end gap-4">
        <Button asChild size="lg">
          <Link href="/cv-jesus-valencia.pdf" download>
            Descarga mi CV
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href={process.env.NEXT_PUBLIC_WHATSAPP_URL || ''} target="_blank">
            Contactame
          </Link>
        </Button>
      </nav>
    </header>
  );
}