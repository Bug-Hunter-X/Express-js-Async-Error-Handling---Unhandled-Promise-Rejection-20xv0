# Express.js Async Error Handling - Unhandled Promise Rejection

This repository demonstrates a common error in Express.js applications related to unhandled promise rejections within asynchronous route handlers.  Improper error handling can lead to silent failures or unexpected crashes.

## Bug
The `bug.js` file contains an Express.js server with an asynchronous route handler. The `someAsyncOperation` function simulates an asynchronous operation that might throw an error. While the `.catch()` block handles the error within the promise, this is insufficient to prevent an unhandled promise rejection if the error is not properly managed at a higher level.  This can cause the server to crash unexpectedly without informative error messages.

## Solution
The `bugSolution.js` file demonstrates the correct approach. It uses a `try...catch` block around the asynchronous operation to handle potential errors gracefully, ensuring that the server remains responsive and provides informative error messages.