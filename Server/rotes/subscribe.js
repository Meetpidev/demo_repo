import express from 'express';
import { subscribeToChannel, getSubscriptions } from '../controller/subscribe.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/subscrib', auth, subscribeToChannel);
router.get('/:userId', auth, getSubscriptions);

export default router;
