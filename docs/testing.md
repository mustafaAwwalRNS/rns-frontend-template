# Testing

Testing is one of the major parts of software development. [See this for knowing the importance of it](https://testingjavascript.com/)

## Guidelines

- Do not test the implementation of a component. Testing implementation makes testing really really hard and hard to maintain. Just for an example
  if you test implementation details than even if you refactor the code the tests would start to fail even though they should not. So test how the
  user will use that component. This makes the test more robust and to the point.
- So, what about hooks. User does not interact with the hook so how do we test them. So, we test them within our components. If the component using the hook
  is tested that means that the hook is working properly. Also jest is very clever if a component is using a hook and you have tested the component
  it will also add the hook file in code coverage. This concept is applied to each and every part of the code. For example we don't need to test our store. If
  it is working as expected with the components then that means it is working just fine.
- While testing a component create a setup function which gets all the required elements so that it can be used for each individual test. This approach keeps
  the code DRY(Don't repeat yourself). For Example:

  ```javascript
  const setup = () => {
    render(<LoginForm />);
    const emailField = screen.getByLabelText(/email/i);
    const passwordField = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });
    return { emailField, passwordField, submitButton };
  };
  ```

  We can use this setup method in all of the tests and it will give us all the required fields. We can interact with them and test all the functionalities.

- Test exactly how user will use the component. For that there is a [great library](https://testing-library.com/docs/ecosystem-user-event/). It helps us mock the user interaction as closely as possible. Continuing with the previous example.

  ```javascript
  test("the email field should accept input", () => {
    // Also notice the benefit of the setup function we created before.
    const { emailField } = setup();
    // See how the userEvent library is mocking the user typing in the field
    userEvent.type(emailField, "testing");
    expect(emailField).toHaveValue("testing");
  });
  ```

  It even makes the code look more readable. It is more closer to the way user would interact with it.
  See this [test](../@next/components/organisms/forms/login-form/login-form.test.tsx)
  for further reference.

- Use dom assertion where they can be used. For example:

  ```javascript
  // Bad approach is expect(emailField).not.toBeNull();
  // Recommended approach:
  expect(emailField).toBeInTheDocument();
  // bad approach expect(emailField.value).toBe(rns@solution.com)
  // Recommended approach:
  expect(emailField).toHaveValue("rns@solution.com");
  ```

- Query elements the way user will find those elements. For Example:

  ```javascript
  test("a button should render", () => {
    const { container } = render(<CustomButton>button</CustomButton>);
    /**
     * Bad approach
     * const button = container.firstChild();
     * There is another problem with this code. Even if render function does not render a
     * actual button the container.firstChild() will not throw an error.
     * */
    // Recommended
    screen.getByRole("button", { name: /button/i });
  });
  ```

  Instead of checking container first element we check does a element with role button actually exists or not. If not than there is something wrong with our component. Roles are very important for accessibility also. This approach will make your code much more accessible. Always try to assign correct roles to elements. For input get them by `screen. getByLabelText(/email/i)`

  HINT: always use regex while querying text to prevent case sensitivity.

- This [test-utils file](../@next/utils/test.utils.tsx) contains our custom render function. We use this so that we don't have to call the providers again and again for each test. Basically all the providers rest here.

- In this project we mock apis using [msw](https://mswjs.io/). The server is already setup see [this]('../@next/mocks/server.mock.ts'). All the mock handlers are stored in @next/mock/handlers folder. Benefits:

  - Cleaner tests no need to mock modules.
  - This approach is nearest to the actual api.
  - Very helpful for e2e testing. Because cypress can take benefit of these handlers and mock the actual server using service worker in browser environment.

  You can see [test](../@next/components/organisms/forms/login-form/login-form.test.tsx) for further reference on how to use server.

- When to do snapshot testing?. I know snapshot testing is great and saves time. But it does not tell us the whole story. It does not cover branches and in no means it says that our code is bug free. So, for building blocks you can use snapshot testing but the main focus would be on branch testing and the statements are being covered or not. So, once our building blocks like atoms, molecules, and organisms are all tested then we can just snapshot test the page component. No need to test the login form in login page if the login form is already tested. So, just test the snapshot.

- There are some implementation tests for example we are testing our useAxios hook but that is just for learning purpose. You don't need to test your hooks.

- Some where in the tests you may see `shouldBehaveLikeLink()`. So, these are the common tests in the @next/tests/behaviors folder. Let us suppose you have a component which should basically act as a link but you have some additional utilities with it so you don't need to write the same tests for it again. Make common tests in the behaviors and use them for testing common functionalities.

# Summary

If I have to summarize all this I would say write tests like a user. Think that you don't know the inside logic of the component. Think like a user. Be like a user.
