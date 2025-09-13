const API_URL = "http://127.0.0.1:8000"; // change to deployed URL later

// Signup
export const signup = async (user) => {
  const response = await fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return await response.json();
};

// Login
export const login = async (credentials) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();

  if (response.ok) {
    localStorage.setItem("token", data.access_token); // save JWT
  }

  return data;
};
