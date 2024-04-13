const selectMovie = document.getElementById("selectMovie");
const movieName = document.getElementById("movieName");
const movieprice = document.getElementById("moviePrice");
const totalPriceElement = document.getElementById("totalPrice");
const noOfSeat = document.getElementById("numberOfSeat");
const seats = document.querySelectorAll("#seatCont .seat:not(.occupied)");
const cancelBtn = document.getElementById("cancelBtn");
const proceedBtn = document.getElementById("proceedBtn");
const selectedSeatsHolder = document.getElementById("selectedSeatsHolder");
//Create you project here from scratch
const moviesList = [
  { movieName: "Flash", price: 7 },
  { movieName: "Spiderman", price: 5 },
  { movieName: "Batman", price: 4 },
];

// Set default movie name and price
movieName.textContent = "Flash";                                       
moviePrice.textContent = "$ 7";

function updatedinfoMovie() {
  const selectedOption = selectMovie.options[selectMovie.selectedIndex];
  const selectedMovieName = selectedOption.value;
  const selectedMovie = moviesList.find(
    (movie) => movie.movieName === selectedMovieName
  );
  if (selectedMovie) {
    movieName.textContent = selectedMovie.movieName;
    movieprice.textContent = `$${selectedMovie.price}`;

    const numberOfSeats = parseInt(noOfSeat.textContent);
    const totalprice = numberOfSeats * selectedMovie.price;
    totalPriceElement.textContent = `${totalprice}`;
  }
}
// Function to update the total price
function updatetotalPrice(price, seats) {
  const totalPriceEl = document.getElementById("totalPrice");
  let total = seats * price;
  totalPriceEl.innerHTML = `$ ${total}`;
}

// Use moviesList array for displaing the Name in the dropdown menu
moviesList.forEach((movie) => {
  const option = document.createElement("option");
  option.value = movie.movieName; // set the value of movie name
  option.text = movie.movieName; // set the value of movie text
  selectMovie.appendChild(option);
  // selectElement.selectedIndex = 0; // for dafault movie
  option.addEventListener("click", updatedinfoMovie);
});
updatedinfoMovie();


// count the number of seat
const numberOfAvailableSeats = seats.length;
console.log(`Number of available seats: ${numberOfAvailableSeats}`);
//Add eventLister to each unoccupied seat
seats.forEach((seat) => {
  seat.addEventListener("click", () => {
    if (!seat.classList.contains("selected")) {
      // contains ka matlab hai class ko check krna
      seat.classList.add("selected");
    } else {
      seat.classList.remove("selected");
    }
    updateTotalPrice();
  });
});

// Event listener for the "Cancel" button
cancelBtn.addEventListener("click", () => {
  const selectedSeats = document.querySelectorAll("#seatCont .seat.selected");

  if (selectedSeats.length > 0) {
    selectedSeats.forEach((seat) => {
      seat.classList.remove("selected");
      seat.classList.add("occupied");
    });

    updateTotalPrice();
    selectedSeatsHolder.textContent = "No seat selected";
  } else {
    alert("Oops! No seat selected.");
  }
});

// Event listener for the "Proceed" button
proceedBtn.addEventListener("click", () => {
  const selectedSeats = document.querySelectorAll("#seatCont .seat.selected");

  if (selectedSeats.length > 0) {
    selectedSeats.forEach((seat) => {
      seat.classList.remove("selected");
      seat.classList.add("occupied");
    });

    updateTotalPrice();
    selectedSeatsHolder.textContent = "No seat selected";

    alert("Wow! Your seat(s) have been booked.");
  } else {
    alert("Oops! No seat selected.");
  };
});

// the event listeners should add the following instracutions :- 1. if the seat is not already selected select the seat  and add the " selected " to the classList of the seat .  2. if the seat  is selected deselect the seat  and remove  the " selected "  from the classList. 3. the price should be updated based on each selection of seats . 4. the seat selected should be added to the element with  id " selectSeatHolder " to show howmany seats have been selected
