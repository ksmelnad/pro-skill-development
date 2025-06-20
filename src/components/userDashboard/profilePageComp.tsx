"use client";

import { PersonalInfoForm } from "@/components/userDashboard/personalInfoForm";
import { auth } from "@clerk/nextjs/server";
import EducationForm from "@/components/userDashboard/educationForm";
import ExperienceForm, {
  EffectiveExperienceData,
} from "@/components/userDashboard/experienceForm";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import {
  Home,
  User,
  ClipboardList,
  BarChart3,
  Brain,
  LayoutDashboard,
  Briefcase,
  School,
  Lightbulb,
  Settings,
} from "lucide-react";
import useSWR from "swr";
import {
  Education,
  Experience,
  Experience as ExperienceContainer, // Renamed to avoid confusion with old 'Experience' entity
  ExperienceDetails,
  Profile,
} from "@prisma/client";
import { SkillsForm } from "@/components/userDashboard/skillsForm";
import { ProfileWithPayload } from "@/types";

export const PROFILE_TABS = [
  { value: "personal", label: "Personal Info", icon: User },
  { value: "education", label: "Education", icon: School },
  { value: "experience", label: "Experience", icon: Briefcase },
  { value: "skills", label: "Skills", icon: Lightbulb },
];

const fetcher = (url: string) => fetch(url).then((res) => res.json());

// Type for the Experience container that includes its details
type ExperienceWithDetails = Experience & {
  experienceDetails: ExperienceDetails[];
};

export default function ProfilePageComp({
  initialProfileData,
}: {
  initialProfileData: ProfileWithPayload;
}) {
  const [activeTab, setActiveTab] = useState(PROFILE_TABS[0].value);

  const { data: fetchedProfileData, mutate: mutateProfile } =
    useSWR<ProfileWithPayload>("/api/profile", fetcher, {
      fallbackData: initialProfileData,
    });

  // SWR for the entire Education document (which includes educationLevels)
  const { data: educationContainer, mutate: mutateEducationContainer } =
    useSWR<Education>("/api/education", fetcher, {
      // API might return null if no record
      fallbackData: initialProfileData?.educations!,
    });

  // SWR for the Experience container document
  const { data: experienceContainer, mutate: mutateExperienceContainer } =
    useSWR<Experience>("/api/experience", fetcher, {
      // API might return null if no record
      fallbackData: initialProfileData?.experiences!,
    });

  // Transform experiences to match EffectiveExperienceData
  const experiencesForForm: EffectiveExperienceData[] =
    experienceContainer?.experienceDetails?.map(
      (detail: ExperienceDetails) => ({
        company: detail.company,
        jobTitle: detail.jobTitle,
        employmentType: detail.employmentType,
        locationType: detail.locationType,
        location: detail.location ?? undefined,
        // Ensure Date objects for form fields that expect them
        startDate: detail.startDate ? new Date(detail.startDate) : new Date(), // Default to now if null/undefined
        endDate: detail.endDate ? new Date(detail.endDate) : undefined,
        current: detail.current,
        description: detail.description ?? undefined,
        skills: detail.skills || [], // Ensure skills is an array e.g. from string[]
      })
    ) || [];

  return (
    <section className="">
      <h2 className="section-title">Profile</h2>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          {PROFILE_TABS.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="flex items-center gap-2"
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="personal" className="mt-6">
          {/* Ensure personalInfo is passed correctly, handle null if necessary */}
          <PersonalInfoForm personalInfo={fetchedProfileData?.personalInfo} />
        </TabsContent>
        <TabsContent value="education" className="mt-6">
          {/* EducationForm expects a non-null Education object. Handle null from SWR. */}

          <EducationForm
            educationData={educationContainer! || []}
            mutateEducation={mutateEducationContainer}
          />
        </TabsContent>
        <TabsContent value="experience" className="mt-6">
          <ExperienceForm
            experienceDetails={experiencesForForm} // Pass the array of details
            mutateExperience={mutateExperienceContainer} // Pass the mutate function for the Experience container
          />
        </TabsContent>
        <TabsContent value="skills" className="mt-6">
          <SkillsForm
            initialData={fetchedProfileData!}
            mutateProfile={mutateProfile}
          />
        </TabsContent>
      </Tabs>
    </section>
  );
}
