import FilteredSearch from "@/components/common/FilteredSearch";
import Wrapper from "@/components/common/Wrapper";
import EmployeeTable from "./components/EmployeeTable";
import ExportButton from "./components/ExportButton";
import { useState } from "react";
import { useEmployeeData } from "@/hooks/useEmployeeData";

function EmployeePage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { data, isLoading, error } = useEmployeeData();

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.currentTarget.value);
  }

  const filteredData = data?.filter((emp) =>
    emp.fullName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <Wrapper className="flex-col gap-5 mt-5 w-full">
        <Wrapper className="justify-between">
          <FilteredSearch
            searchPlaceholder="Surname, First Name"
            selectionPlaceholder="Position: React Developer"
            onSearch={handleSearch}
          />
          <ExportButton />
        </Wrapper>
        <EmployeeTable data={filteredData} isLoading={isLoading} isError={error} />
      </Wrapper>
    </>
  );
}

export default EmployeePage;
