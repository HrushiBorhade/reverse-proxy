import { getUsers } from "../services/userServices.js";

export const getUsersController = async (req, res, next) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (err) {
    next(error);
  }
};
