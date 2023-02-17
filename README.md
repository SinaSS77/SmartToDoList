## Smart ToDo App

=========
Welcome to Smart ToDo! This app allows users to input the name of an item and it categorizes it into one of five groups:

- To Watch
- To Eat
- To Read
- To Buy
- Other

Users first must register and login at the welcome page. Once logged in, users will be able to see their todo's. They will have the ability to add and delete items, as well as change an item's category. When items are displayed, they have a colored border representing the category they are placed in.

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information

- username: `labber`
- password: `labber`
- database: `midterm`
- GOOGLE_KEY: ` ` (for API searches) (for example: GOOGLE_KEY=AI......)

3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
6. Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`

- Note: nodemon is used, so you should not have to restart your server

8. Visit `http://localhost:8080/`

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- Axios
- Bcrypt
- Body-parser
- Chalk
- Cookie-session
- Dotenv
- Ejs
- Express
- Morgan
- sass

## Screenshots

![Welcome page](https://github.com/ErikAndersonWebDev/Smart-TODO/blob/master/docs/Welcome.jpg?raw=true)
![Update profile and hover over a task](https://github.com/ErikAndersonWebDev/Smart-TODO/blob/master/docs/Update%20profile.jpg?raw=true)
![Dropdown menu for changing category](https://github.com/ErikAndersonWebDev/Smart-TODO/blob/master/docs/New%20task%20and%20change%20category.jpg?raw=true)
