pipeline {
    agent any

    tools {
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
                    junit allowEmptyResults: true, testResults: '**/test-results/*.xml'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying to EC2...'
                sh '''
                    cp app.js package.json /home/jenkins/my-app/
                    cd /home/jenkins/my-app
                    npm install
                    pm2 restart my-app || pm2 start app.js --name my-app
                '''
            }
        }
    }
}
