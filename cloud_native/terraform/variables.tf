variable "localstack_endpoint" {
  description = "Localstack endpoint URL"
  type        = string
  default     = "http://localhost:4566"
}

variable "s3_endpoint" {
  description = "Localstack S3 endpoint URL"
  type        = string
  default     = "http://s3.localhost.localstack.cloud:4566"
}
