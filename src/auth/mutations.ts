import { gql } from "@apollo/client";

export const requestPasswordReset = gql`
  query MyQuery {
    hello(name: "world")
  }
`;
