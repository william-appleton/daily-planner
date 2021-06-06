//adds time stamp to header:
$("#currentDay").text(moment().format('dddd, LL'));     
     
//adds appropraite color coding to text areas depending on time of day 
for (let i = 9; i < 18; i++ ) {
  if (i < moment().format('H')) {
    $("#h" + i).addClass('past')
  } else if (i > moment().format('H')) {
    $("#h" + i).addClass('future')
  } else {
    $("#h" + i).addClass('present')
  }
}

//adds local storage save function
for (let i = 9; i < 18; i++ ) {
  $("#b" + i).click(function() {
    let inputN = $("#i" + i).val()
    localStorage.setItem("v" + i, inputN) 
  })
}

//writes saved text to page
for (let i = 9; i < 18; i++ ) {
  let localStorageItem = localStorage.getItem("v" + i)
  if (localStorageItem !== "") {
    $("#i" + i).html(localStorageItem)
  }
}