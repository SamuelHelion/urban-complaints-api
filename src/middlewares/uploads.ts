import multer, { type FileFilterCallback } from 'multer';
import type { Request } from 'express';

// 1. Alterado para usar a memória RAM (Garante o req.file.buffer)
const storage = multer.memoryStorage();

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

    if (allowedMimes.includes(file.mimetype)) {
        return cb(null, true);
    }

    cb(new Error('Formato inválido'));
};

export const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB
    }
});
