document.addEventListener('DOMContentLoaded', () => {

  const teachersMap = new google.maps.Map(document.getElementById('teachersMap'), {
    zoom: 13,
  });
  geolocalize().then(center => {
    teachersMap.setCenter(center);

    //render de main pasar user con rol profe
    console.log('Teacher JSON ya en listTeacherMap', teacherList)
    teacherList.forEach(teacher => {

      new google.maps.Marker({
        position: {
          lat:teacher.latitude,
          lng:teacher.longitude
        },
        map: teachersMap,
        title: teacher.name
      });
    })

  });


}, false);