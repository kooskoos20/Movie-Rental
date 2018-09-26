let total = 5;

let reserved = 0;

let track = {};

//track.length = 6;

document.getElementById("count").innerHTML = total;
document.getElementById("count2").innerHTML = reserved;

function reserve(id) {
  console.log(track.id);
  console.log(id);

  if (track[id] === undefined || track[id] === 0) {
    reserved += 1;
    document.getElementById("count2").innerHTML = reserved;
    document.getElementById(id).innerHTML = "Return";

    track[id] = 1;
  } else {
    reserved -= 1;
    document.getElementById("count2").innerHTML = reserved;
    document.getElementById(id).innerHTML = "Reserve";
    track[id] = 0;
  }
}
