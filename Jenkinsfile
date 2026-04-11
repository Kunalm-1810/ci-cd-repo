pipeline {
    agent any

    triggers {
        githubPush()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build & Test') {
            steps {
                sh 'mvn clean test'
            }
            post {
                always {
                    junit '**/target/surefire-reports/*.xml'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying to AWS...'
                sshagent(['git-jenkins']) {
                    script {
                        // FIX: Use consistent naming (remoteServer)
                        def remoteServer = 'ec2-user@43.205.231.73'

                        echo "Copying file to EC2..."
                        sh "scp -o StrictHostKeyChecking=no target/*.jar ${remoteServer}:/home/ec2-user/app.jar"

                        echo "Restarting application on EC2..."
                        sh "ssh -o StrictHostKeyChecking=no ${remoteServer} 'sudo systemctl restart my-app-service'"
                    }
                }
            }
        }
   }
}
