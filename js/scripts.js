$(document).ready(function () {

  // <блок функций>
  function addTask() {

    let name = $('#created-tasks__input').val(),
      text = $('#created-tasks__textarea').val();

    console.log(name.length, text.length)

    if (name.length !== 0 && text.length !== 0) {

      $('.tasks__none').hide();

      $('.tasks').append(`
      
      <article class="tasks__box">

        <div class="tasks_header">
          <h2 class="tasks__title">
            ${name}
          </h2>
          <button class="tasks__delete"></button>
          <button class="tasks__scroll"></button>
        </div>

        <p class="tasks__desc">
          ${text}
        </p>
      </article>
      
      `);

      name = $('#created-tasks__input').val('');
      text = $('#created-tasks__textarea').val('');

    }
  }

  function deleteTask(item) {

    item.remove();

    let items = $('.tasks__box');

    console.log(item, items)

    if (items.length == 0) {
      console.log('pusto')
      $('.tasks__none').show();
    }

  }
  // </блок функций>

  $('#created-tasks__add-button').on('click', addTask);

  $('body').on('click', '.tasks__delete', function(){

    let item = $(this).parents('.tasks__box');

    deleteTask(item);
  });

  $('body').on('click', '.tasks__scroll', function (){

    let par = $(this).parents('.tasks__box');
    
    console.log(par)

    $(par).find('.tasks__desc').slideToggle();

    // $(this).toggleClass('rotate');
    if ($(this).hasClass('rotate')){

      $(this).addClass('unrotate');

      $(this).removeClass('rotate');

    } else {

      $(this).removeClass('unrotate');

      $(this).addClass('rotate');
      
    }
  });

});