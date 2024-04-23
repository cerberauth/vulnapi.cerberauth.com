# API Vulnerabilities

| Name | OWASP  | Severity | Support |
|------|--------|:---------:|:---------:|
| Broken Object Level Authorization (BOLA) | API1:2021 Broken Object Level Authorization | Medium | |
| Private Field Access | API1:2021 Broken Object Level Authorization | Medium | |
| Mass Assignment | API1:2021 Broken Object Level Authorization | Medium | |
| Authentication Bypass | API2:2023 Broken Authentication | High | :white_check_mark: |
| [JWT None algorithm](./broken-authentication/jwt-alg-none.md) | API2:2023 Broken Authentication | High | :white_check_mark: |
| [JWT blank secret](./broken-authentication/jwt-blank-secret.md) | API2:2023 Broken Authentication | High | :white_check_mark: |
| [JWT Audience cross service relay attack](./broken-authentication//jwt-cross-service-relay-attack.md) | API2:2023 Broken  Authentication | High | |
| [JWT Null Signature](./broken-authentication/jwt-null-signature.md) | API2:2023 Broken Authentication | High | :white_check_mark: |
| JWT Algorithm Confusion | API2:2023 Broken Authentication | High | :white_check_mark: |
| JWT Signature not verified | API2:2023 Broken Authentication | High | :white_check_mark: |
| JWT Expired | API2:2023 Broken Authentication | High | |
| Secrets Leak | API8:2023 Security Misconfiguration | High | |
| Directory Traversal | API10:2023 Unsafe Consumption of APIs | High | |
| Directory Listing | API8:2023 Security Misconfiguration | Medium | |
| [GraphQL Introspection Enabled](./security-misconfiguration/graphql-introspection.md) | API8:2023 Security Misconfiguration | Medium | :white_check_mark: |
| Private IP Disclosure | API8:2023 Security Misconfiguration | Low | |
| CORS Headers Misconfiguration | API8:2023 Security Misconfiguration | Low | :white_check_mark: |
| CSP Header Misconfiguration | API8:2023 Security Misconfiguration | Low | :white_check_mark: |
| HSTS Header Misconfiguration | API8:2023 Security Misconfiguration | Low | :white_check_mark: |
| SSL Certificate Not Trusted | API8:2023 Security Misconfiguration | Medium | |
| SSL Not Enforced | API8:2023 Security Misconfiguration | Medium | |
