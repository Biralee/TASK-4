// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>IGBIAYE EYEBIRA GODSTIME</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
function addPost(event) {
  event.preventDefault();
  
  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;
  const myPost = {
      title: title,
      body: body
  };
  fetch('https://jsonplaceholder.typicode.com/postsERROR', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(myPost)
  })
      .then((res) => {
          if (res.ok) {
              return res.json() 
          } else {
              return Promise.reject({ status: res.status, statusText: res.statusText });
          }   
          
      })
      .then((data) => console.log(data))
      .catch(err => console.log('Error message:', err.statusText));
}