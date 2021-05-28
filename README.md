# Chefkart
Hiring a cook module can have parameters like:

food_preference (eg., Vegan, Veg, Non veg, etc.)
duration (for how long the cook is required)
worktiming (eg., 24 hrs, 6 hrs, so on)
gender requirement (Male, Female or Other)
expertise (eg., Italian, North Indian, Street Foods, South Indians, all different cuisine can be added)
ratings (given by customers that has been served)
achievement (worked in resturants, earned certificate, awards, etc.)

I have created three tables.

1. customers
2. chef
3. requirement

requirement table is joined with customer table via id as foreign key so the customers requirements can be added upon filling the requirement submission form.

Schema of customer table:

id int, primary key, auto increment
name char(50), not null
age int, not null
gender char(1), not null
email varchar(100), not null
password varchar(50), not null

Schema of chef table:

id int, primary key, auto increment
name char(50), not null
age int, not null
gender char(1), not null
yoe varchar(100), not null
worktiming varchar(50)
rating float,
achievement varchar(255),
food_preference char(100), not null
expertise char(255), not null

Schema of requirement table:

id int, Foreign key of customer
gender char(1), not null
duration varchar(50), not null
worktiming varchar(50)
food_preference char(100), not null
expertise char(255), not null

port: 3000

routes:

/customers/register/ - Registering a customer
/getcustomers/:customerId - Get customer by Id

/chef/register - Registering a chef
/getchef/all - Get all the chef
/getchef/:chefId - Get chef by Id

/customers/postrequirement - to post requirement of customers





