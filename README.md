# ts-poc

A small CRUD to perform a survey on the most common programming languages as a
proof of concept for the TypeScript language

## Usage

1. Install dependencies with `npm install`
2. Create a `.env` file following the template at `.env.example`
3. Create the database and the tables with `npm run migrate dev`
4. Populate the `languages` table with `npm run seed`
5. Run the server with `npm start`

# Endpoints

* `POST /users`
  * Description: create your user
  * Body:

    ```json
    {
        "username": "davifeliciano",
        "password": "password"
    }
    ```

* `PATCH /users`
  * Description: update your password
  * Body:

    ```json
    {
        "username": "davifeliciano",
        "password": "password",
        "newPassword": "newPassword"
    }
    ```

* `PATCH /users/languages`
  * Description: specify the languages you are familiar with
  * Body:

    ```json
    {
        "username": "davifeliciano",
        "password": "newPassword",
        "languages": [2, 13, 27, 30, 34, 36, 37]
    }
    ```

* `GET /languages`
  * Description: list all the languages in the database
* `GET /languages/stats`
  * Description: retrieve the amount of users that voted for each language
