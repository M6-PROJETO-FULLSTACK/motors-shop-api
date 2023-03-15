# Motors Shop API

The Motors Shop API is a simple RESTful API that allows you to create, read, update, and delete vehicle advertisements. The API is built using Node.js, Express and TypeORM. For the database, it uses PostgreSQL.

## GETTING STARTED

### Prerequisites

-   Node.js
-   PostgreSQL

### Installation

1. Clone the repository

```bash
git clone https://github.com/M6-PROJETO-FULLSTACK/motors-shop-api.git
```

2. Install dependencies

```bash
yarn install
```

3. Create a PostgreSQL database

```bash
CREATE DATABASE motors-shop
```

1. Configure the .env file in the root directory of the project. The .env file should contain the following variables:

```bash
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
HOST=localhost
SECRET_KEY=
PORT=5432
DATABASE_URL="postgres://<user>:<password>@<host>:<port>/<database>"
NODE_ENV=
```

5. Run the migrations

```bash
yarn typeorm migration:run -d src/data-source.ts
```

6. Start the server

```bash
yarn dev
```

## VEHICLE ENDPOINTS

### POST /vehicles

Post a new vehicle advertisement. **AdvertiseType** is a boolean value, where true is for sale and false is for rent. **VehicleType** is a boolean value, where true is a car and false is a motorcycle.

Expected Body

```json
{
	"advertiseType": true,
	"title": "2019 Toyota Camry",
	"year": "2019",
	"mileage": "25000",
	"price": 25000,
	"description": "This is a 2019 Toyota Camry in excellent condition.",
	"vehicleType": true,
	"cover": "https://example.com/image.jpg",
	"isActive": true,
	"gallery": [
		{
			"url": "https://example.com/image1.jpg"
		},
		{
			"url": "https://example.com/image2.jpg"
		}
	]
}
```

Return [201 CREATED]

```json
{
	"id": 1,
	"advertiseType": true,
	"title": "2019 Toyota Camry",
	"year": "2019",
	"mileage": "25000",
	"price": 25000,
	"description": "This is a 2019 Toyota Camry in excellent condition.",
	"vehicleType": true,
	"cover": "https://example.com/image.jpg",
	"isActive": true,
	"gallery": [
		{
			"id": 1,
			"url": "https://example.com/image1.jpg",
			"vehicle_id": 1
		},
		{
			"id": 2,
			"url": "https://example.com/image2.jpg",
			"vehicle_id": 1
		}
	],
	"createdAt": "2023-02-23T12:34:56.000Z",
	"updatedAt": "2023-02-23T12:34:56.000Z"
}
```

### GET /vehicles

Get a list of all vehicle advertisements.

No request body is required.

Result [200 OK]

```json
[
	{
		"id": 1,
		"advertiseType": true,
		"title": "2019 Toyota Camry",
		"year": "2019",
		"mileage": "25000",
		"price": 25000,
		"description": "This is a 2019 Toyota Camry in excellent condition.",
		"vehicleType": true,
		"cover": "https://example.com/image.jpg",
		"isActive": true,
		"gallery": [
			{
				"id": 1,
				"url": "https://example.com/image1.jpg",
				"vehicle_id": 1
			},
			{
				"id": 2,
				"url": "https://example.com/image2.jpg",
				"vehicle_id": 1
			}
		],
		"createdAt": "2023-02-23T12:34:56.000Z",
		"updatedAt": "2023-02-23T12:34:56.000Z"
	},
	{
		"id": 2,
		"advertiseType": true,
		"title": "2019 Honda CBR 600RR",
		"year": "2019",
		"mileage": "25000",
		"price": 25000,
		"description": "This is a 2019 Honda CBR 600RR in excellent condition.",
		"vehicleType": false,
		"cover": "https://example.com/image.jpg",
		"isActive": true,
		"gallery": [
			{
				"id": 3,
				"url": "https://example.com/image1.jpg",
				"vehicle_id": 2
			},
			{
				"id": 4,
				"url": "https://example.com/image2.jpg",
				"vehicle_id": 2
			}
		]
	}
]
```

### GET /vehicles/:vehicleId

Get a vehicle advertisement by ID.

Result [200 OK]

