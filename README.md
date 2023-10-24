# Endpoints

## POST /user/login

- method: POST
- dev url: http://localhost:4001/user/login
- body: {
  "username": "admin",
  "password": "admin"
  }
- response: status: 200 OK, {
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTJhNjdmYjFhZTQxOTc4MjU5NmY1NWEiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2OTgxNDA1NTksImV4cCI6MTY5ODc0NTM1OX0.404tk72H0UvPnUojN9Y-H2C8SN9hpm6fhIyqYgGB1DU"
  }

## GET /cars

- method: GET
- dev url: http://localhost:4001/cars
- body:
- Authorization:
- response: status: 200 OK, {
  "marcas": []
  }

  ## POST /user/favorites/add

- method: POST
- dev url: http://localhost:4001/user/favorites/add
- body: {
  "\_id": "652a67fb1ae419782596f55a",
  "carId": "5f4a6c610f74d82b6b14644a"
  }
- Authorization: Bearer Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTJhNjdmYjFhZTQxOTc4MjU5NmY1NWEiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2OTgwNTM1ODksImV4cCI6MTY5ODY1ODM4OX0.zT0Wdnl_drCMjKnMyiKD7KGrf_70n8RS_h3UjxX-DC8
- response: status: 200 OK, {
  "message": "Car added to favorites"
  }

  ## POST /user/favorites/remove

- method: POST
- dev url: http://localhost:4001/user/favorites/remove
- body: {
  "\_id": "652a67fb1ae419782596f55a",
  "carId": "5f4a6c610f74d82b6b14644a"
  }
- Authorization: Bearer Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTJhNjdmYjFhZTQxOTc4MjU5NmY1NWEiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2OTgwNTM1ODksImV4cCI6MTY5ODY1ODM4OX0.zT0Wdnl_drCMjKnMyiKD7KGrf_70n8RS_h3UjxX-DC8
- response: status: 200 OK, {
  "message": "Car eliminated from favorites"
  }

## GET /user/favorites/:\_id

- method: GET
- dev url: http://localhost:4001/user/favorites/652a67fb1ae419782596f55a
- body:
- Authorization:
- response: status: 200 OK, {
  "favoriteCars": [
  "6030b5d7b680ca87b2a1bf10",
  "60b35d4a73a18503d87e75c1",
  "5d2d3a49d590f4a7cd18b8d2",
  "60cf2b462f0cbe3c1f5e271f",
  "5e7d481d7e662e4aebf6e703",
  "5f4a6c610f74d82b6b14644a"
  ]
  }
