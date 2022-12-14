import PhoneField from "@saleor/components/PhoneField";
import { storiesOf } from "@storybook/react";
import React from "react";

import CardDecorator from "../../CardDecorator";
import Decorator from "../../Decorator";

storiesOf("Generics / PhoneField", module)
  .addDecorator(CardDecorator)
  .addDecorator(Decorator)
  .add("default", () => (
    <PhoneField
      prefixes={null}
      name="phone"
      prefix="41"
      number="123 987 456"
      onChange={undefined}
    />
  ));
