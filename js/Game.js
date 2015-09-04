/*
 * Game Singleton MAIN
 * 
 * @copyright: (C) 2014 Kibble Games Inc in cooperation with Vancouver Film School.  All Rights Reserved.
 * @author:    Scott Henshaw {@link mailto:shenshaw@vfs.com} 
 * @version:   1.1.0
 * 
 * @summary:   Framework Singleton Class to contain a web app
 * 
 */
var Game = (function() {
	
	// Constants
    function Class() {
        /*
            Define a class inside this closure.  We will return this entire class as
            an object
            
            @params:  none
            @returns: Game Class - used as a singleton
            
        */
        
    	// Constants
    	var SECONDS_AS_MS = 1000;	
    	var TARGET_FPS = 60;
        var TARGET_MS_PER_TICK = SECONDS_AS_MS / TARGET_FPS;
        var UPDATE_MIN_MS = 2000;
        
        var local = {
            // the local object contains all the private members used in this class
                
            tick: 0,  // Start with tick 0
            start: null,
            
            update: update,
            render: render,
            
            frame: frame
        };
	
    	
    	var api = {
	        // the API object contains all the public members and methods we wish to expose
    	    // the Class function shuld return this.
	        init: init,
	        run: run
    	};
    	return api;
    	
    	
	
        function init() {
       	
        	// Do some initialization of the member variables for the app
    	    var interval = setInterval( function() { _tick++; }, 1000/60 ); // @ 60Hz update the game tick
    
        	// Create controllers to manage model objects and link them to DOM view elements
            
            // Define the Event handlers for the app
    	}	
	

        
    	function run() {
    		// This is the simplest loop possible. - use Game.js for an app that needs a more complex render loop
            interval = setInterval( function() {
            	
            	update();
            	render();
            	
            }, TARGET_MS_PER_TICK );
    	}
    	
    	
    	
    	function frame( timestamp ) {
    	    
    	    if (!local.start) 
    	        local.start = timestamp;
    	    
    	    var progress = timestamp - local.start;
    	    local.update( progress );
    	    local.render( progress )
    	    
    	    if (progress < UPDATE_MIN_MS)
    	        window.requestAnimationFrame( frame );
    	}
    	
    	
    	
    	function complexRun() {
    	
    	    window.requestAnimationFrame( local.frame );
    	}

    	
	
        function update( timestamp ) {
            //Update the app/simulation model 
    
        }
    
        
        function render( timestamp ) {
            // Refresh the view - canvas and dom elements
            
        }
    }
    
    return Class;
	
})();  // Run the unnamed function and assign the results to app for use.




// ===================================================================
// MAIN
// Define the set of private methods that you want to make public and return them
$(document).ready( function() {

    Game.init();
    Game.run();

});

