
// Create the map using Mapbox API and LeafletJS
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
						
						
// Create a marker for Bristol so that when clicked the map will zoom in and show popup message
					var point = L.marker([51.45523, -2.59665]).addTo(mymap);

					point.on('click', function(e) {
						mymap.setView(e.latlng, 13);
						point.bindPopup('<b>Bristol, UK</b><br><a href="image_gallery.html" style="color:#000;">Enter the city...</a>').openPopup();
					});
				

// Adding multiple markers to map
// Help from http://bl.ocks.org/d3noob/9150014
				var planes = [
				["Copenhagen, Denmark", 55.676098, 12.568337],
				["Paris, France", 48.864716, 2.349014],
				["Berlin, Germany", 52.520007, 13.404954],
				["Vienna, Austria", 48.208174, 16.373819],
				["Barcelona, Spain", 41.390205, 2.154007],
				["Albufeira, Portugal", 37.089749, -8.245540],
				["Positano, Italy", 40.628053, 14.484981],
				["New York City, USA", 40.712784, -74.005941],
				["San Francisco, USA", 37.774929, -122.419416],
				["Mexico City, Mexico", 19.432608, -99.133208],
				["Buenos Aires, Argentina", -34.603684, -58.381559],
				["Rio de Janeiro, Brazil", -22.906847, -43.172897],
				["Nuuk, Greenland", 64.175000, -51.738889],
				["Toronto, Canada", 43.653226, -79.383184],
				["Reykjavik, Iceland", 64.146582, -21.942635],
				["Hong Kong", 22.396428, 114.109497],
				["Tokyo, Japan", 35.689487, 139.691706],
				["Bangkok, Thailand", 13.756331, 100.501765],
				["Shanghai, China", 31.230416, 121.473701],
				["Moscow, Russia", 55.755826, 37.617300],
				["Cairns, Australia", -16.920334, 145.770860],
				["Queenstown, New Zealand", -45.031162, 168.662644],
				["Cairo, Egypt", 30.044420, 31.235712],
				["Cape Town, South Africa", -33.924869, 18.424055],
				["Lagos, Nigeria", 6.524379, 3.379206],
				["Nairobi, Kenya", -1.292066, 36.821946],
				["Marrakesh, Morocco", 31.629472, -7.981084]
				];

				for (var i = 0; i < planes.length; i++) {
					marker = new L.marker([planes[i][1],planes[i][2]])
						.bindPopup(planes[i][0])
						.addTo(mymap);
				}


				