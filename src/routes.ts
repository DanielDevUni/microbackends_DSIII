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

// Actualizar palabra por id
router.put("/words/:id", async (req, res) => {
  const { id } = req.params;
  const { word } = req.body;

  if (!word || typeof word !== "string") {
    return res.status(400).json({ error: "Debe ser una palabra válida" });
  }

  const { error } = await supabase
    .from("words")
    .update({ word })
    .eq("id", id);

  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: "Palabra actualizada" });
});

// Eliminar palabra por id
router.delete("/words/:id", async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from("words")
    .delete()
    .eq("id", id);

  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: "Palabra eliminada" });
});