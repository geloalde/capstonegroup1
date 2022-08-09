export const sliderItems = [
    {
        id: 1,
        // Comment the image below of laptop during development its a heavy image 
        
        img: "https://www.pngall.com/wp-content/uploads/9/Gadget-PNG-Pic.png",
        title: "GGE Tech Store",
        desc: "Wide range of choices from mobile phones, tablets, computer hardware and consoles! Satisfaction guaranteed! Safe delivery to your doorstep! ",
        bg: "e9f6ff",
        link: "/React-Project-e-commerce-app-estore.com/productview/0",
        size: "70%"
    },
    {
        id: 2,
        img: "http://cdn.shopify.com/s/files/1/0593/9727/5805/products/iphone-13-pro-max-graphite-select_cb9edf31-3fd4-4f27-8ed6-978343b9313d_1200x1200.png?v=1643889724",
        title: "IPHONE 13 Pro",
        desc: "Apple iPhone 13 Pro smartphone. Announced Sep 2021. Apple A15 Bionic chipset, 3095 mAh battery, 1024 GB storage, 6 GB RAM, ..",
        bg: "f9f6ff",
        link: "/React-Project-e-commerce-app-estore.com/productview/10",
        size: "80%"
    },
    {
        id: 3,
        img: "https://fonepro.pk/wp-content/uploads/2022/05/1WH-1000XM5_standard_black.png",
        title: "WH-1000XM5",
        desc: "SONY HD Wireless Noise Cancelling Headphones WH-1000XM5 Register before 2022/8/14 to enjoy 500 coffee coupons.",
        bg: "e9e9e9cc",
        link: "/React-Project-e-commerce-app-estore.com/productview/20",
        size: "80%"
    },
    {
        id: 4,
        img: "https://www.pngall.com/wp-content/uploads/9/Electronics-Gadget-PNG.png",
        title: "Amplify your Tech Swag with us!",
        desc: "A wide range of choices! Satisfaction guaranteed! Delivery to your doorstep!",
        bg: "b7bfe4",
        link: "/React-Project-e-commerce-app-estore.com/productview/20",
        size: "80%"
    },

    {
        id: 5,
        img: "https://pngroyale.com/wp-content/uploads/2022/03/Graphic-Web-Design-Transparent-Image.png",
        title: "Sample Slide Number 5",
        desc: "Sample Sub Header 5!",
        bg: "e9f6ff",
        link: "/React-Project-e-commerce-app-estore.com/productview/20",
        size: "80%"
    },

];

export const categories = [
    {
        id: 1,
        img: "https://www.cnet.com/a/img/resize/749c306c97f14076499981fc018dace33d0e367d/hub/2018/02/13/517fda12-de2a-4c3f-bee5-05daaf870537/01laptops-with-longest-battery-life-2018-feb.jpg?auto=webp&width=1200",
        title: "LAPTOPS",
        link: "/React-Project-e-commerce-app-estore.com/productlist/laptops",
    },
    {
        id: 2,
        img: "https://www.cnet.com/a/img/resize/55fb60ca6a8cf5035ac2b5044ef54e6f87f6be3f/2020/08/18/b7168aea-9f7e-47bb-9f31-4cb8ad92fbc7/lg-note-20-ultra-5g-iphone-11-se-google-pixel-4a-lg-velvet-6133.jpg?auto=webp&fit=crop&height=675&width=1200",
        title: "PHONES",
        link: "/React-Project-e-commerce-app-estore.com/productlist/phones",
    },
    {
        id: 3,
        img: "https://i.pcmag.com/imagery/articles/06X5FmHnKHTTmFzyn5jMunR-7..v1651759223.jpg",
        title: "HEADPHONES",
        link: "/React-Project-e-commerce-app-estore.com/productlist/headphones",
    },
    {
        id: 4,
        img: "https://wallpapers.com/images/high/playstation-ps5-console-nsndc8ewygduy1nh.jpg",
        title: "CONSOLE",
        link: "/React-Project-e-commerce-app-estore.com/productlist/console",
    },
];

