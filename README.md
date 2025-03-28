# Angular Twitter Clone

A simplified Twitter-like application built with Angular that consumes the JSONPlaceholder API to display users, posts, and comments in a clean, responsive interface.

## Features

- **User Selection**: Browse through a list of users
- **Posts Display**: View posts from the selected user
- **Comments View**: See comments associated with each post
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean interface built with TailwindCSS and Material Symbols

## Technologies Used

- **Angular 19**: Modern Angular framework with standalone components
- **TailwindCSS**: Utility-first CSS framework for styling
- **RxJS**: Reactive programming library for handling asynchronous operations
- **JSONPlaceholder API**: Mock REST API for testing and prototyping

## Project Structure

```
src/
  app/
    components/
      user/       # User selection component
      post/       # Post display component
      comment/    # Comment display component
    services/
      api.service.ts  # Service for API communication
```

## Development Setup

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.4.

### Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## API Endpoints

This project uses the following JSONPlaceholder API endpoints:

- **Users**: `https://jsonplaceholder.typicode.com/users`
- **Posts**: `https://jsonplaceholder.typicode.com/posts` and `https://jsonplaceholder.typicode.com/posts?userId={id}`
- **Comments**: `https://jsonplaceholder.typicode.com/comments` and `https://jsonplaceholder.typicode.com/comments?postId={id}`

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
