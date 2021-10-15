# Styling

We are using styled components for this project. The benefits are:

- The classes are component specific. So no conflicts of class name.
- SCSS based syntax which help for complex task.
- Also allows javascript to be written in css which helps even more.
- Allows theming to be available through js. Another plus point.
- It also makes the code syntax really really awesome if used properly. For example the user avatar component:

  ```javascript
  export const UserAvatar = ({
    username,
    imageSrc: src,
  }: UserAvatarProps): JSX.Element => {
    return (
      <S.UserAvatar>
        <S.Username>{username}</S.Username>
        <CircleImage {...{ src }} alt="user profile" />
      </S.UserAvatar>
    );
  };
  ```

  Just see how readable and beautiful this code looks with component based styling approach of styled components.

#### Tip

Use styled-components extension of vscode for typing of css properties.
