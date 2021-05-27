import { createProviderClass } from "@next-core/brick-utils";
import {
  SsoApi_ssoAuthorization,
  SsoApi_ssoLogin,
  SsoApi_ssoLogout,
  AuthApi_checkLogin,
  MfaApi_generateRandomTotpSecret,
  MfaApi_updateUserTotpSecret,
  MfaApi_verifyTotpCode,
  AuthApi_loginV2,
} from "@next-sdk/api-gateway-sdk";

customElements.define(
  "providers-of-api-gateway.sso-api-sso-authorization",
  createProviderClass(SsoApi_ssoAuthorization)
);
customElements.define(
  "providers-of-api-gateway.sso-api-sso-login",
  createProviderClass(SsoApi_ssoLogin)
);
customElements.define(
  "providers-of-api-gateway.sso-api-sso-logout",
  createProviderClass(SsoApi_ssoLogout)
);
customElements.define(
  "providers-of-api-gateway.auth-api-check-login",
  createProviderClass(AuthApi_checkLogin)
);
customElements.define(
  "providers-of-api-gateway.mfa-api-generate-random-totp-secret",
  createProviderClass(MfaApi_generateRandomTotpSecret)
);
customElements.define(
  "providers-of-api-gateway.mfa-api-update-user-totp-secret",
  createProviderClass(MfaApi_updateUserTotpSecret)
);
customElements.define(
  "providers-of-api-gateway.mfa-api-verify-totp-code",
  createProviderClass(MfaApi_verifyTotpCode)
);
customElements.define(
  "providers-of-api-gateway.auth-api-login-v2",
  createProviderClass(AuthApi_loginV2)
);
