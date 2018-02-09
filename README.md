# Modalist

[![Gem Version](https://badge.fury.io/rb/modalist.svg)](https://badge.fury.io/rb/modalist) <img src="https://travis-ci.org/jonhue/modalist.svg?branch=master" />

Modalist is a powerful & lightweight (not necessarily but primarily ajaxified) modal plugin. Here is how it works:

1) You create a distinct Modalist object for every modal style.
2) You trigger a modal from your frontend code passing custom parameters
3) Modalist fetches the modal contents with AJAX while showing a loader (skippable if not desired)
4) The modal opens

Learn more about **[Modalist.js](https://github.com/jonhue/modalist.js)**.

---

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
    * [Controllers](#controllers)
    * [Views](#views)
    * [Styles](#styles)
    * [Modalist.js](#modalistjs)
* [To Do](#to-do)
* [Contributing](#contributing)
    * [Contributors](#contributors)
    * [Semantic versioning](#semantic-versioning)
* [License](#license)

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
gem 'modalist', github: 'jonhue/modalist'
```

## Usage

First let's import the necessary assets:

```javascript
import Modalist from 'modalist';
Modalist.init();
let modalist = new Modalist;
```

```sass
@import "animate.css"
@import "modalist/src/modalist"
@import "modalist/src/modalist-theme"
```

Specify where modals should be located in your view:

```haml
!!!
%html
    %head
        -# ...
    %body
        = component 'modalist'
        = yield
```

### Controllers

Modallist simulates Rails' MVC structure. To add a new modal to your app, you have to create a new controller action, route and view:

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

In your Modalist views are a couple of helper methods available:

**`modalist_title(title)`:** This will specify a title for your modal. If you omit this in your view, your modal will not have a header. Takes a string.

**`modalist_subtitle(subtitle)`:** Add a subtitle to your modal header. Takes a string.

**`modalist_actions(&block)`:** Specify actions (preferably icons wrapped in links) which will be displayed on the right side of your modal header. Takes a block.

**`component 'modalist/closer'`:** Renders a default modal close action. Can be passed to `modalist_actions`.

#### Example

```haml
- modalist_title 'Modal'
- modalist_subtitle 'Subtitle'
- modalist_actions do
    = component 'modalist/closer'

Content ...
```

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

### Modalist.js

Continue reading [here](https://github.com/jonhue/modalist.js) to learn how to use Modalist.js to open modals and fetch content via AJAX.

---

## To Do

[Here](https://github.com/jonhue/modalist/projects/1) is the full list of current projects.

To propose your ideas, initiate the discussion by adding a [new issue](https://github.com/jonhue/modalist/issues/new).

---

## Contributing

We hope that you will consider contributing to Modalist. Please read this short overview for some information about how to get started:

[Learn more about contributing to this repository](CONTRIBUTING.md), [Code of Conduct](CODE_OF_CONDUCT.md)

### Contributors

Give the people some :heart: who are working on this project. See them all at:

https://github.com/jonhue/modalist/graphs/contributors

### Semantic Versioning

Modalist follows Semantic Versioning 2.0 as defined at http://semver.org.

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
