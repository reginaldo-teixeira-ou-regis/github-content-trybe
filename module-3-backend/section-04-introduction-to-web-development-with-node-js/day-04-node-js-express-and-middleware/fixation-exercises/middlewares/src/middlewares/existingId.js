const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  if (!teams.some((t) => t.id === id)) {
    return res.sendStatus(404).json({ message: 'Time não encontrado' });
  }
  next();
};

module.exports = existingId;