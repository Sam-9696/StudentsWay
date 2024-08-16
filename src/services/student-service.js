const StudentRepository = require('../repository/student-repository');
const TeacherRepository = require('../repository/parent-repository');

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

    async getByEmail(data) {
        try {
            const student = await this.studentRepository.getByEmail(data);
            return student;
        } catch (error) {
            console.log("Service error");
            throw error;
        }
    }

    async getById(data) {
        try {
            const student = await this.studentRepository.getById(data);
            return student;
        } catch (error) {
            console.log("Service error");
            throw error;
        }
    }

    async removeStudent(data) {
        try {
            const student = await this.studentRepository.getByEmail(data.email)
            const result = await this.studentRepository.destroy(student.id);
            return true;
        } catch (error) {
            console.log("Service error");
            throw error;
        }
    }
}

module.exports = StudentService;