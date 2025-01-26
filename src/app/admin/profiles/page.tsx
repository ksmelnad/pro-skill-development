import Profiles from "@/components/adminDashboard/profiles";
import prisma from "@/utils/prismadb";

export default async function page() {
  const profiles = await prisma.profile.findMany();

  return (
    <div>
      <h1 className="section-title">Profiles</h1>
      <Profiles profiles={profiles} />
    </div>
  );
}
