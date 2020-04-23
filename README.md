# syncing html editor data with mongodb and nodejs
<p>Simple you run command npm install (insall all required module).</p>
<p>config database change config/database.js.  </p>
<p>'url' : 'mongodb://username:password@hostname:post/database'. </p>
<p>example : 'url' : 'mongodb://test:123456/127.0.0.1:27017/test' </p>
<p>Change port number in .env file.</p>
<p>HOST_NAME= http://localhost:3000/. </p>
<p>create database test then create collection contet(Define in model) in mongodb.</p>
<p>insert a document in content collection. </p>
<p>db.content.insert({content:"this is test content"});</p>
<p>after insert you will get objectId of content.</p>
<p>you will update this objectId replace with 5a0877c0f466707da30767ea in app/controller/home.js.</p>
<p>you can run http://localhost:3000/editor.</p>
<p>Application is running on aws server.This is live url:http://13.126.89.183:4000/editor</p>
