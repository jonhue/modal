# frozen_string_literal: true

require File.expand_path(
  File.join('..', 'lib', 'modalist', 'version'),
  __FILE__
)

Gem::Specification.new do |gem|
  gem.name                  = 'modalist'
  gem.version               = Modalist::VERSION
  gem.platform              = Gem::Platform::RUBY
  gem.summary               = 'A powerful & (really) lightweight ajaxified '\
                              'modal solution for Rails apps'
  gem.description           = 'Modalist is a powerful & lightweight (not '\
                              'necessarily but primarily ajaxified) modal '\
                              'plugin.'
  gem.authors               = ['Jonas Hübotter']
  gem.email                 = ['me@jonhue.me']
  gem.homepage              = 'https://github.com/jonhue/modalist-rails'
  gem.license               = 'MIT'

  gem.files                 = Dir['README.md', 'LICENSE', 'lib/**/*',
                                  'app/**/*']
  gem.require_paths         = ['lib']

  gem.required_ruby_version = '>= 2.3'

  gem.add_dependency 'actionpack', '~> 6.0'
  gem.add_dependency 'mozaic', '~> 2.0'
  gem.add_dependency 'railties', '~> 6.0'

  gem.add_development_dependency 'rspec'
  gem.add_development_dependency 'rubocop'
  gem.add_development_dependency 'rubocop-rspec'
end
