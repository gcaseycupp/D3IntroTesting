var scale = d3.scale
	.linear()
	.domain([130,350])
	.range([10,100])

console.log(scale(380));
console.log(scale(270));
console.log(scale(150));
console.log(scale(88));