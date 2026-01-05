# Company Bulir – Backend Challenge

## Overview
This project is part of the technical challenge for Company Bulir.
It implements a booking system with clients and service providers.

## Architecture
- Clean Architecture
- Explicit ACL based on roles
- Wallet + Ledger for financial consistency

## Technologies
- Node.js
- Express
- PostgreSQL
- Prisma

## Deploy
The backend API is deployed and publicly accessible at:

🔗 API Base URL:  
https://bulir-booking-backend.onrender.com/

> The deployed environment runs database migrations automatically and uses environment variables for secure configuration.

## API Routes

Base URL  
https://bulir-booking-backend.onrender.com/

All protected routes require a valid **JWT Bearer Token**.

---

### Authentication
| Method | Endpoint | Description | Access |
|------|---------|-------------|--------|
| POST | /auth/login | Authenticate user | Public |
| POST | /auth/register | Register client or provider | Public |
| PUT  | /auth/credential | Update password user | Authenticated |

---

### Users (Admin)
| Method | Endpoint | Description | Access |
|------|---------|-------------|--------|
| GET | /users | List all users | Admin |
| GET | /users/:id | Get user details | Admin |
| PUT | /users/:id | Update user | Admin |
| DELETE | /users/:id | Disable user | Admin |

---

### Services
| Method | Endpoint | Description | Access |
|------|---------|-------------|--------|
| POST | /services | Create service | Provider |
| GET | /services | List services (filters supported) | Public |
| GET | /services/:id | Get service details | Public |
| PUT | /services/:id | Update service | Provider |
| DELETE | /services/:id | Delete service | Provider |

---

### Bookings
| Method | Endpoint | Description | Access |
|------|---------|-------------|--------|
| POST | /bookings | Create booking | Client |
| GET | /bookings | List bookings (role-based) | Authenticated |
| GET | /bookings/:id | Get booking details | Authenticated |
| PUT | /bookings/:id/cancel | Cancel booking | Client / Provider |
| PUT | /bookings/:id/confirm | Confirm booking | Provider |
| PUT | /bookings/:id/complete | Complete booking | Provider |

---


### Transaction
| Method | Endpoint | Description | Access |
|------|---------|-------------|--------|
| POST | /transactions | Create booking | Client / Provider |
| GET | /transactions | List transactions (role-based) | Authenticated |
| GET | /transactions/:id | Get booking details | Authenticated |
| PUT | /transactions/:id/cancel | Cancel booking | Client / Provider |
| PUT | /transactions/:id/complete | Complete booking | Client / Provider |

---

### Wallet & Ledger
| Method | Endpoint | Description | Access |
|------|---------|-------------|--------|
| GET | /wallet | Get wallet balance | Authenticated |
| GET | /wallet/ledger | Get transaction history | Authenticated |

---


### Health
| Method | Endpoint | Description | Access |
|------|---------|-------------|--------|
| GET | / | API health check | Public |


## Running locally
1. Clone repository
2. Copy `.env.example` to `.env`
3. Run `docker-compose up`
4. Run `npm run dev`

## Tests
npm run test
