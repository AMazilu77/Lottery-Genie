const multer = require('multer');


// mime type helper, maps mimetype and which extensons they would be.
const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
  };
  
  // multer express package for parasing incoming files
  // pass js object to disk storage which takes a destination function which will be executed anytime a file is saved
  
  const storage = multer.diskStorage({
    // the callback is the where to store it information, pass 2 things to callback,
    // if there is an error, then a path to where it should be stored
    destination: (req, file, cb) => {
      const isValid = MIME_TYPE_MAP[file.mimetype];
      let error = new Error('invalid mime type');
      if (isValid) {
        error = null;
      }
      // 2nd arguement is path, which is relative to server js file
      cb(error, 'backend/images');
    },
    filename: (req, file, cb) => {
      // formating
      const name = file.originalname
      .toLowerCase()
      .split(' ')
      .join('-');
      // extract extension
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, name + '-' + Date.now() + '.' + ext);
    }
  });
// single means multer is expecting a single file, pass a javascript object with a property for storage,
// which then takes the storage confirguration
  module.exports = multer({storage: storage}).single('image');