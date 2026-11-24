import CounterSpan from "@/components/common/CounterSpan";
import Wrapper from "@/components/common/Wrapper";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import avatar from "@/assets/avatars/mainAvatar.png";
import type { EmployeeData } from "@/types";
import TableBodySkeleton from "./TableBodySkeleton";
import EmployeeTableRow from "./TableRow/EmployeeTableRow";

interface Props {
  data: EmployeeData[] | undefined;
  isLoading: boolean;
  error: Error | null;
  tableRef: React.Ref<HTMLTableElement>;
}

function EmployeeTable({ data, isLoading, error: isError, tableRef }: Props) {

  if (isError) return <span>Error placeholder</span>;

  return (
    <Wrapper className="flex-col w-full max-h-[65dvh] **:data-[slot=table-container]:overflow-auto [&_[data-slot=table-container]::-webkit-scrollbar]:w-1.5 [&_[data-slot=table-container]::-webkit-scrollbar]:h-1.5 [&_[data-slot=table-container]::-webkit-scrollbar-thumb]:rounded-full [&_[data-slot=table-container]::-webkit-scrollbar-thumb]:bg-black/20">
      <CounterSpan count={data?.length} counted={"employees"} isLoading={isLoading} />
      <Table className="text-(--main-gray-light) text-[13px]" ref={tableRef}>
        <TableHeader className="sticky top-0 bg-muted z-2">
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
          {data ? (
            data.map((emp) => (
              <EmployeeTableRow
                key={emp.id}
                id={emp.id}
                fullName={emp.fullName}
                jobTitle={emp.jobTitle}
                educationalMaterial={emp.educationalMaterial}
                grade={emp.grade}
                attempts={emp.attempts}
                timeTaken={emp.timeTaken}
                avatar={avatar}
              />
            ))
          ) : (
            <TableBodySkeleton />
          )}
        </TableBody>
      </Table>
    </Wrapper>
  );
}

export default EmployeeTable;
