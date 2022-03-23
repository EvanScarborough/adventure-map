import React from "react";
import { PageArea, BackgroundArea, LoginArea } from "./login.styled";
import { Form, Label, TextInput, ButtonInput } from "../../components/form.styled";
import { FancyHeader, Body } from "../../components/typography.styled";
import { DottedDivider, StyledLink } from "../../components/basic.styled";

const RegisterPage = () => {
    return(
        <PageArea>
            <BackgroundArea />
            <LoginArea>
                <FancyHeader center={1}>Create An Account</FancyHeader>
                <DottedDivider />
                <Body center={1}>With an account, you can react to adventures, but cannot document your own.</Body>
                <Form>
                    <Label htmlFor="email">Email</Label>
                    <TextInput type="text" id="email" name="email"/>
                    <Label htmlFor="password">Password</Label>
                    <TextInput type="password" id="password" name="password"/>
                    <Label htmlFor="confirm">Confirm Password</Label>
                    <TextInput type="password" id="confirm" name="confirm"/>
                    <ButtonInput type="submit" value="Create Account" />
                </Form>
                <Body center={1}>Already have an account? <StyledLink to="/login">Sign In!</StyledLink></Body>
            </LoginArea>
        </PageArea>
    );
};

export default RegisterPage;