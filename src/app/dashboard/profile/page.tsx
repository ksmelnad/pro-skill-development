import ProfilePageComp from "@/components/userDashboard/profilePageComp";
import prisma from "@/utils/prismadb";
import { auth } from "@clerk/nextjs/server";

export default async function ProfilePage() {
  const { userId } = await auth();
  const initialProfileData = await prisma.profile.findUnique({
    where: {
      userId: userId!,
    },
    include: {
      educations: true,
      experiences: true,
    },
  });

  return <ProfilePageComp initialProfileData={initialProfileData!} />;
}
