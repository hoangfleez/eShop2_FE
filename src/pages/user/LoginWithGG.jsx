import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from 'jwt-decode';

const LoginWithGG = () => {
  return (
    <div>
      <GoogleOAuthProvider clientId="1044851995133-ajsr6rji1fmd8tp85apjirpmq8123751.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={credentialResponse => {
            const details = jwt_decode(credentialResponse.credential)
            console.log(details);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        
      </GoogleOAuthProvider>
      
    </div>
  );
};

export default LoginWithGG;
