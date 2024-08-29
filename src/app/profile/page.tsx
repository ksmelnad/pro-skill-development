import { ProfileForm } from "@/components/profileForm";
import React from "react";

const page = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="p-4 mt-8">
          <h2 className="text-xl lg:text-2xl font-bold mb-4">Profile</h2>
        </div>
        <ProfileForm />
      </div>
      ;
    </section>
  );
};

export default page;
