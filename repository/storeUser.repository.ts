import { PrismaClient, StoreUser } from '@prisma/client';

const prisma = new PrismaClient();

const createUser = async (user:any): Promise<StoreUser | null> => {
  try {
    const createdUser = await prisma.storeUser.create({
      data: {
        email: user.email,

      },
    });   
   return createdUser;

  } catch (err) {
    throw err;
  }
};
const findUserByEmail = async (email: string): Promise<StoreUser | null> => {
  try {
    return await prisma.storeUser.findUnique({
      where: {
        email,
      },
    });
  } catch (err) {
    throw err;
  }
};

const UserRepository = { createUser, findUserByEmail };

export default UserRepository;
