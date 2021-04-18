# ADR (Architecture Decision Record)

## Libraries and tooling

### Angular
The application is developed using Angular v11. Since there is no dependency or any other limitation that stop us from using the last version of the framework.

### Charts
The application requires chart functionality. For this purpose the [ngx-charts](https://swimlane.github.io/ngx-charts/#/ngx-charts/bar-vertical) library is used, because:
- It is open-source
- Customizable 
- Supports auto-scaling
- And it has an active developer community.

### Responsive layout
- [Bootstrap](https://ng-bootstrap.github.io/#/home) framework v4.5 is used to have a reponsive layout. 
- [ng-bootstrap](https://ng-bootstrap.github.io/#/home) is used for its `Nav` feature. It doesn't support bootstrap v5 yet. 


## Architecture and Design

### Entities and their properties
The application includes 2 entities `Task` and `Category`. 
- Task
  - Id
  - Title (*required*)
  - Description
  - Deadline (*required, cannot be before current date*)
  - Reminder (*Should be specified after current date and before due date*)
  - CategoryId (*required*)
- Category
  - Id
  - Name

### Data access service contract
Task is the main entity based on the application requirements. The implemented operation on `Task` entity are:
- getTasks(): Gets list of all tasks
 - Due to time constraint, in current scope there is no support for pagination, sorting and search.
- getUpComingTasks(): Gets list of tasks with due date in the next 7 days.
 - For the simplicity I have assumed that getUpComingTasks always returns tasks due in next 7 days. In future this method will accept a parameter which indicates the selected option from user among available options such as in next 3 days, next week, next month ....
- getTaskByCategory(categoryId: number): Gets list of tasks by category id.
- addTask(task: Task): Adds task
- getTask(id: number): Gets a task
- updateTask(task: Task): Edits a task

Category entity in the current scope of the project is just used to specify the category of the task. So, we have assumed that there is a fixed number of existing categories and there is no CUD operation on the category collection.
As a result of this assumption, there is no task collection property for category entity. The only defined operation on `Category` entity is:
- getTaskCategories(): Get list of categories

(*Based on the current usage and scope of the application, categories should be defined as `Enum` but since in future there might be more requirement and operation for category, it has been defined as an entity.*)

#### Data feed (JSON vs In-memory Web API)
The application will eventually communicate with a real data access API. But since providing the back-end API is out of scope of the project we need to mimic communication with a remote data server and for this purpose I have chosen `In-memory Web API` over data in a JSON or XML file, to simulate CRUD operations. 

    
### Modular design
#### App Module:
The App module includes:
 - Entity models
 - The presentation logic which is shared across the application, such as `Header` and `Sidebar Menu`. 
 - Services used by other modules:
   - Tasks service: It implements all the CRUD operation for entities. Since category has only one operation it is implemented as part of this service. In feature, based on the new requirement may create a separate service for category CRUD operations.
   - Notification service: At this stage tt's used by `Tasks service` to log the operation and currently it logs into the console. In feature this service will be updated to create notification based on tasks reminder setting.   
 
*In feature with having more requirement and more entities I may move the task service into task dashboard module.*

#### Feature Modules:
According to the application scope and the entities and their operation, I have decided to create a feature module `Task Dashboard` which will handle all the presentation logic for `Task` and `Category` entities.
In future based on the requirement for `Category` entity or any other new feature, I may create a separate feature module for each.

Task dashboard feature module includes following presentation components:
 - Task List: The logic for showing the list of tasks.
 - Task detail: The logic for creating or editing a task.
 - Categories: The logic for showing the list of categories.
 
#### Shared Modules:
There is shared module `common-components` module, which holds all the components which can be used by different modules.
Currently it only includes `Chart` component. 

### Routing strategy (HTML5 style vs Hash style)
The application is using the default HTML5 style which is preferred over hash (#) style as it produces URLs that are easier for users to understand and it preserves the option to do server-side rendering.

Concerns:
- Using this strategy, later for deployment, we need to configure the server to redirect requests for missing files to `index.html`. Otherwise, refreshing a URL with deep link or entering it in the browser will return a `404 - Not Found` error.
- After deployment, links, bookmark, refreshing and entering the URLs with deep link will return a `404 - Not Found` error unless we configure the server to redirects requests for missing file to `index.html`.

### Forms (reactive forms vs template-driven forms)
The application uses template-driven form for creating a new task because: 
- The form requirements are basic, so template-driven form is good enough.
- There is only one form in application and no need to reuse form model across components.
