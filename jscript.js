function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector("#filme");
  var filmeFavorito = campoFilmeFavorito.value;
  // if (filmeFavorito.endsWith('.jpg')){
  //   listarFilmesNaTela(filmeFavorito)
  // }else {
  //   alert("Imagem invalida")
  // }
	<iframe width="560" height="315" src="https://www.youtube.com/embed/ZQA-Bg9MydE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  onYouTubeIframeAPIReady(filmeFavorito);
  campoFilmeFavorito.value = "";
// }

// // function listarFilmesNaTela(filmeFavorito) {
// //   var listaFilmes = document.querySelector("#listaFilmes");
// //   var elementoFilme = "<video src=" + filmeFavorito + ">";
// //   listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
// // }

// // 2. This code loads the IFrame Player API code asynchronously.
// var tag = document.createElement("script");
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName("script")[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// // 3. This function creates an <iframe> (and YouTube player)
// //    after the API code downloads.
// var player;

// function onYouTubeIframeAPIReady(filmeFavorito) {
//   player = new YT.Player("player", {
//     height: "360",
//     width: "640",
//     videoId: "M7lc1UVf-VE",
//     events: {
//       onReady: onPlayerReady,
//       onStateChange: onPlayerStateChange
//     }
//   });
// }
// // 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//   event.target.playVideo();
// }
// // 5. The API calls this function when the player's state changes.
// //    The function indicates that when playing a video (state=1),
// //    the player should play for six seconds and then stop.
// var done = false;

// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
// }

// function stopVideo() {
//   player.stopVideo();
// }
