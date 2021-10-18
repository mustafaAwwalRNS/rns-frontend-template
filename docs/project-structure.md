## Project structure

### Components

We use [atomic design](http://bradfrost.com/blog/post/atomic-web-design/) to organism components into groups. The general rule of thumb is following:

- Use `atoms` for smallest building blocks (think button or input)
- Use `molecules` for things that consist of atoms (think input with labels and error/helper text)
- Use `organisms` for things that consist of molecules and/or atoms that together create a standalone UI block (think login form)
- Use `templates` for things that consist of organisms, molecules and/or atoms that together create a complex UI.

### Pages

Pages use template and other components to layout its structure.

### Hooks

These are general purpose react hooks used by components.

### Utils

These are general purpose utils functions used anywhere.

### Types

Shared types by different components.

### Store

Contains our redux store solution.

### Config

Contains configuration variables. Like for example environment configuration.

### Tests

Contains common tests or app level tests.

### Queries

Queries contain the requests to the server. See queries read.md file for further information. See [for further reference](./queries.md)

### Library

Contains custom implementation of modules which are used in the application. For example the axios instance required by this project is placed here.

### styles

Global theme, style, functions or constants applied to style of components.

## Cheat Sheet for designing

Designing components using atomic design methodology is brain teaser and there is a chance for assigning wrong level to a component. So, this is a cheat sheet if you get stuck somewhere.

- Never bound an atomic component with some component. Let us suppose you want to have a link for sidebar menu. So, if you name it `sideBarLink` than this component will be bound to sidebar only. Even though if it can be used in other menus. So, if that link is different because it looks like box so name it boxed link. In this way you can re use it. But this is possible mostly in atomic or molecule level components, when we reach organisms the use cases become really specific.

- If a component is importing a component of the same level upgrade it to next level. By this I mean if a atom is importing another atom than that atom is no more an atom it is a molecule so shift it to molecules and same goes for all the other levels.

- There are some components which are really confusing like for example a container component `<Container ></Container>` which allows basic styling and you can host any content in it. But the problem is that the container element can host organisms molecules and atoms hence you may think it should be in template.But container can be a meaningful atom also for example if you just want to pass in some text to the container element. That is a possible use case. In that cast it will be an atom and can be used in a molecule. But if you placed it in templates the whole purpose of the atomic design reusability will be lost. So, in summary if a component can be a meaningful atom than it will be placed in the atoms folder to increase usability. If it can be a meaningful molecule than it would be placed in a molecule.

- Honestly sometimes it does not makes sense at all. So, ask your sub ordinates or go with your intuition.

## File naming conventions

File naming convention helps structure the code and also make the code navigation easy. In this project we use kebab case with type as .type for example `i-am-a-component.component.tsx`. The name is `i am a component` and the type of this file is component hence `.component.tsx`. If you are using vscode right now just type `ctrl + p` and then type `atom`. Due to this extension methodology all the atoms will be in front of you. This really helps in code navigation and hence increases the coding speed. You can test using other keywords like `test`, `types`, `styles`. These types are maintained by eslint. So if you want to make a file of unknown type and eslint is throwing you an error add it in the `eslintrc.json` filename rule.
