// Optional Chaining(?.)
const movie = {
  name : "오펜하이머",
  detail : {
    price : "50,000",
    date : "20240721"
  }
}

const movie2 = {
  name : "마블",
  detail : {
    price : "50,000",
  }
}

function printMovieDate(movie) {
  console.log(movie.detail?.date)
}

printMovieDate(movie)
printMovieDate(movie2)


