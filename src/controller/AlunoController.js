import Aluno from '../models/Aluno';
import Foto from '../models/Fotos';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['url', 'filename'],
      },
    });
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);

      return res.json(aluno);
    } catch (e) {
      return res.status(404).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params.id;
      if (!id) {
        return res.status(404).json({ errors: ['Missing Id'] });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(404).json({ errors: ['Aluno nao existe'] });
      }
      const alunoAtualizado = await aluno.update(req.body);
      return res.json(alunoAtualizado);
    } catch (e) {
      return res.status(404).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(404).json({ errors: ['Missing Id'] });
      }
      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['url', 'filename'],
        },
      });
      if (!aluno) {
        return res.status(404).json({ errors: ['Aluno nao existe'] });
      }
      return res.json(aluno);
    } catch (e) {
      return res.status(404).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params.id;
      if (!id) {
        return res.status(404).json({ errors: ['Missing Id'] });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(404).json({ errors: ['Aluno nao existe'] });
      }
      await aluno.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(404).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new AlunoController();
