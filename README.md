﻿# Luxury (eCommerce Shop)


## Brief Description

Luxury is a simplified example of an eCommerce shop that has basic functionality, easy to use, and adapted for different devices. It was created using **create-vite-app**, and the application utilizes **Typescript** and MockApi to display products on the website.

![products-page](https://github.com/SanyaKiss/react-redux-shop/blob/main/images/readme/products-page.jpg?raw=true)

### Getting Started

To get started, you can simply clone this **react-redux-shop** repository and install the dependencies.

    git clone https://github.com/SanyaKiss/react-redux-shop.git
    cd react-redux-shop 

### Installation

Run the following command to install the required dependencies:

`npm i` 

### Adding Firebase Authetication

1.  **Creating a Firebase Project:**
    
    -   Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
    -   Give your project a name and select your country or region.
    -   Click "Create Project" to create the project.

2.  **Setting up Email/Password Authentication:**
    
    -   In the Firebase Console, navigate to the "Authentication" section in the left panel.
    -   In the "Sign-in method" tab, enable the "Email/Password" method.
    -   Follow the instructions to configure the email and password authentication.

3.  **Setting up Google Sign-In Authentication:**
    
    -   In the Firebase Console, navigate to the "Authentication" section.
    -   Enable the "Google" sign-in method in the "Sign-in method" tab.
    -   Configure the Google Sign-In method according to the instructions provided.
    
4.  **Getting Firebase Config Data:**
    
    -   In the Firebase Console, navigate to "Project settings" (gear icon) in the left panel.
    -   Go to the "General" or "Your project info" tab and find the "SDK setup and configuration" section.
    -   Copy the values of the following keys: `apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, `appId`.
    
5.  **Setting up Environment Files:**
    
    -   In the project's root folder, create a file named `.env`.
    -   Copy and paste the following text into the `.env` file, replacing `your apiKey`, `your authDomain`, and so on with your actual values:

```
VITE_API_KEY= your apiKey 
VITE_AUTH_DOMAIN= your authDomain 
VITE_PROJECT_ID= your projectId 
VITE_STORAGE_BUCKET= your storageBucket 
VITE_MESSAGING_SENDER_ID= your messagingSenderId 
VITE_APP_ID= your appId
```

### Running the Project

Use the following command to run the project:

`npm run dev` 

## Tech Stack

-   React
-   Redux-Toolkit
-   Vite
-   Typescript
-   React Router DOM
-   SCSS
-   Axios
-   MockApi

## Features

-   Search for products by name
-   Filter products by categories
-   Sort products by name, popularity, or price
-   Add desired items to the cart
-   Modify the quantity of items in the cart
-   Remove items from the cart

## Showcase

Below are the screenshots demonstrating the responsive design of Luxury: 

![mobile screenhots from app ](https://github.com/SanyaKiss/react-redux-shop/blob/main/images/readme/mobile-version.jpg?raw=true)

![Authentication](https://github.com/SanyaKiss/react-redux-shop/blob/main/public/images/readme/auth.jpeg?raw=true)
