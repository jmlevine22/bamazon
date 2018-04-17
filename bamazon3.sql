create database bamazon3;
use bamazon3; 




create table products(
id integer(3) auto_increment primary key,
product_name varchar (50) not null, 
department_name varchar (50) not null, 
price integer (5) not null, 
stock_quantity integer (4) not null
);

select * from products; 

insert into products (product_name, department_name, price, stock_quantity)
values ("Diamond_Ring", "Jewelry", 5052, 11);

insert into products (product_name, department_name, price, stock_quantity)
values ("Alchemy_Potion", "Liquids", 22, 7);

insert into products (product_name, department_name, price, stock_quantity)
values ("Fibonacci_Necklace", "Jewelry", 1123, 22);

insert into products (product_name, department_name, price, stock_quantity)
values ("Origin_Homilies", "Books", 1, 2211);

insert into products (product_name, department_name, price, stock_quantity)
values ("Ancient_Map_Mesapotamia", "Books", 22, 43820);

insert into products (product_name, department_name, price, stock_quantity)
values ("Unicorn_Hair", "Organics", 11, 683);

insert into products (product_name, department_name, price, stock_quantity)
values ("Rock_AstroidB613", "Organics", 1, 22222);

insert into products (product_name, department_name, price, stock_quantity)
values ("Key_of_David", "Jewelry", 777, 14400);

insert into products (product_name, department_name, price, stock_quantity)
values ("Jacobs_Ladder", "Organics", 1111, 99999);

insert into products (product_name, department_name, price, stock_quantity)
values ("Eves_Apple", "Organics", 6, 666);


