import Profiles from "@/components/adminDashboard/profiles";

import prisma from "@/utils/prismadb";

export default async function page() {
  const users = await prisma.user.findMany();

  return (
    <div className="space-y-4">
      <h1 className="section-title">Profiles</h1>

      <Profiles users={users} />
    </div>
  );
}
