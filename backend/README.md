# 🚀 Synapse Backend

**Synapse** is a next-generation **AI-powered interview and assessment platform** designed to redefine the hiring process through intelligence, security, and automation.

It's built to analyze candidates beyond resumes—by understanding communication, behavior, technical knowledge, and authenticity—all in real time.

---

## 🎯 Vision

To build the world's most neural, secure, and intelligent interview ecosystem, where AI becomes the co-pilot of recruitment—handling everything from resume screening to real-time interviewing and performance analytics.

---

## 🧩 Core Components (7 Pillars)

### 1️⃣ **Authentication & User Management** ✅ (Current Phase)
- **Role-based Auth**: Candidate, Recruiter, Admin
- **Secure Authentication**: JWT + Refresh tokens
- **Multi-factor Authentication**: OTP/email verification
- **Session Management**: Redis-backed active login tracking
- **Role-based Access Control (RBAC)**: Secured APIs based on user role

**Current Status**: Auth-service microservice in development

### 2️⃣ **AI-Powered Interview Engine** (Next Phase)
- **Real-time AI Interviewer**: Dynamic questions, response analysis, auto-scoring
- **Behavioral Analysis**:
  - Eye contact, distraction detection, attentiveness monitoring
  - Facial emotion & sentiment analysis
  - Speech-to-text + NLP for response understanding
  - Micro-expression detection
- **AI Question Generation**: Job role-based or resume-tailored dynamic questions
- **Live Feedback**: Real-time insights to human interviewer (if present)

### 3️⃣ **Resume Parsing & Job Matching**
- **Resume Upload & Parsing**: AI extracts structured data (skills, experience, education, achievements)
- **Job Matching Algorithm**: Aligns resume with job descriptions
- **Candidate Ranking**: Generates fit score and auto-ranks candidates

### 4️⃣ **Interview Scheduling & Collaboration**
- **Flexible Scheduling**: Recruiter-initiated or AI auto-scheduled interviews
- **Calendar Integration**: Google Calendar & Gmail APIs
- **Notifications**: Auto reminders for candidates with secure meeting links
- **Technical Features**: Built-in screen sharing and coding environment for technical interviews

### 5️⃣ **Security & Compliance**
- **Browser-level Proctoring**:
  - Tab switch detection
  - Eye movement tracking
  - Secondary device usage detection
- **Fraud Detection**: Plagiarism detection, cheating prevention, external assistance monitoring
- **Encryption**: End-to-end encryption for video, chat, and file transfers
- **GDPR Compliance**: Compliant data handling with secure audit logs

### 6️⃣ **Dashboard & Analytics**
- **Recruiter Dashboard**: View candidate insights, AI analysis, interview replays, and detailed feedback
- **Candidate Dashboard**: Track upcoming interviews, personal analytics, and AI feedback
- **Admin Panel**: Manage organization, usage limits, and billing

### 7️⃣ **Subscription & Monetization**
- **Free Tier**: Basic resume parsing and AI mock interviews
- **Pro Tier**: Real-time AI interviews, behavioral analytics, unlimited scheduling
- **Enterprise Tier**: Custom branding, advanced analytics, and integration support

---

## 🏗️ Tech Architecture (High-Level)

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | React + TypeScript + Redux Toolkit + Tailwind CSS + WebRTC + Socket.IO | Interactive UI, real-time video streaming, state management |
| **Backend** | Node.js (v20+) + Express + TypeScript + Microservices | Scalable API, modular service architecture |
| **Database** | MongoDB (primary) + Redis (cache & sessions) | Data persistence + fast session management |
| **AI Stack** | OpenAI API / Hugging Face + TensorFlow.js | Real-time facial recognition & sentiment analysis |
| **Message Queue** | RabbitMQ / Kafka | Async event processing (email triggers, AI scoring) |
| **Cloud & Infra** | Docker + Kubernetes + AWS/GCP | Containerization, orchestration, auto-scaling |
| **Security** | JWT + OAuth2 + HTTPS + Helmet + Bcrypt + Zod | Authentication, encryption, request validation |
| **DevOps** | GitHub Actions + Docker Compose + PM2 | CI/CD pipelines, container orchestration |

---

## 🧬 End-to-End User Flow

