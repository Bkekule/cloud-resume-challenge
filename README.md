# Cloud Resume Challenge

## Projects

- [Frontend](./frontend/README.md)
- [AWS Cloud](./aws/README.md)

## Deployments

This project uses GitHub Actions for automated continuous deployment (CD) across three environments: development, quality assurance (QA), and production.

### Deployment Environments

| Environment           | Trigger                | Branch/Tag    | Purpose                                                              |
| --------------------- | ---------------------- | ------------- | -------------------------------------------------------------------- |
| **Development**       | Pull Request to `main` | Any PR branch | Testing changes in isolation before merging                          |
| **Quality Assurance** | Push to `main`         | `main` branch | Pre-production validation and testing                                |
| **Production**        | Version Tag on `main`  | `v*` tags     | Live production environment. Will require manual validation as well. |
