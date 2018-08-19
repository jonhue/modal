# frozen_string_literal: true

require 'mozaic'
require 'modalist/version'

module Modalist
  autoload :Ajax, 'modalist/ajax'

  require 'modalist/engine'
  require 'modalist/railtie'
end
