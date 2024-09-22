import axios from 'axios';

const validatePhoneNumber = async (phoneNumber) => {
  const apiKey = '66af422fd6b884e88b64f2955e48bba3'; // Your API access key
  const url = `http://apilayer.net/api/validate?access_key=${apiKey}&number=${phoneNumber}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    // Check if the phone number is valid and other details from the response
    if (data && data.valid) {
      return true; // Phone number is valid
    } else {
      console.error('Invalid phone number:', data);
      return false; // Phone number is invalid
    }
  } catch (error) {
    console.error('Error validating phone number:', error);
    return false; // Return false in case of an error
  }
};

export default validatePhoneNumber;



