function initMask() {
  // $('.tel').mask("9 (999) 999 99 99");
}

function initValidete() {
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function validateName(name) {
    var re = /^[A-Za-zА-Яа-я\s]+$/;
    return re.test(name);
  }

  function validateNumber(name) {
    var re = /^\d{1,13}$/;
    return re.test(name);
  }

  function validateTel(tel) {
    return tel != "";
  }

  function eventInput(th) {
    var isValide = true;
    var _thisValue = th.val();
    var _thisName = th.data('name');
    if (_thisName == 'name') {
      isValide = isValide && validateName(_thisValue);
      if (validateName(_thisValue)) {
        th.closest('.form-item').removeClass('error')
          .addClass('done')
      }
      else {
        th.closest('.form-item').removeClass('done')
          .addClass('error')
      }
      return validateName(_thisValue)

    }
    if (_thisName == 'number') {
      isValide = isValide && validateNumber(_thisValue);
      if (validateNumber(_thisValue)) {
        th.closest('.form-item').removeClass('error')
          .addClass('done')
      }
      else {
        th.closest('.form-item').removeClass('done')
          .addClass('error')
      }
      return validateNumber(_thisValue)

    }
    if (_thisName == 'email') {
      isValide = isValide && validateEmail(_thisValue);
      if (validateEmail(_thisValue)) {
        th.closest('.form-item').removeClass('error')
          .addClass('done')
      }
      else {
        th.closest('.form-item').removeClass('done')
          .addClass('error')
      }
      return validateEmail(_thisValue)

    }
    if (_thisName == 'tel') {
      isValide = isValide && validateTel(_thisValue);
      if (validateTel(_thisValue)) {
        th.closest('.form-item').removeClass('error')
          .addClass('done')
      }
      else {
        th.closest('.form-item').removeClass('done')
          .addClass('error')
      }
      return validateTel(_thisValue)
    }
    if (_thisName == 'text') {
      if (_thisValue.length > 1) {
        th.closest('.form-item').removeClass('error')
          .addClass('done')
      }
      else {
        th.closest('.form-item').removeClass('done')
          .addClass('error')
      }
      return _thisValue.length > 1
    }
    if (_thisName == 'pass') {
      if (_thisValue.length > 8) {
        th.closest('.form-item').removeClass('error')
          .addClass('done')
      }
      else {
        th.closest('.form-item').removeClass('done')
          .addClass('error')
      }
      return _thisValue.length > 1
    }
    if (_thisName == 'polit') {
      if (th.prop('checked')) {
        th.closest('.polit').removeClass('error')
          .addClass('done')
      }
      else {
        th.closest('.polit').removeClass('done')
          .addClass('error')
      }
      isValide = isValide && th.prop('checked');
    }
    if (_thisName == 'textarea') {
      if (th.val().length > 1) {
        th.closest('.form-item').removeClass('error')
          .addClass('done')
      }
      else {
        th.closest('.form-item').removeClass('done')
          .addClass('error')
      }
      isValide = isValide && th.val().length > 1;
    }


  }

  $('input').on('change', function () {
    eventInput($(this));
    return false
  });
  $('textarea').on('change', function () {
    eventInput($(this));
    return false
  });


  /*$('form').on('submit', function () {
    var form = $(this);
    form.find('input').each(function () {
      eventInput($(this))
    });
    form.find('textarea').each(function () {
      eventInput($(this))
    });
    if (!form.find('.error').length) {
      return false
    }
    return false
  });*/
}

function toggleApplication() {
  $('.application-area-item').on('click', function () {
    if($(this).hasClass('active')){
      $('.application-area-item').removeClass('active');
      return;
    }
    else{
      $('.application-area-item').removeClass('active');
      $(this).toggleClass('active');
    }

  })


}

function initSlick() {
  $('.bottom-carousel').slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '33%'
  })
}

function toggleExample() {
  $('.js-open-example').on('click', function () {
    $(this).hide().next().addClass('show').fadeIn(400)
  });

  $('.example-drop .close').on('click', function () {
    $('.example-drop').removeClass('show').hide().prev().fadeIn()
  })
}

function scrollBottom() {
  $('.scroll-down').on('click', function () {
    var _th = $(this)
    $('body, html').animate({
      scrollTop: _th.closest('section').next().offset().top
    }, 1000)
  })
}

function initSelect2() {
  $('select').each(function () {
    var _th  = $(this);
    _th.select2({
      placeholder: _th.data('placeholder'),
      templateSelection: function (data) {
        if (data.id === '') { // adjust for custom placeholder values
          return _th.data('placeholder');
        }
        else{
          var formItem = _th.closest('.form-item');
          if (!$('.up', formItem).length) {
              _th.before('<label class="up">' + _th.data('placeholder') + '</label>')
          }
        }

        return data.text;
      }
    })
  })
}


