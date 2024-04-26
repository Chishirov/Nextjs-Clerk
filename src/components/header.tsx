import React from "react";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

async function Header ()  {
  const {userId} = auth()

  return (
    <div className=" bg-gray-600 text-neutral-200 flex justify-between items-center">
     
      <div className=" container flex items-center mx-auto py-10">
        <Link href={"/"}>Home</Link>
      </div>

      {userId ? <div className="flex gap-3 items-center mr-10">
      <p>Dashboard</p>  <UserButton afterSignOutUrl="/"/>
      </div> :  <div className="flex gap-4 mr-10">
        <Link href={"/sign-in"}>Sign-in</Link>
        <Link href={"/sign-up"}>Sign-up</Link>
        <Link href={"/about"}>About</Link>
      </div> }
     
    </div>
  );
};

export default Header;
