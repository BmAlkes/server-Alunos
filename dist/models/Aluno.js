"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: { type: _sequelize2.default.STRING, defaultValue: '', validate: { len: { args: [3, 35], msg: 'Name need between 3 and 35 characters' } } },
      sobrenome: { type: _sequelize2.default.STRING, defaultValue: '', validate: { len: { args: [3, 35], msg: 'LastName need between 3 and 35 characters' } } },
      email: {
        type: _sequelize2.default.STRING, defaultValue: '', unique: { msg: 'email already exists' }, validate: { isEmail: { msg: 'Email invalid' } },
      },
      idade: { type: _sequelize2.default.INTEGER, defaultValue: '', validate: { isInt: { msg: 'age must be a number' } } },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
} exports.default = Aluno;
