# Security Policy

## Supported versions

The current development branch is the primary supported version.

## Reporting a vulnerability

Please do **not** create a public GitHub issue for a security vulnerability.

Report security concerns privately to the project maintainers. Include:

- A clear description of the issue
- Steps to reproduce
- Potential impact
- A suggested mitigation, if known

If a private security reporting mechanism is enabled on the GitHub repository, use that mechanism.

## Secrets

Never commit:

- API keys
- Passwords
- Access tokens
- Private keys
- Database credentials
- Real financial or personally identifiable data

If a secret is accidentally committed, revoke/rotate it immediately and then remove it from the repository history.
