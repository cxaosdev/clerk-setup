import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  console.log(user);
  const userName = user?.firstName;

  return (
    <div className="mx-auto max-w-7xl  px-4 py-16">
      <h1 className="text-5xl flex font-semibold">
        Welcome{user ? `, ${user.firstName}` : ""} 👋
      </h1>
    </div>
  );
}