/*jshint camelcase: false*/

module.exports = function (grunt) {
    'use strict';

    // load all grunt tasks
    grunt.loadNpmTasks('grunt-tv4');
    
    grunt.initConfig({
	tv4: {
            options: {
		root: grunt.file.readJSON('json-schema/storage_node.json'),
		banUnknownProperties: false,
		// set schemas by URI (can be a callback)
		schemas: {
		    'http://cws.ucdavis.edu/geonode.json':grunt.file.readJSON('json-schema/geonode.json'),
		    'http://cws.ucdavis.edu/types.json':grunt.file.readJSON('json-schema/types.json'),
		    'http://cws.ucdavis.edu/node.json':grunt.file.readJSON('json-schema/node.json'),
		    'http://cws.ucdavis.edu/common.json':grunt.file.readJSON('json-schema/common.json'),
		    'http://cws.ucdavis.edu/inflow.json':grunt.file.readJSON('json-schema/inflow.json'),
		    'http://cws.ucdavis.edu/storage_node.json':grunt.file.readJSON('json-schema/storage_node.json'),
		    'http://cws.ucdavis.edu/el_ar_cap.json':grunt.file.readJSON('json-schema/el_ar_cap.json'),
		    'http://cws.ucdavis.edu/cost.json':grunt.file.readJSON('json-schema/cost.json'),
		},
		//            schemasX: {
		//		'http://cws.ucdavis.edu/node.json':grunt.file.readJSON('json-schema/node.json'),
		//		'http://cws.ucdavis.edu/link.json':grunt.file.readJSON('json-schema/link.json')
		//           },
		// set schemas by URI (can be a callback)
	    },
            myFiles: {
		src: ['foo.json']
            }
	}
    });
};
