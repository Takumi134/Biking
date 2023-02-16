import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('Layout');
});

router.get('/login', (req, res) => {
  res.render('Layout');
});

router.get('/signup', (req, res) => {
  res.render('Layout');
});
router.get('/addlist', (req, res) => {
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
