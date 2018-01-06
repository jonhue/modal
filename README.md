# modal-rails

[![Gem Version](https://badge.fury.io/rb/modal-rails.svg)](https://badge.fury.io/rb/modal-rails) <img src="https://travis-ci.org/jonhue/modal-rails.svg?branch=master" />

modal-rails adds modal functionality to your Rails app. Here is how it works:

1) You open a modal from your frontend code
2) modal-rails fetches the modal contents from your specific modal controller actions with AJAX
3) The modal becomes visible for the user

modal-rails uses [iziModal.js](https://github.com/dolce/iziModal) to provide the modal engine.

---

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [To Do](#to-do)
* [Contributing](#contributing)
    * [Contributors](#contributors)
* [License](#license)

---

## Installation

modal-rails works with Rails 5 onwards. You can add it to your `Gemfile` with:

```ruby
gem 'modal-rails'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install modal-rails

If you always want to be up to date fetch the latest from GitHub in your `Gemfile`:

```ruby
gem 'modal-rails', github: 'jonhue/modal-rails'
```

## Usage

...

---

## To Do

[Here](https://github.com/jonhue/modal-rails/projects/1) is the full list of current projects.

To propose your ideas, initiate the discussion by adding a [new issue](https://github.com/jonhue/modal-rails/issues/new).

---

## Contributing

We hope that you will consider contributing to modal-rails. Please read this short overview for some information about how to get started:

[Learn more about contributing to this repository](https://github.com/jonhue/modal-rails/blob/master/CONTRIBUTING.md), [Code of Conduct](https://github.com/jonhue/modal-rails/blob/master/CODE_OF_CONDUCT.md)

### Contributors

Give the people some :heart: who are working on this project. See them all at:

https://github.com/jonhue/modal-rails/graphs/contributors

## License

MIT License

Copyright (c) 2017 Jonas Hübotter

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
