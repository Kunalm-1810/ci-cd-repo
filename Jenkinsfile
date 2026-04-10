pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com'
            }
        }
        stage('Build & Test') {
            steps {
                // Run JUnit tests (example for Maven)
                sh 'mvn test'
            }
            post {
                always {
                    junit '**/target/surefire-reports/*.xml'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying to AWS/Server...'
                // Add your deployment commands here
            }
        }
    }
}
