# SafetyApp

**Empowering Communities, Ensuring Safety Together**

SafetyApp is a **comprehensive community safety platform** that combines a modern **React-based frontend** with a robust **Express + MongoDB backend**. It serves as a central hub for community members to report incidents, track emergency situations, and coordinate responses effectively.

---

## 🏗️ Project Architecture (MVC Pattern)

This application follows the **Model-View-Controller (MVC)** architectural pattern, providing a clean separation of concerns:

### 📊 **Models** (Data Layer)
Located in `backend/model/`:
- **`userModel.js`** - User data schema and database operations
- **`reportModel.js`** - Incident report data schema and database operations

### 🎮 **Controllers** (Business Logic Layer)
Located in `backend/controller/`:
- **`userController.js`** - Handles user authentication, registration, and profile management
- **`reportController.js`** - Manages incident reporting, retrieval, and processing logic

### 🖥️ **Views** (Presentation Layer)
Located in `frontend/src/`:
- **Pages** (`pages/`) - Main application views (Home, Login, Reports, etc.)
- **Components** (`components/`) - Reusable UI components (Header, Navigation, Forms, etc.)
- **Layouts** (`layouts/`) - Page structure and organization

### 🔗 **Routes** (Application Flow)
Located in `backend/routes/`:
- **`userRoutes.js`** - API endpoints for user-related operations
- **`reportRoutes.js`** - API endpoints for incident reporting and management

### 🎯 **Context** (State Management)
Located in `frontend/src/context/`:
- **`AuthContext.jsx`** - User authentication state management
- **`ReportContext.jsx`** - Incident report data state management
- **`UserContext.jsx`** - User profile and preferences state
- **`ThemeContext.jsx`** - Application theme and styling state

---

## 🚀 Why SafetyApp?
This platform empowers communities to take control of their safety through:

### 🎯 Community-Driven Safety
- **Real-time Incident Reporting**: Quickly report and track safety concerns
- **Interactive Map Visualization**: See incident locations and SOS signals
- **Emergency Route Planning**: Find the quickest routes to incidents

### 🤝 Collective Response
- **Community Alerts**: Instant notifications about nearby incidents
- **Preventive Measures**: Historical data analysis to prevent future incidents
- **Emergency Contact Network**: Quick access to help when needed

### ✨ Core Features

#### 🚨 Safety Features
- **Incident Reporting System**: Easy-to-use forms for reporting various types of incidents
- **Real-Time SOS Tracking**: Monitor and respond to emergency SOS signals
- **Interactive Incident Map**: Visualize incident locations and hotspots
- **Route Planning**: Optimal paths for emergency response
- **Emergency Contacts Directory**: Quick access to important contacts

#### 💻 Technical Features
- **Modern React Frontend**: Fast, responsive interface built with React and Vite
- **Secure Backend**: Express.js and MongoDB for reliable data management
- **Real-Time Updates**: Instant notification system for emergency alerts
- **Interactive Maps**: Advanced mapping features for incident tracking
- **Mobile-Responsive Design**: Access from any device, anywhere
- **Dark Mode Support**: Complete theme system with slate-800/900 color scheme
- **Theme Context**: Global state management for light/dark mode preferences
- **Smooth Transitions**: CSS animations for seamless theme switching

#### 🌙 **Dark Mode Features**
- **Global Theme Toggle**: Switch between light and dark themes from Settings
- **Consistent Styling**: All components automatically adapt to theme changes
- **Professional Color Scheme**: Uses slate-800/900 colors for dark mode
- **Form Integration**: All input fields, buttons, and cards support both themes
- **Accessibility**: Maintains good contrast ratios in both light and dark modes
- **Persistent State**: Theme preference is maintained across the application

---

## 📦 Getting Started

### ✅ Prerequisites
Make sure you have installed:
- **JavaScript** (Node.js environment)
- **npm** (Node Package Manager)

---

### 🔽 Installation

```bash
# 1. Clone the repository
git clone https://github.com/h4nzdev/SafetyApp

# 2. Navigate to the project directory
cd SafetyApp

# 3. Install backend dependencies
cd backend
npm install

# 4. Install frontend dependencies
cd ../frontend
npm install
```

---

### 🔽 Usage

```bash
# Start the backend server (from backend directory)
cd backend
npm start

# Start the frontend development server (from frontend directory)
cd frontend
npm run dev
```

---

## 🛠️ Built With
- [Express](https://expressjs.com/) – Backend framework for building APIs
- [MongoDB + Mongoose](https://mongoosejs.com/) – Database & ODM for data modeling
- [React](https://react.dev/) – Frontend library for building UI
- [Vite](https://vitejs.dev/) – Fast build tool for frontend projects
- [Vue](https://vuejs.org/) *(optional modules)* – Additional frontend capabilities
- [ESLint](https://eslint.org/) – Code linting and style consistency
- [Axios](https://axios-http.com/) – HTTP client for API requests
- **JSON** – Data format for API communication
- **Markdown** – Formatting for documentation
- **npm** – Package manager
- [Nodemon](https://nodemon.io/) – Auto-restart for backend development

