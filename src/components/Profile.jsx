import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ThisUser from './ThisUser';
import Form from 'react-bootstrap/Form'
import TopComunity from './TopComunity';


const API = process.env.REACT_APP_API;
const token = process.env.REACT_APP_TOKEN;
const config = {
    headers: { Authorization: `Bearer ${token}` }
};


const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
background-color: #fdfbff;
`;

const HeadPic = styled.div`
height: 33vh;
width: 100%;
background-size: cover;
background-position-y: 80%;
background-color: var(--Primary-Light);
`;

const Box = styled.div`
    height: 20vh;
    width: 100%;
`;

const Info = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
margin-right :10vw;


`;
const Left = styled.div`
  width  :30% ;
`;

const Right = styled.div`
  width  :50% ;
`;



export default function Profile() {

    const [user, setUser] = useState({});

    async function getUserInformation() {
        const res = await axios.get(API + `/user/1`, config).then(res => {
            return res.data;
        }).catch(err => err);
        // console.log(res);
        setUser(res);
    }
    useEffect(() => {
        getUserInformation();
    }, []);


    return (
        <Wrapper>
            {user && (<> <HeadPic></HeadPic>
                <ThisUser></ThisUser>
                <Box></Box>
                <Info>
                    <Left></Left>
                    <Right>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>First name</Form.Label>
                            <Form.Control style={{ pointerEvents: 'none' }} readOnly type="text" value={`${user.username}`} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control style={{ pointerEvents: 'none' }} readOnly type="text" value={`${user.lastname}`} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control style={{ pointerEvents: 'none' }} readOnly type="text" value={`${user.email}`} />
                        </Form.Group>
                    </Right>
                </Info>
                <TopComunity comunities={`${user.communities}`}></TopComunity>
            </>)}
        </Wrapper >

    )
}
