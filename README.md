# Frávega Challenge

This project is a technical challenge for **Frávega**, focusing on API consumption, search by URL and query, data persistence, global storage, and global favorites. The entire project is **responsive** and follows **SOLID** principles and **Clean Architecture**.

## Description

The application allows performing searches via URL, enabling users to share specific results with others. The application state is managed globally using **Zustand**, and the URL query acts as a state, which makes it possible to share exact products through links.

Data persistence is handled both in local storage and globally for functionalities like favorites. Additionally, **Client-Side Rendering (CSR)** and **Server-Side Rendering (SSR)** have been implemented to enhance performance.

Key components have been unit tested using **Jest** and **Testing Library**. The entire project is built with **TypeScript**, with data coming from APIs controlled using **mappers**.

## Features

- **API Consumption**: Interacts with various endpoints using **Axios** for handling HTTP requests.
- **Search by URL and query**: The search functionality is implemented through the URL, making it easy to share results.
- **Data Persistence**: Data is stored globally using **Zustand** and in the browser's local storage.
- **Global Favorites**: A global and persistent favorites system.
- **Responsive Design**: The app is fully responsive, ensuring a seamless experience across devices.
- **SOLID and Clean Architecture**: The code structure adheres to SOLID principles and clean architecture best practices.
- **Testing**: Unit tests are conducted on key components.
- **CSR and SSR**: Supports Client-Side and Server-Side Rendering.

## Live Demo

The app is deployed on Vercel:  
[https://users-github-fravega.vercel.app/](https://users-github-fravega.vercel.app/)

## Technologies Used

- **[Zustand](https://github.com/pmndrs/zustand)**: For global state management.
- **[MaterialUI](https://mui.com/)**: For UI.
- **[React Query](https://react-query-v3.tanstack.com/)**: For managing server-state and caching queries.
- **[Jest](https://jestjs.io/)**: For unit testing.
- **[Testing Library](https://testing-library.com/)**: For testing React components.
- **[React Icons](https://react-icons.github.io/react-icons/)**: For UI icons.
- **[Axios](https://axios-http.com/)**: For making HTTP requests.
- **[Emotion](https://emotion.sh/docs/introduction)**: For styling components using CSS-in-JS.

## Installation and Setup

Follow the steps below to run the project locally:

1. Clone this repository:
2. run pnpm install
3. run pnpm run dev
