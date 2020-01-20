# vlu-trial

## Table of Contents

* [Built With](#built-with)
* [Quickstart](#quick-start)
* [Install Node.js](#install-node-js)
* [Set up for the project](#set-up-for-the-project)
* [Start](#start)
* [Test](#test)


### Built with:
- [Express](https://expressjs.com/) web framework for Node.js.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [Axios](https://github.com/axios/axios)to handle API calls.
- [camaro](https://github.com/tuananh/camaro) to transform XML into JSON.
- [Handlebars](https://handlebarsjs.com/) to render view templates.
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [Jest](https://jestjs.io/) for testing.

## Quickstart

### Install Node.js

1. Install Node Version Manager (NVM)
    ```
    brew install nvm
    ```
    Then follow the instructions to update your `~/.bash_profile`.
1. Open a new terminal
1. Install the latest long term support (LTS) version of Node.js, currently `13.6.0`.
    ```
    nvm install 10.16.3
    ```

### Set up for the project

1. Fork this repository
1. Clone your fork to your local machine
1. Install Node.js dependencies
    ```
    npm install
    ```
1. Install MongoDB
    ```
    brew tap mongodb/brew
    brew install mongodb-community@4.2
    ```
1. Start MongoDB
    ```
    brew services start mongodb-community@4.2
    ```

### Start

1. Create a folder and name it `config`. In the config folder, create a file named `index.js` and save the account details as below with required values:
  ```
  module.exports = {

    vrm: '',
    mileage: null,
    url: '',
    password: '',
    feedName: '',
    userName: '',   
    
}
```
1. Start the server
    ```
    npm start
    ```
1. Browse to [http://localhost:3000](http://localhost:3000)

1. Open TablePlus and make a connection to `mongodb://localhost:27017/VLUservice`.

1. Use the App from the browser.

### Test

* Run all unit tests
    ```
    npm run test:unit
    ```

