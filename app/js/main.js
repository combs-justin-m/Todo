
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
  var filter = {
    active: true,
    complete: true
  };

  function render() {

    if (storage.length > 0) {
      $('.sortRow').removeClass('hide');
    } else if (storage.length === 0) {
      $('.sortRow').addClass('hide');
    }

    var filteredStorage = _.filter(storage, function (item) {
      if (filter.active && filter.complete) {
        return true;
      } else if (filter.active) {
        return item.active;
      } else if (filter.complete) {
        return !item.active;
      } else {
        return false;
      }
    });

    $list.html(template.todo({data:filteredStorage}));
  }

  function sortClass(item) {
    $(item).siblings().removeClass('activeSort');
    $(item).addClass('activeSort');
  }

  $todoForm.on('submit', function(e){
    e.preventDefault();
    var taskText = $('#todoInput').val();
    var taskInstance = new Todo({id:count, task:taskText});
    count++;

    storage.push(taskInstance);

    this.reset();

    render(storage);
  });

  $list.on('click', '.listWrapper', function (e){
    e.preventDefault();

    var currentTask = $(this).find('.listItem').data('id');
    var taskToEdit = _.find(storage, {id: currentTask});

    taskToEdit.active = !taskToEdit.active;

    render(storage);
  });

  $list.on('click', '.deletebox', function(){

    var currentTask = $(this).siblings('.listItem');
    var taskText = currentTask.data('id');
    var taskToEdit = _.find(storage, {id: taskText});

    var i = storage.indexOf(taskToEdit);
      if (i > -1) {
        storage.splice(i, 1);
      }

    render(storage);
  });

  $('#sortActive').on('click', function(){
    filter.active = true;
    filter.complete = false;
    render();

    sortClass(this);
  });

  $('#sortComplete').on('click', function(){
    filter.active = false;
    filter.complete = true;
    render();

    sortClass(this);
  });

  $('#sortAll').on('click', function(){
    filter.active = true;
    filter.complete = true;
    render();

    sortClass(this);
  });

  $('.clearWrapper').on('click', function(){
    storage = [];
    render();
  });

}());