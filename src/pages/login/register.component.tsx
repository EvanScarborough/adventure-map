import React, { useState } from "react";
import { PageArea, BackgroundArea, LoginArea } from "./login.styled";
import { Form, Label, TextInput, ButtonInput } from "../../components/form.styled";
import { FancyHeader, Body } from "../../components/typography.styled";
import { DottedDivider, StyledLink } from "../../components/basic.styled";
import { post } from "../../api/api";
import LoginResponse from "../../types/responses/login-response";
import Banner from "../../components/Banner.component";
import RegisterRequest from "../../types/requests/register-request";

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [warning, setWarning] = useState("");

    const submit = (e : React.SyntheticEvent) => {
        e.preventDefault();
        if (password !== confirm) {
            setWarning("Passwards do not match");
            return;
        }
        const request:RegisterRequest = { Email:email, DisplayName:name, Password:password };
        post<LoginResponse>("/user", request)
            .then(data => {
                console.log(data);
            })
            .catch(err => setWarning(err.message));
    }

    return(
        <PageArea>
            <BackgroundArea />
            <LoginArea>
                <FancyHeader center={1}>Create An Account</FancyHeader>
                <DottedDivider />
                <Body center={1}>With an account, you can react to adventures, but cannot document your own.</Body>
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