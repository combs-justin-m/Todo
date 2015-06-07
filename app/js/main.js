
(function (){
  'use strict';

  var Todo = function(options){
    var args = options || {};
    this.id = args.id;
    this.task = args.task;
    this.active = true;
  };

  var storage = [];
  var count = 0;
  var $todoForm = $('#todoForm');
  var $todoInput = $('todoInput');
  var $list = $('#list');

  function render() {
    $list.html(template.todo({data:storage}));
  }

  $todoForm.on('submit', function(e){
    e.preventDefault();
    var taskText = $('#todoInput').val();
    var taskInstance = new Todo({id:count, task:taskText});
    count++;

    storage.push(taskInstance);

    this.reset();

    render();
  });

  $list.on('click', 'li', function (e){
    e.preventDefault();

    var currentTask = $(this).data('id');
    var taskToEdit = _.find(storage, {id: currentTask});

    taskToEdit.active = !taskToEdit.active;

    render();
  });

  $list.on('click', '.deletebox', function(){

    var currentTask = $(this).siblings('.listItem');
    var taskText = currentTask.data('id');
    var taskToEdit = _.find(storage, {id: taskText});

    var i = storage.indexOf(taskToEdit);
      if (i > -1) {
        storage.splice(i, 1);
      }

    render();
  });
}());