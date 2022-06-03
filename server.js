const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': 'Sheyaa bin Abraham-Joseph',
        'birthLocation': 'London, England'
     },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Sheyaa bin Abraham-Joseph',
        'birthLocation': 'London, England'
  },
    'unknown':{
        'age': 0,
        'birthName': 'unkown',
        'birthLocation': 'unkown'
  }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname +'/index.html')
})

app.get('/api/:name',(request,response)=>{
    const rapperName = request.params.name.toLowerCase()
    
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
   
})

app.listen(PORT, ()=>{
    console.log(`The server is now runnin on port ${PORT}!`)
})