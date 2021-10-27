export const usersUrl = () => "https://api.github.com/users";

export const UserByNameUrl = (user) =>
  `https://api.github.com/search/users?q=fullname:${user}`;

export const UserReposUrl = (user) =>
  `https://api.github.com/users/${user}/repos`;

//https://api.github.com/search/users?q=fullname:nasser%20abachi

//"repos_url": "https://api.github.com/users/abachi/repos",
//html_url": "https://github.com/abachi",
//"following_url": "https://api.github.com/users/abachi/following
//"followers_url": "https://api.github.com/users/abachi/followers",
