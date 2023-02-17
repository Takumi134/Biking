import express from 'express';
import { Map, User } from '../../db/models';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newRoute = await Map.create({
      ...req.body,
      user_id: req.session.user.id,
    });
    const routeWithUser = await Map.findOne({
      where: { id: newRoute.id },
      include: User,
    });
    res.json(routeWithUser);
  } catch (error) {
    res.sendStatus(500);
  }
});

// const checkPriv = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const foundRoute = await Map.findAll({ where: { id } });
//     if (foundRoute?.user_id === req?.session?.user?.id) {
//       return next();
//     }
//   } catch (e) {
//     console.log(e);
//     return res.sendStatus(500);
//   }
//   return res.sendStatus(401);
// };
// router.get('/', checkPriv, async (req, res) => {
//   await Map.findAll({
//     where: { user_id: req.session.user.id },
//     include: User,
//   });
//   res.sendStatus(200);
// });
export default router;
