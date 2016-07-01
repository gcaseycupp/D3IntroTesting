
var w=500
var h=100;
var padding=2;
var dataset = [5,10,15,20,25];
var svg = d3.select("body")
	.append("svg")
		.attr("width",w)
		.attr("height",h);

svg.selectAll("rect")
	.data(dataset)
	.enter()
	.append("rect")
		.attr("x",function(d,i){ 
				return (i* (w/dataset.length));
		})
		.attr("y",function(d){
			return (h-(d*4));
		})
		.attr("width",function(d,i){
				return (w/dataset.length - padding)
		})
		.attr("height",function(d){
			return d*4;
		});

d3.select("body")
.append("svg")
.append("rect")
	.attr("width",50)
	.attr("height",200)
	.style("fill","blue");

d3.select("body")
	.append("svg")
		.attr("width",50)
		.attr("height",50)
	.append("circle")
		.attr("cx",25)
		.attr("cy",25)
		.attr("r",25)
		.style("fill","purple");

		d3.select("body")
	.append("svg")
		.attr("width",50)
		.attr("height",50)
	.append("text")
		.attr("x",25)
		.attr("y",25)		
		.text("easy");

//alert("b");
		