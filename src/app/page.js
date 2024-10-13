
import Link from "next/link";

export default function Home() {
  return (
  <div className="flex flex-col justify-center items-center h-screen">
    <h1 className="font-bold text-6xl">Recipe Home Page</h1>
    <Link href={'/recipe-list'}>
    <h1 className="font-bold text-3xl">
    Go to Recipe Page</h1></Link>
  </div>
  );
}
