# AngularCourse

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

====================================================================

# What is Angular?

- Angular is a front end JS framework = set of packages and rules. Angular makes the process of building interactive UI easier than just using JS alone.
- It is also a collection of tools such as a CLI, debugging, IDE plugins, etc

# Why use Angular?

- For trivial UIs you may not need Angular.
- With more complex applications, Angular tools and framework simplifies management and scalability.
- With JS user is responsible for imperative coding to update elements.
- Declarative code with Angular manages components and data refreshes.
- Angular allows for breaking down larger UIs into small manageable components.
- TypeScript has OOP and is a superset of JS. TS has object type which allows to get type errors.
- TS does not run straight in the browser. Angular converts ; compiles app into JS so it can run.
- Angular needs Node to install angular via npm. Node lets you run JS outside the browser

# Resources

- angular.dev/tools/cli
- to install the cliÇ npm install -g @angular/cli
- to create a project browse to a folder for the app then: ng new <app-name-lowercase>
- npm start / ng serve: In an Angular project, npm start often runs ng serve under the hood, but this depends on the configuration in the package.json file.

# Course Content

- https://github.com/mschwarzmueller/angular-complete-guide-course-resources/blob/main/attachments/02-essentials/01-starting-project.zip
- https://github.com/mschwarzmueller/angular-complete-guide-course-resources/tree/main/attachments
- Typescript handbook: https://www.typescriptlang.org/docs/handbook/intro.html

# Files in starter

## root of project

- tsconfig\* : do not change unless you know what you are doing. They control how TS will be compiled to JS and other settings
- package.json: lists the dependencids of the application
- angular.json: contains config settings for angular cli and angular tools, usually we do not change the content of it.
- .editorconig: configurations for the editor

## src folder

- styles.css: globas styles for the whole applications
- index.html: main ui file that will be loaded for visitors
- main.ts: first code file to be executed in the browser for the visitors
