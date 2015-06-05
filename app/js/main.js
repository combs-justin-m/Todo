
(function (){
  'use strict';

  var Todo = function(options){
    var args = options || {};

    this.task = args.task;
    this.status = 'Active';
  };

  var storage = [];
  var $todoForm = $('#todoForm');
  var $todoInput = $('todoInput');
  var $list = $('#list');

  $todoForm.on('submit', function(e){
    e.preventDefault();
    var taskText = $('#todoInput').val();
    var taskInstance = new Todo({task:taskText});

    storage.push(taskInstance);

    this.reset();

    $list.html(template.todo({data:storage}));

  });

  $list.on('click', 'li', function (e){
    e.preventDefault();

    $(this).addClass('complete');

    var currentTask = $(this).text();
    var taskToEdit = _.find(storage, {task: currentTask});

    taskToEdit.status = 'Closed';

    console.log(storage);

  });

}());
