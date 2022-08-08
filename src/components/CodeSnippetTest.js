let employees = [
  // Products all here 
  // Product Id starts from zero same as index to object
  {
      id: 0,
      title: "IPHONE 13 PRO MAX",
      desc: "lorem ispsum",
      img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
      // Price and Price Quantity must be same
      price: 100,
      priceQuantity:100, 
      quantity:1,
      category:"phones",
      "Main Features": "RAM : 6 GB | ROM : 128 GB | COLOR: BLUE 0",
      specs:{
          RAM: "4 GB",
          Processor: "64 GB",
          "Dual SIM": "YES",
          Battery: "Li-Ion 3240 mAh, non-removable (12.41 Wh)",
          "Main Camera": "12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
          "Front Camera": "10 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
      },
      colors:{
          color1: "58FF33",
          color2: "FF33F3",
          color3: "3346FF",
      },
  },
  {
      id: 1,
      title: "IPHONE 13 PRO MAX 1",
      desc: "lorem ispsum",
      img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
      // Price and Price Quantity must be same
      price: 11,
      priceQuantity:11, 
      quantity:1,
      category:"phones",
      "Main Features": "RAM : 6 GB | ROM : 128 GB | COLOR: BLUE 1",
      specs:{
          RAM: "4 GB",
          Processor: "64 GB",
          "Dual SIM": "YES",
          Battery: "Li-Ion 3240 mAh, non-removable (12.41 Wh)",
          "Main Camera": "12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
      },
      colors:{
          color1: "58FF33",
          color2: "FF33F3",
          color3: "3346FF",
      },
  },
  {
      id: 2,
      title: "IPHONE 13 PRO MAX 2",
      desc: "lorem ispsum",
      img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
      // Price and Price Quantity must be same
      price: 22,
      priceQuantity:22, 
      quantity:1,
      category:"laptops",
      "Main Features": "RAM : 6 GB | ROM : 128 GB | COLOR: BLUE 2",
      specs:{
          RAM: "4 GB",
          Processor: "64 GB",
          "Dual SIM": "YES",
          Battery: "Li-Ion 3240 mAh, non-removable (12.41 Wh)",
          "Main Camera": "12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
      },
      colors:{
          color1: "58FF33",
          color2: "FF33F3",
          color3: "3346FF",
      },
  },
  {
      id: 3,
      title: "IPHONE 13 PRO MAX 3",
      desc: "lorem ispsum",
      img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
      // Price and Price Quantity must be same
      price: 33,
      priceQuantity:33, 
      quantity:1,
      category:"phones",
      "Main Features": "RAM : 6 GB | ROM : 128 GB | COLOR: BLUE 3 ",
      specs:{
          RAM: "4 GB",
          Processor: "64 GB",
          "Dual SIM": "YES",
          Battery: "Li-Ion 3240 mAh, non-removable (12.41 Wh)",
          "Main Camera": "12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
      },
      colors:{
          color1: "58FF33",
          color2: "FF33F3",
          color3: "3346FF",
      },
  },
  {
      id: 4,
      title: "IPHONE 13 PRO MAX 4",
      desc: "lorem ispsum",
      img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
      // Price and Price Quantity must be same
      price: 100,
      priceQuantity:100, 
      quantity:1,
      category:"phones",
      "Main Features": "RAM : 6 GB | ROM : 128 GB | COLOR: BLUE 0",
      specs:{
          RAM: "4 GB",
          Processor: "64 GB",
          "Dual SIM": "YES",
          Battery: "Li-Ion 3240 mAh, non-removable (12.41 Wh)",
          "Main Camera": "12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
          "Front Camera": "10 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
      },
      colors:{
          color1: "58FF33",
          color2: "FF33F3",
          color3: "3346FF",
      },
  },
  {
      id: 5,
      title: "IPHONE 13 PRO MAX 5",
      desc: "lorem ispsum",
      img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
      // Price and Price Quantity must be same
      price: 100,
      priceQuantity:100, 
      quantity:1,
      category:"phones",
      "Main Features": "RAM : 6 GB | ROM : 128 GB | COLOR: BLUE 0",
      specs:{
          RAM: "4 GB",
          Processor: "64 GB",
          "Dual SIM": "YES",
          Battery: "Li-Ion 3240 mAh, non-removable (12.41 Wh)",
          "Main Camera": "12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
          "Front Camera": "10 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
      },
      colors:{
          color1: "58FF33",
          color2: "FF33F3",
          color3: "3346FF",
      },
  },
  {
      id: 6,
      title: "IPHONE 13 PRO MAX 6",
      desc: "lorem ispsum",
      img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
      // Price and Price Quantity must be same
      price: 100,
      priceQuantity:100, 
      quantity:1,
      category:"phones",
      "Main Features": "RAM : 6 GB | ROM : 128 GB | COLOR: BLUE 0",
      specs:{
          RAM: "4 GB",
          Processor: "64 GB",
          "Dual SIM": "YES",
          Battery: "Li-Ion 3240 mAh, non-removable (12.41 Wh)",
          "Main Camera": "12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
          "Front Camera": "10 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
      },
      colors:{
          color1: "58FF33",
          color2: "FF33F3",
          color3: "3346FF",
      },
  },
  {
      id: 7,
      title: "IPHONE 13 PRO MAX 7",
      desc: "lorem ispsum",
      img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
      // Price and Price Quantity must be same
      price: 100,
      priceQuantity:100, 
      quantity:1,
      category:"phones",
      "Main Features": "RAM : 6 GB | ROM : 128 GB | COLOR: BLUE 0",
      specs:{
          RAM: "4 GB",
          Processor: "64 GB",
          "Dual SIM": "YES",
          Battery: "Li-Ion 3240 mAh, non-removable (12.41 Wh)",
          "Main Camera": "12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
          "Front Camera": "10 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
      },
      colors:{
          color1: "58FF33",
          color2: "FF33F3",
          color3: "3346FF",
      },
  },
  {
      id: 8,
      title: "IPHONE 13 PRO MAX 8",
      desc: "lorem ispsum",
      img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
      // Price and Price Quantity must be same
      price: 1,
      priceQuantity:100, 
      quantity:1,
      category:"phones",
      "Main Features": "RAM : 6 GB | ROM : 128 GB | COLOR: BLUE 0",
      specs:{
          RAM: "4 GB",
          Processor: "64 GB",
          "Dual SIM": "YES",
          Battery: "Li-Ion 3240 mAh, non-removable (12.41 Wh)",
          "Main Camera": "12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
          "Front Camera": "10 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
      },
      colors:{
          color1: "58FF33",
          color2: "FF33F3",
          color3: "3346FF",
      },
  },
];


employees.sort((a, b) => {
  // return a.price - b.price; // LOW TO HIGH
  return b.price - a.price; // FOR HIGH TO LOW
});


employees.forEach((e) => {
  console.log(e);
});