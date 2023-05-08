const express = require('express')

const app = express();
const port = 3000 

app.get('/', (req, res) => { //this will never be reached
    res.send(`
      <h1>${99} bottles of beer on the wall</h1>
      <a href="/${98}"</a>Take one down, Pass it around</a>
      `);
  });

app.get('/:BottleOfBeer', (req, res)=>{
        if(req.params.BottleOfBeer === '0'){
            res.send(`
            <h1>${req.params.BottleOfBeer} bottles of beer on the wall</h1>
            <a href="/"</a>Put back 99 bottles of beer on the wall</a>
        `)
        } else {
            res.send(`
            <h1>${req.params.BottleOfBeer} bottles of beer on the wall</h1>
            <a href="/${req.params.BottleOfBeer - 1}"</a>Take one down, Pass it around</a>
        `)
        }
});

app.listen(port, () => {
    console.log(`Server is listening on, ${port}`)
});