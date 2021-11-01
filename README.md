# SimpleCRM

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

src
    -entire source code of our application
    -app
    -app module
        app.module.ts
        -app.component.html  (View)
        -app.component.css   (stylesheet)
        -app.component.spec.ts (Unit test script)
        -app.component.tss > class file
    -assests
        -image
        -mock data
        -apis
    -environment
        -local
        -dev
        -qa
        -uat
        -prod (environment.prod.ts contains setting of production environment)
    
    -index.html
        angular is single page Application
        means there is no html file except this index.html
        all the things will be dynamically generated and injected to it locally
    
    -main.ts
        -This tells our application which is the module we start our application with.
        -uses dynamic application
        -this is not always necessary that we should start from App Module we can change it

    polyfills.ts
        supporting older browser 
    style.css
        styles for elelments
    test.ts
        test script for main
        testing main.ts file

    angular.js
        backbone of our application
        all scripts settings are preent here only4
    
    -karma.conf.js
        -all testing file ends with spec.ts
        -karma is test script runner using which we will run all our test script

    -package.json and package-lock.json

    -tsconfig
        -build output directory
    -tsconfig.spec.json
    -tslint.json
        how error ,warning should be 
        they enforce coding standard

    Angular CLI - Command Line Interface

        -schematic
        ng server
        ng build
        ng test
        ng lint
        -commands
         ng generate component <component_name>
         ng generate module <module_name>

         src
            contacts (module)
                add-contact (component inside module)
                edit contact
                delete-contact
                view-contact
            users
                add-user
                delete-user
            orders

            shared
                auth
                tokens

            services
                contact-service.ts
                user-service.ts 


                 
             