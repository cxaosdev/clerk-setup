import { redirect } from "next/navigation";
import { checkRole } from "@/utils/roles";

export default async function AdminDashboard() {
  // Protect the page from users who are not admins
  const isAdmin = await checkRole("admin");
  if (!isAdmin) {
    redirect("/");
  }

  return (
    <div className="mx-auto max-w-7xl  px-4 py-16">
      <h1 className="text-5xl mt-4 flex justify-center font-semibold">
        Admin dashboard
      </h1>
      <h1 className="text-5xl flex justify-center font-semibold">
        관리자 페이지
      </h1>
    </div>  
  );
}
