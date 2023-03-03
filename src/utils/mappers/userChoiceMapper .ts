import { Choice } from "@saleor/components/SingleSelectField";

export function userChoiceMapper(data: any): Array<Choice<string, string>> {
  if (!data) {
    return [];
  }
  const choiceType = data?.map(item => {
    const result = {
      value: item?.id ?? "",
      label: `${item.firstname} ${item.lastname}`,
      email: item?.email ?? "",
      fullname: item?.fullName ?? "",
    };
    return result;
  });
  return choiceType;
}