```
┌─────────────────────────────────────────────────────────────────┐
│ 1. Recruiter Onboards                                           │
│    └─ Posts job role, criteria, and company info                │
│                                                                  │
│ 2. Candidate Applies                                            │
│    └─ Uploads resume → AI scans and auto-shortlists top 10%     │
│                                                                  │
│ 3. AI Interview Scheduled                                       │
│    └─ Candidate receives secure meeting link with auto reminder  │
│                                                                  │
│ 4. Real-time Proctoring Active                                  │
│    └─ Monitors: eye contact, emotion, behavior, tab switches    │
│    └─ AI asks dynamic questions based on resume & role          │
│                                                                  │
│ 5. AI Evaluation Generated                                      │
│    └─ Detailed report: technical score, behavioral analysis     │
│    └─ Communication skills, authenticity rating, fit score      │
│                                                                  │
│ 6. Recruiter Reviews Report                                     │
│    └─ Rewatch interview, adjust AI score if needed              │
│    └─ Compare with other candidates                             │
│                                                                  │
│ 7. Final Decision                                               │
│    └─ Hire, reject, or move to next round                       │
│    └─ Send auto-notification to candidate                       │
└─────────────────────────────────────────────────────────────────┘
```

---

## 💡 Why Synapse is Unique

✅ **AI + Behavioral Psychology + Secure Proctoring** - Not just video calls, but intelligent analysis

✅ **Trustworthy Hiring** - Eliminates bias, fraud, and guesswork through AI objectivity

✅ **Real-time Intelligence** - Actionable automation, not manual review

✅ **Scalable & Enterprise-Ready** - Microservice architecture designed for millions of interviews

✅ **Evolutionary Platform** - Foundation for complete "Neural HR" ecosystem (including performance reviews, career planning, etc.)

---

## 📁 Project Structure

```
backend/
├── microservices/
│   └── auth-service/                    # 🔐 Authentication & User Management (Phase 1)
│       ├── src/
│       │   ├── config/                  # Configuration files (env, db, etc.)
│       │   ├── controllers/             # HTTP request handlers
│       │   ├── services/                # Business logic layer
│       │   ├── models/                  # Mongoose schemas (User, Session)
│       │   ├── middlewares/             # Auth, error handling, rate limiting
│       │   ├── routes/                  # API route definitions
│       │   ├── integrations/            # Redis, email, message queue
│       │   ├── utils/                   # Crypto, JWT, logging, helpers
│       │   ├── tests/                   # Unit & integration tests
│       │   ├── app.ts                   # Express app setup
│       │   └── server.ts                # Server entry point
│       ├── package.json
│       ├── tsconfig.json
│       ├── Dockerfile
│       └── README.md
│
├── shared/                              # 📦 Reusable Modules Across Microservices
│   ├── interfaces/                      # TypeScript interfaces (IUser, etc.)
│   ├── utils/                           # Common helpers (validation, formatting)
│   ├── types/                           # Global TypeScript definitions
│   └── config/                          # Global configuration
│
├── docker-compose.yml                   # 🐳 Orchestration (MongoDB, Redis, Auth-service)
└── README.md
```

---

## 🧩 Architectural Mapping: Design → Folder Structure

| Design Layer | Folder/File | Purpose |
|---|---|---|
| API Gateway / Entry Point | `app.ts` & `server.ts` | Bootstrap, middleware setup, server initialization |
| Controller Layer | `controllers/` | Handle HTTP requests/responses, call services |
| Service Layer | `services/` | Core business logic (signup, signin, verify, token refresh) |
| Database Layer | `models/` | Mongoose schemas (User, Session, OTP logs) |
| Middleware Layer | `middlewares/` | Rate limiting, JWT verification, error handling |
| Cache Layer | `integrations/redisClient.ts` | Redis for sessions, OTP throttling, 2FA |
| Messaging Layer | `integrations/messageQueue.ts` | RabbitMQ/Kafka for async events (future) |
| Helper/Utilities | `utils/` | Crypto, JWT, email, logging, constants |
| Config Management | `config/` | Environment variables, database credentials |
| Shared Modules | `backend/shared/` | Reusable interfaces, types, helpers (DRY) |
| Testing | `tests/` | Jest + Supertest for unit & integration tests |
| Deployment | `Dockerfile` + `docker-compose.yml` | Container orchestration & scaling |

---

## 🔒 Auth-Service: Current Implementation

