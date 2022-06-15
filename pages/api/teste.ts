// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import type { NextApiRequest, NextApiResponse } from 'next'

import { NextApiHandler} from 'next';

const handler: NextApiHandler = (req, res) => {
  res.json({pong: true})
}

export default handler;
