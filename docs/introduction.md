---
description: VulnAPI is an Open Source DAST that scans APIs for vulnerabilities and security risks.
slug: /
---

# Introduction

Welcome to VulnAPI Documentation!

![Demo](/demo.gif)

---

## What is VulnAPI?

VulnAPI is an Open Source DAST that scans APIs for vulnerabilities and security risks. It provides reports on any vulnerabilities detected during the scan, including the risk level, vulnerability, description, and operation performed when the vulnerability has been found.

VulnAPI offers two methods for scanning APIs:
* **Using Curl-like CLI**: This method involves directly invoking the CLI with parameters resembling curl commands.
* **Using OpenAPI Contracts**: This method utilizes OpenAPI contracts to specify API endpoints for scanning.

## Installation

Before making your first scan with VulnAPI, you have to download and install it. Please follow the instructions on the [Installation](./getting-started/installation.md) page.

## Using Curl-like CLI

To perform a scan using the Curl-like CLI, execute the following command:

```bash
vulnapi scan curl [API_URL] [CURL_OPTIONS]
```

Replace `[API_URL]` with the URL of the API to scan, and `[CURL_OPTIONS]` with any additional curl options you wish to include.

Example:

```bash
vulnapi scan curl http://localhost:8080 -H "Authorization: Bearer eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyfQ."
```

## Using OpenAPI Contracts

To perform a scan using OpenAPI contracts, execute the following command:

```bash
echo "[JWT_TOKEN]" | vulnapi scan openapi [PATH_TO_OPENAPI_FILE]
```

Replace [PATH_TO_OPENAPI_FILE] with the path to the OpenAPI contract JSON file and [JWT_TOKEN] with the JWT token to use for authentication.

Example:

```bash
echo "eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.e30." | vulnapi scan openapi ./test/stub/simple_http_bearer_jwt.openapi.json
```

## Output

The CLI provides detailed reports on any vulnerabilities detected during the scan. Below is an example of the output format:

```bash
+------------+--------------------------------+--------------------------------+----------------------------+
| RISK LEVEL |         VULNERABILITY          |          DESCRIPTION           |         OPERATION          |
+------------+--------------------------------+--------------------------------+----------------------------+
| Critical   | JWT None Algorithm             | JWT with none algorithm is     | GET http://localhost:8080/ |
|            |                                | accepted allowing to bypass    |                            |
|            |                                | authentication.                |                            |
| Low        | CSP Header is not set          | No Content Security Policy     | GET http://localhost:8080/ |
|            |                                | (CSP) Header has been detected |                            |
|            |                                | in HTTP Response.              |                            |
| Low        | CORS Header is not set         | No CORS Header has been        | GET http://localhost:8080/ |
|            |                                | detected in HTTP Response.     |                            |
| Low        | HSTS Header is not set         | No HSTS Header has been        | GET http://localhost:8080/ |
|            |                                | detected in HTTP Response.     |                            |
| Low        | X-Content-Type-Options Header  | No X-Content-Type-Options      | GET http://localhost:8080/ |
|            | is not set                     | Header has been detected in    |                            |
|            |                                | HTTP Response.                 |                            |
| Low        | X-Frame-Options Header is not  | No X-Frame-Options Header      | GET http://localhost:8080/ |
|            | set                            | has been detected in HTTP      |                            |
|            |                                | Response.                      |                            |
| Low        | HTTP Trace Method enabled      | HTTP Trace method seems        | GET http://localhost:8080/ |
|            |                                | enabled for this request.      |                            |
+------------+--------------------------------+--------------------------------+----------------------------+
Warning: Critical vulnerabilities detected!
```
