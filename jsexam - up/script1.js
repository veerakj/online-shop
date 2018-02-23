jQuery(document).ready(function($) {
	$("#icon").on('click',function(event) {
		$("#menu").css("visibility","visible");
				var x=$("#homepage").css("left");
				if(x=="160px"){
					
					$("#homepage").animate({"left":"0px"});
					$("#homepage").animate({"width":"80%"});
				}
				else{
					$("#homepage").animate({"left":"160px"});
						$("#homepage").animate({"width":"68.5%"});
					
					
				}

			});
	$(".firstMenu li:nth-child(2)").on('click', function() {
		//$("#homepage").html("");
		$("#bag").show();
		$("#homepage").css("background","white");
		
	});
$(".firstMenu li:nth-child(1)").click(function(event) {
	$("#homepage").css("background","url(images/home.jpg)");
	$("#bag").hide();//i think i have to append dirrectly.remove append attach 

});
//$(".addCart").on('click',  function() {
	$(".addCart").on('click',  function() {
	$("tbody").empty();
	var price=0,pricee="",product="";
	var order=$("input:checked");
	for(var i=0;i<order.length;i++){
		var item=$(order[i]).val();
		if(item=="bag1"){
							 price+=200;
							 pricee="Tk 200";
							 
							}
						else if(item=="bag2"){
							 price+=300;
							 pricee="Tk 300";
							 
							}
						else if(item=="bag3"){
							 price+=400;
							 pricee="Tk 400";
							 
							}
							else if(item=="bag4"){
							 price+=500;
							 pricee="Tk 500";
							 
							}
						else if(item=="bag5"){
							 price+=600;
							 pricee="Tk 600";
							 
							}
							else if(item=="bag6"){
							 price+=700;
							 pricee="Tk 700";
							 
							}
						else if(item=="bag7"){
							 price+=800;
							 pricee="Tk 800";
							 
							}
						else if(item=="bag8"){
							 price+=900;
							 pricee="Tk 900";
							 
							}
							
						else if(item=="bag9"){
							 price+=1000;
							 pricee="Tk 1000";
							 
							}
							else if(item=="bag10"){
							 price+=1100;
							 pricee="Tk 1100";
							 
							}
							
						else if(item=="bag11"){
							 price+=1200;
							 pricee="Tk 1200";
							 
							}
							

							product="<tr><td>"+item+"</td>+<td>"+pricee+"</td></tr>";

							
		$("table").append(product);					
	}

console.log(product);
//$("#itms").hide();				

$("#amount").html(price);
	
});
//});
var a,b,c,start=0,stop=5;
$("#more1").on('click', function(event) {
				
				$.ajax({
					url: 'bag1.html',
					type: 'GET',
					success:function(data){						
						a=$(data);
						b=a.find("li");
						console.log(b);									
						c=b.slice(start,stop);
						$("#bag ul").append(c);						
						start +=5;
						stop +=5;						
						//compute();
						
					}
					
					
				});


			
			});



	
});