pipeline {
    agent any

    tools{
        maven 'Maven3'
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Build & Test') {
            steps {
                sh 'mvn clean test'
            }
            post {
                always {
        	junit allowEmptyResults: true, testResults: '**/target/surefire-reports/*.xml'
                }
            }
        }
        stage('Deploy') {
    steps {
        echo 'Deploying to AWS...'
        sshagent(['git-jenkins']) { // Ensure 'git-jenkins' contains your EC2 .pem private key
            script {
                def remoteServer = 'ec2-user@43.205.231.73'
                
                echo "Copying Node.js files to EC2..."
                // Copy app.js and package.json (and any other files/folders you have)
                sh "scp -o StrictHostKeyChecking=no app.js package.json ${remoteServer}:/home/ec2-user/"

                echo "Restarting application on EC2..."
                // Install dependencies on the server and restart
                sh "ssh -o StrictHostKeyChecking=no ${remoteServer} 'cd /home/ec2-user && npm install && sudo systemctl restart my-app-service'"
                    }
                }
            }
        }
   }
}
