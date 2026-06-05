# Security Policy

## Project maturity

Genshi is at **framework v0.2.0** (Phase 1 complete; Phase 2 in progress). The repository is primarily **documentation and framework canon** — not executable application software.

There is limited attack surface today. As tooling, automation, and reference implementations are added, this policy will be updated.

## Reporting a vulnerability

If you believe you have found a security vulnerability **in Genshi repository content, tooling, or official infrastructure**:

1. **Do not** open a public GitHub issue for exploitable vulnerabilities.
2. Report privately to the maintainers:
   - **Preferred:** GitHub [Private vulnerability reporting](https://github.com/jon4ohio/genshi/security/advisories/new) (enable in repository Settings → Security → Private vulnerability reporting)
   - **Alternative:** Email maintainers (add address when available) with subject `Genshi Security`

Include:

- Description of the issue
- Steps to reproduce (if applicable)
- Impact assessment
- Affected paths or versions (e.g. framework v0.2.0, specific tool)

For Code of Conduct concerns, use subject line `Code of Conduct`.

## Scope

**In scope**

- Future Genshi-maintained executables (CLI, validators, GitHub Actions in this repo)
- Official project infrastructure controlled by maintainers

**Out of scope**

- Vulnerabilities in your organization's implementation of Genshi guidance
- Third-party design tools (Figma, Storybook, etc.) used alongside Genshi
- General security questions about design systems (use Issues with `question` label)

## Response expectations

| Severity | Maintainer response target |
|----------|----------------------------|
| Acknowledgment | Within 5 business days |
| Initial assessment | Within 10 business days |
| Resolution or status update | Best effort; depends on severity and project phase |

We are a small maintainer team in early phase. We cannot guarantee SLAs comparable to mature software vendors.

## Disclosure

We support coordinated disclosure. We will work with reporters on a reasonable timeline before public disclosure.

## Safe harbor

We support good-faith security research. Do not access data that is not yours, disrupt services, or violate law.

## Code of Conduct

Security reports are handled under the same respect standards as [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
