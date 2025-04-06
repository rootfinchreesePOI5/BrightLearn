import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
    const { id: params } = useParams();
    const [EditProfile, setEdit] = useState(false);
    const applyChange = () => {
        if (params) {
            setEdit(true);
        }
    }

    useEffect(()=>{
        applyChange();
    },[params])
    return (
        <div>
            {
                EditProfile ? "edit my profile"  :  "this is my profile"
            }
        </div>
    )
}

export default Profile
