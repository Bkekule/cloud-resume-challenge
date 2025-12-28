## Using CloudFormation

Cloudformation is used do manage infrastructure for its simplicity and familiarity.

## Using Ansible

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

#### Credentials

ansible vaults are used to stor access key and secret for machine user. These are used to autheticate into AWS for deployment. Ansible vaults, being encrypted, are safe to commit to GH.

#### Communication Between Playbooks

Use yml file to communicate values between plays

To deploy, complete in the following order.

```sh
env=prod ./aws/bin/deploy
env=prod ./aws/bin/build_n_uplod
```

### Handling Domain

- Namecheap was used to acquire a domain because I found cheaper deals there.
- Route 53 nameserver record was manually created and linked to Namecheap to ensure that Namecheaps hands over control of the domain to AWS.
