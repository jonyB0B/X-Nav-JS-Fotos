 function photo() {
          var photos = [
			'http://upload.wikimedia.org/wikipedia/commons/f/f0/VaticanMuseumStaircase.jpg',
			'http://upload.wikimedia.org/wikipedia/commons/c/c1/DragonCon_2012_-_Marvel_and_Avengers_photoshoot_%288082144604%29.jpg',
			'http://upload.wikimedia.org/wikipedia/commons/e/ee/Long-exposure_portrait_of_2_people_sharing_3D_computational_lightpainting.jpg',
			'http://upload.wikimedia.org/wikipedia/commons/c/cf/La_Jolla_Cove_cliff_diving_-_02.jpg',

          ]
          element = document.getElementById('fotos');
          url = photos[Math.floor(Math.random()*photos.length)]
          element.innerHTML = '<img src="' + url + '">';
      }
