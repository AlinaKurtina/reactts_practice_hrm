import FilteredSearch from "@/components/common/FilteredSearch";
import Wrapper from "@/components/common/Wrapper";
import EmployeeTable from "./components/EmployeeTable";

function EmployeePage() {
  return (
    <>
      <Wrapper className="flex-col gap-5 mt-5 w-full">
        <FilteredSearch
          searchPlaceholder="Surname, First Name"
          selectionPlaceholder="Position: React Developer"
        />
        <EmployeeTable />
      </Wrapper>
    </>
  );
}

export default EmployeePage;
