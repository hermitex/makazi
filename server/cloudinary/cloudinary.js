import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({ 
    cloud_name: process.env.CLOUND_NAME, 
    api_key: process.env.CLOUND_APIKEY, 
    api_secret: process.env.CLOUD_APISECRET,
    secure: true
  });

  export default cloudinary;