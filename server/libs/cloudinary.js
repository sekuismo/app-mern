import {v2 as cloudinary} from 'cloudinary'
cloudinary.config({
    cloud_name:'dyhztmd6u',
    api_key:'718346687249275',
    api_secret: 'vQ9tCtyRRYSBjxEyl9dlmBAQ6uo'

})

export const uploadImage = async (filePath) => {

    return await cloudinary.uploader.upload(filePath,{
        folder:'posts'
    })
}


export const deleteImage = async id =>{
    return await cloudinary.uploader.destroy(id)
  
  }

