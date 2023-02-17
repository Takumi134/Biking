import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import path from 'path';
import jsxRender from './utils/jsxRender';
import apiUserRouter from './routes/apiUserRouter';
import renderRouter from './routes/renderRouter';
import routeRouter from './routes/routeRouter';

const app = express();
app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));
const PORT = process.env.SERVER_PORT || 3000;
const FileStore = store(session);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('public'));
const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};
app.use(session(sessionConfig));
app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  res.locals.user = req.session.user;
  next();
});
// app.use('/', indexRouter);
app.use('/api/user/', apiUserRouter);
app.use('/', renderRouter);
app.use('/addlist', routeRouter);
// app.use('/account', routeRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
