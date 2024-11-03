import Image from "next/image";

import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="hidden h-20 w-full border-t-2 border-slate-200 p-2 lg:block">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-evenly">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/assets/hr.svg"
            alt="Croatian"
            height={32}
            width={32}
            className="mr-4 rounded-md"
          />
          Croatian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/assets/es.svg"
            alt="Spanish"
            height={32}
            width={32}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/assets/fr.svg"
            alt="French"
            height={32}
            width={32}
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/assets/it.svg"
            alt="Italian"
            height={32}
            width={32}
            className="mr-4 rounded-md"
          />
          Italian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/assets/jp.svg"
            alt="Japanese"
            height={32}
            width={32}
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>
      </div>
    </footer>
  );
}
