import {User} from "../model/user";
import {AppDataSource} from "../data-source";


class UserService {
    private userRepository
    constructor() {
        this.userRepository = AppDataSource.getRepository(User)
    }

    getAll = async () => {
        let user = `select * 
                    from user
                        `
        let user1 = await this.userRepository.query(user)
        return user1;

    }

    checkUser = async (user) => {
        let userCheck = await this.userRepository.findOneBy({username: user.username, password: user.password});
        if (!userCheck) {
            return null
        }
        return userCheck
    }

    saveUser = async (user) => {
        return this.userRepository.save(user);
    }
}

export default new UserService();