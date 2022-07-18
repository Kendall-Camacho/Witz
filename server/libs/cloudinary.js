const { v2 } = require('cloudinary');

// Configure cloudinary
v2.config({
  cloud_name: 'witz',
  api_key: '924667195752573',
  api_secret: '1aCt1HDl3UPvDwR8F-WL62oW8lo',
});

const uploadImage = async (filePath) => {
  return await v2.uploader.upload(filePath, {
    folder: 'posts'
  });
}

module.exports = uploadImage;