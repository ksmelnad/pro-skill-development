"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export function UserDetails() {
  const { isLoaded, user } = useUser();

  return (
    <div>
      {isLoaded && user ? (
        <div className="pb-6 max-h-96">
          <dl className="px-8">
            <div className="mb-8 flex justify-center">
              {user.imageUrl && (
                <Image
                  src={user.imageUrl}
                  width={100}
                  height={100}
                  className="rounded-full"
                  alt="User Image"
                />
              )}
            </div>
            <div className="py-2">
              <dt className="text-sm font-semibold">User ID</dt>
              <dd className="mt-1 text-sm text-gray-600">{user.id}</dd>
            </div>
            {user.firstName && (
              <div className="py-2">
                <dt className="text-sm font-semibold">Name</dt>
                <dd className="mt-1 text-sm text-gray-600">
                  {user.firstName} {user.lastName}
                </dd>
              </div>
            )}
            <div className="py-2">
              <dt className="text-sm font-semibold">Email addresses</dt>
              <dd className="mt-1 text-sm text-gray-600">
                {user.emailAddresses.map((email) => (
                  <div key={email.id} className="flex gap-2 mb-1">
                    {email.emailAddress}
                    {user.primaryEmailAddressId === email.id && (
                      <span className="text-xs bg-primary-50 text-primary-700 rounded-2xl px-2 font-medium pt-[2px]">
                        Primary
                      </span>
                    )}
                  </div>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      ) : (
        <div className="text-gray-700 px-4 py-5">Loading user data...</div>
      )}
    </div>
  );
}
