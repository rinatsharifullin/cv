$(document).ready(function(){
	/* Apply click to esb id */
	$('#esb').click(function(){slideClassToggle(this);});
	/* Apply click to engineer id */
	$('#engineer').click(function(){slideClassToggle(this);});
	/* Apply click to locksmith id */
	$('#locksmith').click(function(){slideClassToggle(this);});
	/* Apply click to ftc id */
	$('#ftc').click(function(){slideClassToggle(this);});
	/* Apply click to fas id */
	$('#fas').click(function(){slideClassToggle(this);});
	/* Apply click to college id */
	$('#college').click(function(){slideClassToggle(this);});
	
});

function slideClassToggle(myId){
	/* Toggle slide to next div after id */
	$(myId).next().slideToggle(function(){
		/* On slide down remove class fa-plus from icon and add class fa-minus, on next click vice versa*/
		$(myId).children('i').toggleClass('fa-plus');
		$(myId).children('i').toggleClass('fa-minus');
	})
}
