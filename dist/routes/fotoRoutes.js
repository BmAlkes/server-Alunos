"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

var _fotoController = require('../controller/fotoController'); var _fotoController2 = _interopRequireDefault(_fotoController);

const router = new (0, _express.Router)();

router.post('/', _loginRequired2.default, _fotoController2.default.store);

exports. default = router;
