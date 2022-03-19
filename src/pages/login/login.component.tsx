import React from "react";
import { PageArea, BackgroundArea, LoginArea } from "./login.styled";
import { Input } from "../../components/form.styled";
import { FancyHeader } from "../../components/typography.styled";

const LoginPage = () => {
    return(
        <PageArea>
            <BackgroundArea />
            <LoginArea>
                <FancyHeader>Welcome!</FancyHeader>
                <form>
                    <Input/>
                </form>
            </LoginArea>
        </PageArea>
    );
};

export default LoginPage;