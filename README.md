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
| POST | /api/v1/auth/login | Authenticate user | Public |
| POST | /api/v1/auth/register | Register client or provider | Public |
| PUT  | /api/v1/auth/credential | Update password user | Authenticated |

---

### Users (Admin)
| Method | Endpoint | Description | Access |
|------|---------|-------------|--------|
| GET | /api/v1/users | List all users | Admin |
| GET | /api/v1/users/:id | Get user details | Admin |
| GET | /api/v1/users/me | Get user logged | Admin / Provider / Client |
| PUT | /api/v1/users/:id | Update user | Admin |
| DELETE | /api/v1/users/:id | Disable user | Admin |

---

### Services
| Method | Endpoint | Description | Access |
|------|---------|-------------|--------|
| POST | /api/v1/services | Create service | Provider |
| GET | /api/v1/services | List services (filters supported) | Public |
| GET | /api/v1/services/:id | Get service details | Public |
| PUT | /api/v1/services/:id | Update service | Provider |
| DELETE | /api/v1/services/:id | Delete service | Provider |

---

### Bookings
| Method | Endpoint | Description | Access |
|------|---------|-------------|--------|
| POST | /api/v1/bookings | Create booking | Client |
| GET | /api/v1/bookings | List bookings (role-based) | Authenticated |
| GET | /api/v1/bookings/:id | Get booking details | Authenticated |
| PUT | /api/v1/bookings/:id/cancel | Cancel booking | Client / Provider |
| PUT | /api/v1/bookings/:id/confirm | Confirm booking | Provider |
| PUT | /api/v1/bookings/:id/complete | Complete booking | Provider |

---


### Transaction
| Method | Endpoint | Description | Access |
|------|---------|-------------|--------|
| POST | /api/v1/transactions | Create booking | Client / Provider |
| GET | /api/v1/transactions | List transactions (role-based) | Authenticated |
| GET | /api/v1/transactions/:id | Get booking details | Authenticated |
| PUT | /api/v1/transactions/:id/cancel | Cancel booking | Client / Provider |
| PUT | /api/v1/transactions/:id/complete | Complete booking | Client / Provider |

---

### Wallet & Ledger
| Method | Endpoint | Description | Access |
|------|---------|-------------|--------|
| GET | /api/v1/wallets | Get wallet balance | Authenticated |
| GET | /api/v1/wallets/ledger | Get transaction history | Authenticated |

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
