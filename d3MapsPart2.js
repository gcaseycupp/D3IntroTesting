var w = 1000;
var h = 1000;

// var projection + d3.geo.albersUsa()
// 	.translate([w/2, h/2])
// 	.scale([500]);

var path = d3.geo.path();//.projection(projection);
 //alert("a");
// var geoJsonLayer = L.geoJson("centralAmericaCapitals.geo", {                
//              });
var svg = d3.select("body")
	.append("svg")
	.attr({
		width:w,
		height:h
	});
 //alert("b");
d3.json("https://raw.githubusercontent.com/johan/world.geo.json/master/countries/AGO.geo.json", function(countries){
	svg.selectAll("path")
		.data(countries.features)
		.enter()
		.append("path")
		.attr("d",path)
		.attr("fill","#666666");
});

 //alert("c");