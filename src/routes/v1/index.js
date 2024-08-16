const express = require('express');

const { StudentController, ParentController, TeacherController } = require('../../controllers/auth-controller')

const router = express.Router();

router.post('/parents/register', ParentController.create);
router.post('/parents/login', ParentController.signIn);
router.get('/parents/:id', ParentController.findById);
router.get('/parents/', ParentController.findByEmail);
router.post('/parents/remove', ParentController.remove);

router.post('/students/register', StudentController.create);
router.post('/students/login', StudentController.signIn);
router.get('/students/:id', StudentController.findById);
router.get('/students/', StudentController.findByEmail);
router.post('/students/remove', StudentController.remove);

router.post('/teachers/register', TeacherController.create);
router.post('/teachers/login', TeacherController.signIn);
router.get('/teachers/:id', TeacherController.findById);
router.get('/teachers/', TeacherController.findByEmail);
router.post('/teachers/remove', TeacherController.remove);



module.exports = router;