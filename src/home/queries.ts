import { gql } from "@apollo/client";

export const home = gql`
  query Home {
    hello(name: "world")
  }
`;
