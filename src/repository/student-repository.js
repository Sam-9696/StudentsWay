const { Student } = require ('../models/index');

class StudentRepository {
    async create(data) {
        try {
            const student = await Student.create(data);
            return student;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }

    async destroy(studentId) {
        try {
            await Student.destroy({
                where: {
                    id: studentId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }

    async getById(studentId) {
        try {
            const student = await Student.findByPk(studentId);
            return student;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }

    async getByEmail(studentEmail) {
        try {
            const student = await Student.findOne({
                where: {
                    email: studentEmail
                }
            });
            return student;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }
}

module.exports = StudentRepository;