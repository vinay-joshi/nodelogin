executeCall = function(url ,type ,data,onSuccess , onError){
	$.ajax({
                    type: type, 		//GET or POST or PUT or DELETE verb
                    url: url, 		// Location of the service
                    data: data, 		//Data sent to server
                    contentType: "application/json",		// content type sent to server
                    dataType: "json", 	//Expected data format from server
                    processdata: true, 	//True or False
                    success: onSuccess                    
                    error: onError	// When Service call fails
                });

}