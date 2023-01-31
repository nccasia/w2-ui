import { score } from "fuzzaldrin";
import sortBy from "lodash/sortBy";
import { useEffect, useMemo, useState } from "react";
import Swal, { SweetAlertIcon } from "sweetalert2";

const pageSize = 10;

export function useMockAutocomplete(
  choices: Array<Record<"label" | "value", string>>,
) {
  const [query, setQuery] = useState("");
  const [slice, setSlice] = useState(pageSize);
  const results = useMemo(
    () =>
      sortBy(
        choices.map(choice => ({
          ...choice,
          score: -score(choice.label, query),
        })),
        "score",
      ).slice(0, slice),
    [query, choices, slice],
  );

  useEffect(() => {
    setSlice(pageSize);
  }, [query]);

  const search = (query: string) => setTimeout(() => setQuery(query), 300);

  const more = () => setSlice(s => s + pageSize);

  return {
    search,
    results,
    more,
  };
}

/*
 icon: "error" | "info" | "success" | "warning"
*/
export function alertConfirmSubTask(
  icon: SweetAlertIcon,
  title: string | HTMLElement | JQuery,
) {
  return Swal.fire({
    icon,
    title,
    text: "Task has been submit!",
    confirmButtonText: "Next task",
  }).then(result => {
    if (result.isConfirmed) {
      location.reload();
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
}
