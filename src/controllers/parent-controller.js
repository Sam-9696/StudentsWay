const ParentService = require('../services/parent-service');

const parentService = new ParentService();

const create = async (req, res) => {
    try {
        const response = await parentService.create(req.body);
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new user',
            data: response,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message: "Something wrong in auth controller",
            data: {},
            success: false,
            err: error.error
        });
    }
}

const signIn = async (req, res) => {
    try {
        const response = await parentService.signIn(req.body);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully signed in'
        });
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message: "Something wrong in auth controller",
            data: {},
            success: false,
            err: error.error
        });
    }
}

const findByEmail = async (req, res) => {
    try {
        const response = await parentService.getByEmail(req.query.email);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully fetched all data'
        });
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message: "Something wrong in auth controller",
            data: {},
            success: false,
            err: error.error
        });
    }
}

const findById = async (req, res) => {
    try {
        const response = await parentService.getById(req.params.id);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully fetched all data'
        });
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message: "Something wrong in auth controller",
            data: {},
            success: false,
            err: error.error
        });
    }
}

const remove = async (req, res) => {
    try {
        const response = await parentService.removeParent(req.body);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully removed parent'
        });
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message: "Something wrong in auth controller",
            data: {},
            success: false,
            err: error.error
        });
    }
}

module.exports = {
    create,
    signIn,
    findByEmail,
    findById,
    remove
}