var feedbackCloseTmout;
function initFancy() {
  var btn = '<svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g  stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g  transform="translate(-1044.000000, -1450.000000)" fill="#fff"> <path d="M1051,1455.6 L1056.6,1450 L1058,1451.4 L1052.4,1457 L1058,1462.6 L1056.6,1464 L1051,1458.4 L1045.4,1464 L1044,1462.6 L1049.6,1457 L1044,1451.4 L1045.4,1450 L1051,1455.6 Z" ></path> </g> </g> </svg>'
  $('.fancybox').fancybox({
    tpl: {
      // closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="#" data-target-analytic="close">'+ btn +'</a>'
      closeBtn: ''
    },
      afterClose: function(){
        clearTimeout(feedbackCloseTmout);
        $('.form-item').removeClass('done').removeClass('error');
        $('.js-feedback-content').height('auto');
        $('.js-feedback-result').hide();
        $('.js-feedback-start').show();
          $('#mode-field').val(1).trigger('change').trigger('refresh');
          $('.js-feedback-field').val('');
      }
  })
}

function animBubl() {
  var defaulActive = 0;
  var autoChangeIndervel;
  var subText =  [
    ['text', 'text2', 'text3', 'text3 text3 text3 text3 text3'],
    ['Включаем робота. Робот делает звонки параллельно в режиме 24/7 без ограничений', 'text', 'text2'],
    ['sub text third circle', 'text', 'text2 text2 text2 text2'],
    ['sub text fourth circle', 'text text text text', 'text2', 'text3', 'text4', 'text5', 'text6']
  ];
  var timeAnim = 7000;

  function changeCircle(index) {
    $('.about-comp-item').removeClass('active').eq(index).addClass('active');
    //setTimeout(function () {
    //  changeSubText(subText[index], index)
    //}, 200)
  }

  //var timer;
  //function changeSubText(arr, index) {
  //  $.each(subText, function (i, el) {
  //    $('.about-comp-item').eq(i).find('.subtext').text(el[0]);
  //  });
  //  clearInterval(timer);
  //  var i = 1;
  //  timer = setInterval(function() {
  //    $('.about-comp-item').eq(index).find('.subtext').text(arr[i]);
  //    i++
  //  }, timeAnim/arr.length);
  //}

  function autoChange(ind) {
    var i = ind+1 > $('.about-comp-item').length-1 ? 0 :ind +1;
    autoChangeIndervel = setInterval(function () {
      changeCircle(i);
      i = i+1 > $('.about-comp-item').length-1 ? 0 : i+1
    },timeAnim+200)
  }

  $('.about-comp-item').on('click', function () {
    var $thIndex = $(this).index();
    changeCircle($thIndex);
    clearInterval(autoChangeIndervel);
    autoChange($thIndex);
  });


  //changeSubText(subText[defaulActive], defaulActive);
  changeCircle(defaulActive);
  autoChange(defaulActive)
}

function gaEvent(action){
    // console.log(action);
    if (typeof gtag == 'function') {
        switch (action) {
            default:
              // console.log(action);
                gtag('event', 'click', {
                    'event_category': 'user',
                    'event_label': action
                });
                // ga('send', 'event', 'user', 'click', action);
                break;
        }
    }
}
function _initAnalitics(){
    $('body').on('click', '[data-target-analytic]', function(e) {
        if (this.tagName != 'INPUT') {
            var action = $(this).attr('data-target-analytic');
            gaEvent(action);
        }
        return true;
    });
    $('input[data-target-analytic]').on('focus', function(e) {
        var action = $(this).attr('data-target-analytic');
        gaEvent(action);
        return true;
    });
}
function scrollToSlide(to){
    var _top = 0;
    if (typeof to == 'number') {
        _top = to;
    }
    else {
        var pos = to.offset();
        _top = pos.top;
    }
    // _top -= 80;
    $('body,html').animate({ scrollTop: _top }, 400);
}

$(document).ready(function () {
  $("body").children().each(function() {
    $(this).html($(this).html().replace(/&#8232;/g," "));
  });
  animBubl();
  initFancy();
  initSelect2();
  scrollBottom();
  toggleExample();
  initSlick();
  toggleApplication();
  initValidete();
  initMask();

    _initAnalitics();


  $('.info-call-item .btn[data-mode]').click(function(){
    var mode = $(this).attr('data-mode');
    $('#mode-field').val(mode).trigger('change').trigger('refresh');
  });

  $('#popup').feedback();

  $('.fancybox-close').click(function(e){
      e.preventDefault();
      $.fancybox.close( true );
  });

    $('[data-scroll-to]').click(function(e){
        e.preventDefault();
        var to = $(this).attr('data-scroll-to');
        scrollToSlide($('#'+to));
    });
});