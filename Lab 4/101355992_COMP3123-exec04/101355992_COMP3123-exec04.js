var express = require('express')

const SERVER_PORT = 8090
var app = express()
//app.use(express.json())
app.use(express.urlencoded({extended: true}))

//http://localhost:8090/hello
app.get("/hello", (req, res)=>{
    res.send("Hello Express JS")
})


//Querystring
//http://localhost:8090/user?fmn=milanie&lnm=bano
app.get("/user", (req,res)=>{
    const data= req.query
    res.send(data)
})

//Path parameter
//http://localhost:8090/user/milanie/bano
app.post("/user", (req,res)=>{
    let fname = req.body.fname
    let lname = req.body.lname
    res.send({
        "fname" : fname,
        "lname" : lname,
    })
})

app.listen(SERVER_PORT, ()=> {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})