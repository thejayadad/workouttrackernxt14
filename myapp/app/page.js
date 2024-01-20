import Hero from "@/components/HomePage/Hero";
import Image from "next/image";
import Link from "next/link";
import {FiArrowRight} from "react-icons/fi"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex  h-22 shrink-0 items-center rounded-lg bg-grey p-4 md:h-52">
        <Image
          src="/logo.png"
          width={200}
          height={150}
          alt="logo"
          className="flex z-10 mt-6"
          style={{zIndex: '100'}}

        />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <div></div>
          <p 
      className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-secondary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary md:text-base"
          >
            <span>Log in</span> <FiArrowRight />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Hero"
          />
               <Image
            src="/hero.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Hero"
          />
        </div>
   
      </div>
      <div className="flex justify-center h-22 shrink-0 items-center rounded-lg bg-grey p-4 md:h-52">
          <h1 className="text-center">ByThejayadad</h1>
        </div>
    </main>
  );
}
