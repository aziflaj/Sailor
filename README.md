# README

This is the 4th project for my **52 weeks, 52 projects** challenge. It is a sample API developed with a Node.js framework called [Sails](http://sailsjs.org/).

## Prerequisites
In order to use this application, you'll need [Node.js](https://nodejs.org/en/) and npm (the Node Package Manager) installed and also a local [MongoDB](http://www.mongodb.org/) instance.


## Run the Application
To install the dependencies and run the application, run:

```bash
$ npm install -g sails    # install the Sails CLI
$ npm install             # install the dependencies
$ sails lift              # start the app server
```

Finally, browse to [http://localhost:1337/api/v1/ship](http://localhost:1337/api/v1/ship) and see the application in action.

There are a couple of shell scripts included in this repository. I used them for testing the `POST`, `PUT` and `DELETE` functionality.

- The `shells/seeder.sh` file seeds the database by actually sending a `POST` request, posting the JSON files in the `shells/seed/` folder.
- The `shells/put.sh` file sends a `PUT` request to update a given object. You should pass a JSON file as command-line argument (containing the updated data) and also the ID of the object.
- The `shells/delete.sh` sends a `DELETE` request to remove a given object from the DB. You should pass the ID of the object as command-line argument.
