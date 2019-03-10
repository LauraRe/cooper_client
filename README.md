# Cooper-Client

Running on [Netlify](https://ol-cooper-client.netlify.com/)  


## Prerequisites

* npm

## Installing

Use `npm` package manager to

* install the required dependencies:
```
$ npm install
```

* start the dev server:
```
$ npm start
```

* build for deployment:
```
$ npm run build
```
## Running the tests

To perform feature tests run:
```
$ npm run features
```
To perform unit tests run:
```
$ npm run test
```

## Built With
* [Create React App](https://github.com/facebook/create-react-app)
* [Jest-Puppeteer](https://github.com/smooth-code/jest-puppeteer)
* [Enzyme](https://github.com/airbnb/enzyme)
* [Axios](https://www.npmjs.com/package/axios)
* [React-Chartjs-2](https://github.com/jerairrest/react-chartjs-2)


## Authors 
[Laura Reale](https://github.com/LauraRe)  
[Olivia Zhang](https://github.com/yanqiuzhang)

## Question of the week
In the current implementation of the Cooper Challenge (the way we presented it to you), where are we doing the calculation or rather where do we check the result of the Cooper test. On the client or on the server?  

What are the pros and cons of doing it that way?

### Answer: 

Calculations and results check of the Cooper test are done on the client side.   

Doing it this way could be advantageous in a sense that it reduces the server load since the server only has to send data with minimal processing. 

The disadvantage in this approach is that it is difficult to predict what kind of computer the end-user of the application has. In fact, if the application is too heavy, that can limit the user-experience if the user does not have a machine powerful enough to cope with it.

