$.fn.feedback = function(){
    return this.each(function() {
        var context = $(this),
            fbForm = $('.js-feedback-form', context),
            fbSubmit = $('.js-feedback-submit', context),
            fbContent = $('.js-feedback-content', context),
            fbResult = $('.js-feedback-result', context),
            fbStart = $('.js-feedback-start', context),
            ppId = context.attr('id');

        $('.js-feedback-field', context).on('keyup', function () {
            var bCorrect = true;
            $('.js-feedback-field', context).each(function () {
                var fld = $(this),
                    fldValue = fld.val();
                if (!fldValue || !fldValue.length) {
                    bCorrect = false;
                    fld.addClass('_error');
                } else {
                    fld.removeClass('_error');
                }
            });
            if (bCorrect)
                fbSubmit.removeClass('_disabled');
            else
                fbSubmit.addClass('_disabled');
        });

        fbSubmit.on('click', function(e){
            e.preventDefault();
            if (!$(this).hasClass('_disabled')) {
                var bCorrect = true;
                $('.js-feedback-field', context).each(function () {
                    var fld = $(this),
                        fldValue = fld.val();
                    if (!fldValue || !fldValue.length) {
                        bCorrect = false;
                        fld.addClass('_error');
                    } else {
                        fld.removeClass('_error');
                    }
                });
                if (bCorrect) {
                    $('.js-feedback-field', context).removeClass('_error');
                    var data = fbForm.serializeArray();
                    data.push({name:'modeName', value: $('#mode-field option:selected').text()});
                    $.post('feedback.php', data, function (htmlData) {
                        var _h = fbStart.outerHeight();
                        fbContent.height(_h);
                        fbStart.fadeOut(200, function(){
                            fbResult.fadeIn(200, function(){
                                $('.js-feedback-field', context).val('');
                                fbSubmit.addClass('_disabled');
                                feedbackCloseTmout = setTimeout(function () {
                                    $.fancybox.close( true );
                                }, 3500);
                            });
                        });
                    });
                }
            }
        });
    });
};