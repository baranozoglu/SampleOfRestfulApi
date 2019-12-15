<h1>Restful API Example</h1>
    To create a RESTful API with a single endpoint that fetches the data in the
provided MongoDB collection and return the results in the requested format.
● The code was written in Node.js using express framework
● The endpoint just handle HTTP POST requests.
● The application was deployed on AWS or Heroku.
● Clean and Production Ready Code
● Our main file is server.js


Sample of Request Payload
{
    "startDate": "2016-01-26",
    "endDate": "2018-02-02",
    "minCount": 2700,
    "maxCount": 3000
}

Sample of Response Payload
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

