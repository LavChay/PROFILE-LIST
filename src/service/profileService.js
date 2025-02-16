import axios from "axios";

const getProfiles = async() => {
    try {
        const response = await axios.get("http://localhost:5000/api/profileList");
        return response;
    } catch(error) {
        console.error(error);
        throw error;
    }
}

const createProfile = async(req, res) => {
    try {
        console.log("req.body:", req);
        const response = await axios.post("http://localhost:5000/api/createProfile", req);
        return response;
    } catch(error) {
        console.error(error);
        throw error;
    }
};

const profileService = {
    getProfiles,
    createProfile
}
export default profileService;