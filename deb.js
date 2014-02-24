var DEB = {
  moveAngels: function() {
    var angel = document.getElementById('angels');

    var angelNum = parseInt(String(angel.src).split(/(\d)(\.jpg)/)[1], 10);

    if(angelNum < 3) {
      angelNum = angelNum + 1;
    }

    angel.src = angelNum + ".jpg";
  }
}