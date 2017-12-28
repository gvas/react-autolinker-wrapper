# react-autolinker-wrapper

[![Greenkeeper badge](https://badges.greenkeeper.io/gvas/react-autolinker-wrapper.svg)](https://greenkeeper.io/)
React component which automatically converts URLs, email addresses, phone numbers, Twitter handles and hashtags in a string to HTML anchors.

[![Build Status](https://travis-ci.org/gvas/react-autolinker-wrapper.svg?branch=master)](https://travis-ci.org/gvas/react-autolinker-wrapper)
[![Coverage Status](https://coveralls.io/repos/github/gvas/react-autolinker-wrapper/badge.svg?branch=master)](https://coveralls.io/github/gvas/react-autolinker-wrapper?branch=master)

## Install

```
npm install react-autolinker-wrapper --save
```

## Usage

```jsx
import AutolinkerWrapper from 'react-autolinker-wrapper'
...
<AutolinkerWrapper text="Check out the documentation at https://github.com/gvas/react-autolinker-wrapper!" />
```

## Properties

* tagName: The wrapper element's tag name, default is `div`.
* text: The text to autolink.
* options: The [options](https://github.com/gregjacobs/Autolinker.js#options) to invoke Autolinker with.

## Credits

Gregory Jacobs' [Autolinker.js](https://github.com/gregjacobs/Autolinker.js) library.