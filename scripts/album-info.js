{
  $('#album-title').text(album.title);
  // elelment and div, h2 are elements and when you call them in jQuery they dont need a dollar sign or a dot

  $('img#album-cover-art').attr('src', album.albumArtUrl);
  $('.artist').text(album.artist);
  $('#release-info').text(album.releaseInfo);

}
