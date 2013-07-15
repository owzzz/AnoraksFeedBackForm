
module.exports = function (grunt) {
 
 
  // set up config
  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
  	clean: {
	  dev: {
	    src: ["css/*.css", "css/**/*.css"]
	  }
	},
  	compass: {
	    dev: {
	      options: {
	        config: 'config/config.rb'
	      }
	    },
	    prod: {
	      options: {
	        config: 'config/config.rb'
	      }
	    }
	},
  	sass: {
	    dev: {                            
	      options: {                       
	        style: 'expanded',
	        check: false,
	        debugInfo: false
	      },
	      files: { 
	        'css/styles.css': 'sass/main.sass'
	      }
	    }
	}
  });
 
  // load all grunt tasks
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-sass');

  // register a few tasks
  grunt.registerTask('default', ['clean:dev', 'sass']);
};