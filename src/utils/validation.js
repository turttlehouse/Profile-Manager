//email validation logic
export const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//phone number validation logic
export const validatePhone = (phone) => /^[0-9]{7,}$/.test(phone);    

//image format validation logic
export const validateImageType = (file) => {
    if (file && file.length > 0) {
    return file[0].type === 'image/png';
    }
    return true; // Returning true if no file is selected
    };
    