```json
{
	"id": 1,
	"advertiseType": true,
	"title": "2019 Toyota Camry",
	"year": "2019",
	"mileage": "25000",
	"price": 25000,
	"description": "This is a 2019 Toyota Camry in excellent condition.",
	"vehicleType": true,
	"cover": "https://example.com/image.jpg",
	"isActive": true,
	"gallery": [
		{
			"id": 1,
			"url": "https://example.com/image1.jpg",
			"vehicle_id": 1
		},
		{
			"id": 2,
			"url": "https://example.com/image2.jpg",
			"vehicle_id": 1
		}
	],
	"createdAt": "2023-02-23T12:34:56.000Z",
	"updatedAt": "2023-02-23T12:34:56.000Z"
}
```

### PATCH /vehicles/:vehicleId

Update a vehicle advertisement by ID. You can update especifics or all fields.

Expected Body

```json
{
	"advertiseType": true,
	"title": "2019 Toyota Camry",
	"year": "2019",
	"mileage": "25000",
	"price": 25000,
	"description": "This is a 2019 Toyota Camry.",
	"vehicleType": true,
	"cover": "https://example.com/image.jpg",
	"isActive": true,
	"gallery": [
		{
			"url": "https://example.com/image1.jpg"
		},
		{
			"url": "https://example.com/image2.jpg"
		}
	]
}
```

Result [200 OK]

```json
{
	"id": 1,
	"advertiseType": true,
	"title": "2019 Toyota Camry",
	"year": "2019",
	"mileage": "25000",
	"price": 25000,
	"description": "This is a 2019 Toyota Camry.",
	"vehicleType": true,
	"cover": "https://example.com/image.jpg",
	"isActive": true,
	"gallery": [
		{
			"id": 1,
			"url": "https://example.com/image1.jpg",
			"vehicle_id": 1
		},
		{
			"id": 2,
			"url": "https://example.com/image2.jpg",
			"vehicle_id": 1
		}
	],
	"createdAt": "2023-02-23T12:34:56.000Z",
	"updatedAt": "2023-02-23T12:34:56.000Z"
}
```

### DELETE /vehicles/:vehicleId

Delete a vehicle advertisement by ID.

No request body is required.

Result

```json
Status: 204 No Content
```

## USER ENDPOINTS

### POST /users

Create a new user.

Expected Body

```json
{
  "name": "John Doe",
  "password": "123456",
  "email": "john@mail.com"
  "cpf": "12345678910",
  "phone": "11987654321",
  "birthdate": "1990-01-01",
  "bio": "Hello, I'm John Doe.",
  "type": true,
  "address": {
    "cep": "12345678",
    "city": "São Paulo",
    "complement": "Apto 123",
    "number": "123",
    "state": "SP",
    "street": "Rua Teste"
  }
}
```

Result [201 Created]

```json
{
	"id": 1,
	"name": "John Doe",
	"email": "john@mail.com",
	"cpf": "12345678910",
	"phone": "11987654321",
	"birthdate": "1990-01-01",
	"bio": "Hello, I'm John Doe.",
	"type": true,
	"address": {
		"id": 1,
		"cep": "12345678",
		"city": "São Paulo",
		"complement": "Apto 123",
		"number": "123",
		"state": "SP",
		"street": "Rua Teste",
		"user_id": 1
	},
	"createdAt": "2023-02-23T12:34:56.000Z",
	"updatedAt": "2023-02-23T12:34:56.000Z"
}
```

### GET /users/:userId

Get a user by ID.

