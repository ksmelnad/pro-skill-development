import { getProfiles } from "@/app/actions/profile";
import Profiles from "@/components/adminDashboard/profiles";

export default async function page() {
  const profiles = await getProfiles();
  return (
    <div>
      <Profiles profiles={profiles} />
    </div>
  );
}
