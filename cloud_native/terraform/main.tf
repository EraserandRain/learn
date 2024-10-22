terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region                      = "us-east-1"
  access_key                  = "test"
  secret_key                  = "test"
  s3_use_path_style           = false
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true

  endpoints {
    apigateway     = var.localstack_endpoint
    apigatewayv2   = var.localstack_endpoint
    cloudformation = var.localstack_endpoint
    cloudwatch     = var.localstack_endpoint
    dynamodb       = var.localstack_endpoint
    ec2            = var.localstack_endpoint
    es             = var.localstack_endpoint
    elasticache    = var.localstack_endpoint
    firehose       = var.localstack_endpoint
    iam            = var.localstack_endpoint
    kinesis        = var.localstack_endpoint
    lambda         = var.localstack_endpoint
    rds            = var.localstack_endpoint
    redshift       = var.localstack_endpoint
    route53        = var.localstack_endpoint
    s3             = var.s3_endpoint
    secretsmanager = var.localstack_endpoint
    ses            = var.localstack_endpoint
    sns            = var.localstack_endpoint
    sqs            = var.localstack_endpoint
    ssm            = var.localstack_endpoint
    stepfunctions  = var.localstack_endpoint
    sts            = var.localstack_endpoint
  }
}

data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-trusty-14.04-amd64-server-20170727"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  owners = ["099720109477"] # Canonical
}

resource "aws_instance" "web" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t3.micro"
  tags = {
    Name = "HelloWorld"
  }
}
resource "aws_eip_association" "eip_assoc" {
  instance_id   = aws_instance.web.id
  allocation_id = aws_eip.example.id
}

resource "aws_eip" "example" {
  domain = "vpc"
}

output "instance_id" {
  value = aws_instance.web.id
}
