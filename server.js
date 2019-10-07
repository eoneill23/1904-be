const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Animal Box';
app.locals.animals = [
  {
    type: 'unicorn',
    name: 'Keith'
  },
  {
    type: 'gecko',
    name: 'Mr. Gecko'
  }
]

app.get('/', (request, response) => {
  const animals = app.locals.animals;

  return response.json(animals)
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});