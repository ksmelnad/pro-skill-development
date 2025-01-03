import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
export default async function Admin() {
  const userList = await (await clerkClient()).users.getUserList();
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-xl lg:text-2xl font-bold mb-12 text-center">
        Admin Dashboard
      </h2>
      <Table className="max-w-4xl mx-auto">
        <TableCaption>Users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Joined</TableHead>
            <TableHead>Profile</TableHead>
            <TableHead>Self Assessments</TableHead>
            <TableHead>Quiz</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userList.data.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.fullName}</TableCell>
              <TableCell>
                {new Date(user.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <Button variant={"ghost"}>View</Button>
              </TableCell>
              <TableCell>
                <Button variant={"ghost"}>View</Button>
              </TableCell>
              <TableCell>
                <Button variant={"ghost"}>View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
