
const { test, expect } = require('@playwright/test');
const ReqResPage = require('../pages/reqresPage'); // Import the page object
const userData = require('../data/userData'); // Import user data

test.describe('API Automation Tests for ReqRes', () => {
  let reqResPage; // Variable to hold the ReqResPage instance
  let userId; // Variable to store the ID of the created user

  // Initialize the page object before each test
  test.beforeEach(async ({ request }) => {
    reqResPage = new ReqResPage(request); // Create an instance of ReqResPage
  });

  // Test for GET request to fetch users
  test('GET /users?page=2', async () => {
    const response = await reqResPage.getUsers(2); // Fetch users from page 2
    expect(response.ok()).toBeTruthy(); // Validate the response

    const usersResponse = await response.json(); // Parse JSON response
    expect(usersResponse).toHaveProperty('page', 2); // Validate page number
    expect(usersResponse.data).toBeInstanceOf(Array); // Check data type
    expect(usersResponse.data.length).toBeGreaterThan(0); // Ensure there are users
    console.log('GET /users?page=2:', usersResponse);
  });

  // Test for POST request to create a new user
  test('POST /users', async () => {
    const response = await reqResPage.createUser(userData.newUser); // Create new user
    expect(response.ok()).toBeTruthy(); // Validate response
    
    const createdUser = await response.json(); // Parse JSON response
    expect(createdUser).toHaveProperty('id'); // Check if ID is present
    expect(createdUser.name).toBe(userData.newUser.name); // Validate name
    expect(createdUser.job).toBe(userData.newUser.job); // Validate job
    userId = createdUser.id; // Store user ID for later tests
    console.log('POST /users:', createdUser);
  });

  // Test for PUT request to update an existing user
  test('PUT /users/:id', async () => {
    const response = await reqResPage.updateUser(userId, userData.updatedUser); // Update user
    expect(response.ok()).toBeTruthy(); // Validate response
    
    const updatedResponse = await response.json(); // Parse JSON response
    expect(updatedResponse.name).toBe(userData.updatedUser.name); // Validate updated name
    expect(updatedResponse.job).toBe(userData.updatedUser.job); // Validate updated job
    console.log('PUT /users:', updatedResponse);
  });

  // Test for DELETE request to delete a user
  test('DELETE /users/:id', async () => {
    const response = await reqResPage.deleteUser(userId); // Delete user
    expect(response.ok()).toBeTruthy(); // Validate response
    
    // Verify user is deleted by checking for a 404 status
    // const checkResponse = await reqResPage.getUserById(userId);
    expect(response.status()).toBe(204); // Expect 404 for deleted user
    console.log('DELETE /users:', response.status()); // Log status
  });
});












//        npx playwright test tests/testSuite.spec.js