**Overview**
This project is an automated testing framework built with Playwright and JavaScript to verify API functionality for the ReqRes API. It’s structured around modular, reusable components and follows best practices to enhance maintainability and readability.

Project Structure
Configuration:

A dedicated configuration file (config.js) defines the base URL for the API, making it easy to update in one place if needed.
Page Object Model (POM):

A ReqResPage class encapsulates API interactions (like fetching, creating, updating, and deleting users) to keep code organized and reusable.
Each API action is defined as a method, allowing tests to call these methods instead of directly handling HTTP requests.
Data Management:

Test data (like user information) is stored in a separate file (userData.js), making it easy to modify user details for creation or update tests.
Separating test data enhances readability and allows for flexible, data-driven testing.
Test Suite:

The main test suite (testSuite.spec.js) uses Playwright's testing framework to organize and execute API tests.
The suite includes structured test cases for each API endpoint (GET, POST, PUT, DELETE) with clear validation steps.
A beforeEach hook initializes the API page object before each test, ensuring a fresh setup for consistent results.
Key Features and Tests
Fetch Users:

Purpose: Verify that the API correctly fetches a list of users.
Validation: Checks if the response includes the correct page number and if the list of users is returned as an array with at least one entry.
Create User:

Purpose: Validate user creation by sending user details and verifying the API response.
Validation: Ensures that a unique ID is returned, along with correct user details (e.g., name and job title).
Update User:

Purpose: Test updating an existing user’s information.
Validation: Confirms that the response includes updated user details and reflects the intended changes.
Delete User:

Purpose: Confirm that the user deletion endpoint works as expected.
Validation: Expects a 204 status response to indicate successful deletion.
