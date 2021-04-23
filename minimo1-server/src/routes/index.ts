import { Router } from 'express'
const router = Router();

import upload from '../libs/multer';
import { getFarmaco, createFarmaco, deleteFarmaco } from '../controllers/farmaco.controller';

// middleware
// router.use(upload.single('image'));

// routes

router.route('/farmaco')
    .get(getFarmaco)
    .post(createFarmaco);

router.route('/farmaco/:id')
    .delete(deleteFarmaco);

export default router;