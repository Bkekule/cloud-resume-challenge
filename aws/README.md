## Using CloudFormation

Cloudformation is used do manage infrastructure for its simplicity and familiarity.

## Using Ansibe

Ansible is used for cofiguration management and deploying AWS infrastructure for our website.

### Prerequisites

- pipx
  pip install pipx
- ansible
  pipx install --include-deps ansible

### Deploying infrastructure with Ansible

- install aws plugins
  ansible-galaxy collection install amazon.aws
- install boto packages
  pip install boto3 botocore

Work around with codespaces. Anibe creates its own venv, it expects boto3 and botocore to be installed within thatn venv so that is a manual inconvenience that is needed to get the deploymnet going.
