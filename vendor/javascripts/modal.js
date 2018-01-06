(function($) {
    var Modal = new function(options) {

        var defaults = {
            iziModal: {}
        };
        options = $.extend( defaults, options );

        this.modal = $('#modal');
        this.iziModal = modal.iziModal(options.iziModal);

        $('.modal--trigger').unbind('click');
        $('.modal--trigger').click(function(event) {

            event.preventDefault();

            var event = jQuery.Event('modal:click'),
                url = $(this).data('modal-url') || $(this).attr('href'),
                form = $(this).data('modal-form') || false,
                fullScreen = $(this).data('modal-full-screen');

            event.target = $(this);
            event.data = { url: url };
            $(document).trigger(event);

            Modal.reset();
            Modal.fullScreen(fullScreen);
            Modal.load( url, form );

        });

        this.open = function(options) {

            var defaults = {
                url: null,
                form: false,
                fullScreen: false
            };
            options = $.extend( defaults, options );

            Modal.reset();
            Modal.fullScreen(options.fullScreen);
            Modal.load( options.url, options.form );

        };

        this.close = function() {
            $(Modal.modal).iziModal('close');
        };

        this.reset = function() {
            $(Modal.modal).iziModal('setTransitionIn', 'comingIn');
            $(Modal.modal).iziModal('setTransitionOut', 'comingOut');
            $(Modal.modal).data('full-screen', false);
            $(Modal.modal).iziModal('setTop', 'auto');
            $(Modal.modal).iziModal('setBottom', 'auto');
        };

        this.fullScreen = function(fullScreen) {
            if ( fullScreen == 'true' || ( fullScreen == 'mobile' && $(window).width() <= 800 ) ) {
                $(Modal.modal).iziModal('setTransitionIn', 'fadeInRight');
                $(Modal.modal).iziModal('setTransitionOut', 'fadeOutRight');
                $(Modal.modal).data('full-screen', true);
            };
        };

        this.load = function( url, options ) {

            var defaults = {
                form: false
            };
            options = $.extend( defaults, options );

            $(document).trigger('modal:request-start');

            if (options.form) {
                $.ajax({
                    url: $(options.form).attr('action'),
                    type: 'GET',
                    data : $(options.form).serialize(),
                    success: function(data) {
                        $(document).trigger('modal:request-end');
                        Modal.data(data);
                    }
                });
            } else {
                $.get( url, function(data) {
                    $(document).trigger('modal:request-end');
                    Modal.data(data);
                });
            };

        };

        this.data = function(data) {

            $(document).trigger('modal:before-render');
            $(Modal.modal).find('.iziModal-content').html(data);
            $(document).trigger('modal:render');

            $(Modal.modal).iziModal('open');
            if ( $(Modal.modal).height() + 60 > $(window).height() ) {
                $(Modal.modal).iziModal('setTop', 30);
                $(Modal.modal).iziModal('setBottom', 30);
            };
            $(document).trigger('modal:load');

        };

    };
})(jQuery);
