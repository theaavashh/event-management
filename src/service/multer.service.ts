import multer from "multer";

const uploadStorage=multer.diskStorage({
	destination: function(req,file,cb){
		cb(null, "public");
	},
	filename: function(req,file,cb){
		cb(null, `${Date.now()}-${file.originalname} `);
	}
});


const upload = multer({ storage: uploadStorage });

export default upload;

