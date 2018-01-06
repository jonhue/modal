require 'rails/railtie'

module Modalist
    class Railtie < Rails::Railtie

        initializer 'modalist.action_controller' do
            ActiveSupport.on_load :action_controller do
                include Modalist::RenderHelper
            end
        end

    end
end
