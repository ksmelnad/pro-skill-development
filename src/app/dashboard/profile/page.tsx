import { getProfile } from "@/app/actions/profile";
import { getEducation } from "@/app/actions/education";
import { ProfileForm } from "@/components/userDashboard/profileForm";
import { auth } from "@clerk/nextjs/server";
import EducationForm, {
  EducationData,
} from "@/components/userDashboard/educationForm";
import ExperienceForm, {
  EffectiveExperienceData,
} from "@/components/userDashboard/experienceForm";

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

  // Transform experiences to match EffectiveExperienceData
  const experiencesForForm: EffectiveExperienceData[] =
    profile?.experiences?.map((exp) => ({
      company: exp.company, // Assumed to be string and non-null from DB
      jobTitle: exp.jobTitle, // Assumed to be string and non-null from DB
      employmentType: exp.employmentType, // Assumed to be string and non-null from DB
      locationType: exp.locationType, // Assumed to be string and non-null from DB
      location: exp.location ?? undefined, // Converts null to undefined
      startDate: exp.startDate, // Assumed to be Date and non-null from DB
      endDate: exp.endDate ?? undefined, // Converts null to undefined
      current: exp.current,
      description: exp.description ?? undefined, // Converts null to undefined
      skills: exp.skills, // Assuming skills is already string[] from DB
    })) || [];

  return (
    <section className="">
      <h2 className="section-title">Profile</h2>
      <div className="max-w-2xl mx-auto p-4">
        {userId && <ProfileForm profile={profile!} />}
        {userId && <EducationForm educationData={transformedEducationData!} />}
        {userId && <ExperienceForm experienceData={experiencesForForm} />}
      </div>
    </section>
  );
}
