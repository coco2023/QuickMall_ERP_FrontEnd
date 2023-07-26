# Quick_Mall ERP Frontend

This is a Enterprise resource planning(ERP) management System for the QuickMall E-commerce platform. It manages the Product, Employee, Customer, Order service for Platform and Suppliers side to improve their management and communication efficiency.

deploy on AWS Amplify: https://develop.d1jgapjvhkmffq.amplifyapp.com/dashboards/project


# Deplpoy

```

> ## Amplify settings

> npm install --save aws-amplify aws-amplify-angular

> npm install -g @aws-amplify/cli

> amplify configure

> amplify init

> amplify add auth

> amplify push

> 1. goto AWS -- Amplify -- Project and connect the Hosting with gitHub Repository.
> 2. add the 'amplify.yml' into the project root path

> ## Github settings
> git add .
> git commit -m " commit changes"
> git push

> visit the amplify website

```

## Refer
[1] https://gerard-sans.medium.com/build-your-first-full-stack-serverless-app-with-angular-and-aws-amplify-d2e4716de9bd

[2] https://docs.aws.amazon.com/amplify/latest/userguide/team-workflows-with-amplify-cli-backend-environments.html

[3] https://docs.amplify.aws/start/getting-started/hosting/q/integration/angular/


# Running on Local Machine

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.  To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
