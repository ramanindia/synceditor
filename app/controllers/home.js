'use strict';
var Content       = require('../models/home');
exports.editor = function(req, res) 
{
	Content.create({content:"test"});
	Content.findOne({ _id:'5a0877c0f466707da30767ea' }, function(err, content) 
		{
			if(err)
				{
					 throw err;
				}
				else 
				{
				      res.render('editor/editor.html',
							{
								data:{page_title:'Editor sync programming'},
								contentData:content,
							});

				}	
		});
		
}
exports.savedata = function(req, res) 
{
	var editorData = req.body.editorData;
    	//console.log(editorData);
    	//var content  = new Content();
			Content.findByIdAndUpdate('5a0877c0f466707da30767ea',{$set:{content:editorData}},
			 function(err, content) 
			{
				if(err)
				{
					 throw err;
				}
				else 
				{
					//console.log("content save");
					res.json({success : "Updated Successfully", status : 200});
				}							
							 
			});  
}