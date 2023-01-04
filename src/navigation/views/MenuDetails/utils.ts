import { MenuDetailsSubmitData } from "../../components/MenuDetailsPage";
import { MenuItemDialogFormData } from "../../components/MenuItemDialog";
import { unknownTypeError } from "../../components/MenuItems";

export function getMenuItemInputData(data: MenuItemDialogFormData): any {
  const variables: any = {
    name: data.name,
  };
  switch (data.type) {
    case "category":
      variables.category = data.id;
      break;

    case "collection":
      variables.collection = data.id;
      break;

    case "page":
      variables.page = data.id;
      break;

    case "link":
      variables.url = data.id;
      break;

    default:
      throw unknownTypeError;
  }

  return variables;
}

export function getMenuItemCreateInputData(
  menu: string,
  data: MenuItemDialogFormData,
): any {
  const variables: any = {
    menu,
    name: data.name,
  };
  switch (data.type) {
    case "category":
      variables.category = data.id;
      break;

    case "collection":
      variables.collection = data.id;
      break;

    case "page":
      variables.page = data.id;
      break;

    case "link":
      variables.url = data.id;
      break;

    default:
      throw unknownTypeError;
  }

  return variables;
}

export function getInitialDisplayValue(item: any): string {
  if (!item) {
    return "...";
  }
  if (item.category) {
    return item.category.name;
  } else if (item.collection) {
    return item.collection.name;
  } else if (item.page) {
    return item.page.title;
  } else if (item.url) {
    return item.url;
  } else {
    return "";
  }
}

export function getMoves(data: MenuDetailsSubmitData): any[] {
  return data.operations
    .filter(operation => operation.type === "move")
    .map(move => ({
      itemId: move.id,
      parentId: move.parentId,
      sortOrder: move.sortOrder,
    }));
}

export function getRemoveIds(data: MenuDetailsSubmitData): string[] {
  return data.operations
    .filter(operation => operation.type === "remove")
    .map(operation => operation.id);
}
