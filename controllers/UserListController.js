const db = require('../config/mongoose');

//Setting schema of contact_list in model folder
const TodoList = require('../models/works');

module.exports.todoList = function(req, res){ 
    TodoList.find({}, function(err, list){
        if(err){
            console.log('Error in fetching Todo List in DB');
            return;
        }

        return res.render('UserTodoList', {
            title : "My Todo List",
            todo_list: list
        });

    })
}; 

module.exports.addList = function(req, res){
    console.log(req.body);
    TodoList.create({
        description: req.body.description, 
        category: req.body.category,  
        date: req.body.date 
    }, function(err, newList){
        if(err){
            console.log('Error in Creating the List');
            return;
        }

        console.log('********', newList);
        return res.redirect('back');
    });
    console.log("added itmes");
};

module.exports.deleteList = function(req, res){
    let id = req.query.id;

    TodoList.findByIdAndDelete(id, function(err){
        if(err){
            console.log('Error in finding the object in the database');
            return;
        }
        return res.redirect('back');
    });
};