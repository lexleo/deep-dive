document.addEventListener("DOMContentLoaded", (e) => {
    
      ymaps.ready(init);
      var myMap;
    
      function init() {
        myMap = new ymaps.Map("map", {
          center: [45.024827248374805,38.96403306812286],
          zoom: 17,
          controls: []
        });
    
        myMap.behaviors.disable('scrollZoom');
        myMap.behaviors.disable('drag');
    
        var coords = [
            [45.024827248374805,38.96403306812286]
          ],
          myCollection = new ymaps.GeoObjectCollection({}, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: '../assets/images/icons/map-marker.svg',
            iconImageSize: [100, 100],
            iconImageOffset: [-58, -87]
          });
    
        for (var i = 0; i < coords.length; i++) {
          myCollection.add(new ymaps.Placemark(coords[i]));
        }
    
        myMap.geoObjects.add(myCollection);
    
      }
    
    });