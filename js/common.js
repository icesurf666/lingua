// PHONE MASK //
jQuery(function(e) {
  e(".phone").mask("+7 (999) 999-99-99")
});

// VALIDATE FORM //
$(document).ready(function () {
  $("form").submit(function () {
    var clikedForm = $(this);
    if (clikedForm.find("[name='name']").val() == '') {
      alert('Введите имя');
      return false;
    }
    if (clikedForm.find("[name='phone']").val() == '') {
      alert('Введите телефон');
      return false;
    }
    if (clikedForm.find("[name='email']").val() == '') {
      alert('Введите e-mail');
      return false;
    }
  });
});

$(document).ready(function() {
    survey();
    $(".btn-next").click(function(event) {
        event.preventDefault();
        surveyNextStep();
    });
    $(".btn-back").click(function(event) {
        event.preventDefault();
        surveyPrevStep();
    });
});
function survey() {
    surveyToStep(1);
}
function surveyToStep(id) {
    var $step = $('.quiz-item[data-step-id="'+ id +'"]');
    $(".quiz-item").removeClass("quiz-item_active").hide();
    $step.addClass("quiz-item_active").show();
}
function surveyPrevStep() {
    surveyToStep(surveyGetStep() - 1);
}
function surveyNextStep() {
    surveyToStep(surveyGetStep() + 1);
}
function surveyGetStep() {
    return parseInt($(".quiz-item_active").attr("data-step-id"));
}
function surveyGetSteps() {
    return $(".quiz-item").length;
}


$('.quest-block').click(function(){
    $(this).toggleClass('clicked');
});
$(".options-img").click(function(){
    $("input[type='file']").trigger('click');
});

$(document).ready(function() {
    $('.slider-items').slick({
        infinite: true,
        speed: 300,
        dots: true,
        arrows: false,
        slidesToShow: 1
    })
    });
