import React, {useState, useEffect} from "react";
import { Typography, Box, Card, Avatar, Grid2 } from "@mui/material";
import profileService from "../service/profileService";
import { useSelector, useDispatch } from "react-redux";
import PersonIcon from "../ReUsableComponents/IconsComponents/PersonIconComponent";
import PreviewIconComponent from "../ReUsableComponents/IconsComponents/PreviewIconComponent";
const ProfilesList = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log(state);
    useEffect(() => {
        profileService.getProfiles()
            .then(response => {
                console.log("Profiles response:", response);
                setData(response.data);
                dispatch({ type: 'PROFILES_LIST', payload: response.data });
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching profiles:", error);
                dispatch({ type: 'PROFILES_ERROR', payload: error });
                setLoading(false);
            });
    }, [dispatch]);
    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ): (
                <div>
                    <Box sx={{ display: 'flex', alignItems: 'center', padding: 2, float: 'right', position: 'relative' }}>
                        <PersonIcon />  
                    </Box>
                <Grid2 container spacing={2} padding={5}>
                {data.map((profile) => (
                    <Grid2 item xs={12} sm={6} md={4}>
                    <Card sx={{ height: 'auto', marginBottom: 2, width: 350}} key={profile.id}>
                        <Box sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ marginRight: 2 }} />
                            <Box sx={{flexGrow: 1}}>
                                <Typography variant="body1">Name: {profile.name}</Typography>
                                <Typography variant="body1">Email: {profile.email}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <PreviewIconComponent profileData={profile}/>
                                    </Box>
                        </Box>
                    </Card>
                    </Grid2>
                ))}
                </Grid2>
                </div>
            )}
        </div>
    )
}

export default ProfilesList;