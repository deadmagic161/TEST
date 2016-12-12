window.onload = function() {
var str = "abcdbcdecdefbcdeabcd";
    
    	var result = str.match( /bcdbcde/i );

    	alert( result.input );
    	alert( result[0] );
    	alert( result.index );
}