<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>store favorite songs app</title>
  <link rel="stylesheet" href="css/main.css">
  <style> body {background-color: powderblue;}</style>
</head>
<body>

  <div id="Wrapper">
    <h1 style="text-align:center;" class="title"> store favorite songs app </h1>
  </div>

    <div id="complete" class="hidden" style="text-align:center;">
      You have entered your ten favourite songs into the app
    </div>

    <div id="FavoriteSongs"></div>
  
  <form id="addData" class="form" action="" method="" style="text-align:center;">

      <input id="InputSongName" type="text" placeholder="Song Name" style="text-align:center;">
      <input id="InputSongArtist" type="text" placeholder="Song Artist" style="text-align:center;">
      <input id="InputSongAlbum" type="text" placeholder="Song Album" style="text-align:center;">
      <input id="InputSongReleaseDate" type="text" placeholder="Song Release Date" style="text-align:center;">
      <button id="resetInput" style="text-align:center;">Clear</button>

  </form>
  
  <h2 style="text-align:center;"><button id="Submit" class="button">Submit</button></h2>

  <h4 style="text-align:center;"><button id="resetArray" class="button2">Clear saved songs</button></h4>

  
   <script src="js/main.js" charset="utf-8"></script>

</body>
</html>
