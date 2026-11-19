# Contributing to TRACE AI

Thank you for contributing to TRACE AI.

## Before you start

1. Check existing issues before creating a new one.
2. For a bug, provide clear reproduction steps.
3. For a feature, explain the problem and expected benefit.
4. Never commit passwords, API keys, tokens, private financial data, or personally identifiable information.

## Development workflow

```bash
git checkout -b feature/short-description
```

Make focused changes, test them locally, then commit:

```bash
git add .
git commit -m "feat: describe the change"
git push origin feature/short-description
```

Open a pull request against `main`.

## Commit style

Prefer concise conventional-style commits:

- `feat:` new functionality
- `fix:` bug fix
- `docs:` documentation
- `refactor:` code restructuring
- `test:` tests
- `chore:` maintenance

## Pull requests

A good pull request should include:

- What changed
- Why it changed
- How it was tested
- Screenshots for UI changes, when useful
- Any known limitations

## Data safety

Use synthetic or anonymized data for development. Never place real financial records or personal information in Git commits, screenshots, logs, or issue reports.
