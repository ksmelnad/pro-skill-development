import { getProfile } from "@/app/actions/profile";
import { ProfileForm } from "@/components/profileForm";
import { auth } from "@clerk/nextjs/server";

export default async function page() {
  const { userId } = await auth();
  const profile = await getProfile();

  return (
    <section>
      <div className="max-w-xl mx-auto my-8 ">
        <div className="p-4">
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-center">
            Profile
          </h2>
        </div>
        {userId && <ProfileForm profile={profile!} />}
      </div>
    </section>
  );
}
