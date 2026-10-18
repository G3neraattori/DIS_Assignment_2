# Assignment 2

## Basic structure
The project is a sveltekit back/frontend project that uses drizzle-orm for the database operations. DaisyUI is used for more readable formatting (I like the syntax).

Backend is three databases ran inside a docker container (see compose file). The task description didn't say that the databases should have different tables/structure so they all use the same drizzle default "tasks" schema. As all of the databases have the same structure the frontend will only modify the tasks table.

Modifying, deleting, creating etc. is possible through the UI. The changes only apply to the database selected. 

## Usage

To run the project you will need docker and nodejs installed. 

First run the compose file with 
```
docker compose up -d
```
this will run the init.sql file creating the databases and the container. If you want to change the url/ports/password change them before running. 
You should create the .env file corresponding the compose file (see .env.example). DATABASE_URL is mandatory.

Then run the sveltekit project with
```
npm run dev
```
or you can build and run it if you want.

The project should work on linux/macOS. Windows should also work but is not tested.
