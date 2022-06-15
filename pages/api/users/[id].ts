// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import type { NextApiRequest, NextApiResponse } from 'next'

import { NextApiHandler} from 'next';
import { Users } from '../../../utils/users';

const handler: NextApiHandler = (req, res) => {
  

  console.log(req.query);
  
  const id = req.query.id as string; // vai vim como string
  
  let myUser = null;

  myUser = Users.find((user) => user.id.toString() === id) 

  if (myUser) {
    res.json(myUser)  
  } else {
    res.json({error: 'Usuário não encontrado!'})
  }
  
}

export default handler;
