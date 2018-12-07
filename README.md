# Modalist on Rails

[![Gem Version](https://badge.fury.io/rb/modalist.svg)](https://badge.fury.io/rb/modalist) ![Travis](https://travis-ci.org/jonhue/modalist-rails.svg?branch=master)

Modalist is a powerful & lightweight (asynchronous) modal plugin. Here is how it works:

1) You create a distinct Modalist object for every modal style.
2) You trigger a modal from your frontend code passing custom parameters
3) Modalist fetches the modal contents with AJAX while showing a loader (skippable if not desired)
4) The modal opens

Learn more about **[Modalist JS](https://github.com/jonhue/modalist)**.

---

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
  * [Controllers](#controllers)
  * [Views](#views)
  * [Styles](#styles)
  * [Synchronous modals](#synchronous-modals)
  * [Modalist JS](#modalist-js)
* [Testing](#testing)
* [To Do](#to-do)
* [Contributing](#contributing)
  * [Semantic versioning](#semantic-versioning)

---

## Installation

Modalist works with Rails 5 onwards. You can add it to your `Gemfile` with:

```ruby
gem 'modalist'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install modalist

If you always want to be up to date fetch the latest from GitHub in your `Gemfile`:

```ruby
gem 'modalist', github: 'jonhue/modalist-rails'
```

## Usage

First let's import the necessary assets:

```javascript
import Modalist from 'modalist';
Modalist.init();
let modalist = new Modalist;
```

```scss
@import "animate.css";
@import "modalist/src/modalist";
@import "modalist/src/modalist-theme";
```

Specify where modals should be located in your view:

```haml
!!!
%html
  %head
    ...
  %body
    = component 'modalist/overlay'
    = component 'modalist/wrapper'
    = yield
```

### Controllers

Modalist simulates Rails' MVC structure. To add a new modal to your app, you have to create a new controller action, route and view:

```ruby
class SettingsController < ApplicationController
  def index
    # a regular controller action
  end

  def modal
    modalist
    # a modalist controller action
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

In most cases you only want to allow AJAX requests to be able to reach your modal-controller-actions:

```ruby
get 'modal', to: 'settings#modal', constraints: Modalist::Ajax.new
```

### Views

In your Modalist view you are able to use the `'modalist'` component to customize the modal:

* `title` This will specify a title for your modal. If you omit this, your modal will not have a header. Takes a string.
* `subtitle` Add a subtitle to your modal header. Takes a string.
* `&block` Specify actions (preferably icons wrapped in links) which will be displayed on the right side of your modal header.

```haml
= component 'modalist', title: 'Modal', subtitle: 'Subtitle' do
  = component 'modalist/closer'

Content ...
```

**Note:** The `'modalist/closer'` component renders a default modal close action.

### Styles

It is often useful to be able to provide view-specific styles. Modalist therefore adds classes for controller and action to the `.modalist--content-body` element which wraps your modals content. Here is how you can utilize it:

```css
/* settings#modal */
.modalist--content-body.settings.modal {
  /* ... */
}
/* nested/settings#modal */
.modalist--content-body.nested.settings.modal {
  /* ... */
}
```

### Synchronous modals

You can also setup synchronous modals wherever you like:

```haml
= component 'modalist/wrapper', id: 'signup' do
  %h1 Signup
  ...
```

[Learn more](https://github.com/jonhue/modalist#synchronous) about handling synchronous modals with Modalist.js.

### Modalist JS

Continue reading [here](https://github.com/jonhue/modalist) to learn how to use Modalist.js to open modals and fetch content asynchronously.

---

## Testing

1. Fork this repository
2. Clone your forked git locally
3. Install dependencies

    `$ bundle install`

4. Run specs

    `$ bundle exec rspec`

5. Run RuboCop

    `$ bundle exec rubocop`

---

## To Do

We use [GitHub projects](https://github.com/jonhue/modalist-rails/projects/1) to coordinate the work on this project.

To propose your ideas, initiate the discussion by adding a [new issue](https://github.com/jonhue/modalist-rails/issues/new).

---

## Contributing

We hope that you will consider contributing to Modalist. Please read this short overview for some information about how to get started:

[Learn more about contributing to this repository](CONTRIBUTING.md), [Code of Conduct](CODE_OF_CONDUCT.md)

### Semantic Versioning

Modalist follows Semantic Versioning 2.0 as defined at http://semver.org.
