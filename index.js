
const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())


const port = 5000;

app.get('/', (req, res) => {
    res.send('All student go to uk by student visa for life time with their spouse')
})

const users =[
    {id :0, Name:"Shabana", email:"shabana@gmail.com", phone: '017253565231'},
    {id :02, Name:"Shakib", email:"Shakib@gmail.com", phone: '0176523451' },
    {id :03, Name:"Mashrafe", email:"Mashrafe@gmail.com", phone: '01862301221'},
    {id :04, Name:"Mahmudullah", email:"Mahmudullah@gmail.com", phone: '015454842' },
    {id :05, Name:"Mushfique", email:"Mushfique@gmail.com"},
    {id :01, Name:"Mustafiz", email:"Mustafiz@gmail.com"}
]

app.get('/fruits', (req, res) => {
    res.send(['mangoes', 'banana', 'apple', 'orange'])
})

app.get('/fruits/mangoes/fazly', (req, res) => {
    res.send('Fazly looks like fozlu')
})


app.get('/users', (req, res) => {
    const search = req.query.search;
    if(search) {
     const searchResult = users.filter(user => user.Name.toLocaleLowerCase().includes(search)); 
     res.send(searchResult)
    }
    else{
        res.send(users) 
    }
   
})

app.get('/users/:id', (req,res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})


app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    res.json(newUser)

})

app.listen(port, () => {
    console.log('This is port number', port)
})