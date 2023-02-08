import { UseNavigatorResult } from "@saleor/hooks/useNavigator";
import { BulkAction, Dialog, SingleAction } from "@saleor/types";

// type Url<T extends Dialog<any>> = (params: T) => string;
type CreateCloseModal<
  TAction extends string,
  TParams extends Dialog<TAction>
> = [(action: TAction, newParams?: TParams) => void, () => void];

function createDialogActionHandlers<
  TAction extends string,
  TParams extends Dialog<TAction> & BulkAction & SingleAction
>(
  navigate: UseNavigatorResult,
  url: any,
  params: TParams,
  id: string,
): CreateCloseModal<TAction, TParams> {
  const close = () =>
    navigate(
      url({
        param: {
          ...params,
          action: undefined,
          id: undefined,
          ids: undefined,
        },
        paramId: {
          id,
        },
      }),
      { replace: true },
    );
  const open = (action: TAction, newParams?: TParams) =>
    navigate(
      url({
        param: {
          ...params,
          ...newParams,
          action,
        },
        paramId: {
          id,
        },
      }),
    );

  return [open, close];
}

export default createDialogActionHandlers;
