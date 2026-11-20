import FilteredSearch from "@/components/common/FilteredSearch";
import Wrapper from "@/components/common/Wrapper";
import EmployeeTable from "./components/EmployeeTable";
import ExportButton from "./components/ExportButton";
import { useEffect, useState } from "react";
import { useFilteredEmployeeData } from "@/hooks/queryHooks/useEmployeeData";
import { useEmployeeFiltersStore } from "@/stores/useEmployeeFIltersStore";

function EmployeePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectValue, setSelectValue] = useState<string | null>(null);
  const [appliedFilter, setAppliedFilter] = useState<string | null>(null);

  const { data, isLoading, error } = useFilteredEmployeeData({
    filter: "jobTitle",
    filterValue: appliedFilter,
  });
  const { setEmployeeJobTitles, allJobTitles } = useEmployeeFiltersStore();

  const filteredData = data?.filter((emp) =>
    emp.fullName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  useEffect(() => {
    if (data) {
      setEmployeeJobTitles([...new Set(data.map((emp) => emp.jobTitle))]);
    }
  }, [data, setEmployeeJobTitles]);

  return (
    <>
      <Wrapper className="flex-col gap-5 mt-5 w-full">
        <Wrapper className="justify-between">
          <FilteredSearch
            placeholder="Surname, First Name"
            selectionPlaceholder="Filter by position"
            onSearch={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.currentTarget.value)
            }
            onSelect={(value: string) => setSelectValue(value)}
            onReset={() => {
              setSelectValue(null);
              setAppliedFilter(null);
            }}
            onApply={() => setAppliedFilter(selectValue)}
            currentSelectValue={selectValue}
            selectionData={allJobTitles}
          />
          <ExportButton />
        </Wrapper>
        <EmployeeTable data={filteredData} isLoading={isLoading} error={error} />
      </Wrapper>
    </>
  );
}

export default EmployeePage;
