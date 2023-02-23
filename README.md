# Motors Shop API

The Motors Shop API is a simple RESTful API that allows you to create, read, update, and delete vehicle advertisements The API is built using Node.js, Express and TypeORM. For the database, it uses PostgreSQL.

## GETTING STARTED

### Prerequisites

- Node.js
- PostgreSQL
  
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
```

5. Run the migrations

```bash
yarn typeorm migration:run -d src/data-source.ts
```

6. Start the server

```bash
yarn dev
```


## ENDPOINTS

### POST /vehicles

Post a new vehicle advertisement. **AdvertiseType** is a boolean value, where true is for sale and false is for rent. **VehicleType** is a boolean value, where true is a car and false is a motorcycle.

Expected Body

```
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
        "url": "https://example.com/image1.jpg",
      },
      {
        "url": "https://example.com/image2.jpg",
      }
    ]
}
```

Return [201 CREATED]

```
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

```
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
    ],
]

```

### GET /vehicles/:vehicleId

Get a vehicle advertisement by ID.

Result [200 OK]

```
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

```
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
        "url": "https://example.com/image1.jpg",
      },
      {
        "url": "https://example.com/image2.jpg",
      }
    ]
}
```

Result [200 OK]

```
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

```
Status: 204 No Content
```


