# frozen_string_literal: true

module Modalist
  module ModalHelper
    def modalist_class_hierarchy(options = [], delimiter = ' ')
      options.map(&:inspect).join(delimiter).delete('",[]', '')
    end
  end
end
