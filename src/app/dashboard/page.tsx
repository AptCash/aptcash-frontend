import { redirect } from "next/navigation";

// import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session";
import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
// import { UserNameForm } from "@/components/user-name-form"

export const metadata = {
  title: "Dashboard",
  description: "View data and statistics about your account.",
};

export default async function Dashboard() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Dashboard"
        text="View data and statistics about your account."
      />
      <div className="grid gap-10">
        {/* <UserNameForm user={{ id: user.id, name: user.name || "" }} /> */}
      </div>
    </DashboardShell>
  );
}
