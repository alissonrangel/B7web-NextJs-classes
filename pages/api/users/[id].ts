// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import type { NextApiRequest, NextApiResponse } from 'next'

import { NextApiHandler} from 'next';
import { Users } from '../../../utils/users';
import prisma from "../../../libs/prisma";
import api from '../../../libs/api';


const handlerGet: NextApiHandler = async (req, res) => {
  
  console.log(req.query);
  
  const id = req.query.id as string; // vai vim como string
  
  let myUser = null;

  //myUser = Users.find((user) => user.id.toString() === id) 

  // myUser = await prisma.user.findUnique({
  //   where: {
  //     id: parseInt(id)
  //   },
  //   select: {
  //     id: true,
  //     name: true,
  //     email: true,
  //     active: false
  //   }
  // })

  // para mais de uma condição
  // myUser = await prisma.user.findFirst({
  //   where: {
  //     id: parseInt(id),
  //     active: true
  //   }
  // })

  myUser = await api.getUser(parseInt(id));

  if (myUser) {
    res.json({status: true, myUser})  
  } else {
    res.json({status: false, error: 'Usuário não encontrado2!'})
  }
  
}

const handlerPut: NextApiHandler = async (req, res) => {
  
  console.log(req.query);
  
  const id = req.query.id as string; // vai vim como string


  //myUser = Users.find((user) => user.id.toString() === id) 

  const { name, active } = req.body;
  
  // let data: {name?: string; active?: boolean} = {}

  // if( name ){
  //   data.name = name;
  // }

  // if( active ){
  //   switch (active) {
  //     case 'true':
  //     case '1':
  //       data.active = true
  //       break;
  //     case 'false':
  //     case '0':
  //       data.active = false
  //       break;    
  //     default:
  //       break;
  //   }
  // }

  // const updatedUser = await prisma.user.update({
  //   where: {
  //     id: parseInt(id)
  //   },
  //   data
  // }).catch(() => {
  //   res.status(200).json({status: false, error: 'Não foi possível alterar este usuário.'})
  //   return;
  // })

  const updatedUser = await api.updateUser(parseInt(id), name, active).catch(() => {
      res.status(200).json({status: false, error: 'Não foi possível alterar este usuário.'})
      return;
    })

  if (updatedUser) {
    res.status(200).json({status: true, updatedUser})  
  }
  // } else {
  //   res.status(200).json({status: false, error: 'Não foi possível alterar este usuário.'})
  // }
  
}

const handlerDelete: NextApiHandler = async (req, res) => {
  
  console.log(req.query);
  
  const id = req.query.id as string; // vai vim como string

  // const deletedUser = await prisma.user.delete({
  //   where: {
  //     id: parseInt(id)
  //   }
  // }).catch(() => {
  //   res.json({status: false, error: 'Usuário não encontrado.'})
  //   return;
  // })

  const deletedUser = await api.deleteUser(parseInt(id)).catch(() => {
      res.json({status: false, error: 'Usuário não encontrado.'})
      return;
    })

  //if (deletedUser) {
    res.json({status: true, deletedUser})  
  //}
  
}

const handler: NextApiHandler = async (req, res) => {
  //await NextCors(req, res, { origin: '*', methods: ['POST'] })

  switch (req.method) {
    case 'GET':
      handlerGet(req, res)
      break;
    case 'PUT':
      handlerPut(req, res)
      break;
    case 'DELETE':
      handlerDelete(req, res)
      break;
  }
}

export default handler;
