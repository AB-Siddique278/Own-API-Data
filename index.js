import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
const app =express();
const PORT =5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/',(req, res) => {
    console.log('[Test]!');
    res.send('hello this is HomePage')

});

app.listen(PORT, ()=> console.log(`server is running on port: http://localhost:${PORT}`))













// echo "# Own-API-Data" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/AB-Siddique278/Own-API-Data.git
// git push -u origin main