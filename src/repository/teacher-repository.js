const { Teacher } = require ('../models/index');

class TeacherRepository {
    async create(data) {
        try {
            const teacher = await Teacher.create(data);
            return teacher;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }

    async destroy(teacherId) {
        try {
            await Teacher.destroy({
                where: {
                    id: teacherId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }

    async getById(teacherId) {
        try {
            const teacher = await Teacher.findByPk(teacherId);
            return teacher;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }

    async getByEmail(teacherEmail) {
        try {
            const teacher = await Teacher.findOne({
                where: {
                    email: teacherEmail
                }
            });
            return teacher;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }
}

module.exports = TeacherRepository;