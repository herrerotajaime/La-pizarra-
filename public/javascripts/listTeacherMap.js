document.addEventListener('DOMContentLoaded', () => {

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
  });
  geolocalize().then(center => {
    map.setCenter(center);

    //render de main pasar user con rol profe
    teacherList.forEach(teacher => {
      new google.maps.Marker({
        position: {
          lat:teacher.latitude,
          lng:teacher.longitude
        },
        map: map,
        title: teacher.name
      });
    })

  });


}, false);