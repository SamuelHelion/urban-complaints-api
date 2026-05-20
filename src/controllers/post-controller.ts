import type {
    Request,
    Response
} from 'express';

import {
    PostService
} from '../services/post-service.js';

const postService =
    new PostService();

export class PostController {

    async create(
        req: Request,
        res: Response
    ): Promise<Response> {

        try {

            const {
                title,
                description,
                address
            } = req.body;

            if (!req.file) {

                return res
                    .status(400)
                    .json({

                        error:
                        'Imagem obrigatória'

                    });

            }

            const imageUrl = req.file.path;

            const post =
                await postService
                    .createPost({

                        title,

                        description,

                        address,

                        imageUrl

                    });

            return res
                .status(201)
                .json(post);

        } catch (
            error: unknown
        ) {

            return res
                .status(500)
                .json({

                    message:

                        error instanceof Error
                            ? error.message
                            : 'Erro interno'

                });

        }

    }

    async getAll(
        _req: Request,
        res: Response
    ): Promise<Response> {

        try {

            const posts =
                await postService
                    .getAllPosts();

            return res
                .status(200)
                .json(posts);

        } catch (
            error: unknown
        ) {

            return res
                .status(500)
                .json({

                    message:

                        error instanceof Error
                            ? error.message
                            : 'Erro interno'

                });

        }

    }

    async getById(
        req: Request,
        res: Response
    ): Promise<Response> {

        try {

            const id =
                String(
                    req.params.id
                );

            if (!id) {

                return res
                    .status(400)
                    .json({

                        error:
                        'Post ID obrigatório'

                    });

            }

            const post =
                await postService
                    .getPostById(
                        id
                    );

            return res
                .status(200)
                .json(post);

        } catch (
            error: unknown
        ) {

            return res
                .status(500)
                .json({

                    message:

                        error instanceof Error
                            ? error.message
                            : 'Erro interno'

                });

        }

    }

    async likePost(
        req: Request,
        res: Response
    ): Promise<Response> {

        try {

            const postId =
                String(
                    req.params.postId
                );

            if (!postId) {

                return res
                    .status(400)
                    .json({

                        error:
                        'Post ID obrigatório'

                    });

            }

            const result =
                await postService
                    .likePost(
                        postId
                    );

            return res
                .status(200)
                .json(result);

        } catch (
            error: unknown
        ) {

            return res
                .status(500)
                .json({

                    message:

                        error instanceof Error
                            ? error.message
                            : 'Erro interno'

                });

        }

    }

}