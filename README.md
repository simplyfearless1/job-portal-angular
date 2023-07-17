# JobPortal

A simple Job Ads portal with the ability to create, edit, view and filter+search Job positions, a proof of concept project.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

## Project Setup
The project was setup with Angular 16, using the Material Design UI library, as well as the Ngx pagination for the UI and JSON Server.

## Folder structure
Throughout the project, all the modules are in their corresponding folders in app directory, and shared elements are found in the shared folder inside the app directory, containing models, services and shared components, as well as error state matcher used to display error messages inside the forms.

All of the methods for interacting with the backend are found within the JobAdService

The JSON File used for JSON Server to store the data can be found in the root directory of the application, called db.json. The db.json file is currently populated with demo data which can be used to run and preview all the features of the application.

## The way the code is written and encapsulated

In this project, each of the pages within the application are their own module, joined by their respective components found inside the module directory. Each of the components is responsible for their own logic and views, aside from the cases where the Module is required for interaction, in which case the logic is placed inside the Module component used for Bootstraping the module.

The shared components are found under the shared directory under their own respective folder and are standalone components.

This approach was used to keep the App.module file as debloaded as possible.

Styling is keept to a minimum, making full use of the Material Design views in most cases, with smaller visual tweaks to allow for better scalaability and easier migrations to newer versions of Material Design and Angular.

The only library used outside of Material Design is [Ngx Pagination](https://michaelbromley.github.io/ngx-pagination/#/), for a simpler approach to handling filtered and fetched data of Job Cards. This simplicty allows for the pagination to be independent of the business logic and only applies to the final results of the data returned at the end of the process.

## Starting the Development server

Before starting the development server, make sure you have installed the packages needed to run the application and are using the latest LTS version of Nodejs, as well as the latest version of Angular CLI. If you are missing the CLI you may havigate to the [Angular CLI Overview and Command Reference](https://angular.io/cli) for instructions how to install it on your OS.

If already have the latest version of Angular CLI and LTS Node, then proceed and type `npm install` in a new terminal. Your packages will now be installed.

In case you run into any trouble with using the json-server package, you can install it globally by typing `npm install json-server -g`.

Open a terminal and type `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

To run the JSON Server open a new terminal and type `json-server --watch`. The service will now monitor any changes made to the JSON file and refresh automatically and can be used to make requests on 'http://localhost:3000'

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page and for more information about the JSON Server please go [Here](https://github.com/typicode/json-server)
