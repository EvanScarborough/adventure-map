import React, { useState } from "react";
import LoginRequest from "../../types/requests/login-request";
import Auth from "../../types/auth";
import { PageArea, BackgroundArea, LoginArea } from "./login.styled";
import { Form, Label, TextInput, ButtonInput } from "../../components/form.styled";
import { FancyHeader, Body } from "../../components/typography.styled";
import { DottedDivider, StyledLink } from "../../components/basic.styled";
import { post } from "../../api/api";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/Banner.component";

interface LoginPageProps {
    login:(auth:Auth)=>void
};
const LoginPage = ({ login }:LoginPageProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [warning, setWarning] = useState("");

    let navigate = useNavigate();

    const submit = (e : React.SyntheticEvent) => {
        e.preventDefault();
        const request:LoginRequest = { email:email, password:password };
        post<Auth>("/auth/login", request)
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
                <FancyHeader>Welcome!</FancyHeader>
                <DottedDivider />
                {warning && <Banner type="error">{warning}</Banner>}
                <Form onSubmit={submit}>
                    <Label htmlFor="email">Email</Label>
                    <TextInput type="text" id="email" name="email" value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <Label htmlFor="password">Password</Label>
                    <TextInput type="password" id="password" name="password" value={password}
                        onChange={e => setPassword(e.target.value)} />
                    <ButtonInput type="submit" value="Log In" />
                </Form>
                <Body>Need an account? <StyledLink to="/register">Create One!</StyledLink></Body>
            </LoginArea>
        </PageArea>
    );
};

export default LoginPage;