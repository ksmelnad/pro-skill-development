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
export default async function SelfAssessment() {
  return (
    <div className="max-w-5xl mx-auto lg:w-[60%]  my-8">
      <Table>
        <TableCaption>Your self assessment history</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Assessment</TableHead>

            <TableHead>Date</TableHead>

            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Test</TableCell>

            <TableCell>{new Date().toLocaleDateString()}</TableCell>

            <TableCell className="text-right">
              <Dialog>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Self Assessment</DialogTitle>
                    <DialogDescription>
                      Here are self assessment details.
                    </DialogDescription>
                  </DialogHeader>
                  <div>Self Assessment Details</div>
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
