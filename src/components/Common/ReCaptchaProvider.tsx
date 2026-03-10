import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

interface Props {
  children: React.ReactNode;
}

const ReCaptchaProvider: React.FC<Props> = ({ children }) => {
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "";

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={siteKey}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
      children={children}
    />
  );
};

export default ReCaptchaProvider;
