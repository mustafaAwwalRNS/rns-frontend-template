import { string, object } from "yup";

/**
 * Validates that the application has not started without environment variables.
 */
export const environment = object()
  .shape({
    apiKey: string().required(),
    allowApiMocking: string(),
  })
  .validateSync({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    allowApiMocking: process.env.NEXT_PUBLIC_ALLOW_API_MOCKING,
  });
