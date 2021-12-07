const router = require('express').Router(); 
const { Authenticate } = require('../middleWares/auth'); 
const {createAtm, deleteAtm, getAtms, addPeople,getQueue,getProcessed} = require('../controller/atm')

router.post('/create', createAtm);  
router.delete('/delete/:id', deleteAtm);
router.post('/createTrans', addPeople);

router.get('/listAtms', getAtms); 
router.get('/listQueue',getQueue)
router.get('/listProcess',getProcessed)

module.exports = router;