let Name: string = "Hafiz Muhammad Owais";
console.log("In lowercase = " + Name.toLowerCase());
console.log("In uppercase = " + Name.toUpperCase());
console.log("In titlecase = " + Name.replace(/\b\w/g, (char: string) => char.toUpperCase()));