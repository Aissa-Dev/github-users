export const getUsers = () => "https://api.github.com/users";

export const getUserByName = (user) => `https://api.github.com/users/${user}`;

export const getUserRepo = (user) =>
  `https://api.github.com/users/${user}/repos`;
