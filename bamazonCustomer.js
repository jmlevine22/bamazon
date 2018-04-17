var mysql = require('mysql');
var inquirer = require("inquirer");
const cTable = require("console.table");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon3"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start();
  });
  


  //function that will display items
  function start () {

    var query = connection.query("SELECT * FROM products ",

    function(err, res) {
        if (err) throw err;

        const table = cTable.getTable(res);
        console.log(table);

    });

    inquirer.prompt([
       {
        type: "input",
        message: "What is the ID of the product you'd like to buy?",
        name: "id"

       }, 
       {
           type: "input", 
           message: "How many units of the product would you like to buy?",
           name: "units"
       }
    ]).then(function(user){
        var id = user.id;
        var units = user.units;
        //create function that checks if ammount is in stock 

        check(id, units);
    });
} // end of start function

function check (id, units) {

    var id = id;
    var units = units;

    var query = connection.query("SELECT stock_quantity FROM products WHERE ? ",
    {
        id: id
    },

    function(err, res){//callback function
        if (err) throw (err);
        var quantity = res[0].stock_quantity; 

        if(units <= quantity) {
            buy(id, units, quantity);
            cost(id, units);
            
        }
        
            else {
                console.log("UNITS REQUESTED EXCEED UNITS ON HAND");
                start();
            };
           
       
    });//end callback 
} //end check


function buy (id, units, quantity) {
    var id = id;
    var units = units;
    var quantity = quantity; 
    var newQuantity = quantity - units;

    var query = connection.query("UPDATE products SET ? WHERE ?",
[
    {
      stock_quantity: newQuantity

    },
    {
        id: id
    }

],
    function(err, res) {
        
        if (err) throw err;

    });

}

function cost (id, units) {
    var id = id;
    var units = units;
    var bill;

    var query = connection.query("SELECT price FROM products WHERE ?",
    {
        id: id
    },

    function(err, res) {
        if(err) throw err;
    
    var price = res[0].price; 
    bill = units * price; 
        console.log("YOUR TOTAL BILL IS: " + "$" + bill);
    }


)
}