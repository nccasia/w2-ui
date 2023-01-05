import { transformFormToAddressInput } from "@saleor/misc";
import { add, remove } from "@saleor/utils/lists";
import { useState } from "react";

interface UseAddressValidation<TInput, TOutput> {
  errors: any[];
  submit: (data: TInput & any) => TOutput | Promise<any[]>;
}

function useAddressValidation<TInput, TOutput>(
  onSubmit: (address: TInput & any) => TOutput,
  addressType?: any,
): UseAddressValidation<TInput, TOutput> {
  const [validationErrors, setValidationErrors] = useState<any[]>([]);

  const countryRequiredError: any = {
    __typename: "AccountError",
    code: "REQUIRED",
    field: "country",
    addressType,
    message: "Country required",
  };

  return {
    errors: validationErrors,
    submit: (data: TInput & any) => {
      try {
        setValidationErrors(
          remove(
            countryRequiredError,
            validationErrors,
            (a, b) => a.field === b.field,
          ),
        );
        return onSubmit(transformFormToAddressInput(data));
      } catch {
        const errors = add(countryRequiredError, validationErrors);
        setValidationErrors(errors);
        // since every onSubmit must return Promise<error>
        return Promise.resolve(errors);
      }
    },
  };
}

export default useAddressValidation;
