// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

const TeacherRepository = require('../repository/teacher-repository');
// const { JWT_KEY } = require('../config/ServerConfig');
// const AppErrors = require('../utils/error-handler');

class TeacherService {
    constructor() {
        this.teacherRepository =new TeacherRepository();
    }

    async create(data) {
        try {
            const teacher = await this.teacherRepository.create(data);
            return teacher;
        } catch (error) {
            console.log("Service error");
            throw error;
            // if(error.name == 'SequelizeValidationError') {
            //     throw error;
            // }
            // console.log("Something went wrong in the service layer");
            // throw new AppErrors(
            //     'ServerError',
            //     'Something went wrong in service',
            //     'Logical issue found',
            //     500
            // );
        }
    }
    async signIn(data) {
        try {
            const teacher = await this.teacherRepository.getByEmail(data.email);
                if(data.password != teacher.password) {
                    console.log("Password doesn't match");
                    throw {error: 'Incorrect password'};
                }else return teacher;
        } catch (error) {
            console.log("Service error");
            throw error;
        }
    }
}

module.exports = TeacherService;


    
            // if(error.name == 'SequelizeValidationError') {
            //     throw error;
            // }
            // console.log("Something went wrong in the service layer");
            // throw new AppErrors(
            //     'ServerError',
            //     'Something went wrong in service',
            //     'Logical issue found',
            //     500
            // );
        


    // async signIn(email, plainPassword) {
    //     try {
    //         // Step 1 -> fetch the user using the email
    //         const user = await this.userRepository.getByEmail(email);
    //         // Step 2 -> compare incoming plain password with stored encrypted password
    //         const passwordsMatch = this.checkPassword(plainPassword, user.password);

    //         if(!passwordsMatch) {
    //             console.log("Password doesn't match");
    //             throw {error: 'Incorrect password'};
    //         }
    //         // Step 3 -> if passwords match then create a token and send it to the user
    //         const newJWT = this.createToken({email: user.email, id: user.id});
    //         return newJWT;

    //     } catch (error) {
    //         if(error.name == 'AttributeNotFound') {
    //             throw error;
    //         }
    //         console.log("Something went wrong in the sign in process");
    //         throw error;
    //     }
    // }

    // async isAuthenticated(token) {
    //     try {
    //         const response = this.verifyToken(token);
    //         if(!response) {
    //             throw{error: 'Invalid token'}
    //         }
    //         const user = await this.userRepository.getById(response.id);
    //         if(!user) {
    //             throw {error: 'No user with the corresponding token exists'};
    //         }
    //         return user.id;
    //     } catch (error) {
    //         console.log("Something went wrong in the auth process");
    //         throw error;
    //     }
    // }

    // createToken(user) {
    //     try {
    //         const result = jwt.sign(user, JWT_KEY, {expiresIn: '1d'});
    //         return result;
    //     } catch (error) {
    //         console.log("Something went wrong in the token creation", error);
    //         throw error;
    //     }
    // }

    // verifyToken(token) {
    //     try {
    //         const response = jwt.verify(token, JWT_KEY);
    //         return response;
    //     } catch (error) {
    //         console.log("Something went wrong in the token validation");
    //         throw error;
    //     }
    // }

    // checkPassword(userInputPassword, encryptedPassword) {
    //     try {
    //         return bcrypt.compareSync(userInputPassword, encryptedPassword);
    //     } catch (error) {
    //         console.log("Something went wrong in password comparison");
    //         throw error;
    //     }
    // }

    // isAdmin(userId) {
    //     try {
    //         return this.userRepository.isAdmin(userId);
    //     } catch (error) {
    //         console.log("Something went wrong in service layer");
    //         throw error;
    //     }
    // }



