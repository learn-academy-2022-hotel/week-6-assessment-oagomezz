# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: In this situation what you can do is create a migration that will allow you to add data to your table. The foreign key will be named cohort_id and will be in the student model. This will associate the students to their respective cohorts. For example, if Hotel has the ID of 1 and I was added to the database, my cohort_id would be 1 as I am currently enrolled in the Hotel cohort. 

Researched answer: This mistake can be corrected by creating a rails migration file that will add the foreign key column to the students model. This foreign key is going to be named cohort_id and it will belong to the students model to identify which cohort a student belongs to. 

2. Which RESTful routes must always be passed params? Why?

Your answer: Update and create must always be passed params. For example, we are working with a blog post and the params permitted were the title and the content. In the create method, params must be passed so the blog post has the corresponding title and the content that belongs to the specific post. In this case lets say the post title was 'My favorite color' and the content described 'purple'. The next day I decide that purple isn't my favorite color I could update the blog post so the content can properly reflect my new favorite color which is 'green'. 

Researched answer: Create and update must always be passed params. They identify the columns in the model and allows the user to input new data to the database.

3. Name three rails generator commands. What is created by each?

Your answer: rails g controllor, rails g resource, rails g model each generating the specified model, resource or controller.

Researched answer: rails g controller creates the controller for the rails app and helps coordinate the user, views and the model. the rails g model command creates a model and the different columns and datatypes required. Lastly, rails g resource creates the restful routes and controller for a specified model that way the routes don't need to be defined under the routes file in the app. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students => Index => displays a list of all students.

action: "POST" location: /students => Create => creates a new student.

action: "GET" location: /students/new => New => returns html form for new student.

action: "GET" location: /students/2 => Show => displays a specific student.

action: "GET" location: /students/2/edit => Edit => returns an HTML form for student.

action: "PATCH" location: /students/2 => Update => updates content for student 2.

action: "DELETE" location: /students/2 => Destroy => Deletes the student.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I can see a landing page with all my to do tasks.

2. As a user, I can mark a task as complete.

3. As a user, I can select on a task name to open on new page that includes completion status and task description.

4. As a user, I can select on a task and update it. 

5. As a user, I can delete a task after it has been completed. 

6. As a user, I can add a new task. 

7. As a user, I can mark a task as In progress, if it doesn't get completed. 

8. As a user, I can leave notes pertaining to the task. 

9. As a user, I can organize tasks by completion date.

10. As a user, I can seperate tasks by status.(New, In progress, Completed)