### Core Features (Auth-Service)

#### ✅ User Management
- `POST /api/auth/signup` - Register new candidate/recruiter
- `POST /api/auth/signin` - Login with email + password
- `POST /api/auth/logout` - Logout and invalidate session
- `POST /api/auth/refresh` - Refresh JWT token

#### ✅ Security
- Password hashing with **bcrypt**
- JWT tokens + **refresh tokens**
- Redis session storage
- **Rate limiting** (100 requests/min per IP)
- Email verification (OTP sent to inbox)
- Multi-factor authentication support (future enhancement)

#### ✅ Role-Based Access Control (RBAC)
- Routes protected by `authMiddleware`
- Roles: `candidate`, `recruiter`, `admin`
- Scope-based permissions for APIs

#### ✅ Error Handling
- Centralized error handler middleware
- Structured error responses
- HTTP status codes (400, 401, 403, 409, 500)
- Detailed logging with Winston/Pino

---

## 🚀 Tech Stack (Auth-Service)

| Layer | Technology | Purpose |
|---|---|---|
| **Runtime** | Node.js v20+ | Backend execution environment |
| **Language** | TypeScript | Type-safe, scalable development |
| **Framework** | Express.js | Lightweight HTTP server framework |
| **Database** | MongoDB + Mongoose | Document storage + ODM |
| **Cache** | Redis | Session management & OTP throttling |
| **Authentication** | JWT + Refresh Tokens | Stateless authentication |
| **Hashing** | bcrypt | Password encryption |
| **Validation** | Zod or Joi | Request body validation |
| **Email** | Nodemailer / Resend API | Email verification & password reset |
| **Rate Limiting** | express-rate-limit | Brute-force protection |
| **Testing** | Jest + Supertest | Unit & integration testing |
| **Logging** | Winston / Pino | Structured logging |
| **Containerization** | Docker | Consistent deployments |
| **Env Management** | dotenv + env-var | Configuration safety |

---

## 📋 Project Structure (Microservices Pattern)

### Microservices (Future Phases)
```
microservices/
├── auth-service/              ✅ Phase 1 (Current)
├── interview-service/         🟡 Phase 2 (Next)
├── resume-service/            🟡 Phase 2 (Next)
├── scheduling-service/        🟡 Phase 2 (Next)
├── analytics-service/         🟡 Phase 3
└── billing-service/           🟡 Phase 3
```

Each service follows the **same folder structure** for consistency and scalability.

---

## 📍 Development Phases

### 🔴 **Phase 1: Authentication & User Management** (IN PROGRESS)
- ✅ JWT-based authentication
- ✅ Multi-role support (Candidate, Recruiter, Admin)
- ✅ Email verification + OTP
- ✅ Redis session management
- ✅ Rate limiting & brute-force protection
- 🟡 Multi-factor authentication (future enhancement)

### 🟡 **Phase 2: AI Interview Engine & Resume Parsing** (NEXT)
- AI-powered real-time interviewing
- Resume parsing & job matching
- Behavioral analysis (eye contact, emotion)
- Interview scheduling system

### 🟡 **Phase 3: Dashboards & Analytics** (LATER)
- Recruiter dashboard with insights
- Candidate dashboard with feedback
- Admin panel for organization management
- Advanced analytics and reporting

---

## 🔧 Setup & Installation

### Prerequisites
- **Node.js** v20+
- **Docker** & **Docker Compose**
- **MongoDB** (local or Atlas)
- **Redis** (local or cloud)
- **npm** or **yarn**

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**
   ```bash
   cd microservices/auth-service
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your credentials
   ```

4. **Run with Docker Compose**
   ```bash
   docker-compose up -d
   ```
   This starts:
   - MongoDB (port 27017)
   - Redis (port 6379)
   - Auth-Service (port 3001)

5. **Development mode**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

7. **Run tests**
   ```bash
   npm test
   ```

---

## 📚 Documentation

- [Auth Service README](microservices/auth-service/README.md) - Detailed service documentation
- [Shared Modules](shared/) - Reusable interfaces and utilities

---

## 🤝 Contributing

This project follows a microservices architecture. When adding new features:

1. Keep service boundaries clear
2. Use shared modules for DRY principles
3. Follow the folder structure pattern
4. Write tests for new features
5. Update documentation

---

## 📝 License

MIT
