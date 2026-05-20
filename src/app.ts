import express from 'express';
import cors from "cors";
import authRoutes from "./routes/auth-routes.js";
import userRoutes from "./routes/user-routes.js";
import postRoutes from "./routes/post-router.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(authRoutes);
app.use(userRoutes);
app.use(postRoutes);
app.use('/uploads', express.static('uploads'));

export default app;