
require ("dotenv").config();
const express = require('express')
const app = express()
const port = 7000
const axios = require('axios');
const apiurl="https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

console.log("token", process.env._API_TOKEN);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/names", async (req, res, next) => {
    try {
      if (!process.env.RANDOM_API_TOKEN) {
        throw new Error("You forgot to set _API_TOKEN");
      }
      const result = await axios.get(apiUrl, {
        headers: {
          "X-Api-Key": process.env._API_TOKEN,
        },
      });
      res.json(result.data);
    } catch (err) {
      next(err);
    }
  });
  

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  