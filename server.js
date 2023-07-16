const  express =require('express') 
const app= express()
import schema from './schema'
import resolvers from './resolvers'


const {graphqlHTTP} =require('express-graphql') 


app.get("/",(req,res)=>{
    res.send("simple message sent")
})


const root ={ lco: ()=>console.log("LearnCodeOnLine.in")}

app.use("/graphql",graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}
    
))
   


app.listen(1515,()=>console.log('Server is running') )