	let text = "I am learning Javascript Language";
  var txtlength = text.length;
  var sliced = text.slice(13, 24);
  var newtext = text.replace("learning", "practicing");
  
  document.getElementById("text").innerHTML = text;
  document.getElementById("txtlen").innerHTML = txtlength;
  document.getElementById("slicedword").innerHTML = sliced;
  document.getElementById("newtext").innerHTML = newtext;
  
  var date = new Date();
  var numdate = Number(date);
  document.getElementById("today").innerHTML = date;
  document.getElementById("datenumber").innerHTML = numdate;

	const colors =["Red", "Green", "Blue"];
  document.getElementById("colors").innerHTML = colors;
  colors.push("Orange");
  document.getElementById("newcolors").innerHTML = colors;
  const colors2 =["Teal","Aqua", "Indigo"];
  document.getElementById("colors2").innerHTML = colors2;
  const allcolors = colors.concat(colors2);
  document.getElementById("mergedcolors").innerHTML = allcolors;
