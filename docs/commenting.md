# Commenting

Anything which is exported needs to be commented in a proper format so it is readable while viewing code using intellisense.

## Exported code.

```javascript
/**
 * makeRandomArray
 *
 * Features:
 * - Creates a random array.
 *
 * NOTE: You can additional headings like this note. You can also add additional headings as you please. For example UseCase or description.
 *
 * */
export const makeRandomArray = () => {
  // creating random array.
};
```

## Non exported

The code which is not exported can have single line or multiline comments on explaining what they do. Lke in the above example there is a comment `//create random array` which is perfectly fine.

## Props commenting

Props should mostly be commented. They really help while writing code as the intellisense gives you information about what that prop is supposed to do. This improves coding speed.
