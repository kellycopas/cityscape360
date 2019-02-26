
var mymap = L.map('mapid', {
						zoomSnap: 2.5,
						maxZoom: 18
					});

        			var layer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2VsbHljb3BhcyIsImEiOiJjaXl2cHY1Z2MwMDV1MndwMHVnZ2x1cTVjIn0.RdEixiOh4SCGg4Tpy33IIQ', {
					attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
					accessToken: 'pk.eyJ1Ijoia2VsbHljb3BhcyIsImEiOiJjaXl2cHY1Z2MwMDV1MndwMHVnZ2x1cTVjIn0.RdEixiOh4SCGg4Tpy33IIQ'
					}).addTo(mymap);
   				
        			mymap.setView([40, 10], 2);

        					function style(Feature) {
						    return {
								color: '#ff4d4d',
								fillOpacity: 0,
								weight: 2,
						        dashArray: '1'
						    };
						}
L.geoJson(country, {style: style}).addTo(mymap);
						
					var marker = L.marker([51.45523, -2.59665]).addTo(mymap);

					marker.on('click', function(e) {
						mymap.setView(e.latlng, 13);
						marker.bindPopup('<b>Bristol, UK</b><br><a href="image-gallery.html" style="color:#000;">Enter the city...</a>').openPopup();
					});

				
				 