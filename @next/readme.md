## Project structure

### Components

We use [atomic design](http://bradfrost.com/blog/post/atomic-web-design/) to organise components into groups. The general rule of thumb is following:

- Use `atoms` for smallest building blocks (think button or input)
- Use `molecules` for things that consist of atoms (think input with labels and error/helper text)
- Use `organisms` for things that consist of molecules and/or atoms that together create a standalone UI block (think login form)
- Use `templates` for things that consist of organisms, molecules and/or atoms that together create a complex UI. 

### Pages

These are the components which use components to render a whole page view.

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

### Queries
Queries contain the requests to the server. See queries read.md file for further information.

### Library
Contains custom implementation of modules which are used in the application. For example the axios instance required by this project is placed here.

### styles

Global theme, style, functions or constants applied to style of components.

## Cheat Sheet for designing

Designing components using atomic design methodology is brain teaser and there is a chance for assigning wrong level to a component. So, this is a cheat
sheet if you get stuck somewhere.
- If a component is importing a component of the same level upgrade it to next level. By this I mean if a atom is importing another atom than that atom is no
more an atom it is a molecule so shift it to molecules and same goes for all the other levels.
- There are some components which are really confusing like for example a container component `<Container ></Container>` which allows basic styling and you can 
host any content in it. But the problem is that the container element can host organisms molecules and atoms hence you may think it should be in template.
But container can be a meaningful atom also for example if you just want to pass in some text to the container element. That is a possible use case. In that
cast it will be an atom and can be used in a molecule. But if you placed it in templates the whole purpose of the atomic design reusibility will be lost. So,
in summary if a component can be a meaningful atom than it will be placed in the atoms folder to increase usibility. If it can be a meaningul molecule than
it would be placed in a molecule.


