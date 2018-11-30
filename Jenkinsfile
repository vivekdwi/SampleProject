stage 'Build'
node {
    try{
        def app
        dir('SampleProject') {
            stage('Clone repository') {
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '68f59ed9-b3b4-42a4-9ec5-bff0d305aa3e', url: 'https://github.com/vivekdwi/SampleProject.git']]])
            }
            nodejs('NodeApp') {
                //notifyBuild('STARTED')
                stage('Install Plugins') {
                    sh 'npm install'
                }
                
                stage('Build Image'){
                    sh 'docker rm -f sample_project' 
                    sh 'docker build -t sample_project .'
                }
               
                stage('Start Container'){
                    //sh 'docker rm $(docker stop $(docker ps -a -q --filter name=merkava_trafficlogs))'
                    sh 'docker run --name sample_project -d -p 8083:8083 sample_project'
                }
            }
        }
    }catch(e){
		// If there was an exception thrown, the build failed
		currentBuild.result = "FAILED"
		throw e
	}finally{
		// Success or failure, always send notifications
		//notifyBuild(currentBuild.result)
	}
}