import { Choice } from "@saleor/components/SingleSelectField";

export function userChoiceMapper(data: any): Array<Choice<string, string>> {
  if (!data) {
    return [];
  }
  const choiceType = data?.map(item => {
    const result = {
      value: item?.id ?? "",
      label: `${item.firstname} ${item.lastname}`,
    };
    return result;
  });
  return choiceType;
}
