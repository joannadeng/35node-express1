const express = require('express');
let axios = require('axios');
var app = express();

app.use(express.json())

app.post('/', async function(req, res, next) {
  try {
    let results = req.body.developers.map( d => {
      return getUser(d)
    });
    let promises = await Promise.all(results);

    let out = promises.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.send(JSON.stringify(out));
   
  } catch(err) {
    next(err);
  }
});

async function getUser(user) {
  let baseURL = 'https://api.github.com/users'
  let promise =  await axios.get(`${baseURL}/${user}`)
  return promise;
}

app.listen(3000,function(){
  console.log("Server running on port 3000")
});
