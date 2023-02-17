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

export default router;
