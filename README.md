# MongoScrape
This Mongoose Mongo DB / Node application is a demonstration of a webscraping
This application is scrapong the web content- In this case articles from a selected website - "The Verge"
This application has 
    - Lists all the latest articles from the website by scraping from the website and saving on to mongo database.
    - Each of the article will have a header a summary  with a link to the article page and a save button to save
    - Saved articles can be viewed
    - Each of the saved articles can be removed from the saved list.
    - For each of the saved article, notes can be added. 
    - Multiple notes are allowed. Entered notes can be deleted as well.
    - There are two tables used- Article and Notes.
*************************************************************************************************
Burger application has the following file structure
Root(Burger)
    |
    config
        |
        connection.js
        orm.js
    controllers
        |
        burgercontroller.js
    db
        |
        schema.SQL
        seed.SQL
    models
        |
        burger.js
    public
        |
        public
            |
            assets
                |
                css
                    |
                    style.css
                image
                    |
                    burger1.jpg
                    burger4.jpg
                    burger6.jpg
                javascript
    views
        |
        layouts
            |
            main.handlebars
        index.handlebars
    server.js
    node_modules    
    package.JSON
    package-lock.JSON
    README
*************************************************************************************************
![](https://github.com/JPillai2018/Burger/blob/master/public/assets/screenshots/image1.PNG)
*************************************************************************************************
Burger app uses a MySQL database
![](https://github.com/JPillai2018/Burger/blob/master/public/assets/screenshots/image2.PNG)
*************************************************************************************************
Burger App demo is as follows. This app runs on port 8080. On Command line run node server.js. 
![](https://github.com/JPillai2018/Burger/blob/master/public/assets/screenshots/image3.PNG)
On the browser use the url http://localhost:8080.
![](https://github.com/JPillai2018/Burger/blob/master/public/assets/screenshots/image4.PNG)
1. To start the application, enter a burger name of your choice in the text box area.
![](https://github.com/JPillai2018/Burger/blob/master/public/assets/screenshots/image5.PNG)
2. And click the "Place Order" button. Entered burger name will be displayed on left side of the screen with a button next to it. Button is to devour the burger.
![](https://github.com/JPillai2018/Burger/blob/master/public/assets/screenshots/image6.PNG)
3. Enter as many burgers as you would like. Each burger entered will be inserted in to the MySQL database burgers_db, inside burgers table. Each of the "Ready To Eat" burgers will have a status of "Devoured" as false.

