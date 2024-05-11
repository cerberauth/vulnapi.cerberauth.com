# API Vulnerabilities

| Name                                                                                                  | OWASP                                       | Severity | Support   |
|-------------------------------------------------------------------------------------------------------|---------------------------------------------|:--------:|:---------:|
| Broken Object Level Authorization (BOLA)                                                              | API1:2023 Broken Object Level Authorization | Medium   | |
| Private Field Access                                                                                  | API1:2023 Broken Object Level Authorization | Medium   | |
| Mass Assignment                                                                                       | API1:2023 Broken Object Level Authorization | Medium   | |
| Authentication Bypass                                                                                 | API2:2023 Broken Authentication             | High     | :white_check_mark: |
| [JWT `none` algorithm](./broken-authentication/jwt-alg-none.md)                                       | API2:2023 Broken Authentication             | High     | :white_check_mark: |
| [JWT blank secret](./broken-authentication/jwt-blank-secret.md)                                       | API2:2023 Broken Authentication             | High     | :white_check_mark: |
| JWT weak secret                                                                                       | API2:2023 Broken Authentication             | High     | :white_check_mark: |
| [JWT Audience cross service relay attack](./broken-authentication//jwt-cross-service-relay-attack.md) | API2:2023 Broken Authentication             | High     | |
| [JWT Null Signature](./broken-authentication/jwt-null-signature.md)                                   | API2:2023 Broken Authentication             | High     | :white_check_mark: |
| JWT Algorithm Confusion                                                                               | API2:2023 Broken Authentication             | High     | :white_check_mark: |
| JWT Signature not verified                                                                            | API2:2023 Broken Authentication             | High     | :white_check_mark: |
| JWT Expired                                                                                           | API2:2023 Broken Authentication             | High     | |
| Discoverable OpenAPI                                                                                  | API7:2023 Server Side Request Forgery       | Info     | :white_check_mark: |
| Discoverable GraphQL Endpoint                                                                         | API7:2023 Server Side Request Forgery       | Info     | :white_check_mark: |
| [GraphQL Introspection Enabled](./security-misconfiguration/graphql-introspection.md)                 | API7:2023 Server Side Request Forgery       | Info     | :white_check_mark: |
| Secrets Leak                                                                                          | API8:2023 Security Misconfiguration         | High     | |
| Directory Listing                                                                                     | API8:2023 Security Misconfiguration         | Medium   | |
| Private IP Disclosure                                                                                 | API8:2023 Security Misconfiguration         | Low      | |
| Not HTTP-only Cookie                                                                                  | API8:2023 Security Misconfiguration         | Info     | :white_check_mark: |
| Not Secure Cookie                                                                                     | API8:2023 Security Misconfiguration         | Info     | :white_check_mark: |
| Not SameSite Cookie                                                                                   | API8:2023 Security Misconfiguration         | Info     | :white_check_mark: |
| No Cookie expiration                                                                                  | API8:2023 Security Misconfiguration         | Info     | :white_check_mark: |
| No CORS Headers                                                                                       | API8:2023 Security Misconfiguration         | Info     | :white_check_mark: |
| Permissive CORS Headers                                                                               | API8:2023 Security Misconfiguration         | Info     | :white_check_mark: |
| X-Content-Type-Options Header Not Set                                                                 | API8:2023 Security Misconfiguration         | Info     | :white_check_mark: |
| X-Frame-Options Header Not Set                                                                        | API8:2023 Security Misconfiguration         | Info     | :white_check_mark: |
| CSP Header Not Set                                                                                    | API8:2023 Security Misconfiguration         | Info     | :white_check_mark: |
| CSP Frame Ancestors Not Set                                                                           | API8:2023 Security Misconfiguration         | Info     | :white_check_mark: |
| HSTS Header Not Set                                                                                   | API8:2023 Security Misconfiguration         | Info     | :white_check_mark: |
| HTTP TRACE Method Enabled                                                                             | API8:2023 Security Misconfiguration         | Info     | :white_check_mark: |
| HTTP TRACK Method Enabled                                                                             | API8:2023 Security Misconfiguration         | Info     | :white_check_mark: |
| Server Signature Leak                                                                                 | API8:2023 Security Misconfiguration         | Info     | :white_check_mark: |
| SSL Certificate Not Trusted                                                                           | API8:2023 Security Misconfiguration         | Medium   | |
| SSL Not Enforced                                                                                      | API8:2023 Security Misconfiguration         | Medium   | |
| Directory Traversal                                                                                   | API10:2023 Unsafe Consumption of APIs       | High     | |
