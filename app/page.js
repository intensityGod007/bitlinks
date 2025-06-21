import Image from "next/image";
import localFont from "next/font/local"
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-Bold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {

  return (
    <main>
      <section className="grid grid-cols-2">
        <div className="h-screen bg-purple-100 flex flex-col justify-center items-center relative">
          <p className={`text-3xl ${poppins.className}`}>The best URL shortner in the market</p>
          <p className="px-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam qui molestiae necessitatibus, mollitia aliquam nostrum nulla facere? Accusantium, molestias magni!</p>
          <div className='flex gap-3 pt-5 text-white'>
            <Link href='/generate'><button className='bg-purple-400 rounded-lg shadow-lg font-bold px-3 py-1 cursor-pointer hover:bg-purple-300'>Try now</button></Link>
            <Link href='/github'><button className='bg-purple-400 rounded-lg shadow-lg font-bold px-3 py-1 cursor-pointer hover:bg-purple-300'>Github</button></Link>
          </div>
        </div>
        <div className="h-screen flex flex-col justify-center bg-purple-100">
          <Image
            className="mix-blend-darken"
            alt="vector image"
            src={'/vector.jpg'}
            width={800}
            height={300}
          />
        </div>
      </section>
    </main>
  );
}
