$(document).ready(function () {

  // <блок функций>
  function addTask() {

    let name = $('#created-tasks__input').val(),
      text = $('#created-tasks__textarea').val();

    if (name.length !== 0 && text.length !== 0) {

      $('.tasks__none').hide();

      $('.tasks').append(`
      
      <article class="tasks__box">

        <div class="tasks_header">
          <h3 class="tasks__title">
            ${name}
          </h3>
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


    if (items.length == 0) {
      
      $('.tasks__none').show();
    }

  }

  function disableScroll() {

    $("html,body").toggleClass('fixed');
    
  }
  
  // </блок функций>

  $('#created-tasks__add-button').on('click', addTask);

  $('body').on('click', '.tasks__delete', function () {

    let item = $(this).parents('.tasks__box');

    deleteTask(item);
  });

  $('body').on('click', '.tasks__scroll', function () {

    let par = $(this).parents('.tasks__box');
    

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

  $('#created-tasks__ads').on('click', function () {

    $('.popup-container').fadeIn(disableScroll);
    
  })

  $('.popup-container').on('click', function (event) {

    if (event.target == this) {

      $(this).fadeOut(disableScroll);

    }

  })

});