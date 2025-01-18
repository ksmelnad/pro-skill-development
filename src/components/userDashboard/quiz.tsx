import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { getQuizResult } from "@/app/actions/quiz";
import CertificateDownloadBtn from "./certificateDownloadBtn";
import CertificateGenBtn from "./certificateGenBtn";
// import { currentUser } from "@clerk/nextjs/server";
export default async function Quiz() {
  const quizResult = await getQuizResult();
  // const user = await currentUser();

  return (
    <div className="max-w-5xl mx-auto p-4  my-4">
      <Table>
        <TableCaption>Your quiz history</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Quiz</TableHead>
            <TableHead>Attempt</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Grade</TableHead>
            <TableHead>View</TableHead>
            <TableHead>Certificate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {quizResult.map((quiz) => (
            <TableRow key={quiz.id}>
              <TableCell className="font-medium">{quiz.quizTitle}</TableCell>
              <TableCell>{quiz.attempt}</TableCell>
              <TableCell>{quiz.createdAt.toLocaleString()}</TableCell>
              <TableCell>{quiz.grade}</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost">View</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Quiz</DialogTitle>
                      <DialogDescription>
                        Here are your quiz details.
                      </DialogDescription>
                    </DialogHeader>
                    <div>Quiz Details</div>
                    <DialogFooter className="sm:justify-start">
                      <DialogClose asChild>
                        <Button type="button" variant="secondary">
                          Close
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </TableCell>
              <TableCell>
                {/* <CertificateGenBtn course={quiz.quizId} /> */}
                <CertificateDownloadBtn
                  course={quiz.quizId}
                  attempt={quiz.attempt}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
