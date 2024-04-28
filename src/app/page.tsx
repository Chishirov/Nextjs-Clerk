import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className=" font-bold text-center my-10 flex flex-col" >
        Hallo from Home page
        <Link href="/dashboard">Link to dashboard</Link>
      </h1>
    </div>
  );
}
