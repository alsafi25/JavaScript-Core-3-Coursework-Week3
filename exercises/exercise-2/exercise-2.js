let hogwarts = [
    { firstName: "Harry", lastName: "Potter", house: "Gryffindor", pet: "Owl", occupation: "Student" },
    { firstName: "Hermione", lastName: "Granger", house: "Gryffindor", pet: "Cat", occupation: "Student" },
    { firstName: "Draco", lastName: "Malfoy", house: "Slytherin", pet: null, occupation: "Student" },
    { firstName: "Cedric", lastName: "Diggory", house: "HufflePuff", pet: null, occupation: "Student" },
    { firstName: "Severus", lastName: "Snape", house: "Slytherin", pet: null, occupation: "Teacher" },
    { firstName: "Filius", lastName: "Flitwick", house: "Ravenclaw", pet: null, occupation: "Teacher" },
    { firstName: "Pomona", lastName: "Sprout", house: "Hufflepuff", pet: null, occupation: "Teacher" },
    { firstName: "Minerva", lastName: "McGonagall", house: "Gryffindor", pet: null, occupation: "Teacher" },
    { firstName: "Albus", lastName: "Dumbledore", house: "Gryffindor", pet: "Phoenix", occupation: "Teacher" }
]
let [firstName, lastName, house, pet, occupation, ] = hogwarts;

function getHouses(items) {
    items.forEach((item) => {
        if (item.house === "Gryffindor") {
            console.log(item.firstName, item.lastName)
        };

    });
};
getHouses(hogwarts);

function getTeachers(elem) {
    elem.forEach((element) => {
        if (element.occupation === "Teacher" && element.pet != "null") {
            console.log(element.firstName, element.lastName)
        };
    });
};
getTeachers(hogwarts);