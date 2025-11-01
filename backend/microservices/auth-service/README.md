# Auth Service

Authentication microservice for the Synapse platform.

## Features

- User registration and login
- JWT-based authentication
- Password hashing with bcrypt
- Session management
- Rate limiting
- Redis caching
- Email verification and password reset

## Installation

```bash
npm install
```

## Configuration

Create a `.env` file based on `.env.example` and configure your environment variables.

## Development

```bash
npm run dev
```

## Testing

```bash
# Run all tests
npm test

# Run unit tests only
npm run test:unit

# Run integration tests only
npm run test:integration

# Run tests in watch mode
npm run test:watch
```

## Building

```bash
npm run build
```

## Running in Production

```bash
npm start
```

## API Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user (requires auth)
- `POST /api/auth/refresh` - Refresh JWT token

## License

MIT
