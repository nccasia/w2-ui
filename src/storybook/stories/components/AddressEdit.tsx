import { Card, CardContent } from "@material-ui/core";
import AddressEdit from "@saleor/components/AddressEdit";
import { mapCountriesToChoices } from "@saleor/utils/maps";
import { storiesOf } from "@storybook/react";
import React from "react";

import { transformAddressToForm } from "../../../misc";
import Decorator from "../../Decorator";

storiesOf("Generics / AddressEdit", module)
  .addDecorator(Decorator)
  .add("default", () => (
    <Card
      style={{
        margin: "auto",
        width: 768,
      }}
    >
      <CardContent>
        <AddressEdit
          errors={[]}
          // @ts-ignore
          data={transformAddressToForm(customer.defaultBillingAddress)}
          // @ts-ignore
          countries={mapCountriesToChoices(countries)}
          // @ts-ignore
          countryDisplayValue={customer.defaultBillingAddress.country.country}
          onChange={undefined}
          onCountryChange={() => undefined}
        />
      </CardContent>
    </Card>
  ));
