import FilteredSearch from "@/components/common/FilteredSearch";
import Wrapper from "@/components/common/Wrapper";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function StudentsPage() {
  return (
    <>
      <Wrapper className="flex-col gap-5 mt-5 w-full">
        <FilteredSearch
          searchPlaceholder="Surname, First Name"
          selectionPlaceholder="Position: React Developer"
        />
        <Table className="text-(--main-gray-light)">
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Job title</TableHead>
              <TableHead>Educational material</TableHead>
              <TableHead>Time taken</TableHead>
              <TableHead>Attempts</TableHead>
              <TableHead>Grade</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-foreground">Employee Name</TableCell>
              <TableCell>React Developer</TableCell>
              <TableCell>Some lecture</TableCell>
              <TableCell><span className="text-foreground">43</span> min <span className="text-foreground">57</span> sec</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Wrapper>
    </>
  );
}

export default StudentsPage;
