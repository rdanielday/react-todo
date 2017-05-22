const React = require('react');
const ReactDOM = require('react-dom');

const {
    Route,
    Router,
    IndexRoute,
    hashHistory,
  } = require('react-router');

// Load Foundation
$(document).foundation();

// App css
require('applicationStyles');

ReactDOM.render(
  <p>Boilerplate 3 Project</p>,
  document.getElementById('app'),
);
