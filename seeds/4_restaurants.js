exports.seed = function (knex) {
  return knex('restaurants').del()
    .then(() => {
      return knex('restaurants').insert([
        {
          id: 1,
          name: 'Fogon',
          img_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/SgK1C7GqeyoYQU2Xs_CGFA/ms.jpg',
          rating: 4.5,
          description: 'Been meaning to mosey on in here for years and finally had occasion to do so for a casual double date.  Now, I love Fogon; this is really as good as it gets...',
          address: '600 E Pine St',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98122,
          url: 'https://www.yelp.com/biz/fog%C3%B3n-cocina-mexicana-seattle-2?adjust_creative=hSoA-h_BmJSHiibeQa55Dw&utm_campaign=yelp_api&utm_medium=api_v2_business&utm_source=hSoA-h_BmJSHiibeQa55Dw',
          yelp_id: 'fogón-cocina-mexicana-seattle-2',
          group_id: 1
        },
        {
          id: 2,
          name: 'Asadero',
          img_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/ZNJKTF7rQOWVbBUzrEkItg/ms.jpg',
          rating: 4.5,
          description: 'We came for the Carne Asada, but left raving about the ribeye. Wow, it was a perfect medium rare and amazingly flavorful! Homemade tortillas are a huge...',
          address: '5405 Leary Ave NW',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98107,
          url: 'https://www.yelp.com/biz/asadero-ballard-seattle?adjust_creative=hSoA-h_BmJSHiibeQa55Dw&utm_campaign=yelp_api&utm_medium=api_v2_business&utm_source=hSoA-h_BmJSHiibeQa55Dw',
          yelp_id: 'asadero-ballard-seattle',
          group_id: 1
        },
        {
          id: 3,
          name: 'Tacos Chukis 5',
          img_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/h752zyI1uO2zd2NnV22UOQ/ms.jpg',
          rating: 4.5,
          description: 'There\'s a pastor trompo!\nReally this place is awesome, I used to love their first location but this one is way bigger and nicer inside, still with the same...',
          address: '832 Dexter Ave N',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98109,
          url: 'https://www.yelp.com/biz/tacos-chukis-seattle-5?adjust_creative=hSoA-h_BmJSHiibeQa55Dw&utm_campaign=yelp_api&utm_medium=api_v2_business&utm_source=hSoA-h_BmJSHiibeQa55Dw',
          yelp_id: 'tacos-chukis-seattle-5',
          group_id: 1
        },
        {
          id: 4,
          name: 'Villa Escondida',
          img_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/IJamoH6uGyjl0V6PriL5mw/ms.jpg',
          rating: 4.5,
          description: 'Hands down, the best Mexican food my boyfriend and I have ever had! We had been looking at engagement rings across the street at Robbins Brothers and they...',
          address: '2203 1st Ave',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98121,
          url: 'https://www.yelp.com/biz/villa-escondida-seattle-3?adjust_creative=hSoA-h_BmJSHiibeQa55Dw&utm_campaign=yelp_api&utm_medium=api_v2_business&utm_source=hSoA-h_BmJSHiibeQa55Dw',
          yelp_id: 'villa-escondida-seattle-3',
          group_id: 1
        },
        {
          id: 5,
          name: 'Tacos Chukis',
          img_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/X4tDiDhO-Q4JhvFRUaN2-g/ms.jpg',
          rating: 4.5,
          description: 'This place is wonderful and rivals paseo-in a Mexican twist sort of way. \nThe adobada Torta is my favvvvv. Do yourself a favor and order this. \n\nA side of...',
          address: '219 Broadway E',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98102,
          url: 'https://www.yelp.com/biz/tacos-chukis-seattle?adjust_creative=hSoA-h_BmJSHiibeQa55Dw&utm_campaign=yelp_api&utm_medium=api_v2_business&utm_source=hSoA-h_BmJSHiibeQa55Dw',
          yelp_id: 'tacos-chukis-seattle',
          group_id: 1
        },
        {
          id: 6,
          name: 'Casco Antiguo',
          img_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/x2CnYKigxokZnSEVSb0w_A/ms.jpg',
          rating: 4.5,
          description: 'Came here a few times for lunch so far and I really like this place. Not too noticeable on the outside when looking for this spot. It\'s a door or so down...',
          address: '115 Occidental Ave S',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98104,
          url: 'https://www.yelp.com/biz/casco-antiguo-seattle?adjust_creative=hSoA-h_BmJSHiibeQa55Dw&utm_campaign=yelp_api&utm_medium=api_v2_business&utm_source=hSoA-h_BmJSHiibeQa55Dw',
          yelp_id: 'casco-antiguo-seattle',
          group_id: 1
        },
        {
          id: 7,
          name: 'La Cocina Oaxaquena',
          img_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/Y-FnZ-bLoS8qC5bILWGx5A/ms.jpg',
          rating: 4.5,
          description: 'Love this place! Food tastes so good. Drinks are good and service is fast! What more could you ask for? \n\nAlso they\'ve got a salsa bar which I love....',
          address: '1216 Pine St',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98101,
          url: 'https://www.yelp.com/biz/la-cocina-oaxaquena-seattle?adjust_creative=hSoA-h_BmJSHiibeQa55Dw&utm_campaign=yelp_api&utm_medium=api_v2_business&utm_source=hSoA-h_BmJSHiibeQa55Dw',
          yelp_id: 'la-cocina-oaxaquena-seattle',
          group_id: 1
        },
        {
          id: 8,
          name: 'El Borracho',
          img_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/3Ip0edTo-6FY-r2SjTYjVQ/ms.jpg',
          rating: 4.5,
          description: 'I don\'t know how the hell I didn\'t know about this place long before I did, but damn I\'m glad I do now!  Met the manager and his partner at Burning Beast...',
          address: '1521 1st Ave',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98101,
          url: 'https://www.yelp.com/biz/el-borracho-seattle?adjust_creative=hSoA-h_BmJSHiibeQa55Dw&utm_campaign=yelp_api&utm_medium=api_v2_business&utm_source=hSoA-h_BmJSHiibeQa55Dw',
          yelp_id: 'el-borracho-seattle',
          group_id: 1
        },
        {
          id: 9,
          name: 'El Legendario Mexican Restaurant',
          img_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/3gs7sR3-gNyRqHeiboEVAQ/ms.jpg',
          rating: 4.5,
          description: 'I LOVE this place! I come here weekly with my boyfriend and we never get tired of it! The staff is so friendly we love them! We both always order the carne...',
          address: '4705 Aurora Ave N',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98103,
          url: 'https://www.yelp.com/biz/el-legendario-mexican-restaurant-seattle?adjust_creative=hSoA-h_BmJSHiibeQa55Dw&utm_campaign=yelp_api&utm_medium=api_v2_business&utm_source=hSoA-h_BmJSHiibeQa55Dw',
          yelp_id: 'el-legendario-mexican-restaurant-seattle',
          group_id: 1
        },
        {
          id: 10,
          name: 'Taqueria Cantina',
          img_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/hta2D5mA9r7JfZBCpWtpAg/ms.jpg',
          rating: 4.5,
          description: 'This was one of my most favorite restaurants on our PNW trip. Thanks again, for a great find, Yelp! \n\nThe location was walking distance from the Space...',
          address: '2630 1st Ave',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98121,
          url: 'https://www.yelp.com/biz/taqueria-cantina-seattle?adjust_creative=hSoA-h_BmJSHiibeQa55Dw&utm_campaign=yelp_api&utm_medium=api_v2_business&utm_source=hSoA-h_BmJSHiibeQa55Dw',
          yelp_id: 'taqueria-cantina-seattle',
          group_id: 1
        },
        {
          id: 11,
          name: 'Fonda La Catrina',
          img_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/x4sYXFlIEGJC8JTz7sQXdg/ms.jpg',
          rating: 4.5,
          description: 'Short and sweet.  \n\nAlways good, always consistent, always packed. \n\nDefinitely worth checking out if you haven\'t been.',
          address: '5905 Airport Way S',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98108,
          url: 'https://www.yelp.com/biz/fonda-la-catrina-seattle?adjust_creative=hSoA-h_BmJSHiibeQa55Dw&utm_campaign=yelp_api&utm_medium=api_v2_business&utm_source=hSoA-h_BmJSHiibeQa55Dw',
          yelp_id: 'fonda-la-catrina-seattle',
          group_id: 1
        },
        {
          id: 12,
          name: 'La Carta de Oaxaca',
          img_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/Vbjg2X6gbmAJ0dOzPQJETA/ms.jpg',
          rating: 4.5,
          description: 'This place is pretty loud on the weekend, it\'s packed, but we managed to get a table right when we came in. The staff is very nice and welcoming. They...',
          address: '5431 Ballard Ave NW',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98107,
          url: 'https://www.yelp.com/biz/la-carta-de-oaxaca-seattle?adjust_creative=hSoA-h_BmJSHiibeQa55Dw&utm_campaign=yelp_api&utm_medium=api_v2_business&utm_source=hSoA-h_BmJSHiibeQa55Dw',
          yelp_id: 'la-carta-de-oaxaca-seattle',
          group_id: 1
        },
        {
          id: 13,
          name: 'Luna Azul',
          img_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/IQVGewmT4y_HOgn9XVIBNQ/ms.jpg',
          rating: 4.5,
          description: 'I\'m extremely particular about Mexican food, in part, because there are so many places out there that just don\'t know how to do it. This place is the...',
          address: '8552 Greenwood Ave N',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98103,
          url: 'https://www.yelp.com/biz/luna-azul-seattle?adjust_creative=hSoA-h_BmJSHiibeQa55Dw&utm_campaign=yelp_api&utm_medium=api_v2_business&utm_source=hSoA-h_BmJSHiibeQa55Dw',
          yelp_id: 'luna-azul-seattle',
          group_id: 1
        },
        {
          id: 14,
          name: 'Plaza Garibaldi',
          img_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/m1lXz4Fxch1eLRkxfrCK8A/ms.jpg',
          rating: 4.5,
          description: 'Why the 5 stars...simply put...\n\nAuthentic recipes and chips...Check!\nFood quick to come out for lunch...Check!\nSuper cost-effective (uhh...$7.50 for a full...',
          address: '129 1st Ave N',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98109,
          url: 'https://www.yelp.com/biz/plaza-garibaldi-seattle?adjust_creative=hSoA-h_BmJSHiibeQa55Dw&utm_campaign=yelp_api&utm_medium=api_v2_business&utm_source=hSoA-h_BmJSHiibeQa55Dw',
          yelp_id: 'plaza-garibaldi-seattle',
          group_id: 1
        },
        {
          id: 15,
          name: 'Gracia',
          img_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/_hBRWDZGfqtpMqYrraXheg/ms.jpg',
          rating: 4.5,
          description: 'We had great service and the food was good! I loved the atmosphere and the way the kitchen is set up (you can see the cooks cooking). \n\nWe will be back :)',
          address: '5313 Ballard Ave NW',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98107,
          url: 'https://www.yelp.com/biz/gracia-seattle?adjust_creative=hSoA-h_BmJSHiibeQa55Dw&utm_campaign=yelp_api&utm_medium=api_v2_business&utm_source=hSoA-h_BmJSHiibeQa55Dw',
          yelp_id: 'gracia-seattle',
          group_id: 1
        },
        {
          id: 16,
          name: 'Mezcaleria Oaxaca',
          img_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/eXsVtwHUNorOSxRu3YTChQ/ms.jpg',
          rating: 4.5,
          description: 'I have been to Mezcalaria Oaxaca\'s other locations for their strong margaritas, so this was my first time actually coming in for food! My friend and I were...',
          address: '2123 Queen Anne Ave N',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98109,
          url: 'https://www.yelp.com/biz/mezcaleria-oaxaca-seattle?adjust_creative=hSoA-h_BmJSHiibeQa55Dw&utm_campaign=yelp_api&utm_medium=api_v2_business&utm_source=hSoA-h_BmJSHiibeQa55Dw',
          yelp_id: 'mezcaleria-oaxaca-seattle',
          group_id: 1
        },
        {
          id: 17,
          name: 'La Antigua Casa Maria',
          img_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/gij8gZUDhjRyiqSME2F40Q/ms.jpg',
          rating: 4.5,
          description: 'Delicious homemade food! We were treated so well and Maria explained to us that she makes everything herself so it could take a bit longer than typical...',
          address: '1100 N 115th St',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98133,
          url: 'https://www.yelp.com/biz/la-antigua-casa-maria-seattle?adjust_creative=hSoA-h_BmJSHiibeQa55Dw&utm_campaign=yelp_api&utm_medium=api_v2_business&utm_source=hSoA-h_BmJSHiibeQa55Dw',
          yelp_id: 'la-antigua-casa-maria-seattle',
          group_id: 1
        },
        {
          id: 18,
          name: 'Cafetal Quilombo',
          img_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/-QDvR941PjSVVrA3qMT2Zg/ms.jpg',
          rating: 4.5,
          description: 'Just moved to the neighborhood and am super stoked to be so near to this place. These guys are gonna make a ton of money off me in the years to come.\n\nTried...',
          address: '4343 15th Ave S',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98108,
          url: 'https://www.yelp.com/biz/cafetal-quilombo-seattle?adjust_creative=hSoA-h_BmJSHiibeQa55Dw&utm_campaign=yelp_api&utm_medium=api_v2_business&utm_source=hSoA-h_BmJSHiibeQa55Dw',
          yelp_id: 'cafetal-quilombo-seattle',
          group_id: 1
        },
        {
          id: 19,
          name: 'Pecado Bueno',
          img_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/1vjZyiVG5BZ8YygBXGESJg/ms.jpg',
          rating: 4.5,
          description: 'First time and thoroughly enjoyed it.  Had the dinner special (Carne Guisado - Mexican beef stew) and it was wonderful.  Big chunks of meat that were super...',
          address: '4307 Fremont Ave N',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98103,
          url: 'https://www.yelp.com/biz/pecado-bueno-seattle-6?adjust_creative=hSoA-h_BmJSHiibeQa55Dw&utm_campaign=yelp_api&utm_medium=api_v2_business&utm_source=hSoA-h_BmJSHiibeQa55Dw',
          yelp_id: 'pecado-bueno-seattle-6',
          group_id: 1
        },
        {
          id: 20,
          name: 'El Camión',
          img_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/V1HQMRrGDOtK8ShhnR4RgQ/ms.jpg',
          rating: 4.5,
          description: 'This is the place to go for authentic, yummy, quick and affordable Mexican food.  Whenever I\'m craving great tacos I always come here. Their ingredients are...',
          address: '6416 15th Ave NW',
          city: 'Seattle',
          state_code: 'WA',
          postal_code: 98107,
          url: 'https://www.yelp.com/biz/el-cami%C3%B3n-seattle-7?adjust_creative=hSoA-h_BmJSHiibeQa55Dw&utm_campaign=yelp_api&utm_medium=api_v2_business&utm_source=hSoA-h_BmJSHiibeQa55Dw',
          yelp_id: 'el-camión-seattle-7',
          group_id: 1
        }
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('restaurants_id_seq', (SELECT MAX(id) FROM restaurants));"
      )
    })
}
