import { TableCell, TableRow } from "@/components/ui/table";
import type { EmployeeData } from "@/types";
import AvatarNameCell from "../TableCell/AvatarNameCell";
import TimeSpentCell from "../TableCell/TimeSpentCell";
import { useState } from "react";
import ChatWithButton from "./ChatWithButton";

interface RowProps extends EmployeeData {
  avatar: string;
}

function EmployeeTableRow({
  fullName,
  jobTitle,
  educationalMaterial,
  timeTaken,
  attempts,
  grade,
  avatar,
}: RowProps) {
  const [rowHovered, setRowHovered] = useState(false);

  return (
    <>
      <TableRow
        className="animate-row-slide cursor-pointer relative"
        onMouseOver={() => setRowHovered(true)}
        onMouseOut={() => setRowHovered(false)}
      >
        <TableCell className="text-foreground">
          <AvatarNameCell fullName={fullName} src={avatar} />
        </TableCell>
        <TableCell>{jobTitle}</TableCell>
        <TableCell>{educationalMaterial}</TableCell>
        <TableCell>
          <TimeSpentCell time={timeTaken} />
        </TableCell>
        <TableCell>{attempts != 0 ? attempts : ""}</TableCell>
        <TableCell>{grade != 0 ? grade : ""}</TableCell>
        <TableCell className="p-0">{rowHovered && <ChatWithButton empName={fullName} />}</TableCell>
      </TableRow>
    </>
  );
}

export default EmployeeTableRow;
