import { ProfileForm } from "@/components/profileForm";
import React from "react";

const page = async () => {
  return (
    <section>
      <div className="max-w-xl mx-auto my-8 ">
        <div className="p-4">
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-center">
            Profile
          </h2>
        </div>
        <ProfileForm />
      </div>
    </section>
  );
};

export default page;
