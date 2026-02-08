import elevationService from '../services/elevation.js';

const getElevation = async (req, res) => {
   const { lat, lng } = req.query;

   if (!lat) return res.status(400).json({ error: 'Please enter latitude' });
   if (!lng) return res.status(400).json({ error: 'Please enter longitude' });

   try {
      const data = await elevationService.getElevation(lat, lng);
      res.json(data);
   } catch (error) {
      res.status(500).json({ error: 'Failed to get elevation', details: error.message });
   }
};

export default {
   getElevation,
};
