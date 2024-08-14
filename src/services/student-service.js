const StudentRepository = require('../repository/student-repository');

class StudentService {
    constructor() {
        this.studentRepository = new StudentRepository();
    }

    async create(data) {
        try {
            console.log(data);
            const student = await this.studentRepository.create(data);
            return student;
        } catch (error) {
            console.log("Service error");
            throw error;
        }
    }

    async signIn(data) {
        try {
            const student = await this.studentRepository.getByEmail(data.email);
                if(data.password != student.password) {
                    console.log("Password doesn't match");
                    throw {error: 'Incorrect password'};
                }else return student;
        } catch (error) {
            console.log("Service error");
            throw error;
        }
    }
}

module.exports = StudentService;