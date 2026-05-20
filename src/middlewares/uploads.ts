import multer, {
    type FileFilterCallback
} from 'multer';

import path from 'path';
import crypto from 'crypto';

import { fileURLToPath } from 'url';

import type { Request } from 'express';

const __filename =
    fileURLToPath(
        import.meta.url
    );

const __dirname =
    path.dirname(
        __filename
    );

const uploadFolder =
    path.resolve(
        __dirname,
        '..',
        'uploads'
    );

const storage =
    multer.diskStorage({

        destination(

            _req: Request,

            _file,

            cb

        ) {

            cb(
                null,
                uploadFolder
            );

        },

        filename(

            _req: Request,

            file,

            cb

        ) {

            const hash =
                crypto
                .randomBytes(8)
                .toString('hex');

            const ext =
                path.extname(
                    file.originalname
                );

            cb(
                null,
                `${hash}-${Date.now()}${ext}`
            );

        }

    });

const fileFilter = (

    _req: Request,

    file: Express.Multer.File,

    cb: FileFilterCallback

) => {

    const allowedMimes = [

        'image/jpeg',
        'image/png',
        'image/jpg',
        'image/webp'

    ];

    if (
        allowedMimes.includes(
            file.mimetype
        )
    ) {

        return cb(
            null,
            true
        );

    }

    cb(
        new Error(
            'Formato inválido'
        )
    );

};

export const upload =
    multer({

        storage,

        fileFilter,

        limits: {

            fileSize:
                10 * 1024 * 1024

        }

    });