$(document).ready(function() {
	$('#fruits').multiselect({
		includeSelectAllOption: true,
		enableFiltering: true,
		enableCaseInsensitiveFiltering: true,
		nonSelectedText: 'Select Fruits',
	
		onChange: function(option, checked) {
	        	// alert('Changed option ' + $(option).val() + '.');

	      		 var selectedOptions = $('.demo option:selected');
 
  
			 var maxLength = 4;
                	 if (selectedOptions.length >= maxLength) {
   

		                 // Disable all other checkboxes.
      
              			var nonSelectedOptions = $('.demo option').filter(function() {
    
                    		return !$(this).is(':selected');
    
                		});
 
       
             			nonSelectedOptions.each(function() {
    
                		var input = $('input[value="' + $(this).val() + '"]');
    
                    		input.prop('disabled', true);
    
                  		     
               			});
       
         		}
      
       		   else {
            
        			// Enable all checkboxes.
         
          			 $('.demo option').each(function() {
            
            			var input = $('input[value="' + $(this).val() + '"]');
            
            			input.prop('disabled', false);
               
     				       
            			});
            
    			}

		}
	});
});
