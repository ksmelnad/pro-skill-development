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
export default async function Quiz() {
  return (
    <div className="max-w-5xl mx-auto lg:w-[60%]  my-8">
      <Table>
        <TableCaption>Your quiz history</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Quiz Name</TableHead>
            <TableHead>Attempt</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Grade</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Test</TableCell>
            <TableCell>1</TableCell>
            <TableCell>{new Date().toLocaleDateString()}</TableCell>
            <TableCell>A+</TableCell>
            <TableCell className="text-right">
              <Dialog>
                <DialogTrigger>Open</DialogTrigger>
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
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
