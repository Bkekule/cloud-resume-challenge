## Using CloudFormation

Cloudformation is used do manage infrastructure for its simplicity and familiarity.

## Using Ansible

Ansible is used for cofiguration management and deploying AWS infrastructure for our website.

### Prerequisites

Install Ansible and dependencies.

- pipx
  pip install pipx
- ansible
  pipx install --include-deps ansible

### Deploying infrastructure with Ansible

Ansible is built on python and so requires python packages to work with aws cloud provider.

Ansibe creates its own venv, it expects boto3 and botocore to be installed within that venv so that is a manual inconvenience that is needed to get the deploymnet going. Solution is to use the ansible python and pip when installing said [requirements](./bin/requirements.txt).

#### Credentials

ansible vaults are used to stor access key and secret for machine user. These are used to autheticate into AWS for deployment. Ansible vaults, being encrypted, are safe to commit to GH.

#### Frontend and Backend Resource Dependencies

Ansible playbooks manage resource dependencies between different stacks by extracting resource outputs directly. This means if a playbook expects a stack to exist and contain a certain resource's information, order of deployment of playbooks is important.

- [base-infrastructure](./playbook/deploy-base-infrastructure.yml) is for resources shared between frontend and backend cloud resources.
- [frontend](./playbook/deploy-frontend.yml) is for resources needed to host the website user interface.
- [build-n-deploy](./playbook/build-n-upload-frontend.yml) is to compile the frontend and upload to front end resources.
- [backend-prerequisites](./playbook/deploy-backend-view-counter.yml) is for resources needed to deploy the backend view counter.

```sh
./aws/bin/deploy-base-infrastructure -e env=prod --ask-vault-pass
./aws/bin/deploy-frontend -e env=prod --ask-vault-pass
./aws/bin/build-n-upload-frontend -e env=prod --ask-vault-pass
./aws/bin/deploy-backend-view-counter -e env=prod --ask-vault-pass
```

### Handling Domain

- Namecheap was used to acquire a domain because I found cheaper deals there(pun intended).
- To transfer domain management to AWS, a Route35 nameserver was created and nameserverdomains were copied into Namecheap.
- Aliasing is used to create subdomains so that the same domain is used for different environments. It also ensures allows for a more professional apeal.

### Want To Mock Backend and Develop locally?

Use [this](../mock_backend/mock-server.py) mock server and update [this](../frontend/.env.development) file.
