import React, { useState } from "react";
import LoginRequest from "../../types/requests/login-request";
import LoginResponse from "../../types/responses/login-response";
import { PageArea, BackgroundArea, LoginArea } from "./login.styled";
import { Form, Label, TextInput, ButtonInput } from "../../components/form.styled";
import { FancyHeader, Body } from "../../components/typography.styled";
import { DottedDivider, StyledLink } from "../../components/basic.styled";
import { post } from "../../api/api";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [warning, setWarning] = useState("");

    const submit = (e : React.SyntheticEvent) => {
        e.preventDefault();
        const request:LoginRequest = { Email:email, Password:password };
        post<LoginResponse>("/auth/login", request)
            .then(data => {
                console.log(data);
            })
            .catch(err => setWarning(err));
    }

    return(
        <PageArea>
            <BackgroundArea />
            <LoginArea>
                <FancyHeader>Welcome!</FancyHeader>
                <DottedDivider />
                {warning ?? <div>{warning}</div>}
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