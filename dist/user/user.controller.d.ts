import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    getUsers(): {
        hello: string;
    };
    createUsers(user: CreateUserDto): string;
    updateUsers(): string;
    deleteUsers(): string;
}
