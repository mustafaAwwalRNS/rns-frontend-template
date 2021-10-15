# Queries

These are the requests to the outside server.

## Guidelines

- Create a class similar to the name of the file you have created with queries as suffix. For example:

```javascript
// File name is auth.queries.tsx
// So class name would be
export class AuthQueries {
  static login = () => {
    // add login axios request here.
  };
  /**
   * This approach helps us to have a nameSpace for our queries. We can access it by AuthQueries.login().
   * */
}
```

NOTE: No matter what you write in the logic the function should always return `Promise<AxiosResponse>` type so that our useAxios hook can access it.

- The next step is that these class based requests can be used by code which is not react component but for our react component we have to make a hook which will be used by that component. This helps for the concept of separation of concerns the component should not care which API you are using or what logic you are writing it should be concerned only for the purpose it was made for. So, to make that hook you will create a custom hook which will use our [useAxios hook](../@next/hooks/use-axios.hooks.ts) in the background. Add all additional logic in this hook like if you want to access the store or perform some other action. You can see that happening in [this query](https://github.com/mustafaAwwalRNS/rns-frontend-template/blob/initial-structure/%40next/queries/auth.queries.ts).
