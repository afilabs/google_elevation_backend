import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const GOOGLE_MAP_API_KEY = process.env.GOOGLE_MAP_API_KEY;

const getElevation = async (lat, lng) => {
   const res = await axios.get('https://maps.googleapis.com/maps/api/elevation/json', {
      params: {
         locations: `${lat},${lng}`,
         key: GOOGLE_MAP_API_KEY,
      },
   });

   return res.data;
};

export default {
   getElevation,
};
