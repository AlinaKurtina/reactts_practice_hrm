// oxlint-disable react/refs
import FilteredSearch from "@/components/common/FilteredSearch";
import Wrapper from "@/components/common/Wrapper";
import EmployeeTable from "./components/EmployeeTable";
import ExportButton from "./components/ExportButton";
import { useEffect, useMemo, useRef, useState } from "react";
import { useFilteredEmployeeData } from "@/hooks/queries/useEmployeeData";
import { useEmployeeFiltersStore } from "@/stores/useEmployeeFIltersStore";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { debounce } from "@/lib/utils";

function EmployeePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectValue, setSelectValue] = useState<string | null>(null);
  const [appliedFilter, setAppliedFilter] = useState<string | null>(null);
  const tableRef = useRef(null);

  const { data, isLoading, error } = useFilteredEmployeeData({
    filter: "jobTitle",
    filterValue: appliedFilter,
  });
  const { setEmployeeJobTitles, allJobTitles } = useEmployeeFiltersStore();

  const filteredData = data?.filter((emp) =>
    emp.fullName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const setDebouncedSearchQuery = useMemo(
    () =>
      debounce((value: string) => {
        setSearchQuery(value);
      }, 300),
    [],
  );

  useEffect(() => {
    return () => setDebouncedSearchQuery.cancel();
  }, [setDebouncedSearchQuery]);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setDebouncedSearchQuery(e.currentTarget.value);
  }

  useEffect(() => {
    if (data && !appliedFilter) {
      setEmployeeJobTitles([...new Set(data.map((emp) => emp.jobTitle))]);
    }
  }, [data, setEmployeeJobTitles, appliedFilter]);

  return (
    <>
      <Wrapper className="flex-col gap-5 mt-5 w-full">
        <Wrapper className="justify-between">
          <FilteredSearch
            placeholder="Surname, First Name"
            selectionPlaceholder="Filter by position"
            onSearch={handleSearch}
            onSelect={(value: string) => setSelectValue(value)}
            onReset={() => {
              setSelectValue(null);
              setAppliedFilter(null);
            }}
            onApply={() => setAppliedFilter(selectValue)}
            currentSelectValue={selectValue}
            selectionData={allJobTitles}
          />
          <DownloadTableExcel
            filename="employee_table"
            sheet="employees"
            currentTableRef={tableRef.current}
          >
            <ExportButton />
          </DownloadTableExcel>
        </Wrapper>
        <EmployeeTable
          data={filteredData}
          isLoading={isLoading}
          error={error}
          tableRef={tableRef}
        />
      </Wrapper>
    </>
  );
}

export default EmployeePage;
