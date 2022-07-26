import React, { useState } from "react";
import { PageArea, BackgroundArea, LoginArea } from "./login.styled";
import { Form, Label, TextInput, ButtonInput } from "../../components/form.styled";
import { FancyHeader, Body } from "../../components/typography.styled";
import { DottedDivider, StyledLink } from "../../components/basic.styled";
import { post } from "../../api/api";
import Auth from "../../types/auth";
import Banner from "../../components/Banner.component";
import RegisterRequest from "../../types/requests/register-request";
import { useNavigate } from 'react-router-dom';

interface RegisterPageProps {
    login:(auth:Auth)=>void
};
const RegisterPage = ({ login }:RegisterPageProps) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [warning, setWarning] = useState("");

    let navigate = useNavigate();

    const submit = (e : React.SyntheticEvent) => {
        e.preventDefault();
        if (password !== confirm) {
            setWarning("Passwards do not match");
            return;
        }
        const request:RegisterRequest = { email:email, displayName:name, password:password };
        post<Auth>("/user", request)
            .then(response => {
                if (!response.error) {
                    login(response.data);
                    navigate("/");
                }
                else {
                    setWarning(response.errorMessage)
                }
            })
            .catch(err => setWarning("Something went wrong."));
    }

    return(
        <PageArea>
            <BackgroundArea />
            <LoginArea>
                <FancyHeader center={1}>Create An Account</FancyHeader>
                <DottedDivider />
                <Body center={1} padding="0 16px">With an account, you can react to adventures, but cannot document your own.</Body>
                {warning && <Banner type="error">{warning}</Banner>}
                <Form onSubmit={submit}>
                    <Label htmlFor="email">Email</Label>
                    <TextInput type="text" id="email" name="email" value={email}
                        onChange={e => setEmail(e.target.value)}/>
                    <Label htmlFor="name">Display Name</Label>
                    <TextInput type="text" id="name" name="name" value={name}
                        onChange={e => setName(e.target.value)}/>
                    <Label htmlFor="password">Password</Label>
                    <TextInput type="password" id="password" name="password" value={password}
                        onChange={e => setPassword(e.target.value)}/>
                    <Label htmlFor="confirm">Confirm Password</Label>
                    <TextInput type="password" id="confirm" name="confirm" value={confirm}
                        onChange={e => setConfirm(e.target.value)}/>
                    <ButtonInput type="submit" value="Create Account" />
                </Form>
                <Body center={1}>Already have an account? <StyledLink to="/login">Sign In!</StyledLink></Body>
            </LoginArea>
        </PageArea>
    );
};

export default RegisterPage;