
  let possiblities = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

var x = []
var y = []
var disabled = []

localStorage.chance = "O";



const checkVictory = () => {
  console.log("inside checkvictory");
    possiblities.forEach((p,i) => {
        var xc = 0, yc = 0;
        for (let i = 0; i < p.length; i++) {
            if(x.includes(p[i])) xc++
            if(y.includes(p[i])) yc++
        }
        if(xc == 3) {alert("X WINS"); location.reload()}
        if(yc == 3) {alert("O WINS"); location.reload()}

            console.log("g",xc,yc);

    })
}


const getChance = (e) => {
  console.log("Inside GetChnce");  // console.log("1",localStorage.chance);
  if (localStorage.chance == "X") {
    localStorage.chance = "O";
    y.push(parseInt(e.id))
    console.log("y",y);
  } else
  if (localStorage.chance == "O") {
    localStorage.chance = "X";
    x.push(parseInt(e.id))
    console.log("x",x);
    
    console.log("v set", e.innerHTML = "v");
  }
  disabled.push(parseInt(e.id))
//   console.log("2", localStorage.chance);

  return localStorage.chance;
};


document.querySelectorAll(".field").forEach((e, i) => {
  e.addEventListener("click", () => {
    select(e);
  });

});


let select = (e) => {
  console.log("inside select");
    if(disabled.includes(parseInt(e.id))) return
    e.innerHTML = getChance(e);
    checkVictory()
    if(disabled.length >= 9){ location.reload()}
};
