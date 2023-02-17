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
router.get('/details', (req, res) => {
  res.render('Layout');
});
router.get('/account', (req, res) => {
  res.render('Layout');
});

export default router;
