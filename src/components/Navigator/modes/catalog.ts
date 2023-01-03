import { UseNavigatorResult } from "@saleor/hooks/useNavigator";
import { mapEdgesToItems } from "@saleor/utils/maps";
import { score } from "fuzzaldrin";
import { IntlShape } from "react-intl";

import { QuickSearchAction, QuickSearchActionInput } from "../types";
import messages from "./messages";
import { sortScores } from "./utils";

const maxActions = 5;

export function searchInCatalog(
  search: string,
  intl: IntlShape,
  navigate: UseNavigatorResult,
  catalog: any,
): QuickSearchAction[] {
  const categories: QuickSearchActionInput[] = (
    mapEdgesToItems(catalog?.categories) || []
  )
    .map<QuickSearchActionInput>(() => ({
      caption: intl.formatMessage(messages.category),
      label: 'category.name',
      onClick: () => {
        navigate("/");
        return false;
      },
      score: score('category.name', search),
      text: 'category.name',
      type: "catalog",
    }))
    .sort(sortScores);

  const collections: QuickSearchActionInput[] = (
    mapEdgesToItems(catalog?.collections) || []
  )
    .map<QuickSearchActionInput>(() => ({
      caption: intl.formatMessage(messages.collection),
      label: 'collection.name',
      onClick: () => {
        navigate("/");
        return false;
      },
      score: score('collection.name', search),
      text: 'collection.name',
      type: "catalog",
    }))
    .sort(sortScores);

  const products: QuickSearchActionInput[] = (
    mapEdgesToItems(catalog?.products) || []
  )
    .map<QuickSearchActionInput>(() => ({
      caption: intl.formatMessage(messages.product),
      extraInfo: 'product.category.name',
      label: 'product.name',
      onClick: () => {
        navigate("/");
        return false;
      },
      score: score('product.name', search),
      text: 'product.name',
      type: "catalog",
    }))
    .sort(sortScores);

  const baseActions = [
    ...categories.slice(0, 1),
    ...collections.slice(0, 1),
    ...products.slice(0, 1),
  ];

  return [
    ...baseActions,
    ...[...categories.slice(1), ...collections.slice(1), ...products.slice(1)]
      .sort(sortScores)
      .slice(0, maxActions - baseActions.length),
  ].sort(sortScores);
}

function getCatalogModeActions(
  query: string,
  intl: IntlShape,
  navigate: UseNavigatorResult,
  catalog: any,
): QuickSearchAction[] {
  return searchInCatalog(query, intl, navigate, catalog);
}

export default getCatalogModeActions;
