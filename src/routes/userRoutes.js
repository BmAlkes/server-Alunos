import { Router } from 'express';
import UserController from '../controller/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();
// nao deveria existir
// router.get('/', loginRequired, UserController.index); // lista usuarios
// router.get('/:id', UserController.show); // lista usuario

router.post('/', loginRequired, UserController.store);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;
