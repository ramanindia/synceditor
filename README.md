# syncing html editor data with mongodb and nodejs
Simple you run command npm install (insall all required module).
config database change config/database.js.  
'url' : 'mongodb://username:password@hostname:post/database'. 
example : 'url' : 'mongodb://test:123456/127.0.0.1:27017/test' . 
Change port number in .env file.
HOST_NAME= http://localhost:3000/. 
create database test then create collection contet(Define in model) in mongodb.
inser a document in content collection. 
db.content.insert({content:"this is test content"});
after insert you will get objectId of content.
you will update this objectId replace with 5a0877c0f466707da30767ea in app/controller/home.js.
you can run http://localhost:3000/editor.
Application is running on aws server.This is live url:http://13.126.89.183:4000/editor
 
