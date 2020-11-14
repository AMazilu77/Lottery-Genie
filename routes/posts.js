const express = require("express");
const authChecker = require('../backend/middleware/check-auth');
const extractFile = require('../backend/middleware/file');


const router = express.Router();
const postController = require('../backend/controllers/posts')




// post lucky numbers route 
router.post("", authChecker, extractFile, postController.userPost );

// retrieve all posts
router.get("", postController.userGetsAllPosts);


// Edit route Post done for adding images and editing images
router.put("/:id", authChecker, extractFile, postController.userEditPost);


// get specific post id done
router.get("/:id", postController.userGetsOnePost);


// delete route done
router.delete("/:id", authChecker, postController.userDeletesPost);

module.exports = router;
