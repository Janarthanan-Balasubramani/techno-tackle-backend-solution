import UserRepository from '../repository/storeUser.repository';
import bcrypt from 'bcrypt';

const saltRounds = 10; // You can adjust the number of rounds as needed

const createUser = async (user: any) => {
  // Hash the password
  if (user.password != null) {
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    const userWithHashedPassword = { ...user, password: hashedPassword };

    // Check if a user with the same email already exists
    const existingUser = await UserRepository.findUserByEmail(user.email);
    if (existingUser) {
      throw new Error('A user with this email already exists');
    }

    return UserRepository.createUser(userWithHashedPassword);
  }
};

const UserService = { createUser };

export default UserService;
