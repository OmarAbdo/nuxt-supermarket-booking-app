import { Router } from 'express';
import fs from 'fs';

const router = Router()

router.get('/calendar', async (req, res) => {
  let file = __dirname + '/../database/bookings.json';
  const data = await fs.readFileSync(file);
  res.send(data);
})

router.post('/calendar', (req, res) => { 
  res.send("BE received object successfully");
})

export default router;