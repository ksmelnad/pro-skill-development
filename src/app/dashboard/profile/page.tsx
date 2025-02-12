import { getProfile } from "@/app/actions/profile";
import { getEducation } from "@/app/actions/education";
import { ProfileForm } from "@/components/userDashboard/profileForm";
import { auth } from "@clerk/nextjs/server";
import EducationForm, {
  EducationData,
} from "@/components/userDashboard/educationForm";

export default async function page() {
  const { userId } = await auth();
  const profile = await getProfile();
  const education = await getEducation();

  const transformedEducationData = education?.educationLevels.map((level) => ({
    ...level,
    board: level.board ?? undefined,
    institute: level.institute ?? undefined,
    degree: level.degree ?? undefined,
    year: level.year ?? undefined,
    expectedYear: level.expectedYear ?? undefined,
    currentSemester: level.currentSemester ?? undefined,
  }));

  return (
    <section className="">
      <h2 className="section-title">Profile</h2>

      <div className="max-w-xl mx-auto p-4">
        {userId && <ProfileForm profile={profile!} />}
        {userId && <EducationForm educationData={transformedEducationData!} />}
      </div>
    </section>
  );
}

// education={education?.educationLevels!}
