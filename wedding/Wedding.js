function calculateSeating() {
    let guests = parseInt (prompt("How many guests?"));
    let tables = parseInt (prompt("How many tables?"));

    if (isNaN(guests) || isNaN(tables) || guests <=0 || tables <= 0){
        document.getElementById("result").innerHTML = "Invalid input. Please enter positive numbers.";
        return;
    }

    let base = Math.floor(guests / tables);
    let remainder = guests % tables;

    let seating = [];

    for (let i=0; i < tables; i++) {
        if (i < remainder) seating.push(base + 1);
        else seating.push(base);
    }

    let counts = {};
    seating.forEach(num => counts[num] = (counts[num] || 0) + 1);

    let phrases = Object.entries(counts).map(
        ([size, count]) => `${count} table${count > 1 ? "s" : ""} of ${size}`
    );

    document.getElementById("result").innerHTML =
        `Your ${guests} guests will be seated as follows:<br><br>${phrases.join(", and ")}`;
}