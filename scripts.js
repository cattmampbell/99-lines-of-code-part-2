let myFriends = ["OLIVIA", "CODY", "MEGAN", "EMILY", "TOAST"]; // An array of 'myFriends'.

for(let i = 0; i < myFriends.length; i++) {
    // console.log(myFriends[i]); // Should print: OLIVIA, CODY, MEGAN, EMILY, TOAST.
    let myFriend = myFriends[i];
    console.log(myFriend);

    for(let j = 99; j > 0; j--) {
        if(j > 2) { // 99 to 2 ..."lines of"... 
            console.log(j + " lines of code in the file, " + j + " lines of code; " + myFriend + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file.");
        } else if(j == 2) { // 2 == plural. 
            console.log(j + " lines of code in the file, " + j + " lines of code; " + myFriend + " strikes one out, clears it all out, " + (j - 1 ) + " line of code in the file.");
        } else if (j == 1) { // 1 == singular.
            console.log(j + " line of code in the file, " + j + " line of code; " + myFriend + " strikes one out, clears it all out, no more lines of code in the file!");
        };
    };
};  