var w=500
var h=200;
var padding=2;
var dataset = [5,10,15,20,25];
var svg = d3.select("body")
	.append("svg")
		.attr("width",w)
		.attr("height",h);

function colorPicker(v){
	if(v<=20){
		return "#666666";
	} else if(v>20){
		return "#FF0033";
	}
}

//using MultiValueMap
svg.selectAll("rect")
	.data(dataset)
	.enter()
	.append("rect") 
		.attr({
		x:  function(d,i){return (i* (w/dataset.length));},
		y: function(d){	return (h - d*4);},
		width : function(d){return  (w/ dataset.length-padding)	;},
		height:function(d){			return d*4;		},
		fill: function(d){	return colorPicker(d);}
		});


//Using Full functions
// svg.selectAll("rect")
// 	.data(dataset)
// 	.enter()
// 	.append("rect")
// 		.attr("x", function(d,i){
// 			return (i* (w/dataset.length))
// 		})
// 		.attr("y", function(d){
// 			return (h - d*4);
// 		})
// 		.attr("width",function(d){
// 			return  (w/ dataset.length-padding)
// 		})
// 		.attr("height",function(d){
// 			return d*4;
// 		})
// 		.attr("fill", function(d){
// 			return "rgb(" + (d*10) + ",0,0)";
// 		});