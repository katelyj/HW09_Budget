var chartify = function(id, info){
    console.log(id);
    var dyn = d3.select("#" + id);

    dyn.selectAll("div")
	.data(info)
	.enter()
	.append("div")
	.style("width", function(d){
	    return d/20 + "px";
	})
	.text(function(d){
	    return d;
	});
};

chartify("sixtyseven", [4280, 760, 805]);
chartify("seventeen", [17000, 3210, 3650]);


