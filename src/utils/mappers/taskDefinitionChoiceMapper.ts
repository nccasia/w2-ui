import { Choice } from "@saleor/components/SingleSelectField";
import { TaskDefinitionFragmentFragment } from "@saleor/graphql";

export function taskDefinitionChoiceMapper(
  data: Array<Partial<TaskDefinitionFragmentFragment>>,
): Array<Choice<string, string>> {
  if (!data) {
    return [];
  }
  const choiceType = data.map(item => {
    const result = {
      value: item.id.toString(),
      label: item.title,
    };
    return result;
  });
  return choiceType;
}
