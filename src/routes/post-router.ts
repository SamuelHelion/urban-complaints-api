import { Router } from 'express';

import { PostController }
from '../controllers/post-controller.js';

import verifyTokenMiddleware
from '../middlewares/verify-token-middleware.js';

import {upload} from '../middlewares/uploads.js';

const router = Router();

const controller = new PostController();

router.post('/posts',verifyTokenMiddleware,upload.single('image'),controller.create);
router.get('/posts',verifyTokenMiddleware,controller.getAll);
router.get('/posts/:id',verifyTokenMiddleware,controller.getById);
router.put('/posts/:postId/like',verifyTokenMiddleware,controller.likePost);

export default router;