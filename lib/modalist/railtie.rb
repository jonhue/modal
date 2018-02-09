require 'rails/railtie'

module Modalist
    class Railtie < Rails::Railtie

        initializer 'modalist.mozaic' do
            Mozaic.configure do |config|
                config.define_component 'modalist'
                config.define_component 'modalist/closer'
            end
        end

        initializer 'modalist.action_controller' do
            ActiveSupport.on_load :action_controller do
                include Modalist::RenderHelper
            end
        end

    end
end
