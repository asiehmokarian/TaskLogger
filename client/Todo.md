# Questions
- model definition best practice:
  - interface or class
  - initilization in property or constructor
  - nullable properties: int?:number or int:number | null
  - create Tasks.services under task dashboard module or at global level
  - is it ok to make all properties optional to be able add task initilization (id should be assigned by service, and also rest)

# To Do
  - rename tasksService to Task Service
  - specify methods return type
  - client side validation
  - write a better feed to mock data
  - change notification service to logger and change add notification to add logg
  - check if after catchError, the subscribe error method will run or it will always go to success
  - update errorhandler error message to HttpErrorResponse
  - review add/update task vs tasks route 
  - Optionalinterface properties specifically for id
  - and save logic , validation, empty task handling
  - prevent empty title adding
  - Syntax of directive property binding and template reference variable
     
        <a *ngFor="let category of categories" [routerLink]="['/tasks']" [queryParams]="{categoryId:category.id}" a>
        {{category.id}}| {{category.name}}
        </a>

queryParamMap vs queryParam (stoped to render the view)
 


# To read
- Ngmodule scope
  - https://medium.com/@cyrilletuzi/understanding-angular-modules-ngmodule-and-their-scopes-81e4ed6f7407
  - https://medium.com/@cyrilletuzi/architecture-in-angular-projects-242606567e40
  - services vs components scopes in ngModules
  - ngmodule Lazyloading (https://angular.io/guide/lazy-loading-ngmodules)
  - https://angular.io/guide/module-types
  - https://angular.io/guide/providers
  - Routing

# Notes
- In Angular, the best practice is to load and configure the router in a separate, top-level module that is dedicated to routing and imported by the root AppModule.

  
  
