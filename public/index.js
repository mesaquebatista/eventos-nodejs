const app = require('../src/app');
const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost:27017/myFirstApp',
    {useNewUrlParser: true, useUnifiedTopology: true}
)

app.listen(3000, ()=>{
    console.log('Listening on port 3000');
});