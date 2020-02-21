import ErrorLib from "./../lib/ErrorLib";

import { Request, Response } from 'express';
import * as Yup from 'yup';
import { hashSync, genSaltSync, compareSync, } from 'bcrypt';
import { JwtHeader, sign } from 'jsonwebtoken';
import { User } from "../models/user";
import { envTokenUser } from "../config/environment";



class UserController {

  public create = async () => {

    const foundUser = await User.findOne({
      username: 'anthor',
    });

    if (foundUser)
      return foundUser;


    const fakeUser = {
      username: 'anthor',
      password: '12345678',

    }
    const user = new User({
      ...fakeUser,
    })

    user.set('password', hashSync(fakeUser.password, genSaltSync()));

    await user.save();

    return user.toJSON();

  }

  public generateTokenLogin(user: { _id: string, username: string, password: string }): string {
    const returnToken = sign({ id: user._id, }, `${envTokenUser}${user.password}`, {
      expiresIn: '1h',
    });
    return returnToken;
  }

  public login = async (req: Request, res: Response) => {

    const yupSchema = Yup.object().shape({
      username: Yup.string().required(),
      password: Yup.string().required(),
    });


    if (!await yupSchema.isValid(req.body)) {
      throw new ErrorLib({
        message: 'Dado não enviado',
      });
    }

    const foundUser = await User.findOne({ 'username': req.body.username }, 'password');

    if (!foundUser) {
      throw new ErrorLib({
        message: 'Usuário ou senha invalida',
      });
    }


    if (!compareSync(`${req.body.password}`, `${foundUser.password}`)) {
      throw new ErrorLib({
        message: 'Usuário ou senha invalida',
      });
    }


   const token = this.generateTokenLogin({
      _id: foundUser._id,
      username: foundUser.username,
      password: foundUser.password,
    })


    foundUser.set('token', token);

    await foundUser.save();

    res.json({
      token,
    })

  }

}

const userController = new UserController();
export default userController;