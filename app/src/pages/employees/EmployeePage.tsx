import FilteredSearch from "@/components/common/FilteredSearch";
import Wrapper from "@/components/common/Wrapper";
import EmployeeTable from "./components/EmployeeTable";
import ExportButton from "./components/ExportButton";

function EmployeePage() {
  return (
    <>
      <Wrapper className="flex-col gap-5 mt-5 w-full">
        <Wrapper className="justify-between">
          <FilteredSearch
            searchPlaceholder="Surname, First Name"
            selectionPlaceholder="Position: React Developer"
          />
          <ExportButton />
        </Wrapper>
        <EmployeeTable />
      </Wrapper>
    </>
  );
}

export default EmployeePage;
