# Forms

We are using [react-hook-form](https://react-hook-form.com/) for creating forms and yup for form validations. See [login form](../@next/components/organisms/forms/login-form/login-form.test.tsx) for complete example. You can visit [react-hook-form](https://react-hook-form.com/) website for further performance comparisons. You might not see these issues with a single input but once your form gets complex one single render will cost you more than 300ms. Which is one of the worst user experience you can have in your application.

## Benefits

- `react-hook-form` is the library which ensures that there are minimum number of renders while updating form fields with a huge margin. Where formik and redux forms would take 30 renders this would take only a little bit more than three.
- `Yup` for validations. Benefits:
  - HTML validations do not fit every use case.
  - Writing custom validation clutters the code and why would you re invent the wheel when you have an amazing library already.
  - It makes the code extremely readable.
