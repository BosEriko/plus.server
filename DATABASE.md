# 🗄️ Local Database Setup (PostgreSQL Server)

This project uses a local PostgreSQL Server instance running via Docker. A helper script is provided to simplify database management.

---

### 📦 Prerequisites

Make sure you have the following installed:

* Docker

---

### ⚙️ Setup (First Time Only)

Run the following command to create the PostgreSQL container:

```bash
npm run db:setup
```

This will:

* Create a PostgreSQL container named `plus_server_db`
* Expose it on port `5433` (This port is chosen to avoid conflict with local PostgreSQL)

---

### ▶️ Start the Database

```bash
npm run db:start
```

---

### ⏹ Stop the Database

```bash
npm run db:stop
```

---

### 🔄 Restart the Database

```bash
npm run db:restart
```

---

### 📊 Check Status

```bash
npm run db:status
```

---

### 🧹 Remove the Database Container

```bash
npm run db:remove
```

---

## 🔗 Prisma Setup

Make sure your `.env` file contains:

```env
PSQL_URL="postgresql://postgres:YourStrongPass123@localhost:5433/plus_server_db"
```

---

### 🚀 Run Migrations

```bash
npm run prisma:migrate <MIGRATION_NAME>
```

---

### 🧪 Full Dev Startup

You can start everything with:

```bash
npm run dev:full
```

This will:

1. Start the database
2. Run Prisma migrations
3. Start the development server

---

## ⚠️ Notes

* The database may take a few seconds to fully start after `db:start`
* Default credentials:
  * User: `postgres`
  * Password: `YourStrongPass123`
* Make sure port `5433` is not used by another service

## Start the Nest Server

1. **Install dependencies**:

```bash
npm install
````

2. **Run Prisma migrations**:

This will create your database schema:

```bash
npx prisma migrate deploy
```

3. **Generate Prisma client** (if not already done by migrate):

```bash
npx prisma generate
```

5. **Start the server**:

```bash
npm run dev
```

## API Endpoints

### Register a User (POST /users/signup)

Use `curl` to quickly test if your server and database are working:

```bash
curl -s -X POST http://localhost:3000/users/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"john@doe.com","name":"John Doe"}'
```

You should see a JSON response with the created user.

### Get All Users (GET /users)

Check that your SQL Server is returning users:

```bash
curl -s http://localhost:3000/users
```

You should see a JSON array of all registered users.

## Notes

* Make sure your SQL Server instance is running and accessible before starting the NestJS server.
* You can modify the `.env` file to point to your desired database.
