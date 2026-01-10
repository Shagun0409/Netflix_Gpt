# Netflix_Gpt

A Netflix-inspired GPT application built with React + Vite.

## Prerequisites

- Node.js 20.19+ or 22.12+
- npm

## Setup

Create a new Vite project:
```bash
npm create vite@latest netflix-gpt
```

Run development server:
```bash
npm run dev
```

## Features Implemented

### Authentication
- **Login/SignUp Screen** - Welcome page for new and existing users
- **Sign in/Sign up Form** - Form validation and user authentication
- **Redirect to Browse Page** - Automatic navigation after successful authentication

### Browse Page (After Authentication)
- **Header** - Navigation and user profile
- **Main Movie Display**
  - Trailer playing in background
  - Movie title and description
  - Play button
- **Movie Suggestions** - AI-powered recommendations
- **Movie Lists**
  - Vertical scrollers for different categories
  - Multiple lists for browsing

### Netflix-GPT Features
- **Search Bar** - Search for movies
- **Movie Suggestions** - AI-powered movie recommendations

## Technologies Used

- React
- Vite
- Tailwind CSS (Configured)
- JavaScript/JSX

## Project Structure

```
src/
  ├── App.jsx
  ├── App.css
  ├── main.jsx
  └── index.css
public/
```

# NetflixGpt
-Create React App
-Configuard tailwind
-Header
-Routing 
-Login Form
-Sign up form
-Form Validation
-UseRef Hook
-firebase setup
-deploying our app to production
-create signup user account
-Implement Sign In User Api
-Created Redux store with userSlice
-implemented signout
-update profile
-fetch from TMDB Movies
-BugFix:Sign up user displayName and profile picture update
-BugFix: if the user is not logged in redirect to /browse to login page  and vice-versa




