module Modalist
    module ModalHelper

        def modalist_class_hierarchy options = [], delimiter = ' '
            options.map(&:inspect).join(delimiter).gsub('"', '').gsub(',', '').gsub('[', '').gsub(']', '')
        end

    end
end
