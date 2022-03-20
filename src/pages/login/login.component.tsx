import React from "react";
import { PageArea, BackgroundArea, LoginArea } from "./login.styled";
import { Form, Label, TextInput, ButtonInput } from "../../components/form.styled";
import { FancyHeader } from "../../components/typography.styled";
import { DottedDivider } from "../../components/basic.styled";

const LoginPage = () => {
    return(
        <PageArea>
            <BackgroundArea />
            <LoginArea>
                <FancyHeader>Welcome!</FancyHeader>
                <DottedDivider />
                <Form>
                    <Label htmlFor="email">Email</Label>
                    <TextInput type="text" id="email" name="email"/>
                    <Label htmlFor="password">Password</Label>
                    <TextInput type="text" id="password" name="password"/>
                    <ButtonInput type="submit" value="Log In" />
                </Form>
            </LoginArea>
        </PageArea>
    );
};

export default LoginPage;