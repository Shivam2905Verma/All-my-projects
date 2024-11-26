let allkeys = document.querySelectorAll(".key");
let allnumb = document.querySelectorAll(".number")
let cut = document.getElementById("cut");
let string = " ";

Array.from(allkeys).forEach((key) => {
  key.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = evaluate2(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "c") {
      string = " ";
      document.querySelector("input").value = string;
    } else {
        string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});

function evaluate2(string) {
  let firstnum = "";
  let secondnum = "";
  let op = "";

  for (let i = 0; i < string.length; i++) {
    if (
      string[i] == "/" ||
      string[i] == "*" ||
      string[i] == "+" ||
      string[i] == "-"
    ) {
      op = string[i];
    } else {
      if (op == "") {
        firstnum = Number(
          Number(firstnum.toString() + "0") + Number(string[i])
        );
      } else {
        secondnum = Number(
          Number(secondnum.toString() + "0") + Number(string[i])
        );
      }
    }
  }
  if (op != "") {
    if (op == "/") {
      firstnum = firstnum / secondnum;
    } else if (op == "*") {
      firstnum = firstnum * secondnum;
    } else if (op == "-") {
      firstnum = firstnum - secondnum;
    } else if (op == "+") {
      firstnum = firstnum + secondnum;
    }
  }
  return firstnum;
}

// function evaluate(string) {
//   let firstnum = "";
//   let secondnum = "";
//   let op = "";

//   for (let i = 0; i < string.length; i++) {
//     if (
//       string[i] == "/" ||
//       string[i] == "*" ||
//       string[i] == "+" ||
//       string[i] == "-"
//     ) {
//       if (op == "") {
//         op = string[i];
//       } else {
//         // if (op == "/") {
//         //   firstnum = firstnum / secondnum;
//         // } else if (op == "*") {
//         //   firstnum = firstnum * secondnum;
//         // } else if (op == "-") {
//         //   firstnum = firstnum - secondnum;
//         // } else if (op == "+") {
//         //   firstnum = firstnum + secondnum;
//         // }
//         secondnum = "";
//         op = string[i];
//       }
//     } else {
//       if (op == "") {
//         firstnum = Number(
//           Number(firstnum.toString() + "0") + Number(string[i])
//         );
//       } else {
//         secondnum = Number(
//           Number(secondnum.toString() + "0") + Number(string[i])
//         );
//       }
//     }
//   }
//   if (op != "") {
//     if (op == "/") {
//       firstnum = firstnum / secondnum;
//     } else if (op == "*") {
//       firstnum = firstnum * secondnum;
//     } else if (op == "-") {
//       firstnum = firstnum - secondnum;
//     } else if (op == "+") {
//       firstnum = firstnum + secondnum;
//     }
//     secondnum = "";
//     op = "";
//   }
//   return firstnum;
// }
