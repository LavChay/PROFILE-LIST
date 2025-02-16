import React from "react";
import PreviewIcon from '@mui/icons-material/Preview';
import { useNavigate } from "react-router-dom";
const PreviewIconComponent = (profileData) => {
    const navigator = useNavigate();
    const handleIconClick = () => {
        navigator("/view", { state: profileData });
    }
    return (
        <div>
            <PreviewIcon onClick={handleIconClick} style={{cursor: 'pointer'}}/>
        </div>
    )
}

export default PreviewIconComponent;