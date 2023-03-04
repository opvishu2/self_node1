 (NODE Portfolio Backend setup  and SERVER Deployement, from scratch)

 branch wise explanation:
    1.0: 
        node template
    1.1: 
        have only one api which sends(in response) resume stored at any code's dir.
        and is synced with branch 1.6 of FE repo https://github.com/opvishu2/self.

        STEPS=>
            -create a git env

            -npm i express

            #npm install -g nodemon

            # follow any of  these doc :(
            https://dev.to/aneeqakhan/how-to-setup-a-nodejs-server-port-25l6

            https://www.geeksforgeeks.org/creating-a-rest-api-backend-using-node-js-express-and-postgres/
            )

            # to download a file through a get api using express , refer doc == https://stackoverflow.com/questions/7288814/download-a-file-from-nodejs-server-using-express

            # to activate the server's first file , we have created a front-end like nginx setup, difference is just that we have to start our server's index (first file) instead of index.html file (i.e. to set reverse proxy configurations in nginx conf file , to bind it to a localhost address, representing the address of the existing running NodeJs app in server's  local host's PORT)

            # to achieve the above (to activate the server) , refering doc ==   https://hackernoon.com/a-tutorial-to-deploy-the-nodejs-app-to-nginx-server



    
    1.2:
         to upload cv in aws and then fetch it from there =>

         STEPS=>
            # to set and configure aws s3 bucket storage and sync it with node, refer doc==https://www.bigscal.com/blogs/backend-technology/how-to-use-aws-s3-bucket-with-nodejs-application/

