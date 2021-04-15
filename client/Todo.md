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

queryParamMap vs queryParam (stoped to render the view)/ revisit category binding and tasks view reuse for 2 routes
assumption on having the api logic at server side (no pagination, no query or search) 
decide whether to have tasks under category object and add tasks to it or not
  which will case having separate service for the category

decide on the peroject sturucture to have a task dashboard component which host categories and tasks

rename tasksService to taskservcice

assumption:  categories are fixed and will not change

pie chart or bar chart

validate the right way if setting the chart data and pipeing some observables

format the pie text to include tasks term

UX vs UI
@media query css

table improvement (paging)

hard codeded text for links

active link

difference between puting the style indside component style or in style file

adding icons the buttons and links
sortable table
table hardcoded text

project structure in a way not to have chart on add task page
remove the additional line top of the table
sort table by column

undrestand component communication better in terms of change detection and lifecycle hooks 
view child, setter and getter
ngb nav feature

duplicated code for getting category name and category compoennt

study about stric type checking enable, disable

rgument of type 'number | undefined' is not assignable to parameter of type 'number'.
what to do with having ids as optional ?
   ` <td>
      {{task.categoryId! | categoryName}}
    `</td>

form model binding syntax (select input) [value]=[category.id] vs [value]="category.id" vs [value]={{category.id}} [ngValue] vs [value]
# To read
- Ngmodule scope
  - https://medium.com/@cyrilletuzi/understanding-angular-modules-ngmodule-and-their-scopes-81e4ed6f7407
  - https://medium.com/@cyrilletuzi/architecture-in-angular-projects-242606567e40
  - services vs components scopes in ngModules
  - ngmodule Lazyloading (https://angular.io/guide/lazy-loading-ngmodules)
  - https://angular.io/guide/module-types
  - https://angular.io/guide/providers
  - Routing
  - Form (assigning name attribute affect in binding the values) : no impact the missing date binding was due to date format
  - directive property bindig syntax {{}} vs '' vs []
  - read more on form model bindingdifferent inut types (select)
  - mb-2 mb-md-0 bootstrap meaing
  - check upcomping tasks functionality after adding tasks.

# Notes

- In Angular, the best practice is to load and configure the router in a separate, top-level module that is dedicated to routing and imported by the root AppModule.

  

# PBIs

- ✔creating the service to get tasks with close due date
- ✔create the chart of tasks with close due date
- ✔create the table of tasks (1 day)
- ✔Style the layout 
- ✔Style the form 
- Add form validation (1 day)
- Add testing (1 day)
- Create the notification service and view
- Automate the delpoy and run
- write the ADR 
- Add wildcard route (2 hours)
- 
  
