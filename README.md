Scentinel — Backend (Node.js API)

This is the backend service for Scentinel, a mobile app for managing perfume collections and fragrance rotations. Built with Express.js, Sequelize, and PostgreSQL, it provides RESTful APIs to manage perfumes, usage logs, and weekly plans.

Features

- Full CRUD for perfumes
- Usage logs with event and compliment tracking _(coming soon)_
- Weekly fragrance planner with smart suggestion logic _(in progress)_
- Sequelize ORM with PostgreSQL integration
- Modular architecture with controller → service → model structure

Tech Stack

- Node.js + Express
- PostgreSQL (via Sequelize ORM)
- dotenv for environment configuration
- RESTful API design

Folder Structure
scentinel-backend/
├── src/
│ ├── config/ # Sequelize config
│ ├── models/ # Sequelize models
│ ├── services/ # Core business logic
│ ├── controllers/ # Handles request/response
│ ├── routes/ # Express route definitions
│ ├── seeder/ # Temporary seed data (perfumes)
│ └── index.js # App entry point
├── .env # Environment variables
├── .gitignore
├── package.json

Setup & Run

1. Install Dependencies (npm install)
2. Create PostgreSQL DB
   Use pgAdmin or CLI to create your database. Update .env:DB_NAME=scentinel_db
   DB_USER=your_username
   DB_PASS=your_password
   DB_HOST=localhost
   DB_PORT=5432
3. Start the Server: node src/index.js (Backend will run at: http://localhost:3000)

API Endpoints (Sample)

Method Endpoint Description
GET /api/perfumes Get all perfumes
POST /api/perfumes Add new perfume
PUT /api/perfumes/:id Update a perfume
DELETE /api/perfumes/:id Delete a perfume

Status
In Progress
Usage logs and planning logic coming next

Author
John Ross M. Rivera
Aspiring Backend Developer | BSIT Graduate
Bulacan, Philippines

Final Tips

- Use these READMEs as your personal dev documentation — helps in portfolios and job interviews.
- When you push these changes, make a commit like: git add README.md
  git commit -m "Add clean README with setup instructions and project overview"
  git push
