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
import ViewQuizDetails from "./viewQuizDetails";

export default async function Results() {
  const quizResult = await getQuizResult();
  // const user = await currentUser();

  return (
    <div className="max-w-5xl mx-auto p-4">
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
          {quizResult
            .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
            .map((quiz) => (
              <TableRow key={quiz.id}>
                <TableCell className="font-medium">{quiz.quizTitle}</TableCell>
                <TableCell>{quiz.attempt}</TableCell>
                <TableCell>
                  {quiz.createdAt.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </TableCell>
                <TableCell>{quiz.grade}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="secondary">View</Button>
                    </DialogTrigger>
                    <DialogContent className="md:max-w-xl overflow-y-auto max-h-[calc(80dvh)]">
                      <DialogHeader>
                        <DialogTitle>Quiz Analysis</DialogTitle>
                        <DialogDescription className="my-2 flex flex-col gap-1">
                          <span>Quiz: {quiz?.quizTitle}</span>
                          <span>QuizId: {quiz?.quizId}</span>
                          <span>Attempt: {quiz?.attempt}</span>
                          <span>Score: {quiz?.score}</span>
                          {/* <p>Quiz Topic: {quiz?.quizTopic}</p> */}
                        </DialogDescription>
                      </DialogHeader>
                      <ViewQuizDetails
                        quizId={quiz.quizId}
                        attempt={quiz.attempt}
                      />
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="secondary">Download</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Download</DialogTitle>
                        <DialogDescription>
                          Download your certificate
                        </DialogDescription>
                      </DialogHeader>

                      <CertificateDownloadBtn
                        courseId={quiz.quizId}
                        courseTitle={quiz.quizTitle}
                        attempt={quiz.attempt}
                        date={quiz.createdAt}
                      />
                      {/* <DialogFooter className="sm:justify-start">
                      <DialogClose asChild>
                        <Button type="button" variant="secondary">
                          Close
                        </Button>
                      </DialogClose>
                    </DialogFooter> */}
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
