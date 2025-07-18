"use client";

import {
  Profile,
  Education,
  Experience,
  Certificate,
  Skill,
} from "@prisma/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface ProfileViewProps {
  profile: Profile & {
    educations: Education;
    experiences: Experience;
    certificates: Certificate[];
    skills: Skill[];
  };
}

export default function ProfileView({ profile }: ProfileViewProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{profile.personalInfo?.fullName}</CardTitle>
          <CardDescription>{profile.personalInfo?.email}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold">Personal Information</h4>
              <p>
                Date of Birth:{" "}
                {new Date(profile.personalInfo?.dob!).toLocaleDateString()}
              </p>
              <p>Mobile: {profile.personalInfo?.mobile}</p>
              <p>
                Address: {profile.personalInfo?.address},{" "}
                {profile.personalInfo?.city}, {profile.personalInfo?.state},{" "}
                {profile.personalInfo?.country}
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Social Links</h4>
              <p>LinkedIn: {profile.personalInfo?.linkedIn}</p>
              <p>Github: {profile.personalInfo?.github}</p>
              <p>Twitter: {profile.personalInfo?.twitter}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="education">
          <AccordionTrigger>Education</AccordionTrigger>
          <AccordionContent>
            {profile.educations
              ? profile.educations.educationLevels.map((level, index) => (
                  <div key={index} className="mb-4 p-4 border rounded-md">
                    <h4 className="font-semibold">
                      {level.institute || level.board}
                    </h4>
                    <p>
                      {level.degree} in {level.subjects}
                    </p>
                    <p>{level.year}</p>
                  </div>
                ))
              : "No education details available."}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="experience">
          <AccordionTrigger>Experience</AccordionTrigger>
          <AccordionContent>
            {profile.experiences
              ? profile.experiences.experienceDetails.map((exp, index) => (
                  <div key={index} className="mb-4 p-4 border rounded-md">
                    <h4 className="font-semibold">
                      {exp.jobTitle} at {exp.company}
                    </h4>
                    <p>
                      {new Date(exp.startDate).toLocaleDateString()} -{" "}
                      {exp.current
                        ? "Present"
                        : new Date(exp.endDate!).toLocaleDateString()}
                    </p>
                    <p>{exp.description}</p>
                  </div>
                ))
              : "No experience details available."}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="certificates">
          <AccordionTrigger>Certificates</AccordionTrigger>
          <AccordionContent>
            {profile.certificates && profile.certificates.length > 0
              ? profile.certificates.map((cert) => (
                  <div key={cert.id} className="mb-4 p-4 border rounded-md">
                    <h4 className="font-semibold">{cert.course}</h4>
                    <p>
                      Issued on:{" "}
                      {new Date(cert.issuedDate).toLocaleDateString()}
                    </p>
                  </div>
                ))
              : "No certificates available."}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="skills">
          <AccordionTrigger>Skills</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2">
              {profile.skills && profile.skills.length > 0
                ? profile.skills.map((skill, index) => (
                    <Badge key={index}>
                      {skill.name} - {skill.level}
                    </Badge>
                  ))
                : "No skills available."}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
