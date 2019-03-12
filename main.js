//calling all global variables that will be used either as functions or in functions
var songHTML = document.querySelector('#FavoriteSongs')
var inputSongName = document.querySelector('#InputSongName');
var inputSongArtist = document.querySelector('#InputSongArtist');
var inputSongAlbum = document.querySelector('#InputSongAlbum');
var inputSongReleaseDate = document.querySelector('#InputSongReleaseDate');
var addBtn = document.querySelector('#Submit');
var songs = [];
var reset = document.querySelector('#resetInput');
var clear = document.querySelector('#resetArray');
var count = 0

//a function that listens for a click on the submit button
addBtn.addEventListener("click", function(event) {
  event.preventDefault();                                         //prevents the default event
  var song_name = inputSongName.value;                            //makes the song_name variable equal to the User value of inputSongName
  var song_artist = inputSongArtist.value;                        //makes the song_artist variable equal to the User value of inputSongArtist
  var song_album = inputSongAlbum.value;                          //makes the song_album variable equal to the User value of inputSongAlbum
  var complete_element = document.getElementById("complete");     //gets the 'complete' element from the html page
  var finished_element = document.getElementById("addData");      //gets the 'addData' element from the html page
  var submit_button_element = document.getElementById("Submit");  //gets the 'Submit' element from the html page
  var song_release_date = inputSongReleaseDate.value;             //makes the song_release_date variable equal to the User value of inputSongReleaseDate
  var newSong = {                                                 
    name: song_name,                                              //makes the name part of the variable equal to song_name
    artist: song_artist,                                          //makes the artist part of the variable equal to song_artist
    album: song_album,                                            //makes the album part of the variable equal to song_album
    release_date: song_release_date                               //makes the release_date part of the variable equal to song_release_date
  }

  //if statement to check the input boxes are not null when the submit button is presses
  //if any of the boxes are null then a windowalert will pop up and the code will stop executing
  if (song_name === "") {   //if song_name = null
    alertInputField("song name")
    return;                 //this line stops all code after it from being resolved
  }
  else if (song_artist === "") {   //if song_artist = null
   alertInputField("song artist")
    return;                //this line stops all code after it from being resolved
  }
  else if (song_album === "") {    //if song_album = null
    alertInputField("song album")
    return;                //this line stops all code after it from being resolved
  }
  else if (song_release_date === "") {  //if song_release_date = null
    alertInputField("song release date")
    return;                //this line stops all code after it from being resolved
  }

  songs.push(newSong);
  var rowsOfSongs = songs.map(function(SongData) {
    return `
    <tr>
    <td>  ${SongData.name} </td>
    <td>  ${SongData.artist} </td>
    <td>  ${SongData.album} </td>
    <td>  ${SongData.release_date} </td>
    `
  })

  songHTML.innerHTML= `
    <table>
      <tr>
        <td> Song name </td>
        <td> Song artist </td>
        <td> Song album </td>
        <td> Song release date </td>
      </tr>
      ${rowsOfSongs}
  </table>
  `

  count++;            //increases the value of count by 1 when the submit button is clicked
  
//if statement to reveal a messege if ten songs have been inputted (when count > 9)
if (count > 9) {
  complete_element.classList.remove("hidden")          //removes the hidden class from the classlist
  complete_element.classList.add("shown")              //adds the shown class to the classlist
  document.getElementById('Submit').disabled = true;   //disables the submit button can't be clicked again
  finished_element.classList.add("hidden")             //removes the hidden class from the classlist
  submit_button_element.classList.add("hidden")        //removes the hidden class from the classlist
}

  console.log(count)
  console.log(song_name)
  console.log(song_artist)
  console.log(song_album)
  console.log(song_release_date)
})


//function to clear the input boxes
reset.addEventListener("click", function reset()  {        //listens for a click on clear button
  event.preventDefault();                                  //prevents the default event
  inputSongName.value = "";                                //sets the inputSongName variable's value to null
  inputSongArtist.value = "";                              //sets the inputSongArtist variable's value to null
  inputSongAlbum.value = "";                               //sets the inputSongAlbum variable's value to null
  inputSongReleaseDate.value = "";                         //sets the inputSongReleaseDate variable's value to null
})

//function to clear the array
clear.addEventListener("click", function (event) {                //listens for a click on the reset button
  event.preventDefault();                                         //prevents the default even
  songs=[];                                                       //sets the song array to null
  count= 0;                                                       //sets count to 0
  var complete_element = document.getElementById("complete");     //gets the 'complete' element from the html page
  var finished_element = document.getElementById("addData");      //gets the 'addData' element from the html page
  var submit_button_element = document.getElementById("Submit");  //gets the 'Submit' element from the html page
  var newSong = {
    name: "",                                                     //sets the name part of the variable to null
    artist: "",                                                   //sets the artist part of the variable to null
    album: "",                                                    //sets the album part of the variable to null
    release_date: ""                                              //sets the release_date part of the variable to null
  }  
  songs.push(newSong);
 
  var rowsOfSongs = songs.map(function(SongData) {
    return `
    <tr>
    <td>  ${SongData.name} </td>
    <td>  ${SongData.artist} </td>
    <td>  ${SongData.album} </td>
    <td>  ${SongData.release_date} </td>
    `
  })

  songHTML.innerHTML= `
    <table>
      <tr>
        <td>  </td>
        <td>  </td>
        <td>  </td>
        <td>  </td>
      </tr>
      ${rowsOfSongs}
  </table>
  `
  inputSongName.value = "";                               //sets the inputSongName variable's value to null
  inputSongArtist.value = "";                             //sets the inputSongArtist variable's value to null
  inputSongAlbum.value = "";                              //sets the inputSongAlbum variable's value to null
  inputSongReleaseDate.value = "";                        //sets the inputSongReleaseDate variable's value to null
  
  complete_element.classList.add("hidden")                //adds the hidden class to the classlist of the 'complete' div
  document.getElementById('Submit').disabled = false;     //makes the submit button useable (even if it was already)
  finished_element.classList.add("form")                  //adds the 'form' class to the classlist of the form
  submit_button_element.classList.add("button")           //adds the 'button' class to the classlist of the submit button
  finished_element.classList.remove("hidden")             //removes the 'hidden' class from the classlist of the form
  submit_button_element.classList.remove("hidden")        //removes the 'hidden' class from the classlist of the submit button
})


function alertInputField(inputField) {
  window.alert(`Please enter data for in the ${inputField} input field`);
}
