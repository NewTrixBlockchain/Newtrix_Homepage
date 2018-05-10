// $(document).ready(function(){
// 	$(".form-control-icon-left.line-on-primary .form-control").focus(function(){
// 		$(this).css('border-left', 'none');
// 		$(this).siblings(".input-group-addon")
// 			.css('border','1px solid #1d80f9')
// 			.css('border-right','none');
// 	});
// 	$(".form-control-icon-left.line-on-primary .form-control").blur(function(){
// 		$(this).siblings(".input-group-addon").css('border','');
// 	});
// });

$(document).ready(function(){
	/* icon-left */
	$(".form-control-icon-left.line-on-primary .form-control").on({
		focus:function(){
			$(this).css('border-left', 'none')
			$(this).siblings(".input-group-addon")
			.css('border','1px solid #1d80f9')
			.css('border-right','none')
		},
		blur:function(){
			$(this).siblings(".input-group-addon").css('border','');
		}
	});

	$(".form-control-icon-left.line-on-into .form-control").on({
		focus:function(){
			$(this).css('border-left', 'none')
			$(this).siblings(".input-group-addon")
			.css('border','1px solid #42b6cf')
			.css('border-right','none')
		},
		blur:function(){
			$(this).siblings(".input-group-addon").css('border','');
		}
	});

	$(".form-control-icon-left.line-on-success .form-control").on({
		focus:function(){
			$(this).css('border-left', 'none')
			$(this).siblings(".input-group-addon")
			.css('border','1px solid #4ab944')
			.css('border-right','none')
		},
		blur:function(){
			$(this).siblings(".input-group-addon").css('border','');
		}
	});

	$(".form-control-icon-left.line-on-warning .form-control").on({
		focus:function(){
			$(this).css('border-left', 'none')
			$(this).siblings(".input-group-addon")
			.css('border','1px solid #ffc13c')
			.css('border-right','none')
		},
		blur:function(){
			$(this).siblings(".input-group-addon").css('border','');
		}
	});

	$(".form-control-icon-left.line-on-danger .form-control").on({
		focus:function(){
			$(this).css('border-left', 'none')
			$(this).siblings(".input-group-addon")
			.css('border','1px solid #ef3e3e')
			.css('border-right','none')
		},
		blur:function(){
			$(this).siblings(".input-group-addon").css('border','');
		}
	});

	$(".form-control-icon-left.line-on-concept .form-control").on({
		focus:function(){
			$(this).css('border-left', 'none')
			$(this).siblings(".input-group-addon")
			.css('border','1px solid #95d329')
			.css('border-right','none')
		},
		blur:function(){
			$(this).siblings(".input-group-addon").css('border','');
		}
	});

	$(".form-control-icon-left.line-on-default .form-control").on({
		focus:function(){
			$(this).css('border-left', 'none')
			$(this).siblings(".input-group-addon")
			.css('border','1px solid #cecece')
			.css('border-right','none')
		},
		blur:function(){
			$(this).siblings(".input-group-addon").css('border','');
		}
	});

	/* icon-right */
	$(".form-control-icon-right.line-on-primary .form-control").on({
		focus:function(){
			$(this).css('border-right', 'none')
			$(this).siblings(".input-group-addon")
			.css('border','1px solid #1d80f9')
			.css('border-left','none')
		},
		blur:function(){
			$(this).siblings(".input-group-addon").css('border','');
		}
	});

	$(".form-control-icon-right.line-on-into .form-control").on({
		focus:function(){
			$(this).css('border-right', 'none')
			$(this).siblings(".input-group-addon")
			.css('border','1px solid #42b6cf')
			.css('border-left','none')
		},
		blur:function(){
			$(this).siblings(".input-group-addon").css('border','');
		}
	});

	$(".form-control-icon-right.line-on-seccess .form-control").on({
		focus:function(){
			$(this).css('border-right', 'none')
			$(this).siblings(".input-group-addon")
			.css('border','1px solid #4ab944')
			.css('border-left','none')
		},
		blur:function(){
			$(this).siblings(".input-group-addon").css('border','');
		}
	});

	$(".form-control-icon-right.line-on-warning .form-control").on({
		focus:function(){
			$(this).css('border-right', 'none')
			$(this).siblings(".input-group-addon")
			.css('border','1px solid #ffc13c')
			.css('border-left','none')
		},
		blur:function(){
			$(this).siblings(".input-group-addon").css('border','');
		}
	});

	$(".form-control-icon-right.line-on-danger .form-control").on({
		focus:function(){
			$(this).css('border-right', 'none')
			$(this).siblings(".input-group-addon")
			.css('border','1px solid #ef3e3e')
			.css('border-left','none')
		},
		blur:function(){
			$(this).siblings(".input-group-addon").css('border','');
		}
	});

	$(".form-control-icon-right.line-on-concept .form-control").on({
		focus:function(){
			$(this).css('border-right', 'none')
			$(this).siblings(".input-group-addon")
			.css('border','1px solid #95d329')
			.css('border-left','none')
		},
		blur:function(){
			$(this).siblings(".input-group-addon").css('border','');
		}
	});

	$(".form-control-icon-right.line-on-default .form-control").on({
		focus:function(){
			$(this).css('border-right', 'none')
			$(this).siblings(".input-group-addon")
			.css('border','1px solid #cecece')
			.css('border-left','none')
		},
		blur:function(){
			$(this).siblings(".input-group-addon").css('border','');
		}
	});






});