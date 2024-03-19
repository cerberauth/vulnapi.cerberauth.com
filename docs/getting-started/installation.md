---
description: Learn how to install VulnAPI.
slug: /installation/
---

# Installation

Before making your first scan with VulnAPI you have to download and install it. Please follow the instructions below:

- Download the binary from the latest [VulnAPI release](https://github.com/cerberauth/vulnapi/releases) or install it with Snap : `sudo snap install vulnapi`.
- Test VulnAPI command running: `vulnapi help`

## Docker

You can also use VulnAPI as a Docker container with [VulnaAPI Docker Image](https://hub.docker.com/r/cerberauth/vulnapi). To do so, run the following command:

```bash
docker run --rm cerberauth/vulnapi scan curl [API_URL] [CURL_OPTIONS]
```

## GitHub Action

VulnAPI can be integrated into your CI/CD pipeline using [GitHub Actions](./github-action.md). Integrating VulnAPI with GitHub Actions enables you to scan your APIs for vulnerabilities and security risks as part of your CI/CD pipeline. This allows you to automate security testing and vulnerability scanning of your APIs as part of your development workflow, ensuring that your APIs are **secure** and free from vulnerabilities **before they are deployed to production**.
