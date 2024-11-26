import express from 'express';

const router = express.Router();

router.get('/signup', (req, res) => {
  res.send('Sign Up route called!');
});

export default router;
