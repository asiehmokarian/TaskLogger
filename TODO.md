- Code refactoring to decouple presentation layer from core layer.
- Implementing log service
- Implementing a notification service that create a notification based on task reminder. 
- Category views show the total number of tasks for each Category
- Setup a deployment
- Setup CI/CD
- Create auto deployment script
- The ability to get charts for different options for example: next 3 days, next week, next month, ...
- Enable lazy loading of feature module
- Adding icons to the UI
- Removing warning by adding `CUSTOM_ELEMENTS_SCHEMA` to module.schemas
- Create component diagram for their communication
- Feed DB with more attractive data
- Decide to keep or remove the common component module from import list of app module
- Updating diagram based on the architecture changes


- findout the best practice to define services, isn't it better to define a task service interface and then implement this interface and instead of injecting the task service everywhere we inject the the task service inerface?
if there is no reason doing this, to prvide differnt implemetations of task service or log service, shall we just implement the new service just by extending the exsiting one. 

- reimpelement the notification service using rxjs operations

this is a fix from hotfix