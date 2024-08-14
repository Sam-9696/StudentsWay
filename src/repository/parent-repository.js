const { Parent } = require ('../models/index');

class ParentRepository {
    async create(data) {
        try {
            const parent = await Parent.create(data);
            return parent;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }

    async destroy(parentId) {
        try {
            await Parent.destroy({
                where: {
                    id: parentId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }

    async getById(parentId) {
        try {
            const parent = await Parent.findByPk(parentId);
            return parent;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }

    async getByEmail(parentEmail) {
        try {
            const parent = await Parent.findOne({
                where: {
                    email: parentEmail
                }
            });
            return parent;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }
}

module.exports = ParentRepository;