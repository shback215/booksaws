# AWS Lambda + API Gateway Setup Guide

## What We Accomplished
✅ **Lambda Function**: Created `booksaws-test` function
✅ **API Gateway**: Created REST API with `/test` endpoint  
✅ **React Integration**: Added ApiTest component to call the API

## Key Files Created
- `lambda-function.js` - Simple Lambda function with CORS headers
- `lambda-trust-policy.json` - IAM role trust policy for Lambda
- `devuser-updated-policy.json` - Complete IAM permissions
- `src/components/ApiTest.jsx` - React component to test API

## AWS Setup Steps

### 1. IAM Policy (Already Done)
- Updated DevUser with Lambda, API Gateway, and CloudWatch permissions
- Policy file: `devuser-updated-policy.json`

### 2. Lambda Function (Already Done)
- Function name: `booksaws-test`
- Role: `lambda-execution-role`
- Test command: `aws lambda invoke --function-name booksaws-test response.json`

### 3. API Gateway (Already Done)
- API name: `BooksAwsAPI`
- Resource: `/test`
- Method: GET (Lambda integration)
- Stage: `prod`
- **Need to find the Invoke URL**

### 4. React Integration (Partially Done)
- Created `ApiTest.jsx` component
- Added to `Home.jsx`
- **Need to update with actual API URL**

## Next Steps

### Get API Gateway URL
1. Go to API Gateway → Stages
2. Click "prod" stage
3. Copy the "Invoke URL"
4. Update `ApiTest.jsx` with the real URL

### Test the Integration
1. Start React dev server: `npm run dev`
2. Go to Home page
3. Click "Call Lambda Function" button
4. Should see Lambda response

## Important URLs and Names
- **Lambda Function**: `booksaws-test`
- **API Gateway**: `BooksAwsAPI`
- **IAM Role**: `lambda-execution-role`
- **API Endpoint**: `/test` (needs full URL)

## Troubleshooting
- **CORS Issues**: Lambda already has CORS headers
- **API Gateway Test**: Use Test tab in console
- **React Integration**: Check browser console for errors

## Future Enhancements
- Add book data management Lambda functions
- Implement search functionality
- Add user authentication
- Create book details API endpoints

## Quick Reference Commands
```bash
# Test Lambda function
aws lambda invoke --function-name booksaws-test response.json

# List Lambda functions
aws lambda list-functions

# List API Gateway APIs
aws apigateway get-rest-apis
```
