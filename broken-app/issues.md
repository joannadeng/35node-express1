# Broken App Issues

1. app request should use async function as callback

2. the request call back returns an array of promises, should await promises to be resolved

3.need to specify `express.json()` to accept json type request body

4. `try... catch...` should pass in the error to catch, in order to pass the parameter to `next()` function

5.`app.listen()` better add a callback to indicate the app is listening a specific port