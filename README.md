# react-autolinker-wrapper

React component which automatically converts URLs, email addresses, phone numbers, Twitter handles and hashtags in a string to HTML anchors.

[![Build Status](https://travis-ci.org/gvas/react-autolinker-wrapper.svg?branch=master)](https://travis-ci.org/gvas/react-autolinker-wrapper)
[![Coverage Status](https://coveralls.io/repos/github/gvas/react-autolinker-wrapper/badge.svg?branch=master)](https://coveralls.io/github/gvas/react-autolinker-wrapper?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/gvas/react-autolinker-wrapper.svg)](https://greenkeeper.io/)

## Install

```
npm install react-autolinker-wrapper --save
```

## Usage

```jsx
import AutolinkerWrapper from 'react-autolinker-wrapper'
...
<AutolinkerWrapper
  tagName="span"
  text="Documentation at https://github.com/gvas/react-autolinker-wrapper"
  options={{
    newWindow: true,
    stripPrefix: false,
  }} />
```

## Example

<p data-height="265" data-theme-id="0" data-slug-hash="rpYWQR" data-default-tab="js,result" data-user="gvas" data-embed-version="2" data-pen-title="rpYWQR" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/gvas/pen/rpYWQR/">rpYWQR</a> by Vas Gábor (<a href="https://codepen.io/gvas">@gvas</a>) on <a href="https://codepen.io">CodePen</a>.</p>

## Properties

* tagName: The wrapper element's tag name, default is `div`.
* text: The text to autolink.
* options: The [options](https://github.com/gregjacobs/Autolinker.js#options) to invoke Autolinker with.

## Credits

Gregory Jacobs' [Autolinker.js](https://github.com/gregjacobs/Autolinker.js) library.