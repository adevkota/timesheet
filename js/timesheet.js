"use strict";

var _preact = preact,
    h = _preact.h,
    render = _preact.render,
    Component = _preact.Component;


render(h(
    "div",
    { id: "abc" },
    "Yay Header!"
), document.getElementById("preact-id"));