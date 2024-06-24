require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dkighcn4p",
  api_key: "359616995771438",
  api_secret: "wWmXH4lNekjugxOApklCJyTnELw",
});

// const cloudinaryUploadImg = async (fileToUpload) => {
//   return new Promise((resolve) => {
//     cloudinary.uploader.upload(fileToUpload, (result) => {
//       console.log(result);
//       resolve(
//         {
//           url: result.secure_url,
//           asset_id: result.asset_id,
//           public_id: result.public_id,
//         },
//         {
//           resource_type: "auto",
//         }
//       );
//     });
//   });
// };

const cloudinaryUploadImg = async (fileToUpload) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(fileToUpload, (error, result) => {
      if (error) {
        console.error("Error uploading image:", error);
        reject(error);
      } else {
        console.log("Image uploaded successfully!");
        resolve(
          {
            url: result.secure_url,
            asset_id: result.asset_id,
            public_id: result.public_id,
          },
          {
            resource_type: "auto",
          }
        );
      }
    });
  });
};

const cloudinaryDeleteImg = async (fileToDelete) => {
  return new Promise((resolve) => {
    cloudinary.uploader.destroy(fileToDelete, (result) => {
      resolve(
        {
          url: result.secure_url,
          asset_id: result.asset_id,
          public_id: result.public_id,
        },
        {
          resource_type: "auto",
        }
      );
    });
  });
};

module.exports = { cloudinaryUploadImg, cloudinaryDeleteImg };
