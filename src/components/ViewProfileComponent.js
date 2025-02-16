import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";


const ViewProfile = () => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const location = useLocation();
    const { profileData } = location.state;
    useEffect(() => {
        dispatch({ type: 'VIEW_PROFILE', payload: profileData });
    }, [dispatch, profileData]);
    return (
        <div>
            <h1>View Profile</h1>
            <p>Name: {profileData.name}</p>
            <p>Email: {profileData.email}</p>
            <p>Phone: {profileData.phone}</p>
            <p>Address: {profileData.address}</p>
            <p>Job Title: {profileData.jobTitle}</p>
            <p>Company: {profileData.company}</p>
            <p>Bio: {profileData.bio}</p>
            <p>LinkedIn: {profileData.linkedIn}</p>
            <p>Twitter: {profileData.twitter}</p>
            <button onClick={() => navigator("/")}>Back</button>
        </div>
    )
}

export default ViewProfile;