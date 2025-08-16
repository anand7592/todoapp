# Todo List App

A simple React-based Todo List application that lets you add, toggle, and delete tasks. Tasks are persisted in your browser's local storage.

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Tasks are saved between sessions (local storage)
- Responsive and clean UI

## Getting Started

### Prerequisites

- Node.js (v14 or newer recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/todolist.git
   cd todolist
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App

Start the development server:
```sh
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Running Tests

```sh
npm test
```

## Project Structure

```
src/
  App.js           # Main app component
  components/
    TodoInput.jsx  # Input form for new tasks
    TodoList.jsx   # List and controls for tasks
  utils/
    taskHandlers.js # Task manipulation logic
  ...
public/
  index.html       # HTML template
  ...
```

## Built With

- [React](https://react.dev/)
- [Create React App](https://create-react-app.dev/)

## License

This project is licensed under the MIT
