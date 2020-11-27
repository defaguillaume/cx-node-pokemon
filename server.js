const arg = process.argv.slice(2);
const express = require("express");
const app = express();
const pokedex = require("./pokedex.json");
var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(arg[0], function() {
  console.log(
    "pokedex is on http://localhost:"+arg[0]
  );
});

app.get("/",function(request,response){
    return response.send(" if you looking for the pokedex enter that :/pokemons ")
}
)
app.get( "/pokemons/",function(request, response) {
    return response.json (pokedex);
});

app.get( "/pokemons/:id",(req, res) => {
    const pokemons = pokedex.find(val =>val.id == parseInt(req.params.id))
    return res.json(pokemons);
});


app.use ("/items" ,function(req, res) {
    res.end(JSON.stringify(req.body));
    
});

app.get( "/items/:id",function(request, response) {
    const pokemons = pokedex.find(val =>val.id == parseInt(req.params.id))

});
