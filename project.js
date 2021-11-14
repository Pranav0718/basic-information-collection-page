function check1() {
	var Field1=document.getElementById("FirstN").value;
	var regex = /^[A-Za-z] {2,20}$/;

	if (regex.test(Field1)){
		document.getElementById("message1").innerHTML ="Valid";
	}
	else{
		document.getElementById("message1").innerHTML = "Please use 2-20 characters";
	}

}
function check2() {
	var Field2=document.getElementById("LastN").value;
	var regex2 = /^[A-Za-z] {2,20}$/;

	if (regex2.test(Field2)){
		document.getElementById("message2").innerHTML ="Valid";
	}
	else{
		document.getElementById("message2").innerHTML = "Please use 2-20 characters";
	}

}
function check3() {
	var Field3=document.getElementById("Occu").value;
	var regex3 = /^[A-Za-z] {3,20}$/;

	if (regex3.test(Field3)){
		document.getElementById("message3").innerHTML ="Valid";
	}
	else{
		document.getElementById("message3").innerHTML = "Please use 3-20 characters";
	}

}

function pareto(){
	
	var trace1 = {
	  x: [1, 2, 3, 4],
	  y: [10, 15, 13, 17],
	  mode: 'markers',
	  type: 'scatter'
	};

	var trace2 = {
	  x: [2, 3, 4, 5],
	  y: [16, 5, 11, 9],
	  mode: 'lines',
	  type: 'scatter'
	};

	var trace3 = {
	  x: [1, 2, 3, 4],
	  y: [12, 9, 15, 12],
	  mode: 'lines+markers',
	  type: 'scatter'
	};

	var data = [trace1, trace2, trace3];

	Plotly.newPlot(data);
	
}