export const allProducts = [
    // Products all here 
    // Product Id starts from zero same as index to object
    {
        id: 0,
        title: "MACBOOK PRO 13-inch",
        desc: "M2 is the next generation of Apple silicon. Its 8-core CPU lets you zip through everyday tasks like creating documents and presentations, or take on more intensive workflows like developing in Xcode or mixing tracks in Logic Pro.",
        img: "https://www.applestore.pk/wp-content/uploads/2021/01/mbp-spacegray-select-202011.jpg",
        // Price and Price Quantity must be same
        price: 320000,
        priceQuantity: 320000,
        quantity: 1,
        category: "laptops",
        popular: "yes",
        "Main Features": "8-Core CPU | 10-Core GPU",
        specs: {
            RAM: "6 GB",
            ROM: "256 GB",
            "Display": "Retina display",
            "Battery and Power": "4Up to 20 hours Apple TV app movie playbackGB",
            "Memory": "8GB unified memory",
            "Storage": "256GB SSD",
            "Charg­ing and Expan­sion": "Two Thunderbolt / USB 4 ports",
            "Key­board and Track­pad": "Backlit Magic Keyboard",
            "Wireless": "Wi-Fi 802.11ax Wi-Fi 6 wireless networking",
            "Bluetooth": "Bluetooth 5.0 wireless technology",
            "Camera": "720p FaceTime HD camera",
            "Audio": "Stereo speakers with high dynamic range",
            "Display Support": "Native DisplayPort output over USB‑C",
        },
        colors: {
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 1,
        title: "HP 15s FQ5886TU",
        desc: "The HP 15 Laptop is thoughtfully designed and delivers performance with an Intel i5 processor, fast Wi-Fi technology, and loads of storage. Enjoy a more natural and comfortable typing position with the lift-hinge design and enlarged click pad. The HP 15 design includes sustainable materials like ocean-bound plastic and from post-consumer recycled plastic",
        img: "https://laptopmart.pk/wp-content/uploads/2022/08/HP-Laptop-15s-fq2555TU.jpg",
        // Price and Price Quantity must be same
        price: 137999,
        priceQuantity: 137999,
        quantity: 1,
        category: "laptops",
        popular: "no",
        "Main Features": "Intel Core i5",
        specs: {
            RAM: "16 GB",
            ROM: "512 GB SSD",
            "Display": " 15 inch FHD (1920 x 1080), IPS, micro-edge, anti-glare ",
            "Battery and Power": "3-cell, 41 Wh Li-ion",
            "Memory": " DDR4-3200 MHz RAM (2 x 8 GB) ",
            "Storage": " 512 GB PCIe® NVMe™ M.2 SSD ",
            "Charg­ing and Expan­sion": " 1 SuperSpeed USB Type-C® 5Gbps signaling rate; 2 SuperSpeed USB Type-A 5Gbps signaling rate; ***  1 HDMI 1.4b; 1 AC smart pin; 1 headphone/microphone combo ",
            "Key­board and Track­pad": " - ",
            "Wireless": " 802.11a/b/g/n/ac (2x2) Wi-Fi® ",
            "Bluetooth": " Bluetooth® 5 ",
            "Camera": " HP True Vision 720p HD camera with integrated dual array digital microphones ",
            "Audio": " Dual speakers ",
            "Display Support": " - ",
        },
        colors: {
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 2,
        title: "HP ENVY x360",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, velit neque. Consectetur illum dicta officiis ad at tempore sapiente voluptas, ut vero dignissimos cum necessitatibus eligendi maxime quaerat obcaecati ex.",
        img: "https://laptopmart.pk/wp-content/uploads/2022/08/HP-ENVY-x360-15-ew0023dx-new.jpg",
        // Price and Price Quantity must be same
        price: 259999,
        priceQuantity: 259999,
        quantity: 1,
        category: "laptops",
        popular: "no",
        "Main Features": "Intel Core i7",
        specs: {
            RAM: "16 GB",
            ROM: "512 GB",
            "Display": " - ",
            "Battery and Power": " - ",
            "Memory": " - ",
            "Storage": " - ",
            "Charg­ing and Expan­sion": " - ",
            "Key­board and Track­pad": " - ",
            "Wireless": " - ",
            "Bluetooth": " - ",
            "Camera": " - ",
            "Audio": " - ",
            "Display Support": " - ",
        },
        colors: {
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 3,
        title: "HP Victus",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, velit neque. Consectetur illum dicta officiis ad at tempore sapiente voluptas, ut vero dignissimos cum necessitatibus eligendi maxime quaerat obcaecati ex.",
        img: "https://laptopmart.pk/wp-content/uploads/2022/07/HP-Victus-Gaming-15-fa0031dx.jpg",
        // Price and Price Quantity must be same
        price: 184999,
        priceQuantity: 184999,
        quantity: 1,
        category: "laptops",
        popular: "no",
        "Main Features": " Core i5",
        specs: {
            RAM: "16 GB",
            ROM: "1 TB",
            "Display": " - ",
            "Battery and Power": " - ",
            "Memory": " - ",
            "Storage": " - ",
            "Charg­ing and Expan­sion": " - ",
            "Key­board and Track­pad": " - ",
            "Wireless": " - ",
            "Bluetooth": " - ",
            "Camera": " - ",
            "Audio": " - ",
            "Display Support": " - ",
        },
        colors: {
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 4,
        title: "Dell Inspiron 15",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, velit neque. Consectetur illum dicta officiis ad at tempore sapiente voluptas, ut vero dignissimos cum necessitatibus eligendi maxime quaerat obcaecati ex.",
        img: "https://laptopmart.pk/wp-content/uploads/2022/05/Dell-Inspiron-15-3515.jpg",
        // Price and Price Quantity must be same
        price: 139999,
        priceQuantity: 139999,
        quantity: 1,
        category: "laptops",
        popular: "no",
        "Main Features": "Quad Core",
        specs: {
            RAM: "8 GB",
            ROM: "1 TB",
            "Display": " - ",
            "Battery and Power": " - ",
            "Memory": " - ",
            "Storage": " - ",
            "Charg­ing and Expan­sion": " - ",
            "Key­board and Track­pad": " - ",
            "Wireless": " - ",
            "Bluetooth": " - ",
            "Camera": " - ",
            "Audio": " - ",
            "Display Support": " - ",
        },
        colors: {
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 5,
        title: "Dell G7 15 7500",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, velit neque. Consectetur illum dicta officiis ad at tempore sapiente voluptas, ut vero dignissimos cum necessitatibus eligendi maxime quaerat obcaecati ex.",
        img: "https://laptopmart.pk/wp-content/uploads/2021/05/Dell-G7-15-7500-RGB-New.jpg",
        // Price and Price Quantity must be same
        price: 334999,
        priceQuantity: 334999,
        quantity: 1,
        category: "laptops",
        popular: "yes",
        "Main Features": "Hexa-Core",
        specs: {
            RAM: "32 GB",
            ROM: "2 TB",
            "Display": " - ",
            "Battery and Power": " - ",
            "Memory": " - ",
            "Storage": " - ",
            "Charg­ing and Expan­sion": " - ",
            "Key­board and Track­pad": " - ",
            "Wireless": " - ",
            "Bluetooth": " - ",
            "Camera": " - ",
            "Audio": " - ",
            "Display Support": " - ",
        },
        colors: {
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 6,
        title: "MSI GL75 Leopard",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, velit neque. Consectetur illum dicta officiis ad at tempore sapiente voluptas, ut vero dignissimos cum necessitatibus eligendi maxime quaerat obcaecati ex.",
        img: "https://laptopmart.pk/wp-content/uploads/2020/09/MSI-GL75-Leopard-10SDR-144Hz.jpg",
        // Price and Price Quantity must be same
        price: 269999,
        priceQuantity: 269999,
        quantity: 1,
        category: "laptops",
        popular: "no",
        "Main Features": "Core i7-10th",
        specs: {
            RAM: "16 GB",
            ROM: "1 TB",
            "Display": " - ",
            "Battery and Power": " - ",
            "Memory": " - ",
            "Storage": " - ",
            "Charg­ing and Expan­sion": " - ",
            "Key­board and Track­pad": " - ",
            "Wireless": " - ",
            "Bluetooth": " - ",
            "Camera": " - ",
            "Audio": " - ",
            "Display Support": " - ",
        },
        colors: {
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 7,
        title: "ThinkPad X1 Carbon",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, velit neque. Consectetur illum dicta officiis ad at tempore sapiente voluptas, ut vero dignissimos cum necessitatibus eligendi maxime quaerat obcaecati ex.",
        img: "https://laptopmart.pk/wp-content/uploads/2020/01/ThinkPad-X1-Carbon-7th-Gen.jpg",
        // Price and Price Quantity must be same
        price: 375000,
        priceQuantity: 375000,
        quantity: 1,
        category: "laptops",
        popular: "no",
        "Main Features": "Core i7",
        specs: {
            RAM: "16 GB",
            ROM: "2 TB",
            "Display": " - ",
            "Battery and Power": " - ",
            "Memory": " - ",
            "Storage": " - ",
            "Charg­ing and Expan­sion": " - ",
            "Key­board and Track­pad": " - ",
            "Wireless": " - ",
            "Bluetooth": " - ",
            "Camera": " - ",
            "Audio": " - ",
            "Display Support": " - ",
        },
        colors: {
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 8,
        title: "Lenovo ThinkBook",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, velit neque. Consectetur illum dicta officiis ad at tempore sapiente voluptas, ut vero dignissimos cum necessitatibus eligendi maxime quaerat obcaecati ex.",
        img: "https://laptopmart.pk/wp-content/uploads/2021/10/Lenovo-ThinkBook-15-IIL-ci3-new.jpg",
        // Price and Price Quantity must be same
        price: 84999,
        priceQuantity: 84999,
        quantity: 1,
        category: "laptops",
        popular: "no",
        "Main Features": "10th Generation",
        specs: {
            RAM: "4 GB",
            ROM: "1 TB",
            "Display": " - ",
            "Battery and Power": " - ",
            "Memory": " - ",
            "Storage": " - ",
            "Charg­ing and Expan­sion": " - ",
            "Key­board and Track­pad": " - ",
            "Wireless": " - ",
            "Bluetooth": " - ",
            "Camera": " - ",
            "Audio": " - ",
            "Display Support": " - ",
        },
        colors: {
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 9,
        title: "Acer Nitro 5",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, velit neque. Consectetur illum dicta officiis ad at tempore sapiente voluptas, ut vero dignissimos cum necessitatibus eligendi maxime quaerat obcaecati ex.",
        img: "https://laptopmart.pk/wp-content/uploads/2022/06/Acer-Nitro-5-AN515-57-536Q.jpg",
        // Price and Price Quantity must be same
        price: 174999,
        priceQuantity: 174999,
        quantity: 1,
        category: "laptops",
        popular: "no",
        "Main Features": "11th Generation",
        specs: {
            RAM: "8 GB",
            ROM: "256",
            "Display": " - ",
            "Battery and Power": " - ",
            "Memory": " - ",
            "Storage": " - ",
            "Charg­ing and Expan­sion": " - ",
            "Key­board and Track­pad": " - ",
            "Wireless": " - ",
            "Bluetooth": " - ",
            "Camera": " - ",
            "Audio": " - ",
            "Display Support": " - ",
        },
        colors: {
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 10,
        title: "IPHONE 13 PRO",
        desc: "Apple iPhone 13 Pro smartphone. Announced Sep 2021. Features 6.1″ display, Apple A15 Bionic chipset, 3095 mAh battery, 1024 GB storage, 6 GB RAM.",
        img: "http://cdn.shopify.com/s/files/1/0326/0291/4952/products/iphone13promax_silver_img2_1024x.jpg?v=1639460503",
        // Price and Price Quantity must be same
        price: 220000,
        priceQuantity: 220000,
        quantity: 1,
        category: "phones",
        popular: "yes",
        "Main Features": "A15 Bionic",
        specs: {
            RAM: "6 GB",
            ROM: "256 GB",
            "Network Technology": "GSM / CDMA / HSPA / EVDO / LTE / 5G",
            "Announced": "2021, September 14",
            "Status": "Available. Released 2021, September 24",
            "Dimensions": "146.7 x 71.5 x 7.7 mm (5.78 x 2.81 x 0.30 in)",
            "Weight": "204 g (7.20 oz)",
            "Card slot": "No",
            "Internal": "128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM, 1TB 6GB RAM",
            "MAIN CAMERA": "12 MP, f/1.5, 26mm (wide), 1.9µm, dual pixel PDAF, sensor-shift OIS",
            "SELFIE CAMERA": "12 MP, f/2.2, 23mm (wide), 1/3.6",
            "Loudspeaker": "Yes, with stereo speakers",
            "WLAN": "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
            "Sensors": "Face ID, accelerometer, gyro, proximity, compass, barometer",
            "BATTERY": "Li-Ion 3095 mAh, non-removable (12.11 Wh)",
        },
        colors: {
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FFX",
        },
    },
    {
        id: 11,
        title: " Redmi 10A",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, velit neque. Consectetur illum dicta officiis ad at tempore sapiente voluptas, ut vero dignissimos cum necessitatibus eligendi maxime quaerat obcaecati ex.",
        img: "https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_790PYKaHZeujfj3BxH89syS7cdmxrzrdO0Ztz3AE.jpg",
        // Price and Price Quantity must be same
        price: 28999,
        priceQuantity: 28999,
        quantity: 1,
        category: "phones",
        popular: "no",
        "Main Features": "Dual Sim",
        specs: {
            RAM: "4 GB",
            ROM: "64 GB",
            "Network Technology": " - ",
            "Announced": " - ",
            "Status": " - ",
            "Dimensions": " - ",
            "Weight": " - ",
            "Card slot": " - ",
            "Internal": " - ",
            "MAIN CAMERA": " - ",
            "SELFIE CAMERA": " - ",
            "Loudspeaker": " - ",
            "WLAN": " - ",
            "Sensors": " - ",
            "BATTERY": " - ",
        },
        colors: {
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FFX",
        },
    },
    {
        id: 12,
        title: "Galaxy A53",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, velit neque. Consectetur illum dicta officiis ad at tempore sapiente voluptas, ut vero dignissimos cum necessitatibus eligendi maxime quaerat obcaecati ex.",
        img: "https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_mtf5HL4AFSsfV8c6w1fMUXcmMvX6CI7QVZJKLEsa.jpg",
        // Price and Price Quantity must be same
        price: 91999,
        priceQuantity: 91999,
        quantity: 1,
        category: "phones",
        popular: "no",
        "Main Features": "feature",
        specs: {
            RAM: "6 GB",
            ROM: "126 GB",
            "Network Technology": " - ",
            "Announced": " - ",
            "Status": " - ",
            "Dimensions": " - ",
            "Weight": " - ",
            "Card slot": " - ",
            "Internal": " - ",
            "MAIN CAMERA": " - ",
            "SELFIE CAMERA": " - ",
            "Loudspeaker": " - ",
            "WLAN": " - ",
            "Sensors": " - ",
            "BATTERY": " - ",
        },
        colors: {
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FFX",
        },
    },
    {
        id: 13,
        title: "Redmi Note 11",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, velit neque. Consectetur illum dicta officiis ad at tempore sapiente voluptas, ut vero dignissimos cum necessitatibus eligendi maxime quaerat obcaecati ex.",
        img: "https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_30a6KkjTniM8zVJhn2dyWEupB09fgh8iRn4278Fj.jpg",
        // Price and Price Quantity must be same
        price: 38799,
        priceQuantity: 38799,
        quantity: 1,
        category: "phones",
        popular: "no",
        "Main Features": "Dual Sim",
        specs: {
            RAM: "4 GB",
            ROM: "128 GB",
            "Network Technology": " - ",
            "Announced": " - ",
            "Status": " - ",
            "Dimensions": " - ",
            "Weight": " - ",
            "Card slot": " - ",
            "Internal": " - ",
            "MAIN CAMERA": " - ",
            "SELFIE CAMERA": " - ",
            "Loudspeaker": " - ",
            "WLAN": " - ",
            "Sensors": " - ",
            "BATTERY": " - ",
        },
        colors: {
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FFX",
        },
    },
    {
        id: 14,
        title: "Xiaomi 12",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, velit neque. Consectetur illum dicta officiis ad at tempore sapiente voluptas, ut vero dignissimos cum necessitatibus eligendi maxime quaerat obcaecati ex.",
        img: "https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_ElV9FgUiq9jCyjpugsvtEDMuCQDHAKDe3Uj28Axg.jpg",
        // Price and Price Quantity must be same
        price: 173999,
        priceQuantity: 173999,
        quantity: 1,
        category: "phones",
        popular: "no",
        "Main Features": "Dual Sim",
        specs: {
            RAM: "6 GB",
            ROM: "256 GB",
            "Network Technology": " - ",
            "Announced": " - ",
            "Status": " - ",
            "Dimensions": " - ",
            "Weight": " - ",
            "Card slot": " - ",
            "Internal": " - ",
            "MAIN CAMERA": " - ",
            "SELFIE CAMERA": " - ",
            "Loudspeaker": " - ",
            "WLAN": " - ",
            "Sensors": " - ",
            "BATTERY": " - ",
        },
        colors: {
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FFX",
        },
    },
    {
        id: 15,
        title: "Vivo V23e",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, velit neque. Consectetur illum dicta officiis ad at tempore sapiente voluptas, ut vero dignissimos cum necessitatibus eligendi maxime quaerat obcaecati ex.",
        img: "https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_DZTVy7B93gsEVtUuf3GuzKnR94jq2tPfyLTGu7kg.jpg",
        // Price and Price Quantity must be same
        price: 70099,
        priceQuantity: 70099,
        quantity: 1,
        category: "phones",
        popular: "no",
        "Main Features": "feaDual Simture",
        specs: {
            RAM: "8 GB",
            ROM: "256 GB",
            "Network Technology": " - ",
            "Announced": " - ",
            "Status": " - ",
            "Dimensions": " - ",
            "Weight": " - ",
            "Card slot": " - ",
            "Internal": " - ",
            "MAIN CAMERA": " - ",
            "SELFIE CAMERA": " - ",
            "Loudspeaker": " - ",
            "WLAN": " - ",
            "Sensors": " - ",
            "BATTERY": " - ",
        },
        colors: {
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FFX",
        },
    },
    {
        id: 16,
        title: "Tecno Spark 8c",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, velit neque. Consectetur illum dicta officiis ad at tempore sapiente voluptas, ut vero dignissimos cum necessitatibus eligendi maxime quaerat obcaecati ex.",
        img: "https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_8Fl64VOCtD919BAyR2NmmjHAmv68hgRvkPm6mK4f.jpg",
        // Price and Price Quantity must be same
        price: 26499,
        priceQuantity: 26499,
        quantity: 1,
        category: "phones",
        popular: "no",
        "Main Features": "Dual Sim",
        specs: {
            RAM: "3 GB",
            ROM: "64 GB",
            "Network Technology": " - ",
            "Announced": " - ",
            "Status": " - ",
            "Dimensions": " - ",
            "Weight": " - ",
            "Card slot": " - ",
            "Internal": " - ",
            "MAIN CAMERA": " - ",
            "SELFIE CAMERA": " - ",
            "Loudspeaker": " - ",
            "WLAN": " - ",
            "Sensors": " - ",
            "BATTERY": " - ",
        },
        colors: {
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FFX",
        },
    },
    {
        id: 17,
        title: "Samsung Galaxy S21",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, velit neque. Consectetur illum dicta officiis ad at tempore sapiente voluptas, ut vero dignissimos cum necessitatibus eligendi maxime quaerat obcaecati ex.",
        img: "https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_ldTXSfaSyPN7bmTyB7WcixUsOeHyvEZG4LgikrmE.png",
        // Price and Price Quantity must be same
        price: 149999,
        priceQuantity: 149999,
        quantity: 1,
        category: "phones",
        popular: "yes",
        "Main Features": "5G",
        specs: {
            RAM: "8 GB",
            ROM: "256 GB",
            "Network Technology": " - ",
            "Announced": " - ",
            "Status": " - ",
            "Dimensions": " - ",
            "Weight": " - ",
            "Card slot": " - ",
            "Internal": " - ",
            "MAIN CAMERA": " - ",
            "SELFIE CAMERA": " - ",
            "Loudspeaker": " - ",
            "WLAN": " - ",
            "Sensors": " - ",
            "BATTERY": " - ",
        },
        colors: {
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FFX",
        },
    },
    {
        id: 18,
        title: "Google Pixel 6",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, velit neque. Consectetur illum dicta officiis ad at tempore sapiente voluptas, ut vero dignissimos cum necessitatibus eligendi maxime quaerat obcaecati ex.",
        img: "https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_5f6H1X53Q7E9J3bg7F5LogM7u5Up187MURKSwUhH.png",
        // Price and Price Quantity must be same
        price: 251999,
        priceQuantity: 251999,
        quantity: 1,
        category: "phones",
        popular: "no",
        "Main Features": "5G",
        specs: {
            RAM: "8 GB",
            ROM: "256 GB",
            "Network Technology": " - ",
            "Announced": " - ",
            "Status": " - ",
            "Dimensions": " - ",
            "Weight": " - ",
            "Card slot": " - ",
            "Internal": " - ",
            "MAIN CAMERA": " - ",
            "SELFIE CAMERA": " - ",
            "Loudspeaker": " - ",
            "WLAN": " - ",
            "Sensors": " - ",
            "BATTERY": " - ",
        },
        colors: {
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FFX",
        },
    },
    {
        id: 19,
        title: "Realme C25Y",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, velit neque. Consectetur illum dicta officiis ad at tempore sapiente voluptas, ut vero dignissimos cum necessitatibus eligendi maxime quaerat obcaecati ex.",
        img: "https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_H1kfOS23C3m84ElMr8hqjHS3C7dYYmswqYvRRGui.png",
        // Price and Price Quantity must be same
        price: 30699,
        priceQuantity: 30699,
        quantity: 1,
        category: "phones",
        popular: "no",
        "Main Features": "feature",
        specs: {
            RAM: "4 GB",
            ROM: "64 GB",
            "Network Technology": " - ",
            "Announced": " - ",
            "Status": " - ",
            "Dimensions": " - ",
            "Weight": " - ",
            "Card slot": " - ",
            "Internal": " - ",
            "MAIN CAMERA": " - ",
            "SELFIE CAMERA": " - ",
            "Loudspeaker": " - ",
            "WLAN": " - ",
            "Sensors": " - ",
            "BATTERY": " - ",
        },
        colors: {
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FFX",
        },
    },
    {
        id: 20,
        title: "SONY WH-1000XM5",
        desc: "The WH-1000XM5 earphones are not only equipped with two sets of processors that can control eight microphones, an automatic noise reduction optimizer that can automatically optimize the noise reduction function according to the wearing condition and environment, and a tailor-made driver unit, but also equipped with Industry-leading Noise Cancellation1 technology takes distraction-free listening and call clarity to a whole new level.",
        img: "https://www.sony.com/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
        // Price and Price Quantity must be same
        price: 84000,
        priceQuantity: 84000,
        quantity: 1,
        category: "headphones",
        popular: "yes",
        "Main Features": "Noise Cancelling",
        specs: {
            RAM: "Bluetooth",
            ROM: "5.0",
            "Bluetooth version": "5.2",
            "Active noise cancellation": "yes",
            "Ambient mode": "yes",
            "Multipoint": "yes",
            "Battery life": "30 hours (ANC on), 40 hours (ANC off)",
            "Bluetooth codecs": "LDAC, AAC, SBC",
        },
        colors: {
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 21,
        title: "R-7000 Ronin",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, velit neque. Consectetur illum dicta officiis ad at tempore sapiente voluptas, ut vero dignissimos cum necessitatibus eligendi maxime quaerat obcaecati ex.",
        img: "https://g9k7v3c5.stackpathcdn.com/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/H/E/HEADPHONES-r-7000-ronin_spo.jpg",
        // Price and Price Quantity must be same
        price: 1900,
        priceQuantity: 1900,
        quantity: 1,
        category: "headphones",
        popular: "no",
        "Main Features": "5 hours battery",
        specs: {
            RAM: "Bluetooth",
            ROM: "5.0",
            "Bluetooth version": " - ",
            "Active noise cancellation": " - ",
            "Ambient mode": " - ",
            "Multipoint": " - ",
            "Battery life": " - ",
            "Bluetooth codecs": " - ",
        },
        colors: {
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 22,
        title: "R-9000 Ronin",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, velit neque. Consectetur illum dicta officiis ad at tempore sapiente voluptas, ut vero dignissimos cum necessitatibus eligendi maxime quaerat obcaecati ex.",
        img: "https://g9k7v3c5.stackpathcdn.com/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/H/E/HEADPHONES-r-9000-ronin_spo.jpg",
        // Price and Price Quantity must be same
        price: 2199,
        priceQuantity: 2199,
        quantity: 1,
        category: "headphones",
        popular: "no",
        "Main Features": "4 hours battery",
        specs: {
            RAM: "Bluetooth",
            ROM: "5.0",
            "Bluetooth version": " - ",
            "Active noise cancellation": " - ",
            "Ambient mode": " - ",
            "Multipoint": " - ",
            "Battery life": " - ",
            "Bluetooth codecs": " - ",
        },
        colors: {
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 23,
        title: "Havit H610BT",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, velit neque. Consectetur illum dicta officiis ad at tempore sapiente voluptas, ut vero dignissimos cum necessitatibus eligendi maxime quaerat obcaecati ex.",
        img: "https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_4piqJNPybvP80JsryvDqGOawk4XyPVn1ufb4c2IW.jpg",
        // Price and Price Quantity must be same
        price: 2699,
        priceQuantity: 2699,
        quantity: 1,
        category: "headphones",
        popular: "no",
        "Main Features": "Fast charging | 12 Hours",
        specs: {
            RAM: "Bluetooth",
            ROM: "5.0",
            "Bluetooth version": " - ",
            "Active noise cancellation": " - ",
            "Ambient mode": " - ",
            "Multipoint": " - ",
            "Battery life": " - ",
            "Bluetooth codecs": " - ",
        },
        colors: {
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 24,
        title: "Audionic A-110",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, velit neque. Consectetur illum dicta officiis ad at tempore sapiente voluptas, ut vero dignissimos cum necessitatibus eligendi maxime quaerat obcaecati ex.",
        img: "https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_w7IFRo01jvLPNAi3sdhaHDIsquq2wa0G3l9FxDk9.jpg",
        // Price and Price Quantity must be same
        price: 2949,
        priceQuantity: 2949,
        quantity: 1,
        category: "headphones",
        popular: "no",
        "Main Features": "8 hours battery",
        specs: {
            RAM: "Bluetooth",
            ROM: "5.0",
            "Bluetooth version": " - ",
            "Active noise cancellation": " - ",
            "Ambient mode": " - ",
            "Multipoint": " - ",
            "Battery life": " - ",
            "Bluetooth codecs": " - ",
        },
        colors: {
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },


    {
        id: 25,
        title: "25th product",
        desc: "added on our class og aug 8 , 2022",
        img: "https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_w7IFRo01jvLPNAi3sdhaHDIsquq2wa0G3l9FxDk9.jpg",
        // Price and Price Quantity must be same
        price: 2949,
        priceQuantity: 2949,
        quantity: 1,
        category: "console",
        popular: "yes",
        "Main Features": "8 hours battery",
        specs: {
            RAM: "Bluetooth",
            ROM: "5.0",
            "Bluetooth version": " - ",
            "Active noise cancellation": " - ",
            "Ambient mode": " - ",
            "Multipoint": " - ",
            "Battery life": " - ",
            "Bluetooth codecs": " - ",
        },
        colors: {
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },


];

// Items added to cart 
export const CartItemsData = [
    // Cart Items will be added here through product buttons - update via states
];
export const totaPriceOfCartItemsData = []; // this will recive data form the totalPrice function in Cart.jsx and then will be retrived to App.js state;

// export const popularProducts = [
// ];