# frozen_string_literal: true

module Modalist
  module ModalHelper
    def modalist_class_hierarchy(options = [], delimiter = ' ')
      options.join(delimiter)
    end
  end
end
