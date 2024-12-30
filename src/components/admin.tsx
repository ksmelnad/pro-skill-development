import profiles from "../data/sample-profiles.json";
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
const Admin = () => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-xl lg:text-2xl font-bold mb-12 text-center">
        Dashboard
      </h2>
      <Table className="max-w-4xl mx-auto">
        <TableCaption>Sample Profiles</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Date of Birth</TableHead>
            <TableHead>Profile</TableHead>
            <TableHead>Self Assessments</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {profiles.map((profile, index) => (
            <TableRow key={index}>
              <TableCell>
                {profile.firstName + " " + profile.lastName}
              </TableCell>
              <TableCell>
                {new Date(profile.dob).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <Button variant={"outline"}>View</Button>
              </TableCell>
              <TableCell>
                <Button variant={"outline"}>View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Admin;
