#Restful API Example
=============

Created a RESTful API with a single endpoint that fetches the data in the
provided MongoDB collection and return the results in the requested format.
Our endpoint url is https://exampleofrestfulapi.herokuapp.com/getir .
You should post request json data like a sample of request payload.


#### Fundamentals of our project

- The code was written in Node.js using express framework
- The endpoint just handle HTTP POST requests.
- The application was deployed on Heroku.
- Clean and Production Ready Code
- Our main file is index.js

#### Sample of Request Payload 
```javascript
{
    "startDate": "2016-01-26",
    "endDate": "2018-02-02",
    "minCount": 2700,
    "maxCount": 3000
}
```

#### Sample of Response Payload 
```javascript
{
    "code":0,
    "msg":"Success",
    "records":[
        {
            "key":"TAKwGc6Jr4i8Z487",
            "createdAt":"2017-01-28T01:22:14.398Z",
            "totalCount":2800
        },
        {
            "key":"NAeQ8eX7e5TEg7oH",
            "createdAt":"2017-01-27T08:19:14.135Z",
            "totalCount":2900
        }
    ]
}
```

