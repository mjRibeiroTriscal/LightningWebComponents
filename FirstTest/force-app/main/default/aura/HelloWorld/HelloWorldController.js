({
    
    myAction : function(component, event, helper) {
        
    },
    
    handleSuccess : function(component, event, helper) {
        component.find('notifLib').showToast({
            "variant": "success",
            "title": "Account Created",
            "message": "Record ID: " + event.getParam("id")
        });
	},
    
    Test : function() {
        alert('Teste: Controller');
    }
    
})