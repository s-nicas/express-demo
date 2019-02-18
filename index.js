const express = require('express')

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.get('/api/courses', (req, res) =>{
  res.send([1,2,3])
  // real world scenario we would get items from datebase
})

app.listen(3000, () => console.log('listening on port 3000'))

// express has restful request
// app.get(url, callback function)
// app.post()
// app.put()
// app.delete()
