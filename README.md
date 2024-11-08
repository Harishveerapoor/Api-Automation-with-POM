
## Overview

This project is an **automated testing framework** built with **Playwright** and **JavaScript** to verify the functionality of the **ReqRes API**. It follows best practices for **modularity**, **reusability**, and **maintainability**, with a focus on clear and concise code organization.

## Project Structure

### Configuration

- A dedicated **configuration file** (`config.js`) defines the **base URL** for the API, making it easy to update in one place when the API base URL changes.

### Page Object Model (POM)

- The **ReqResPage** class encapsulates all **API interactions** (such as fetching, creating, updating, and deleting users) to keep the code organized and reusable.
- Each API action is defined as a method, allowing tests to call these methods instead of directly handling HTTP requests, ensuring modularity.

### Data Management

- **Test data** (such as user information for creation or updates) is stored in a separate file (`userData.js`). This approach enhances **readability** and allows for **data-driven testing**.
- The data file enables easy modification of user details for different tests, allowing the test suite to be flexible and maintainable.

### Test Suite

- The main test suite (`testSuite.spec.js`) leverages **Playwright’s testing framework** to organize and execute **API tests**.
- It includes structured **test cases** for each **API endpoint** (GET, POST, PUT, DELETE), with clear validation steps.
- A **beforeEach hook** is used to initialize the **API page object** before each test, ensuring a **fresh setup** for consistent results and avoiding cross-test dependencies.

## Key Features and Tests

### Fetch Users

- **Purpose**: Verifies that the API correctly fetches a list of users.
- **Validation**: Checks that the response includes the correct **page number** and that the list of users is returned as an array with at least one entry. This confirms the API is correctly fetching data.

### Create User

- **Purpose**: Validates the **user creation** functionality by sending user details and verifying the API response.
- **Validation**: Ensures that a **unique ID** is returned for the created user, along with the correct **user details** (name and job title). This confirms that the API is successfully creating users.

### Update User

- **Purpose**: Tests the **update user** functionality to modify an existing user’s information.
- **Validation**: Confirms that the response includes updated user details and reflects the intended changes. This ensures that the **PUT** request works as expected.

### Delete User

- **Purpose**: Confirms that the **user deletion** endpoint works as expected.
- **Validation**: Expects a **204 status code** in the response to indicate that the user was successfully deleted, confirming the **DELETE** operation was successful.

## Technologies Used

- **Playwright**: A powerful automation framework for browser testing and API interactions.
- **JavaScript**: Used for scripting the test cases.
- **Page Object Model (POM)**: Employed for better code organization and reusability.
- **Data-Driven Testing**: Utilized to test with different sets of user data for more comprehensive validation.

## Setup and Installation

1. Clone this repository to your local machine.
2. Install dependencies:
   ```bash
   npm install
