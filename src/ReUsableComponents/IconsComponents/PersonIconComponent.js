import React from "react";
import { PersonAddAlt as PersonAddAltIcon } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
const PersonIcon = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/create");
    }
    return (
        <div>
            <PersonAddAltIcon style={{cursor: 'pointer'}} onClick={handleClick} />
        </div>
    )
}

export default PersonIcon;