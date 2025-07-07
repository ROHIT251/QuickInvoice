import axios from "axios";

export const uploadInvoiceThumbnail = async (imageData) => {
    const formData = new FormData();
    formData.append("file", imageData);
    formData.append("upload_preset", "invoice_upload");
    formData.append("cloud_name", "dawbxqrkz");

    const res = await axios.post(
        `https://api.cloudinary.com/v1_1/dawbxqrkz/image/upload`, // ✅ corrected URL
        formData
    );

    return res.data.secure_url;
};
