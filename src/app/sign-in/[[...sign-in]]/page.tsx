import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center flex-col gap-10 mt-20">
      <h1 className="text-4xl font-bold">This is Signin page</h1>
      <SignIn path="/sign-in" />
    </div>
  );
}