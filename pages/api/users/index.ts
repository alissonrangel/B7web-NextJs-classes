// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import type { NextApiRequest, NextApiResponse } from 'next'

import { NextApiHandler} from 'next';
import { Users } from '../../../utils/users';
//import NextCors from 'nextjs-cors';

import prisma from "../../../libs/prisma";
import api from '../../../libs/api';

const handlerGet: NextApiHandler = async (req, res) => {
  
  const { limit, page } = req.query;

  // let perPage = 10;

  // let offset = 0;

  // if (limit) {
  //   console.log(limit); 
  // }

  // if (page) {
  //   offset = (parseInt(page as string) - 1) * perPage;
  // }

  // let users = await prisma.user.findMany({
  //   skip: offset,
  //   take: perPage,
  //   where: {
  //     // active: true,
  //     // name: {
  //     //   startsWith: 'Te',
  //     //   endsWith: '2',
  //     //   equals: 'Test 2'
  //     // },
  //     // OR: [
  //     //   {
  //     //     active: true
  //     //   },
  //     //   {
  //     //     name: {
  //     //       startsWith: 'Te',
  //     //       endsWith: '2',
  //     //       equals: 'Test 2'
  //     //     }
  //     //   },
  //     // ]
  //   },
  //   select: {
  //     id: true,
  //     name: true,
  //     email: true,
  //     active: true
  //   },
  //   orderBy: [
  //     { active: 'asc' },
  //     { name: 'desc' }
  //   ]
  // });

  let users = await api.getAllUsers( parseInt(page as string) );

  res.status(200).json({ status: true, users})  
}

const handlerPost: NextApiHandler = async (req, res) => {
  const { limit } = req.query;

  const { name, email } = req.body;

  if (limit) {
    console.log(limit); 
  }

  // const newUser = await prisma.user.create({
  //   data: {
  //     name, email
  //   }
  // }).catch((e)=>{
  //   console.log(e);
    
  //   if (e.meta.target.includes('email')) {
  //     res.json({status: false, error:'Email já existe.'})  
  //   } else {
  //     res.json({status: false, error:'Não criou.'})
  //   }
  // })

  const newUser = await api.addUser(name, email).catch((e)=>{
    console.log(e);
    if (e.meta.target.includes('email')) {
      res.json({status: false, error:'Email já existe.'})  
    } else {
      res.json({status: false, error:'Não criou.'})
    }
  });

  console.log('LOG', newUser);
  if(newUser){
    res.status(201).json({status: true, user: newUser}) 
  }
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
