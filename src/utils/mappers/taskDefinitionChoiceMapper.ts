import { Choice } from "@saleor/components/SingleSelectField";
import { TaskFragmentFragment } from "@saleor/graphql";

export function taskDefinitionChoiceMapper(
  data: Array<Partial<TaskFragmentFragment>>,
): Array<Choice<string, string>> {
  if (!data) {
    return [];
  }
  const choiceType = data?.map(item => {
    const result = {
      // @ts-ignore
      value: item?.Form?.id ?? '',
      label: item.title,
    };
    return result;
  });
  return choiceType;
}
