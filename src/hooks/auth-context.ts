import React from "react";
import Auth from "../types/auth";

const AuthContext = React.createContext<Auth|null>(null);

export default AuthContext;