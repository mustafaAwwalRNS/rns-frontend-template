import { string, object } from "yup";

export const environment = object()
  .shape({
    apiKey: string().required(),
    allowApiMocking: string(),
  })
  .validateSync({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    allowApiMocking: process.env.NEXT_PUBLIC_ALLOW_API_MOCKING,
  });
