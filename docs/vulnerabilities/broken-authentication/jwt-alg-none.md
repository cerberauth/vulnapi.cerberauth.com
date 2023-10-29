---
description: Accepting the "none" algorithm in a JSON Web Token (JWT) occurs when a JWT is signed with the "none" algorithm, it means there is no signature, making it easy for attackers to tamper with the token's content without detection.
---

# JWT None algorithm accepted

<table>
    <tr>
        <th>Severity</th>
        <td>High</td>
    </tr>
    <tr>
        <th>CVEs</th>
        <td>
            <ul>
                <li><a href="https://www.cve.org/CVERecord?id=CVE-2015-9235">CVE-2015-9235</a></li>
                <li><a href="https://www.cve.org/CVERecord?id=CVE-2015-2951">CVE-2015-2951</a></li>
            </ul>
        </td>
    </tr>
    <tr>
        <th>Classifications</th>
        <td>
            <ul>
                <li><a href="https://cwe.mitre.org/data/definitions/345.html">CWE-345: Insufficient Verification of Data Authenticity</a></li>
                <li><a href="https://cwe.mitre.org/data/definitions/327.html">CWE-327: Use of a Broken or Risky Cryptographic Algorithm</a></li>
                <li><a href="https://cwe.mitre.org/data/definitions/20.html">CWE-20: Improper Input Validation</a></li>
            </ul>
        </td>
    </tr>
    <tr>
        <th>OWASP Category</th>
        <td>
            <a href="https://owasp.org/API-Security/editions/2023/en/0xa2-broken-authentication/">OWASP API2:2023 Broken Authentication</a>
        </td>
    </tr>
</table>

Accepting the "none" algorithm in a JSON Web Token (JWT) occurs when a JWT is signed with the "none" algorithm, it means there is no signature, making it easy for attackers to tamper with the token's content without detection. This can lead to unauthorized access and data manipulation.

## Example

TODO: write an example

## How to test?

TODO: VulnAPI Command

## What is the impact?

TODO: write the impact

## How to remediate?

TODO: write the remediation
