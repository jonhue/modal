# frozen_string_literal: true

module Modalist
  class Ajax
    def matches?(request)
      request.xhr?
    end
  end
end
