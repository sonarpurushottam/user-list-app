import axios from 'axios';

// Function to fetch unique countries from the list of users
export const fetchCountries = async () => {
  // Make a GET request to fetch users
  const res = await axios.get('https://dummyjson.com/users');
  
  // Extract data from the response
  const json = res.data;
  
  // Create a set of unique countries from the users' addresses
  return [...new Set(json.users.map((user) => user.address.country))];
};

// Function to fetch a paginated list of users
export const fetchUsers = async (page) => {
  // Calculate the number of users to skip based on the current page
  const skip = (page - 1) * 10;
  
  // Make a GET request to fetch a specific page of users
  const res = await axios.get(`https://dummyjson.com/users?limit=10&skip=${skip}`);
  
  // Extract data from the response
  const json = res.data;
  
  // Return the list of users
  return json.users;
};
