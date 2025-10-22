# Real Estate Management System

A modern, full-stack real estate management platform built with React, TypeScript, Node.js, and Express. This application provides a complete solution for property listings, agent management, and user interactions in the real estate market.

## Features

- **User Authentication** - Secure login and registration system
- **Property Listings** - Browse and search available properties
- **Agent Dashboard** - Specialized interface for real estate agents
- **Admin Panel** - Comprehensive administration features
- **Responsive Design** - Works on desktop and mobile devices
- **Image Upload** - Cloudinary integration for property images
- **Email Notifications** - Automated email services for important updates

## Tech Stack

### Frontend
- React 19 with TypeScript
- React Router for navigation
- Tailwind CSS for styling
- Axios for API requests
- Vite as the build tool

### Backend
- Node.js with Express
- TypeScript
- JWT Authentication
- MongoDB (or your preferred database)
- Cloudinary for image storage
- Nodemailer for email notifications

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- MongoDB database
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/realestate.git
   cd realestate
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   EMAIL_SERVICE=your_email_service
   EMAIL_USERNAME=your_email_username
   EMAIL_PASSWORD=your_email_password
   ```

4. **Run the application**
   ```bash
   # Start backend (from backend directory)
   npm run dev
   
   # Start frontend (from frontend directory)
   npm run dev
   ```

## Project Structure

```
realestate/
├── backend/               # Backend server code
│   ├── src/              # Source files
│   │   ├── controllers/  # Request handlers
│   │   ├── middleware/   # Custom middleware
│   │   ├── models/       # Database models
│   │   ├── routes/       # API routes
│   │   ├── services/     # Business logic
│   │   └── server.ts     # Server entry point
│   └── tests/            # Test files
│
└── frontend/             # Frontend React application
    ├── public/           # Static files
    └── src/
        ├── components/   # Reusable UI components
        ├── pages/        # Page components
        ├── services/     # API services
        ├── types/        # TypeScript type definitions
        ├── App.tsx       # Main App component
        └── main.tsx      # Entry point
```

## Available Scripts

### Backend
- `npm run dev` - Start development server with hot-reload
- `npm run build` - Build the application
- `npm start` - Start production server
- `npm test` - Run tests

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@yourusername](https://twitter.com/yourusername) - your.email@example.com

Project Link: [https://github.com/yourusername/realestate](https://github.com/yourusername/realestate)
