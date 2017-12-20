# atag-summit-2017-serverless
Sample *__Serverless__* Webapp built during *ATAG Summit 2017*, using Angular 2 and multiple Amazon Web Services (S3, Lambda, API Gateway and DynamoDB).

To run the Angular Webapp (locally with Node.JS):  
cd angular  
npm install  
./node_modules/\@angular/cli/bin/ng serve  

To build the .NET Core Lambda function:  
cd dotnet-lambda  
dotnet restore  
dotnet pusblish  

To run the DynamoDB/S3 scripts install AWS CLI (Windows:  http://docs.aws.amazon.com/cli/latest/userguide/awscli-install-windows.html#install-msi-on-windows), and run "aws configure" first.
