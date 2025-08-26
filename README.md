# Food App

A full-stack food ordering application built with React (Vite), Node.js, and MongoDB. The app features a customer-facing frontend, an admin dashboard, and a backend API for managing users, orders, and food items.

## Features

- User authentication and management
- Browse and order food items
- Shopping cart functionality
- Order tracking
- Admin dashboard for managing food items and orders
- Image uploads for food items
- Responsive UI

## Folder Structure

```
food-app/
├── FOOD-APP/
│   └── admin/           # Admin dashboard (React + Vite)
│       ├── src/
│       │   ├── assets/  # Images and asset files
│       │   ├── components/
│       │   └── pages/
│       ├── public/
│       ├── index.html
│       └── package.json
├── backend/             # Backend API (Node.js + Express + MongoDB)
│   ├── config/          # Database configuration
│   ├── controller/      # Controllers for cart, food, order, user
│   ├── middleware/      # Auth middleware
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── uploads/         # Uploaded food images
│   ├── app.js           # Entry point
│   ├── .env             # Environment variables
│   └── package.json
├── frontend/            # Customer-facing frontend (React + Vite)
│   ├── src/
│   │   ├── assets/      # Images and asset files
│   │   ├── components/
│   │   ├── context/
│   │   └── pages/
│   ├── public/
│   ├── index.html
│   └── package.json
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- MongoDB database

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/food-app.git
    cd food-app
    ```

2. Install backend dependencies:
    ```sh
    cd backend
    npm install
    ```

3. Install frontend dependencies:
    ```sh
    cd ../frontend
    npm install
    ```

4. Install admin dashboard dependencies:
    ```sh
    cd ../FOOD-APP/admin
    npm install
    ```

5. Set up environment variables:
    - Create a `.env` file in `backend/` with your MongoDB URI and other secrets.

### Running the App

- **Start the backend:**
    ```sh
    cd backend
    npm start
    ```
    Backend runs on [http://localhost:5000](http://localhost:5000).

- **Start the frontend:**
    ```sh
    cd ../frontend
    npm run dev
    ```
    Frontend runs on [http://localhost:5173](http://localhost:5173).

- **Start the admin dashboard:**
    ```sh
    cd ../FOOD-APP/admin
    npm run dev
    ```
    Admin dashboard runs on [http://localhost:5174](http://localhost:5174).

## Technologies Used

- React (Vite)
- Node.js & Express
- MongoDB & Mongoose
- Tailwind CSS
- JWT Authentication
- Multer (for image uploads)

## License

This project is licensed under the MIT License.

---

Feel free to contribute or open
