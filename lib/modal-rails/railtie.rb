require 'rails/railtie'

module ModalRails
    class Railtie < Rails::Railtie

        initializer 'modal-rails.action_controller' do
            ActiveSupport.on_load :action_controller do
                include ModalRails::RenderHelper
            end
        end

    end
end
