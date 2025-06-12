// Example for App Router: src/app/api/geolocation/route.ts
import { NextRequest, NextResponse } from "next/server";

import { geolocation } from "@vercel/functions";

export function GET(request: Request) {
  const details = geolocation(request);
  const country = request.headers.get("x-vercel-ip-country");
  console.log("Geolocation details:", details);
  console.log("Country from headers:", country);
  return Response.json(details);
}

// You can also use a package like 'geoip-lite' for local IP lookups,
// but an external API is often simpler and provides richer data.
// Example using ip-api.com (free for non-commercial use, check their terms)

// export async function GET(request: NextRequest) {
//   // Get IP address from request headers
//   // The 'x-forwarded-for' header is common when behind a proxy (like Vercel).
//   const ip = (request.headers.get("x-forwarded-for") ?? "127.0.0.1")
//     .split(",")[0]
//     .trim();

//   // Fallback for local development if x-forwarded-for is not set
//   const clientIp =
//     ip === "127.0.0.1" && process.env.NODE_ENV === "development"
//       ? "" // For local, ip-api.com can auto-detect if IP is omitted or use a test IP
//       : ip;

//   try {
//     // Fetch geolocation data from an external API
//     // ip-api.com provides country, countryCode, etc.
//     // `fields` query parameter helps to get only necessary data.
//     const geoResponse = await fetch(
//       `http://ip-api.com/json/${clientIp}?fields=status,message,country,countryCode`
//     );

//     if (!geoResponse.ok) {
//       throw new Error(
//         `IP API request failed with status ${geoResponse.status}`
//       );
//     }

//     const geoData = await geoResponse.json();
//     console.log("Geolocation data:", geoData);

//     if (geoData.status === "success") {
//       return NextResponse.json({
//         countryName: geoData.country, // e.g., "United States"
//         countryCode: geoData.countryCode, // e.g., "US"
//       });
//     } else {
//       console.error("Geolocation API error:", geoData.message);
//       return NextResponse.json(
//         { error: `Failed to fetch geolocation data: ${geoData.message}` },
//         { status: 500 }
//       );
//     }
//   } catch (error) {
//     console.error("Geolocation fetch error:", error);
//     return NextResponse.json(
//       { error: "Server error while fetching geolocation" },
//       { status: 500 }
//     );
//   }
// }

// For Pages Router (src/pages/api/geolocation.ts):
// import type { NextApiRequest, NextApiResponse } from 'next';
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const ip = (req.headers['x-forwarded-for'] as string || req.socket.remoteAddress || '127.0.0.1').split(',')[0].trim();
//   // ... similar fetch logic ...
//   // then res.status(200).json({ countryName, countryCode });
// }
