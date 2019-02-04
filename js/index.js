const app = "I don't do much.";

fetch('https://api.github.com/user/repos')
  .then(res => res.json())
  .then(json => console.log(json));

  const token = 'e3b86edd76d9ecd336891a26f53bd8776192b8c4';
  fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json));
