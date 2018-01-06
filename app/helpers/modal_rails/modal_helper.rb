module ModalRails
    module ModalHelper

        def render_modal
            render 'modal/modal'
        end

        def modal_close
            render 'modal/close'
        end

        def modal_title title
            area :modal_title, title
        end

        def modal_subtitle subtitle
            area :modal_subtitle, subtitle
        end

        def modal_actions &block
            area :modal_actions, capture(&block)
        end

        def modal_class_hierarchy options = [], delimiter = ' '
            options.map(&:inspect).join(delimiter).gsub('"', '').gsub(',', '').gsub('[', '').gsub(']', '')
        end

    end
end
