// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import type { NextApiRequest, NextApiResponse } from 'next'

import { NextApiHandler} from 'next';
import { Users } from '../../../utils/users';
//import NextCors from 'nextjs-cors';

const handlerGet: NextApiHandler = async (req, res) => {
  
  const { limit } = req.query;

  if (limit) {
    console.log(limit); 
  }

  res.status(200).json(Users)  
}

const handlerPost: NextApiHandler = async (req, res) => {
  const { limit } = req.query;

  if (limit) {
    console.log(limit); 
  }

  console.log(req.body);
  
  res.status(201).json({status2: true}) 
}

const handler: NextApiHandler = async (req, res) => {
  //await NextCors(req, res, { origin: '*', methods: ['POST'] })

  switch (req.method) {
    case 'GET':
      handlerGet(req, res)
      break;
    case 'POST':
      handlerPost(req, res)
      break;
  }
}

export default handler;
