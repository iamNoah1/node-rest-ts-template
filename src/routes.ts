import * as express from 'express';

const router = express.Router();

router.get('/hello', (_, res) => {
  res.status(200).json({ success: true, msg: 'hi !' });
});

export default router;
