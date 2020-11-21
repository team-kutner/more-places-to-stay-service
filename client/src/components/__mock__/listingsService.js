const fakeData = [
  {
    "id": 4,
    "name": "Corey Flatley AirBnB",
    "img_url": "https://aquabnblistingimages.s3-us-west-1.amazonaws.com/home_images/mountains-2154198_640.jpg",
    "home_type": "mansion",
    "beds": 6,
    "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    "city": "pescadero",
    "cost_per_night": 30,
    "reviews": 712,
    "avg_rating": 3.45,
    "isSuperhost": 1
  },
  {
    "id": 5,
    "name": "Miss Roberta Rau AirBnB",
    "img_url": "https://aquabnblistingimages.s3-us-west-1.amazonaws.com/home_images/interior-1961070_640.jpg",
    "home_type": "apartment",
    "beds": 5,
    "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    "city": "pescadero",
    "cost_per_night": 36,
    "reviews": 899,
    "avg_rating": 1.9,
    "isSuperhost": 1
  },
  {
    "id": 13,
    "name": "Faye Veum AirBnB",
    "img_url": "https://aquabnblistingimages.s3-us-west-1.amazonaws.com/home_images/holiday-house-177401_640.jpg",
    "home_type": "hotel",
    "beds": 1,
    "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    "city": "pescadero",
    "cost_per_night": 24,
    "reviews": 901,
    "avg_rating": 2.28,
    "isSuperhost": 0
  },
  {
    "id": 17,
    "name": "Justin Kohler AirBnB",
    "img_url": "https://aquabnblistingimages.s3-us-west-1.amazonaws.com/home_images/ivy-529767_640.jpg",
    "home_type": "home",
    "beds": 3,
    "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    "city": "pescadero",
    "cost_per_night": 40,
    "reviews": 230,
    "avg_rating": 2.28,
    "isSuperhost": 0
  },
  {
    "id": 18,
    "name": "Doug Shields AirBnB",
    "img_url": "https://aquabnblistingimages.s3-us-west-1.amazonaws.com/home_images/architecture-1834813_640.jpg",
    "home_type": "cabin",
    "beds": 8,
    "description": "The Football Is Good For Training And Recreational Purposes",
    "city": "pescadero",
    "cost_per_night": 40,
    "reviews": 919,
    "avg_rating": 1.27,
    "isSuperhost": 1
  },
  {
    "id": 38,
    "name": "Boyd Ankunding AirBnB",
    "img_url": "https://aquabnblistingimages.s3-us-west-1.amazonaws.com/home_images/red-840058_640.jpg",
    "home_type": "cabin",
    "beds": 5,
    "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    "city": "pescadero",
    "cost_per_night": 26,
    "reviews": 172,
    "avg_rating": 3.39,
    "isSuperhost": 1
  },
  {
    "id": 42,
    "name": "Vanessa Stiedemann AirBnB",
    "img_url": "https://aquabnblistingimages.s3-us-west-1.amazonaws.com/home_images/beach-house-1505461_640.jpg",
    "home_type": "mansion",
    "beds": 2,
    "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    "city": "pescadero",
    "cost_per_night": 17,
    "reviews": 151,
    "avg_rating": 1.23,
    "isSuperhost": 0
  },
  {
    "id": 46,
    "name": "Roderick Johns DVM AirBnB",
    "img_url": "https://aquabnblistingimages.s3-us-west-1.amazonaws.com/home_images/beach-house-1505461_640.jpg",
    "home_type": "home",
    "beds": 2,
    "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    "city": "pescadero",
    "cost_per_night": 30,
    "reviews": 983,
    "avg_rating": 2.15,
    "isSuperhost": 1
  },
  {
    "id": 52,
    "name": "Kristie Beahan AirBnB",
    "img_url": "https://aquabnblistingimages.s3-us-west-1.amazonaws.com/home_images/house-2608548_640.jpg",
    "home_type": "igloo",
    "beds": 2,
    "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    "city": "pescadero",
    "cost_per_night": 18,
    "reviews": 101,
    "avg_rating": 2.24,
    "isSuperhost": 1
  },
  {
    "id": 56,
    "name": "Ms. Tiffany Huels AirBnB",
    "img_url": "https://aquabnblistingimages.s3-us-west-1.amazonaws.com/home_images/fishermen-cabin-1191186_640.jpg",
    "home_type": "hut",
    "beds": 12,
    "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    "city": "pescadero",
    "cost_per_night": 42,
    "reviews": 819,
    "avg_rating": 3.29,
    "isSuperhost": 0
  },
  {
    "id": 59,
    "name": "Dana Cole AirBnB",
    "img_url": "https://aquabnblistingimages.s3-us-west-1.amazonaws.com/home_images/architecture-2804083_640.jpg",
    "home_type": "home",
    "beds": 2,
    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    "city": "pescadero",
    "cost_per_night": 41,
    "reviews": 950,
    "avg_rating": 1.32,
    "isSuperhost": 1
  },
  {
    "id": 61,
    "name": "Joann Hoppe AirBnB",
    "img_url": "https://aquabnblistingimages.s3-us-west-1.amazonaws.com/home_images/apartment-3564955_640.jpg",
    "home_type": "home",
    "beds": 4,
    "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    "city": "pescadero",
    "cost_per_night": 22,
    "reviews": 235,
    "avg_rating": 4.43,
    "isSuperhost": 1
  }
];

export default async () => {
  return await new Promise((resolve, reject) => {
    resolve(fakeData);
  });
};