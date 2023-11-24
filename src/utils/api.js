// src/utils/api.js

// Example API endpoints (replace with actual endpoints)
const BASE_URL = 'http://localhost:19006';

export const addUserAPI = async (username, password) => {
  try {
    // Make POST request to add user endpoint
    const response = await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    // Process response if needed
    // const data = await response.json();
    // return data;
  } catch (error) {
    throw new Error('Registration failed');
  }
};

export const loginUserAPI = async (username, password) => {
  try {
    // Make POST request to login endpoint
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    // Process response if needed
    // const data = await response.json();
    // return data;
  } catch (error) {
    throw new Error('Login failed');
  }
};
