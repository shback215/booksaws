aws apigatewayv2 create-api \
  --name BooksAwsAPIv2 \
  --protocol-type HTTP \
  --target arn:aws:lambda:us-east-1:YOUR_ACCOUNT_ID:function:booksaws-book-management \
  --region us-east-1
