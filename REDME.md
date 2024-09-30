# Sports Facility Booking Server

The Sports Facility Booking Platform allows users to easily book sports facilities and provides admins with the ability to manage these facilities and bookings.

## Live Server

# Technology Stack

This project uses the following technologies:

<p align="center">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQediDcFRhQqm5pxyPCKpNQ9HRwU56cPW62qQ&s" alt="TypeScript" height="80"/>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8f5JrF73J_2sN_xjRltNzR1-ifd8FYcBNEA&s" alt="Node.js" height="80"/>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjmkNxS1Dd02trVYYE79SqnhgC_ZbpwretOg&s" alt="Express.js" height="80"/>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5WxeBrDWD9MgzRBAQGGzvWHqQh2yvdwOBzw&s" alt="Mongoose" height="80"/>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXpFvT-prREFPKkIaid6K4dGm2epTgrTgFnw&s" alt="JWT" height="80"/>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEqjzgVg1kbXflfkBokJRTDHFiiJPoMU9WoA&s" alt="Zod" height="80"/>
</p>

## Used Technologies:
- TypeScript
- Node.js
- Express.js
- Mongoose
- JWT
- Zod

## Features:

### User Authentication and Authorization
- Users can sign up and log in using their email and password.
- Admins have additional powers for managing facilities and bookings.

### Facility Management
- Admins can create, update, and delete facilities.
- Each facility includes details like name, description, price per hour, and location.

### Booking System
- Users can book facilities by specifying the date, start time, and end time.
- The system calculates the payable amount based on the duration of the booking.

### Availability Checking
- Users can check the availability of facilities for a specific date.

### View Bookings
- Admins can view all bookings, while users can view only their own bookings.
- This helps in managing and tracking reservations efficiently.

### Booking Cancellation
- Users have the ability to cancel their bookings.

### Error Handling
- Comprehensive error handling ensures proper responses and messages for validation errors, duplicate entries, and not found routes.

### Authentication Middleware
- Middleware is implemented to protect routes, ensuring that only authenticated users and admins can access their respective routes.

### Security
- JWT-based authentication is implemented to protect routes and ensure that only authorized users and admins can access their respective routes.

# Sports Facility Booking Server

This is the backend server for the Sports Facility Booking application. It provides endpoints for user registration, login, facility management, and booking functionalities.

## How to Setup on Local Computer

### Clone the Repository

```bash
git clone https://github.com/AmhjadKhan/sport-booking-server.git

npm install 
```

## Environment Variables
Create a .env file in the root directory of the project. Add the following environment variables:

```markdown
PORT=5000;
DATABASE_URL=database_url;
BCRYPT_SALT_ROUNDS=any_integer_number;
JWT_ACCESS_SECRET=jwt_secret;
JWT_REFRESH_SECRET=jwt_secret;
JWT_ACCESS_EXPIRES_IN=1d;
JWT_REFRESH_EXPIRES_IN=365d;
```

## Run the Application
To start the application in development mode run:  
```markdown
npm run start:dev
```

 ### How to Use the Application
 ## 1. User Registration

Endpoint: POST:`/api/auth/signup`

Request Body:
```json
{
  "name": "amjad hossain",
  "email": "amjad123@gmail.com",
  "password": "amjqd123245",
  "phone": "+971234567890",
  "role": "user",
  "address": "Dubai,United Arab Emarat"
}
```

 ## 2. User Login
Endpoint: POST: `/api/auth/login`

Request Body:
```json
{
  "email": "amjad123.com",
  "password": "amjqd123245"
}
```
 ## 3. Create a Facility (Admin Only)
Endpoint: POST: `/api/facility`

# Headers:

Authorization: `Bearer YOUR_JWT_TOKEN`
Request Body:
```json
{
  "name": "Tennis Court",
  "description": "A well-maintained outdoor tennis court suitable for all skill levels.",
  "pricePerHour": 50,
  "location": "123 Sports Avenue, City, Country",
}
```


 ### 4. Update a Facility (Admin Only)
Endpoint: PUT: `/api/facility/:id`

Headers:

Authorization: `Bearer YOUR_JWT_TOKEN`
Request Body:
```json
{
  "name": "update Tennis Court",
  "description": "A well-maintained outdoor tennis court suitable for all skill levels.",
  "pricePerHour": 50,
  "location": "123 Sports Avenue, City, Country",
}
```

 ### 5. Delete a Facility (Admin Only) 
Endpoint: DELETE: `/api/facility/:id`
Headers:

Authorization: `Bearer YOUR_JWT_TOKEN`

### 6. Get All Facilities
Endpoint: GET: `/api/facility`


### 7. Check Time Slot Availability
Endpoint: GET: `/api/check-availability`

Query Parameters:
date=2024-09-04


 ### 8. Create a Booking (User Only)
  Endpoint: POST: `/api/bookings`

Headers:

Authorization: `Bearer YOUR_JWT_TOKEN`
Request Body:
```json
{
  "facility": "_id 60d9c4e4f3b4b544b8b8d1c5",
  "date": "2024-09-02",
  "startTime": "12:00",
  "endTime": "15:00"
}
```

 Note: The startTime and endTime should be in HH
(24-hour format) and date should be in YYYY-MM-DD format.

### 9. View All Bookings (Admin Only)
Endpoint: GET: `/api/bookings`
Headers:
Authorization: `Bearer YOUR_JWT_TOKEN`

### 10. View Bookings by User (User Only)
Endpoint: GET: `/api/bookings/user`
Headers:
Authorization: Bearer YOUR_JWT_TOKEN

### 11. Cancel a Booking (User Only)
Endpoint: DELETE: `/api/bookings/:id`
Headers:
Authorization: `Bearer YOUR_JWT_TOKEN`


<h2>👌Thank you all</h2>


