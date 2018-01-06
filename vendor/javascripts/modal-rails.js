(function($){
    $.fn.modalRails = function(options) {

        var defaults = {
            iziModal: {}
        };
        options = $.extend( defaults, options );

        var document = $(document),
            modal = $('#modal-rails'),
            iziModal = modal.iziModal(options.iziModal);

        $('.modal-rails--trigger').unbind('click');
        $('.modal-rails--trigger').click(function(event) {

            event.preventDefault();

            var event = jQuery.Event('modal:click'),
                url = $(this).data('modal-url') || $(this).attr('href'),
                form = $(this).data('modal-form') || false,
                fullScreen = $(this).data('modal-full-screen');

            event.target = $(this);
            event.data = { url: url };
            document.trigger(event);

            $.fn.modalRails.reset();
            $.fn.modalRails.fullScreen(fullScreen);
            $.fn.modalRails.load( url, form );

        });

    };
    $.fn.modalRails.open = function( options ) {

        var defaults = {
            url: null,
            form: false,
            fullScreen: false
        };
        options = $.extend( defaults, options );

        $.fn.modalRails.reset();
        $.fn.modalRails.fullScreen(options.fullScreen);
        $.fn.modalRails.load( options.url, options.form );

    };
    $.fn.modalRails.close = function() {
        $('#modal-rails').iziModal('close');
    };
    $.fn.modalRails.reset = function() {
        var modal = $('#modal-rails');
        modal.iziModal('setTransitionIn', 'comingIn');
        modal.iziModal('setTransitionOut', 'comingOut');
        modal.attr('data-full-screen', false);
        modal.iziModal('setTop', 'auto');
        modal.iziModal('setBottom', 'auto');
    };
    $.fn.modalRails.fullScreen = function(fullScreen) {
        var modal = $('#modal-rails');
        if ( fullScreen == 'true' || ( fullScreen == 'mobile' && $(window).width() <= 800 ) ) {
            modal.iziModal('setTransitionIn', 'fadeInRight');
            modal.iziModal('setTransitionOut', 'fadeOutRight');
            modal.attr('data-full-screen', true);
        };
    };
    $.fn.modalRails.load = function( url, options ) {

        var defaults = {
            form: false
        };
        options = $.extend( defaults, options );

        document.trigger('modal:request-start');

        if (options.form) {
            $.ajax({
                url: $(options.form).attr('action'),
                type: 'GET',
                data : $(options.form).serialize(),
                success: function(data) {
                    document.trigger('modal:request-end');
                    $.fn.modalRails.data(data);
                }
            });
        } else {
            $.get( url, function(data) {
                document.trigger('modal:request-end');
                $.fn.modalRails.data(data);
            });
        };

    };
    $.fn.modalRails.data = function(data) {

        var modal = $('#modal-rails');

        document.trigger('modal:before-render');
        modal.find('.iziModal-content').html(data);
        document.trigger('modal:render');

        modal.iziModal('open');
        if ( modal.height() + 60 > $(window).height() ) {
            modal.iziModal('setTop', 30);
            modal.iziModal('setBottom', 30);
        };
        document.trigger('modal:load');

    };
})(jQuery);
