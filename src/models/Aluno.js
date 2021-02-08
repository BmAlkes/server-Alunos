import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: { type: Sequelize.STRING, defaultValue: '', validate: { len: { args: [3, 35], msg: 'Name need between 3 and 35 characters' } } },
      sobrenome: { type: Sequelize.STRING, defaultValue: '', validate: { len: { args: [3, 35], msg: 'LastName need between 3 and 35 characters' } } },
      email: {
        type: Sequelize.STRING, defaultValue: '', unique: { msg: 'email already exists' }, validate: { isEmail: { msg: 'Email invalid' } },
      },
      idade: { type: Sequelize.INTEGER, defaultValue: '', validate: { isInt: { msg: 'age must be a number' } } },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}
