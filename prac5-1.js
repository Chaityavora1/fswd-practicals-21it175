const express=require('express'); 
const app=express(); 
app.use(express.json()); 
const products = []; 
app.post('/add', (req, res) => { 
    const data = req.body; 
    if (!data.name || !data.id || !data.price) { 
      res.status(400).send('Please provide all the required fields'); 
      return; 
    } 
    
    products.push({ 
      name: data.name, 
      id: data.id, 
      price: data.price, 
    }); 
     res.status(200).send(products); 
     
  }); 
app.get('/display',(req,res)=>{ 
    res.json(products); 
}) 
app.get('/display/:id',(req,res)=>{ 
    const id = req.params.id; 
    const product = products.find((p)=>  p.id == id ); 
    res.json(product); 
}) 
 
app.listen(8081);