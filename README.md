# Pangaea_Backend_Takehome
a HTTP notification system. A server (or set of servers) will keep track of topics -> subscribers where a topic is a string and a subscriber is an HTTP endpoint.

> Message notification service, sends message to all subscribed to a topic
> Individuals can subscribe with valid url
> Publishers can send info to all subscribed to a given topic
> Sample server runs on port: 7000 that can be used to subscribe as test.
> Server stores data in an object.

## Built with NodeJS, Axios and Express

## Install

```sh
npm install
```

## Usage

```sh
npm start
or
npm run server (nodemon)
```

Spins up local servers on port 5000, 6000 and (sample sever) on 7000

Example:

```sh
=== Server listening on port 5000 ===
=== Server listening on port 6000 ===
=== Server listening on port 7000 ===
```

Mock examples:

```sh
POST request to http://localhost:6000/subscribe/topic/testing

body : {
    "url": "http://localhost:7000/sample"
}

response: {
    "url": "http://localhost:7000/sample",
    "topic": "testing"
}


POST request to http://localhost:5000/publish/testing

body : {
    "msg": "hello"
}

response: {
    "success": "sent testing to 1 subscriber(s)"
}
```

## Testing with Jest, Supertest and Coverage
## Run tests

```sh
npm test
```

## Author

👤 **Modurotolu Olokode**

- Website: [modurotoluolokode.com](http://modurotoluolokode.com/)
- Github: [durotolu](https://github.com/durotolu)
