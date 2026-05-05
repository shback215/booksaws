#!/bin/bash

# Create HTTP API Gateway
API_ID=$(aws apigatewayv2 create-api \
  --name "BooksAwsHttpAPI" \
  --protocol-type "HTTP" \
  --region us-east-1 \
  --query "ApiId" \
  --output text)

echo "Created API with ID: $API_ID"

# Create integration
INTEGRATION_ID=$(aws apigatewayv2 create-integration \
  --api-id $API_ID \
  --integration-type "AWS_PROXY" \
  --integration-uri "arn:aws:lambda:us-east-1:764003866233:function:booksaws-book-management" \
  --payload-format-version "2.0" \
  --region us-east-1 \
  --query "IntegrationId" \
  --output text)

echo "Created integration with ID: $INTEGRATION_ID"

# Create route
ROUTE_ID=$(aws apigatewayv2 create-route \
  --api-id $API_ID \
  --route-key "GET /books" \
  --target "integrations/$INTEGRATION_ID" \
  --region us-east-1 \
  --query "RouteId" \
  --output text)

echo "Created route with ID: $ROUTE_ID"

# Create stage
STAGE_NAME="default"
aws apigatewayv2 create-stage \
  --api-id $API_ID \
  --stage-name $STAGE_NAME \
  --auto-deploy \
  --region us-east-1

echo "Created stage: $STAGE_NAME"

# Get API endpoint
API_ENDPOINT="https://$API_ID.execute-api.us-east-1.amazonaws.com/$STAGE_NAME"
echo "API Endpoint: $API_ENDPOINT"

# Grant API Gateway permission to invoke Lambda
aws lambda add-permission \
  --function-name "booksaws-book-management" \
  --statement-id "apigateway-http-invoke" \
  --action "lambda:InvokeFunction" \
  --principal "apigateway.amazonaws.com" \
  --source-arn "arn:aws:execute-api:us-east-1:764003866233:$API_ID/*/*"

echo "Added Lambda permission for API Gateway"