Result [200 OK]

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@mail.com",
  "cpf": "12345678910",
  "phone": "11987654321",
  "birthdate": "1990-01-01",
  "bio": "Hello, I'm John Doe.",
  "type": true,
  "address": {
    "id": 1,
    "cep": "12345678",
    "city": "São Paulo",
    "complement": "Apto 123",
    "number": "123",
    "state": "SP",
    "street": "Rua Teste",
    "user_id": 1
  },
  "createdAt": "2023-02-23T12:34:56.000Z",
  "updatedAt": "2023-02-23T12:34:56.000Z"
},
"vehicles": [
  {
    "id": 1,
    "advertiseType": true,
    "title": "2019 Toyota Camry",
    "year": "2019",
    "mileage": "25000",
    "price": 25000,
    "description": "This is a 2019 Toyota Camry in excellent condition.",
    "vehicleType": true,
    "cover": "https://example.com/image.jpg",
    "isActive": true,
    "gallery": [
      {
        "id": 1,
        "url": "https://example.com/image1.jpg",
        "vehicle_id": 1
      },
      {
        "id": 1,
        "url": "https://example.com/image2.jpg",
        "vehicle_id": 1
      }
    ],
    "createdAt": "2023-02-23T12:34:56.000Z",
    "updatedAt": "2023-02-23T12:34:56.000Z"
  }
],
"comments": [
  {
    "id": 1,
    "comment": "This is a comment.",
    "user_id": 1,
    "vehicle_id": 1,
    "createdAt": "2023-02-23T12:34:56.000Z",
    "updatedAt": "2023-02-23T12:34:56.000Z"
  }
]
```

### PATCH /users/:userId

Update a user by ID.

Expected body.

```json
{
	"name": "John Doe",
	"email": "john@mail.com",
	"cpf": "12345678910",
	"phone": "11987654321",
	"birthdate": "1990-01-01",
	"bio": "Hello, I'm John Doe.",
	"address": {
		"cep": "12345678",
		"city": "São Paulo",
		"complement": "Apto 123",
		"number": "123",
		"state": "SP",
		"street": "Rua Teste"
	}
}
```

Result [200 OK]

```json
{
	"id": 1,
	"name": "John Doe",
	"email": "john@mail.com",
	"cpf": "12345678910",
	"phone": "11987654321",
	"birthdate": "1990-01-01",
	"bio": "Hello, I'm John Doe.",
	"type": true,
	"address": {
		"id": 1,
		"cep": "12345678",
		"city": "São Paulo",
		"complement": "Apto 123",
		"number": "123",
		"state": "SP",
		"street": "Rua Teste",
		"user_id": 1
	},
	"createdAt": "2023-02-23T12:34:56.000Z",
	"updatedAt": "2023-02-23T12:34:56.000Z"
}
```

### DELETE /users/:userId

Delete a user by ID.

No request body is required.

Result

```json

Status: 204 No Content

```

### POST /login

Login a user.

Expected Body

```json
{
	"email": "john@mail.com",
	"password": "123456"
}
```

Result [200 OK]

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@mail.com",
  "cpf": "12345678910",
  "phone": "11987654321",
  "birthdate": "1990-01-01",
  "bio": "Hello, I'm John Doe.",
  "type": true,
  "address": {
    "id": 1,
    "cep": "12345678",
    "city": "São Paulo",
    "complement": "Apto 123",
    "number": "123",
    "state": "SP",
    "street": "Rua Teste",
    "user_id": 1
  },
  "createdAt": "2023-02-23T12:34:56.000Z",
  "updatedAt": "2023-02-23T12:34:56.000Z"
},
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdhYnJpZWxAbWFpbC5jb20iLCJpZCI6ImEyNDhkZWU4LTI4ZDEtNDljOC1iNmY0LWFjMjZhNDcwMTgyMSIsImlhdCI6MTY3Nzg0NzI2MCwiZXhwIjoxNjc3ODkwNDYwfQ.gNhYV9DGxU-aCPyW2kbJZjkJB8rHhItK6NnXiE-U1pk"
```

### POST /login/recover-password

Recover a user password.

Expected Body

```json
{
	"email": "john@mail.com"
}
```

Result [200 OK]

```json
{
	"message": "Email sent with success"
}
```

Error [400 Bad Request]

```json
{
	"message": "Error sending email, try again later"
}
```

## COMMENTS ENDPOINTS

### POST /comments

Create a new comment.

Expected Body

```json
{
	"comment": "This is a comment.",
	"user_id": 1,
	"vehicle_id": 1
}
```

Result [201 Created]

```json
{
	"id": 1,
	"comment": "This is a comment.",
	"user_id": 1,
	"vehicle_id": 1,
	"createdAt": "2023-02-23T12:34:56.000Z",
	"updatedAt": "2023-02-23T12:34:56.000Z"
}
```

### GET /comments/:commentId

Get a comment by ID.

Result [200 OK]

```json
{
	"id": 1,
	"comment": "This is a comment.",
	"user_id": 1,
	"vehicle_id": 1,
	"createdAt": "2023-02-23T12:34:56.000Z",
	"updatedAt": "2023-02-23T12:34:56.000Z"
}
```

### PATCH /comments/:commentId

Update a comment by ID.

Expected Body

```json
{
	"comment": "This is a comment edited."
}
```

Result [200 OK]

```json
{
	"id": 1,
	"comment": "This is a comment edited.",
	"user_id": 1,
	"vehicle_id": 1,
	"createdAt": "2023-02-23T12:34:56.000Z",
	"updatedAt": "2023-02-23T12:34:56.000Z"
}
```

### DELETE /comments/:commentId

Delete a comment by ID.

No request body is required.

Result

```json

Status: 204 No Content

```
