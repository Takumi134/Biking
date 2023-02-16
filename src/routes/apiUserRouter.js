import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

const router = express.Router();
router.post('/signup', async (req, res) => {
  try {
    const { pass, email, username } = req.body;
    console.log(req.body);
    const hashpass = await bcrypt.hash(pass, 10);
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        hashpass, username,
      },
    });
    if (!created) {
      return res.status(401).send('Почта уже существует');
    }
    req.session.user = user;
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
router.post('/login', async (req, res) => {
  try {
    const { pass, email } = req.body;
    console.log(email, pass);
    const user = await User.findOne({
      where: { email },
    });
    if (!user) return res.sendStatus(403);
    const check = await bcrypt.compare(pass, user?.hashpass);
    if (check) {
      req.session.user = user;
      return res.sendStatus(200);
    }
    console.log('Неверный пароль');
    return res.status(401).send('Неверный пароль');
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
router.get('/logout', async (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.redirect('/');
});
export default router;
