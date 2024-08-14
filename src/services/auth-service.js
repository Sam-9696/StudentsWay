const StudentService = require('./student-service');
const ParentService = require('./parent-service');
const TeacherService = require('./teacher-service');

const studentService = new StudentService();
const parentService = new ParentService();
const teacherService = new TeacherService();


const signUp = async (data) => {
        try {
            if(data.role == 'STUDENT') {
                try {
                    const response = await studentService.create(data);
                    return response;
                } catch (error) {
                    console.log("Something wrong in signup");
                    throw error;
                }  
            } 
            else if (data.role == 'TEACHER') {
                try {
                    const response = await teacherService.create(data);
                    return response;
                } catch (error) {
                    console.log("Something wrong in signup");
                    throw error;
                }  
            } 
            else if (data.role == 'PARENT') {
                try {
                    const response = await parentService.create(data);
                    return response;
                } catch (error) {
                    console.log("Something wrong in signup");
                    throw error;
                }  
            }
        } catch (error) {
            console.log("Something went wrong in the sign up process");
            throw error;
        }
    }

const logIn = async (data) => {
        try {
            if(data.role == 'STUDENT') {
                try {
                    console.log(data);
                    const response = await studentService.signIn(data);
                    return response;
                } catch (error) {
                    console.log("Something wrong in sigin");
                    throw error;
                }  
            } 
            else if (data.role == 'TEACHER') {
                try {
                    const response = await teacherService.signIn(data);
                    return response;
                } catch (error) {
                    console.log("Something wrong in signup");
                    throw error;
                }  
            } 
            else if (data.role == 'PARENT') {
                try {
                    const response = await parentService.signIn(data);
                    return response;
                } catch (error) {
                    console.log("Something wrong in signup");
                    throw error;
                }  
            }
        } catch (error) {
            console.log("Something went wrong in the sign in process");
            throw error;
        }
    }

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


module.exports = {
    signUp,
    logIn
};