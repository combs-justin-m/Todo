
(function (){
  'use strict';

  var Todo = function(task){
    // var args = options || {};

    this.task = task;
    this.status = 'Active';
  };

  var storageBin = {
    'data': ''
  };
  var storage = [];
  var $todoForm = $('#todoForm');
  var $todoInput = $('todoInput');
  var $listContainer = $('.listContainer');

  storageBin.data = storage;

  $todoForm.on('submit', function(e){
    e.preventDefault();
    var taskText = $('#todoInput').val();
    var taskInstance = new Todo(taskText);

    storage.push(taskInstance);

    this.reset();

    $listContainer.html(template.todo(storageBin));

  });

  // $list.on('click', 'li', function (e){
  //   e.preventDefault();

  //   $(this).addClass('complete');

  //   var currentTask = $(this).text();
  //   var taskToEdit = _.find(storage, {task: currentTask});

  //   taskToEdit.status = 'Closed';

  // });

}());
