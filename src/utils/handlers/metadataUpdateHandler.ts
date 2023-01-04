import { MetadataFormData } from "@saleor/components/Metadata/types";
import { SubmitPromise } from "@saleor/hooks/useForm";

import { areMetadataArraysEqual } from "./metadataUpdateHelpers";

interface ObjectWithMetadata {
  id: string;
  metadata: any[];
  privateMetadata: any[];
}

function createMetadataUpdateHandler<TData extends MetadataFormData, TError>(
  initial: ObjectWithMetadata,
  update: (data: TData) => SubmitPromise<TError[]>,
) {
  return async (data: TData): Promise<Array<any | TError>> => {
    const errors = await update(data);

    const hasMetadataChanged = !areMetadataArraysEqual(
      initial.metadata,
      data.metadata,
    );
    const hasPrivateMetadataChanged = !areMetadataArraysEqual(
      initial.privateMetadata,
      data.privateMetadata,
    );

    if (errors.length > 0) {
      return errors;
    }

    if (errors.length === 0) {
      if (data.metadata && hasMetadataChanged) {
        const updateMetaErrors = [...[], ...[]];

        if (updateMetaErrors.length > 0) {
          return updateMetaErrors;
        }
      }

      if (data.privateMetadata && hasPrivateMetadataChanged) {
        const updatePrivateMetaErrors = [...[], ...[]];

        if (updatePrivateMetaErrors.length > 0) {
          return updatePrivateMetaErrors;
        }
      }
    }

    return [];
  };
}

export default createMetadataUpdateHandler;
