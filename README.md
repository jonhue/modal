# Modal

[![Gem Version](https://badge.fury.io/rb/modal-rails.svg)](https://badge.fury.io/rb/modal-rails) <img src="https://travis-ci.org/jonhue/modal.svg?branch=master" />

Modal is a sophisticated modal-solution for Rails. Here is how it works:

1) You open a modal from your frontend code
2) Modal fetches the modal contents from your specific modal controller actions with AJAX
3) The modal becomes visible for the user

Modal uses [iziModal.js](https://github.com/dolce/iziModal) to backup its modal engine.

---

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
    * [Controllers](#controllers)
    * [Views](#views)
    * [Trigger a modal](#trigger-a-modal)
    * [Modal functions](#modal-functions)
    * [Options](#options)
    * [Styles](#styles)
    * [Events](#events)
* [To Do](#to-do)
* [Contributing](#contributing)
    * [Contributors](#contributors)
* [License](#license)

---

## Installation

Modal works with Rails 5 onwards. You can add it to your `Gemfile` with:

```ruby
gem 'modal-rails'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install modal-rails

If you always want to be up to date fetch the latest from GitHub in your `Gemfile`:

```ruby
gem 'modal-rails', github: 'jonhue/modal'
```

## Usage

First let's add the necessary assets to your pipeline:

```js
//= require jquery
//= require iziModal
//= require modal
```

```css
/*
 *= require iziModal
 *= require modal
*/
```

**Note:** If you are using a package manager like Yarn, import the latest [iziModal](https://github.com/dolce/iziModal) code instead.

Specify where modals should be located in your view (preferably in `app/views/layouts/application.html.haml`):

```haml
!!!
%html
    %head
        -# ...
    %body
        = render_modal
        = yield
```

### Controllers

Modal simulates Rails' MVC structure. To add a new modal to your app you have to create a new controller action, route and view:

```ruby
class SettingsController < ApplicationController

    def index
        # a regular controller action
    end

    def modal
        render_modal
        # a modal controller action
    end

end
```

```ruby
Rails.application.routes.draw do

    get 'settings', to: 'settings#index'
    scope :settings, as: :settings do
        get 'modal', to: 'settings#modal'
    end

end
```

In most cases you only want to allow AJAX requests to be able to reach your Modal controller actions:

```ruby
get 'modal', to: 'settings#modal', constraints: ModalRails::Ajax.new
```

### Views

In your Modal views are a couple of helper methods available:

**`modal_title(title)`:** This will specify a title for your modal. If you omit this in your view, your modal will not have a header. Takes a string.

**`modal_subtitle(subtitle)`:** Add a subtitle to your modal header. Takes a string.

**`modal_actions(&block)`:** Specify actions (preferably icons wrapped in links) which will be displayed on the right side of your modal header. Takes a block.

**`modal_close`:** Renders a default modal close action. Can be passed to `modal_actions`.

#### Example

```haml
- modal_title 'Modal'
- modal_subtitle 'Subtitle'
- modal_actions do
    = modal_close

Content of my modal
%div
    %p Contains complex structures as well.
```

### Trigger a modal

There are numerous ways to trigger/open a modal.

One options is to open he modal by calling a JavaScript function - more on that [here](#functions).

#### Links

The most common scenario is using a link trigger the opening of a modal:

```haml
= link_to 'Open modal', settings_modal_url, class: 'modal--trigger'
```

You can use [data attributes](#options) to pass options customizing the modal.

#### Forms

When you want to open a modal after submitting a form - this is as simple as it gets:

```haml
= simple_form_for @setting, setting_url(id: @setting.id), method: :get do |f|
    -# ...
    = f.input :submit, input_html: { class: 'modal--trigger', data: { modal_form: true } }
```

You can use [data attributes](#options) to pass options customizing the modal.

#### Elements

You can also trigger a modal from any other HTML element in your view:

```haml
.modal--trigger{ data: { modal_url: settings_modal_url } }
```

You can use [data attributes](#options) to pass options customizing the modal.

### Modal functions

Modal's JavaScript component provides a set of functions to handle your modals:

#### Open modals

```js
Modal.open({ url: 'http://localhost:3000/settings/modal' });
```

You can pass [options](#options) to customize the modal:

```js
Modal.open({
    url: 'http://localhost:3000/settings/modal',
    form: false,
    fullScreen: false
});
```

#### Close modals

```js
Modal.close();
```

### Options

There are two sets of options you can pass to Modal. Those who get passed on initialization and those who get passed on any subsequent calls of a function.

#### Initialization

**`ìziModal`:** Options hash utilized to initialize [iziModal](https://github.com/dolce/iziModal).

#### Subsequent calls

**`url`:** URL to fetch content of the modal from. Takes a string.

**`form`:** Submit a form and use the response to populate the modal. Takes a string to specify a jQuery selector for the form or `false`.

**`fullScreen`:** Show a full screen modal instead of the default windowed modal. Takes a 'true', `'mobile'` (uses a full screen modal on devices smaller than `800px`) or `false`.

### Styles

To customize the styles of your modals, require the vendored default styles and then override them with your custom CSS.

It is often useful to be able to provide view-specific styles. Modal therefore adds classes for controller and action to the `modal--content` element which wraps your modals content. Here is how you can utilize it:

```css
/* settings#modal */
.modal--content.settings.modal {
    /* ... */
}
/* nested/settings#modal */
.modal--content.nested.settings.modal {
    /* ... */
}
```

### Events

Modal emits events that allow you to track the navigation lifecycle and respond to content loading. Modal fires events on the `$(document)` object.

* `modal:click` fires when you click a Modal enabled link to trigger a modal opening. The clicked element is the event target. Access the requested location with `event.data.url`.

* `modal:request-start` fires before Modal issues a network request to fetch the modal content.

* `modal:request-end` fires after the network request completes.

* `modal:before-render` fires before rendering the content.

* `modal:render` fires after Modal renders the content in the modal.

* `modal:load` fires after Modal completed preparing and opened the modal.

---

## To Do

[Here](https://github.com/jonhue/modal/projects/1) is the full list of current projects.

To propose your ideas, initiate the discussion by adding a [new issue](https://github.com/jonhue/modal/issues/new).

---

## Contributing

We hope that you will consider contributing to Modal. Please read this short overview for some information about how to get started:

[Learn more about contributing to this repository](CONTRIBUTING.md), [Code of Conduct](CODE_OF_CONDUCT.md)

### Contributors

Give the people some :heart: who are working on this project. See them all at:

https://github.com/jonhue/modal/graphs/contributors

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
