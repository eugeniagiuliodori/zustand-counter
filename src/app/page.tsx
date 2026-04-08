import Image from "next/image";
import { Counter } from "@/components/Counter";



export default function Home() {

  return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
        <div className="flex items-center gap-2">
          <Counter />

      </div>
      </main>
  );
}
