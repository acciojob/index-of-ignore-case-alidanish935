function indexOfIgnoreCase(str, subStr) {
  // write your code here
	 const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();

    // Use indexOf to find the index of lowerSubStr in lowerStr
    const index = lowerStr.indexOf(lowerSubStr);

    // Return the found index or -1 if not found
    return index;
}

// Please do not change the code below
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
// alert(indexOfIgnoreCase(s1, s2));
