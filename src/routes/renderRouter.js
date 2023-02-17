import express from 'express';
import { Map, User } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const allRoutes = await Map.findAll({ include: User });
  const initState = { allRoutes };
  res.render('Layout', initState);
});

router.get('/login', (req, res) => {
  res.render('Layout');
});

router.get('/signup', (req, res) => {
  res.render('Layout');
});
router.get('/addlist', async (req, res) => {
  res.render('Layout');
});
router.get('/list', (req, res) => {
  res.render('Layout');
});
router.get('/details/:id', async (req, res) => {
  const { id } = req.params;
  const route = await Map.findByPk(id);
  const initState = { route };
  res.render('Layout', initState);
});
router.get('/account', async (req, res) => {
  const allRoutes = await Map.findAll({ include: User });
  const initState = { allRoutes };
  res.render('Layout', initState);
});

export default router;
