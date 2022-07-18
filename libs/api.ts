
import prisma from "./prisma";

export default {

  getAllUsers: async (page: number) => {

    let perPage = 10;

    let offset = 0;

    // if (limit) {
    //   console.log(limit); 
    // }

    if (page) {
      offset = (page - 1) * perPage;
    }

    let users = await prisma.user.findMany({
      skip: offset,
      take: perPage,
      where: {
        active: true,
        // name: {
        //   startsWith: 'Te',
        //   endsWith: '2',
        //   equals: 'Test 2'
        // },
        // OR: [
        //   {
        //     active: true
        //   },
        //   {
        //     name: {
        //       startsWith: 'Te',
        //       endsWith: '2',
        //       equals: 'Test 2'
        //     }
        //   },
        // ]
      },
      select: {
        id: true,
        name: true,
        email: true,
        active: true
      },
      orderBy: [
        { createdAt: 'asc' },
        { active: 'asc' },
        { name: 'desc' }
      ]
    });

    return users;
  },

  addUser: async (name: string, email: string) => {


    const newUser = await prisma.user.create({
      data: {
        name, email
      }
    })

    return newUser;
  },

  getUser:async (id: number) => {
    
    const myUser = await prisma.user.findFirst({
      where: {
        id,
        active: true
      },
      // select: {
      //   id: true,
      //   name: true,
      //   email: true,
      //   active: true
      // }
    })

    return myUser;
  },
  
  updateUser: async (id: number, name?: string, active?: string) => {

    let data: {name?: string; active?: boolean} = {}

    if( name ){
      data.name = name;
    }

    if( active ){
      switch (active) {
        case 'true':
        case '1':
          data.active = true
          break;
        case 'false':
        case '0':
          data.active = false
          break;    
        default:
          break;
      }
    }

    const updatedUser = await prisma.user.update({
      where: {
        id
      },
      data
    })

    return updatedUser;
  },

  deleteUser:async (id: number) => {
    
    const deletedUser = await prisma.user.delete({
      where: {
        id
      }
    })

    return deletedUser;
  }
}