"use client";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function GetUsername() {

    const [data, setData] = useState('Login');

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const res = await axios.get("/api/users/activeUser");
                setData(res.data.data.username);
            } catch (error) {
                console.error(error);
                toast.error("Failed to fetch user details");
            }
        };
        fetchUserDetails();
    }, []);

    return (
    <>
        <FontAwesomeIcon icon={faUser} />
        {data}
    </>
    );
}
