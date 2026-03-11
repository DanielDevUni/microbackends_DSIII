import { Router } from "express";
import { supabase } from "./supabase";

const router = Router();

// Crear palabra
router.post("/words", async (req, res) => {
  const { word } = req.body;
  if (!word || typeof word !== "string") {
    return res.status(400).json({ error: "Debe ser una palabra" });
  }

  const { error } = await supabase
    .from("words")
    .insert([{ word }]);

  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: "Palabra guardada" });
});

// Listar palabras
router.get("/words", async (req, res) => {
  const { data, error } = await supabase
    .from("words")
    .select("*");

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

export default router;
