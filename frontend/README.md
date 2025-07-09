# 📝 BitBlog - Full Stack Blog Application

A modern, responsive blog application built with React, Node.js, Express, and MongoDB. Features user authentication, blog creation, editing, and a clean, theme-aware UI.

## 🚀 Live Demo

- **Frontend**: [Live Demo](https://your-frontend-url.vercel.app)
- **Backend**: [API Endpoint](https://blog-app-te1y.onrender.com)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### User Authentication
- 🔐 User registration and login
- 🍪 Cookie-based authentication
- 👤 User profile management
- 🔒 Protected routes

### Blog Management
- ✍️ Create new blog posts
- 📖 Read blog posts with rich content
- ✏️ Edit existing blog posts
- 🗑️ Delete blog posts
- 📱 Responsive blog feed

### UI/UX
- 🎨 Light and dark theme support
- 📱 Fully responsive design
- 🎯 Modern DaisyUI components
- 🔔 Toast notifications
- ⚡ Smooth animations and transitions

### Additional Features
- 📞 Contact page
- 🔍 Blog search and filtering
- 📊 User dashboard
- 💾 Persistent theme settings

## 🛠️ Tech Stack

### Frontend
- **React 19** - Frontend framework
- **React Router DOM** - Navigation
- **Tailwind CSS** - Styling
- **DaisyUI** - UI components
- **Axios** - HTTP client
- **React Hot Toast** - Notifications
- **Vite** - Build tool

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **cookie-parser** - Cookie handling
- **cors** - Cross-origin resource sharing

## 📁 Project Structure

```
blog-app/
├── frontend/
│   ├── public/
│   │   ├── blog-cover.jpg
│   │   ├── contact.jpg
│   │   ├── hero.jpg
│   │   ├── logo.webp
│   │   └── profile.jpg
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   ├── context/
│   │   │   └── AppContext.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Feed.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Create.jsx
│   │   │   ├── EditBlog.jsx
│   │   │   ├── BlogPage.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── Mongodb.config.js
│   │   ├── controller/
│   │   │   ├── User.controller.js
│   │   │   └── Blog.controller.js
│   │   ├── middleware/
│   │   │   └── Auth.middleware.js
│   │   ├── models/
│   │   │   ├── User.model.js
│   │   │   └── Blog.model.js
│   │   └── routes/
│   │       ├── User.routes.js
│   │       └── Blog.routes.js
│   ├── index.js
│   └── package.json
└── README.md
```

## 🚀 Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Clone the Repository
```bash
git clone https://github.com/yourusername/bitblog.git
cd bitblog
```

### Backend Setup
```bash
cd backend
npm install
```

### Frontend Setup
```bash
cd frontend
npm install
```

## 🔧 Environment Variables

### Backend (.env)
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/bitblog
# OR for MongoDB Atlas
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bitblog

JWT_SECRET=your-secret-key-here
NODE_ENV=development
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:3000
```

## 🚀 Running the Application

### Development Mode

1. **Start Backend Server**
```bash
cd backend
npm run dev
```

2. **Start Frontend Server**
```bash
cd frontend
npm run dev
```

3. **Access the Application**
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

### Production Build

1. **Build Frontend**
```bash
cd frontend
npm run build
```

2. **Start Backend**
```bash
cd backend
npm start
```

## 📡 API Endpoints

### Authentication
- `POST /api/user/signup` - User registration
- `POST /api/user/login` - User login
- `GET /api/user/logout` - User logout
- `GET /api/user/profile` - Get user profile

### Blog Management
- `GET /api/blog/feed` - Get all blogs
- `POST /api/blog/create` - Create new blog
- `GET /api/blog/:id` - Get specific blog
- `PUT /api/blog/edit/:id` - Edit blog
- `DELETE /api/blog/delete/:id` - Delete blog
- `GET /api/blog/my-blogs` - Get user's blogs

## 🎨 Theme Support

The application supports both light and dark themes:

- **Light Theme**: Clean, minimalist design
- **Dark Theme**: Easy on the eyes for low-light usage
- **Theme Persistence**: User preference saved in localStorage
- **Smooth Transitions**: All components transition smoothly between themes

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Adapted layouts for tablets
- **Desktop**: Full-featured desktop experience
- **Cross-browser**: Compatible with all modern browsers

## 🔔 Toast Notifications

- **Success**: Green theme-aware notifications
- **Error**: Red theme-aware notifications
- **Loading**: Blue theme-aware notifications
- **Custom**: Flexible notification system

## 🛡️ Security Features

- **JWT Authentication**: Secure token-based auth
- **Password Hashing**: bcryptjs for password security
- **CORS Protection**: Configured for specific origins
- **Input Validation**: Server-side validation
- **Protected Routes**: Authentication required for sensitive operations

## 🎯 Performance Optimizations

- **Lazy Loading**: Components loaded on demand
- **Optimized Images**: Compressed and optimized assets
- **Efficient State Management**: Context API for global state
- **Smooth Animations**: Hardware-accelerated transitions
- **Caching**: Browser caching for static assets

## 📊 Development Scripts

### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Backend
```bash
npm start           # Start production server
npm run dev         # Start development server with nodemon
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - Frontend framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [DaisyUI](https://daisyui.com/) - UI components
- [Express.js](https://expressjs.com/) - Backend framework
- [MongoDB](https://mongodb.com/) - Database

## 📈 Future Enhancements

- 📧 Email notifications
- 🔍 Advanced search functionality
- 📊 Analytics dashboard
- 📱 Mobile app version
- 🌐 Multi-language support
- 📝 Rich text editor
- 📷 Image upload support
- 👥 User following system

---

**⭐ If you found this project helpful, please give it a star!**