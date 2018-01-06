module Modalist
    module ModalHelper

        def modalist
            render partial: 'modalist/modal'
        end

        def modalist_close
            render partial: 'modalist/close'
        end

        def modalist_title title
            area :modalist_title, title
        end

        def modalist_subtitle subtitle
            area :modalist_subtitle, subtitle
        end

        def modalist_actions &block
            area :modalist_actions, capture(&block)
        end

        def modalist_class_hierarchy options = [], delimiter = ' '
            options.map(&:inspect).join(delimiter).gsub('"', '').gsub(',', '').gsub('[', '').gsub(']', '')
        end

    end
end
