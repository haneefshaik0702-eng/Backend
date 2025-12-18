import { login, register } from "../controllers/authController.js";

router.post("/login", login);
router.post("/register", register);  // ← add this
