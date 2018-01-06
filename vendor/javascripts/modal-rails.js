function ModalRails() {

    var modal = $('#modal-rails'),
        iziModal = modal.iziModal();

    $('.modal-rails--trigger').unbind('click');
    $('.modal-rails--trigger').click(function(event) {
        event.preventDefault();
        ModalRailsReset();
        if ( $(this).data('modal-full-screen') == 'true' || ( $(this).data('modal-full-screen') == 'mobile' && $(window).width() <= 800 ) ) {
            $(modal).iziModal('setTransitionIn', 'fadeInRight');
            $(modal).iziModal('setTransitionOut', 'fadeOutRight');
            $(modal).attr('data-full-screen', true);
        };
        ModalRailsLoad( $(this).data('modal-url') || $(this).attr('href'), $(this).data('modal-form') || false );
    });

    function ModalRailsReset() {
        $(modal).iziModal('setTransitionIn', 'comingIn');
        $(modal).iziModal('setTransitionOut', 'comingOut');
        $(modal).attr('data-full-screen', false);
        $(modal).iziModal('setTop', 'auto');
        $(modal).iziModal('setBottom', 'auto');
    };

    function ModalRailsLoad( url, form ) {
        if (form) {
            $.ajax({
                url: $(form).attr('action'),
                type: 'GET',
                data : $(form).serialize(),
                success: function(data) {
                    ModalRailsData(data);
                }
            });
        } else {
            $.get( url, function(data) {
                vendorIzimodalData(data);
            });
        };
    };

    function ModalRailsData(data) {
        $(modal).find('.iziModal-content').html(data);
        $(document).trigger('modal:load');
        $(modal).iziModal('open');
        if ( $(modal).height() + 60 > $(window).height() ) {
            $(modal).iziModal('setTop', 30);
            $(modal).iziModal('setBottom', 30);
        };
    };

};
