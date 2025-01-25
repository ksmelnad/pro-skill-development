import { getProfile } from "@/app/actions/profile";
import { ProfileForm } from "@/components/profileForm";
import { auth } from "@clerk/nextjs/server";

export default async function page() {
  const { userId } = await auth();
  const profile = await getProfile();

  return (
    <section className="">
      <h2 className="section-title">Profile</h2>

      {userId && <ProfileForm profile={profile!} />}
    </section>
  );
}
