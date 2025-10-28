# FixFlow - Streamlined Ticket Management System

## Overview ✨

FixFlow is a modern, responsive web application designed for seamless ticket management. Built with Next.js, React, and TypeScript, it offers a user-friendly interface for creating, tracking, and resolving support tickets. This project showcases robust frontend development, client-side authentication, and data persistence using `localStorage` to simulate a full-stack experience.

## Features 🚀

- **User Authentication**: Secure sign-up, login, and logout functionalities with client-side session management.
- **Interactive Dashboard**: Provides a comprehensive overview of ticket statistics (total, open, in progress, closed).
- **Ticket Management (CRUD)**: Easily create, view, edit, and delete support tickets.
- **Dynamic Ticket Filtering**: Search functionality to quickly find tickets by title, description, or status.
- **Responsive UI**: Optimized for various screen sizes, ensuring a consistent user experience across devices.
- **Form Validation**: Utilizes Zod and React Hook Form for robust input validation.
- **Toaster Notifications**: Provides immediate feedback for user actions.

## Getting Started

### Installation 💻

To get a local copy up and running, follow these simple steps.

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/ayomikun-ade/fix-flow-react.git
    ```
2.  **Navigate to Project Directory**:
    ```bash
    cd fix-flow-react
    ```
3.  **Install Dependencies**:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
4.  **Run the Development Server**:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Environment Variables

This project currently uses `localStorage` for authentication and data persistence, so no explicit `.env` variables are required for basic functionality.

## Usage

Upon launching the application, you will be directed to the homepage. From there, you can:

### User Authentication

- **Sign Up**: Navigate to `/auth/signup` to create a new user account. Provide your name, email, and password.
- **Log In**: Navigate to `/auth/login` to access an existing account.
  - **Test Credentials:**
    - Email: `test@example.com`
    - Password: `test123`
- **Logout**: Once logged in, a "Logout" button will appear in the navigation bar to end your session.

### Dashboard

After logging in, you will be redirected to the dashboard.

- The dashboard displays key metrics for your tickets, including the total number of tickets, open tickets, tickets in progress, and closed tickets.
- A personalized welcome message will greet you.
- A "Go to Tickets" button provides quick access to the ticket management page.
- A bar chart for ticket analysis.

### Ticket Management

Navigate to the `/tickets` page to manage all your support tickets.

- **Create New Ticket**: Click the "Create Ticket" button. A dialog will appear where you can enter the ticket's title, description, status, and priority.
- **View Tickets**: All your tickets are displayed as cards, each showing its title, description, status, priority, and last updated date.
- **Edit Ticket**: Click the "Edit" button on a ticket card to modify its details.
- **Delete Ticket**: Click the "Delete" button on a ticket card. A confirmation dialog will appear before permanent deletion.
- **Search Tickets**: Use the search bar to filter tickets by their title, description, or status, allowing for quick retrieval of specific issues.

All ticket data and user sessions are stored locally in your browser's `localStorage`, providing a seamless experience without a backend server for this particular demonstration.

## Technologies Used 🛠️

| Technology          | Description                                        | Link                                            |
| :------------------ | :------------------------------------------------- | :---------------------------------------------- |
| **Next.js**         | React framework for production                     | [Next.js](https://nextjs.org/)                  |
| **React**           | JavaScript library for building user interfaces    | [React](https://react.dev/)                     |
| **TypeScript**      | Strongly typed programming language                | [TypeScript](https://www.typescriptlang.org/)   |
| **Tailwind CSS**    | Utility-first CSS framework                        | [Tailwind CSS](https://tailwindcss.com/)        |
| **shadcn/ui**       | Reusable UI components                             | [shadcn/ui](https://ui.shadcn.com/)             |
| **Zod**             | TypeScript-first schema declaration and validation | [Zod](https://zod.dev/)                         |
| **React Hook Form** | Performant, flexible and extensible forms          | [React Hook Form](https://react-hook-form.com/) |
| **Sonner**          | An opinionated toast component                     | [Sonner](https://sonner.emilkowal.ski/)         |
| **Lucide React**    | Beautiful & consistent icon toolkit                | [Lucide React](https://lucide.dev/icons/)       |
| **date-fns**        | Modern JavaScript date utility library             | [date-fns](https://date-fns.org/)               |

## Contributing 🤝

Contributions are welcome! If you'd like to improve FixFlow, please follow these steps:

- ⭐ Fork this repository.
- 👯 Clone your forked repository: `git clone https://github.com/YOUR_USERNAME/fix-flow-react.git`
- 🌱 Create a new branch: `git checkout -b feature/your-feature-name`
- 💡 Make your changes and commit them: `git commit -m 'feat: Add new feature'`
- ⬆ Push to the branch: `git push origin feature/your-feature-name`
- 📬 Open a pull request against the `main` branch.

Please ensure your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is open-source.

## Author Info

**Ayomikun Ade**

- LinkedIn: [https://linkedin.com/in/YOUR_LINKEDIN_USERNAME](https://linkedin.com/in/YOUR_LINKEDIN_USERNAME)
- Twitter/X: [https://twitter.com/YOUR_TWITTER_USERNAME](https://twitter.com/YOUR_TWITTER_USERNAME)

---

### Badges

[![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
