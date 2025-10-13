import express from 'express';
import movies from './MOCK_DATA.json' with { type: 'json' };
import fs from 'fs';

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  return res.json(movies);
});
app.route('/api/movies')
.get((req, res) => {
  return res.json(movies);
})
.post((req, res) => {
  const body = req.body
  movies.push({...body, id: movies.length + 1});
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(movies),(err,data)=>{

    return res.json({status: "Success ", id: movies.length });
  });
})


app.route('/api/movies/:id')
.get((req,res)=>{
  const id = Number(req.params.id)
  const html = `<h1>User not found</h1>
  <p>Sorry, the user you are looking for does not exist.</p>`;
  const user = movies.find(user=>user.id === id)
  if(user){
    return res.json(user)
  }
  return res.send(html)
})
.patch((req, res)=>{
  const id = Number(req.params.id)
  const body = req.body
  const user = movies.find(user=>user.id === id)
  if(user){
    Object.assign(user, body)  
    return res.json({status: "Success ", user });
  }
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
