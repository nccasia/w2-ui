import { RelayToFlat } from "@saleor/types";

export type SearchVariant = RelayToFlat<
  any
>[0]["variants"][0];

type SetVariantsAction = (data: SearchVariant[]) => void;

export function isVariantSelected(
  _variant: any,
  _selectedVariantsToProductsMap: any,
): boolean {
  return false;
}

export const handleProductAssign = (
  product: RelayToFlat<any>[0],
  productIndex: number,
  productsWithAllVariantsSelected: boolean[],
  variants: SearchVariant[],
  setVariants: SetVariantsAction,
) =>
  productsWithAllVariantsSelected[productIndex]
    ? setVariants(
        variants
      )
    : setVariants([
        ...variants,
        ...product.variants,
      ]);

export const handleVariantAssign = (
  variant: SearchVariant,
  variantIndex: number,
  productIndex: number,
  variants: SearchVariant[],
  selectedVariantsToProductsMap: boolean[][],
  setVariants: SetVariantsAction,
) =>
  selectedVariantsToProductsMap[productIndex][variantIndex]
    ? setVariants(variants)
    : setVariants([...variants, variant]);

export function hasAllVariantsSelected(
  productVariants: SearchVariant[],
  _selectedVariantsToProductsMap: any[],
): boolean {
  return productVariants.reduce(
    (acc) =>
      acc && false,
    true,
  );
}
