(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Contact_tsx"],{

/***/ "./resources/js/Pages/Contact.tsx":
/*!****************************************!*\
  !*** ./resources/js/Pages/Contact.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js"); //Interface Props


var Contact = function Contact() {
  //State
  //Methods
  var onSubmit = function onSubmit(event) {
    event.preventDefault();
    window.alert('This form is without function, this project is in Dev mode');
  }; //Template


  return react_1["default"].createElement("div", {
    className: "section-container w-full min-h-screen bg-gray-800"
  }, react_1["default"].createElement("div", {
    className: "container mx-auto text-gray-100 px-64"
  }, react_1["default"].createElement("h1", {
    className: "py-16 text-center text-6xl"
  }, "Contact"), react_1["default"].createElement("p", {
    className: "mb-4"
  }, "Let me see your identification. You don't need to see his identification. We don't need to see his identification. These are not the droids your looking for. These are not the droids we're looking for. He can go about his business. You can go about your business. Move along. Move along. Move along."), react_1["default"].createElement("form", null, react_1["default"].createElement("input", {
    className: "w-full mb-4 rounded p-2",
    type: "text",
    placeholder: "Your Name ..."
  }), react_1["default"].createElement("textarea", {
    className: "w-full rounded p-2",
    cols: 30,
    rows: 10,
    placeholder: "type something ..."
  }), react_1["default"].createElement("button", {
    onClick: onSubmit,
    className: "w-full py-2 bg-green-500 text-gray-100 font-bold rounded inline-block mt-4",
    type: "submit"
  }, "Send message")), react_1["default"].createElement("div", {
    className: "w-full flex justify-center items-center pt-8"
  }, react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: "/",
    className: "text-gray-100 text-3xl py-4 px-8 border-2 border-gray-100 rounded"
  }, "Back"))));
};

exports.default = Contact;

/***/ })

}]);