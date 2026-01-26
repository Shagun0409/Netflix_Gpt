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
-Unsubscribed to the onAuthStateChanged callback
-Add hardcoded values to the constants file
-register for tmbd api & create an app
-get data from tmdb now playing movies list api
-custom hook for now playing movies
-created movieslice 
-update store with movies data
-planning for main container & secondary container
-fetched data for trailer video
-update store with trailer video
-embedded the youtube video and make it autoplay and mute
-build movie list 
-build movie card
-tmdb image cdn url
-display all api data 
-GPT search page
-GPT search bar
-multi lang feature


# NetflixGpt 🎬🤖

A Netflix-style movie browsing app with GPT-powered search and multi-language support.

## 🚀 Features Implemented

- Create React App  
- Configured Tailwind CSS  
- Header component  
- Routing with React Router  
- Login & Sign Up forms  
- Form validation  
- useRef Hook usage  
- Firebase setup  
- Deploying app to production  

## 🔐 Authentication

- Create Sign Up user account  
- Implement Sign In User API  
- Created Redux store with `userSlice`  
- Implemented Sign Out  
- Update user profile  
- Bug Fix: Display name & profile picture update  
- Bug Fix: Redirect unauthenticated users to Login and authenticated users to Browse  
- Unsubscribed from `onAuthStateChanged` callback  

## 🎥 Movie Features (TMDB)

- Register for TMDB API & create app  
- Fetch now playing movies from TMDB  
- Custom hook for now playing movies  
- Created `movieSlice`  
- Update store with movies data  
- Planned main container & secondary container  
- Fetch trailer video data  
- Update store with trailer video  
- Embedded YouTube trailer (autoplay & mute)  
- Build Movie List & Movie Card components  
- Use TMDB Image CDN URL  
- Display all API data  

## 🤖 GPT & Extra Features

- GPT Search Page  
- GPT Search Bar  
- Multi-language feature 🌍  






