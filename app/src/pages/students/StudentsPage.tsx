import FilteredSearch from "@/components/common/FilteredSearch";
import Wrapper from "@/components/common/Wrapper";

function StudentsPage() {
  return (
    <>
      <Wrapper className="flex-col gap-5 mt-5">
        <FilteredSearch
          searchPlaceholder="Surname, First Name"
          selectionPlaceholder="Position: React Developer"
        />
      </Wrapper>
    </>
  );
}

export default StudentsPage;
