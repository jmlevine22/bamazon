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
  

   //function that will display menu options 
   function start () {

    inquirer.prompt([

    {
        type: "list",
        name: "manager options",
        message: "WHAT WOULD YOU LIKE TO DO? (USE ARROW KEY)",
        choices: [
          "VIEW PRODUCTS FOR SALE",
          "VIEW LOW INVENTORY",
          "ADD TO INVENTORY",
          "ADD NEW PRODUCT"
        ],
      },

]).then(function(user){

    var choiceOne = "VIEW PRODUCTS FOR SALE"
    var choiceTwo = "VIEW LOW INVENTORY"
    var choiceThree = "ADD TO INVENTORY"
    var choiceFour = "ADD NEW PRODUCT"

    if(choiceOne) {
        viewProducts();
    }

    else if (choiceTwo) {
        viewInventory();
    }
/*
    else if (choiceThree) {
        addInventory();

    }

    else if (choiceFour) {
        addProduct();
    }*/
});
   }

///OPTION 1 TO VIEW PRODUCTS 

function viewProducts() {

    var query = connection.query("SELECT * from products",
    

    function(err, res) {
        if (err) throw err;

        const table = cTable.getTable(res);
        console.log(table);
        
        start();
    
});
}

//OPTION 2 VIEW INVENTORY 

function viewInventory () {

 
    var query = connection.query("SELECT * FROM products WHERE stock_quantity < 5",
    
     function(err, res) {
        if (err) throw err;

 
    const table = cTable.getTable(res);
    console.log(table);
    
    start();
     });
    }


  /*  //OPTION 3 ADD TO INVENTORY 

function addProduct() {

    var query = connection.query ("INSERT INTO products SET ? WHERE ?",
{
        product: "",
        department_name: "",
        quantity: "",
        price: "",

},

console.log(res.affectedRows + "product inserted~ \n"));
}


};
   */

