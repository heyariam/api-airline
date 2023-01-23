import { Controller, Get , Post , Put , Delete, Body, Param , Req , Res} from '@nestjs/common';

import { user } from "./interfaces/user";
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from "./user.service";
import { parse } from 'path';

// needs to fix the usersService - it's broken 


@Controller('user')
export class UserController {
  
  constructor (private userService: UsersService){

  }

  @Get()
  getUsers() :user[]{
    return this.userService.getUsers();
  }

  @Get(":userId")
  getUser(@Param("userId") userId: string){
    return this.userService.getUser(parseInt(userId));
  }
   
  @Post()
  createUser(@Body() user: CreateUserDto): string{
    return "hello";
  }

  @Delete(":id")
  deleteUser(@Param("id") id): string{
    console.log(id);
  return `deleting users: ${id}`;
  }

  @Put(":id")
  updateUser(@Body() user: CreateUserDto , @Param("id") id): string{
    console.log(user)
    console.log(id)
    return "invocando users";
  }

  
}
