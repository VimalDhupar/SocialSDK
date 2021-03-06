require(["sbt/smartcloud/ProfileService","sbt/dom"], function(ProfileService,dom) {
			dom.byId("loading").style.visibility = "visible"; 
			var service = new ProfileService();
			service.getProfile({
				load : 	function(profile)
				{
					dom.byId("loading").style.visibility = "hidden"; 
					if (profile.getAddress()) {
                		dom.setText("content", profile.getAddress());
            		} else {
            		    dom.setText("content", "No Result");
           			}
				},
				error : function(error)
				{
					dom.byId("loading").style.visibility = "hidden"; 
					dom.setText("content", "Error received. Error Code = " +  error.code + ". Error Message = " + error.message);
				}
			});
});