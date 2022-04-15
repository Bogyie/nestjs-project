 node {
     stage('Clone repository') {
         checkout scm
     }

     stage('Build image') {
         app = docker.build("boggy-cs/nestjs-project:$BUILD_NUMBER")
     }
}
