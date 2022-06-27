// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import type { NextApiRequest, NextApiResponse } from 'next'

import { NextApiHandler} from 'next';
import { Users } from '../../../utils/users';
//import NextCors from 'nextjs-cors';

import prisma from "../../../libs/prisma";

const handlerGet: NextApiHandler = async (req, res) => {
  
  const { limit } = req.query;

  if (limit) {
    console.log(limit); 
  }

  let users = await prisma.user.findMany({
    where: {
      active: true
    }
  });

  res.status(200).json({ status: true, users})  
}

const handlerPost: NextApiHandler = async (req, res) => {
  const { limit } = req.query;

  const { name, email } = req.body;

  if (limit) {
    console.log(limit); 
  }

  const newUser = await prisma.user.create({
    data: {
      name, email
    }
  })


  console.log(req.body);
  
  res.status(201).json({status: true, user: newUser}) 
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
