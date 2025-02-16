import React, {useState} from "react";
import { Typography, TextField, Box, Grid2, Button } from "@mui/material";
import profileService from "../service/profileService";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [company, setCompany] = useState("");
    const [bio, setBio] = useState("");
    const [linkedIn, setLinkedIn] = useState("");
    const [twitter, setTwitter] = useState("");
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const state = useSelector(state => state);
    console.log(state);
    const handleClick = (e) => {
        e.preventDefault();
        profileService.createProfile({
            name: name,
            email: email,
            phone: phone,
            address: address,
            jobTitle: jobTitle,
            company: company,
            bio: bio,
            linkedIn: linkedIn,
            twitter: twitter
        })
        .then(response => {
            console.log("Create Profile response:", response);
            dispatch({ type: 'CREATE_PROFILE', payload: response.data });
            navigator("/");
        })
        .catch(error => {
            console.error("Error creating profile:", error);
            dispatch({ type: 'CREATE_PROFILE_ERROR', payload: error });
    })
}
    return (
        <Grid2 container justifyContent="center" alignItems="center">
            <form onSubmit={(e) => handleClick(e)}>
            <Box sx={{ width: 300 }}>
                <Typography variant="h6">Create Profile</Typography>
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <TextField
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => {
                        setPhone(e.target.value);
                    }}
                />
                <TextField
                    label="Address"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => {
                        setAddress(e.target.value);
                    }}
                />
                <TextField
                    label="Job Title"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => {
                        setJobTitle(e.target.value);
                    }}
                />
                <TextField
                    label="Company"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => {
                        setCompany(e.target.value);
                    }}
                />
                <TextField
                    label="Bio"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => {
                        setBio(e.target.value);
                    }}
                />
                <TextField
                    label="LinkedIn"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => {
                        setLinkedIn(e.target.value);
                    }}
                />
                <TextField
                    label="Twitter"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => {
                        setTwitter(e.target.value);
                    }}
                />
            </Box>
            <Button type="submit">Create Profile</Button>
            </form>
        </Grid2>
    )
}


export default CreateProfile;