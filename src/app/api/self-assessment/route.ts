import { NextResponse } from "next/server";
import { prisma } from "@/utils/prismadb";
import { auth } from "@/auth";

export async function POST(request: Request) {
    try {
        const { selfAssessmentResponse } = await request.json();
        console.log(selfAssessmentResponse);

        const session = await auth()

        if (!session?.user?.email) {
            return NextResponse.json({message: "Unauthorized"}, { status: 401 });
        }



        const selfAssessmentWrite = await prisma.selfAssessment.create({
            data: {
                selfAssessmentResponse: selfAssessmentResponse,
                user: {
                    connect: {
                       email: session?.user?.email!
                    }
                }
            },
        });
        console.log(selfAssessmentWrite);
        return NextResponse.json({message: "Success"}, { status: 200 });
        
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "Internal Server Error" },
      { status: 500 }
        );
    }
}