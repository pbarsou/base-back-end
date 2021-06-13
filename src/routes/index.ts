import { Router } from 'express'; // responsável por gerenciar as nossas notas

const routes = Router();

routes.post(
  '/users',
  (request, response) => {
    const { name, email } = request.body;
    const user = {
      name,
      email,
    };
    return response.json(user);
  },
  // response.json({ message: 'Hello World' }),
);

export default routes;
