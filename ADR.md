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
- **Task**
  - Id
  - Title (*required*)
  - Description
  - Deadline (*required, cannot be before current date*)
  - Reminder (*Should be specified after current date and before due date*)
  - CategoryId (*required*)
- **Category**
  - Id
  - Name

### Data access service contract (Tasks Service)
#### Task operation
Task is the main entity based on the application requirements. The implemented operation on `Task` entity are:
- **getTasks():** Gets list of all tasks
  - Due to time constraint, in current scope there is no support for pagination, sorting and search.
- **getUpComingTasks():** Gets list of tasks with due date in the next 7 days.
    - For the simplicity I have assumed that getUpComingTasks always returns tasks due in next 7 days. In future this method will accept a parameter which indicates the selected option from user among available options such as in next 3 days, next week, next month ....
- **getTaskByCategory(categoryId: number):** Gets list of tasks by category id.
- **addTask(task: Task):** Adds task
- **getTask(id: number):** Gets a task
- **updateTask(task: Task):** Edits a task

(*Delete operation was not required for tasks, so it's not implemented*)


#### Category operation
Category entity in the current scope of the project is just used to specify the category of the task. So, I have assumed that there is a fixed number of existing categories and there is no CUD operation on the category collection.
As a result of this assumption, there is no task collection property for category entity. The only defined operation on `Category` entity is:
- **getTaskCategories():** Get list of categories

If any error happens during the operation, the error will be handled and logged into the console.


#### Data feed (JSON vs In-memory Web API)
The application will eventually communicate with a real data access API. Since providing the back-end API is out of scope of the project, we need to mimic communication with a remote data server. For this purpose, I have chosen `In-memory Web API` over data in a JSON or XML file, to simulate CRUD operations. 

    
### Modular design
#### App Module:
The App module includes:
- **Entities definition:**
  - Task
  - Category
- **Layout components:** These components don't need to be reusable as they will be used only once in the app to define the shared layout across modules. 
  - Header
  - Sidebar Menu
  - Not found page
- **Services:**
   - Tasks service: 
    - It implements all the required CRUD operation for entities.
    - In feature by having more requirements and more complexity, it will be implemented as a service module. So, by adding an abstraction layer, the presentation layer will be decoupled from core layer.
    - Since category has only one operation, it is implemented as part of this service. In feature, based on the new requirement I may create a separate service for category CRUD operations.
    
   - Notification service: At this stage, it's used by `Tasks service` to create log messages for the operation. But in next development iteration, this service will be updated to implement notifications operation based on the tasks reminder setting. Due to time constraint this functionality is not implemented.
   

#### Task dashboard module (Domain module):
According to the application scope and the entities and their operation, I have decided to create `Task Dashboard` domain module for handling all the presentation logic related to `Task` and `Category` entities.
In future based on the requirement for `Category` entity or any other new feature, I may create a separate feature module for each.

Task dashboard module includes:
 - **Task list component:** Presentation logic for showing the list of all tasks.
 - **Task detail component:** Presentation logic for creating or editing a task.
 - **Categories component:** Presentation logic for showing the list of categories.
 - **Upcoming task component:** Presentation logic for showing the number of tasks due in 7 days per category. 
 - **Categoryname Pipe:** For getting name of the category based on given category id. This pipe is implemented as part of task-dashboard module and not in shared module because it's only used within this module. In future, if it needs to be reused by other modules, will be moved to shared module.
 
#### Common components module (Shared Module)
`common-components` module is a shared module, which holds all the components which can be reused by different modules.
Currently it only includes `Chart` component. There is a placeholder `notification` component which is for showing a list of notifications/reminders to the user. This component is not used in app, because it's not implemented based on the priorities in limited time.

### Routing strategy (HTML5 style vs Hash style)
The application is using the default HTML5 style which is preferred over hash (#) style as it produces URLs that are easier for users to understand and it preserves the option to do server-side rendering.

- Using this strategy, later for deployment, we need to configure the server to redirect requests for missing files to `index.html`. Otherwise, refreshing a URL with deep link or entering it in the browser will return a `404 - Not Found` error.
- After deployment, links, bookmark, refreshing and entering the URLs with deep link will return a `404 - Not Found` error unless we configure the server to redirects requests for missing file to `index.html`.

### Forms (reactive forms vs template-driven forms)
The application uses template-driven form for creating a new task because: 
- The form requirements are basic, so template-driven form is good enough.
- There is only one form in application and no need to reuse form model across components.
### Testing

Tasks service will be mocked to make the components and dependant logic unit testable. The mock service will be provided to all components tests which has a dependency to the tasks service.