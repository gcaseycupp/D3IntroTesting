var w=400
var h=400;
var padding=2;


var monthlySales = [
	{"month":10,"sales":20},
	{"month":20,"sales":140},
	{"month":30,"sales":200},
	{"month":40,"sales":120},
	{"month":50,"sales":150},
	{"month":60,"sales":22},
	{"month":70,"sales":90},
	{"month":80,"sales":6},
	{"month":90,"sales":230},
	{"month":100,"sales":70}
	];

var lineFun = d3.svg.line()
	.x(function (d) { return d.month * 3;})
	.y(function(d) {return h-d.sales;})
	.interpolate("linear");
	//or
	//.interpolate("basis");

var svg= d3.select("body")
	.append("svg")
	.attr({
		width:w,
		height:h
	});

var viz = svg.append("path")
	.attr({
		d:lineFun(monthlySales),
		"stroke":"purple",
		"stroke-width":2,
		"fill":"none"
	});

var labels = svg.selectAll("text")
	.data(monthlySales)
	.enter()
	.append("text")
	.text(function (d) { return d.sales;})
	.attr({
		x:function (d) { return d.month * 3-25},
		y:function(d){return h-d.sales;},
		"font-size": "12px",
		"font-family":"sans-serif",		
		"fill":"#666666",
		"text-anchor":"start",
		"dy":".35em",
		"font-weight":function(d,i){
			if(i===0 || i==monthlySales.length-1){
				return "bold";
			} else {
				return "normal";
			}
			},
		});
	

// //Bar Chart 2.2,2.3
// var dataset = [5,10,15,20,25,15,12,17,5,7,24,18];
// var svg = d3.select("body")
// 	.append("svg")
// 		.attr("width",w)
// 		.attr("height",h);

// function colorPicker(v){
// 	if(v<=20){
// 		return "#666666";
// 	} else if(v>20){
// 		return "#FF0033";
// 	}
// }

// //using MultiValueMap
// svg.selectAll("rect")
// 	.data(dataset)
// 	.enter()
// 	.append("rect") 
// 		.attr({
// 		x:  function(d,i){return (i* (w/dataset.length));},
// 		y: function(d){	return (h - d*4);},
// 		width : function(d){return  (w/ dataset.length-padding)	;},
// 		height:function(d){			return d*4;		},
// 		fill: function(d){	return colorPicker(d);}
// 		});


//2.4
// //Bar Chart w Labels
// svg.selectAll("text")
// 	.data(dataset)
// 	.enter()
// 	.append("text")
// 		.text(function (d){ return d;})
// 		.attr({
// 			"text-anchor":"middle",
// 			x:function(d,i){ return (i * (w/dataset.length) + (w/dataset.length - padding) / 2);},
// 			y:function(d) {return h-(d*4)+14;},
// 			"font-family":"sans-serif",
// 			"size":12,
// 			"fill":"#ffffff"
// 		});


//2.1 building a bar chart
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