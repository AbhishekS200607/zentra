const tablets = [
    { 
        id: 'lenovo-tab-p12',
        name: "Lenovo Tab P12", 
        brand: "Lenovo", 
        price: 25999, // Estimated
        img: "https://placehold.co/600x400/7d7d7d/ffffff?text=Tab+P12", 
        specs: { 
            cpu: "MediaTek Dimensity 7050", 
            ram: "8GB", 
            storage: "256GB", 
            display: '12.7-inch LTPS LCD',
            camera: "13MP Front",
            battery: "10,200 mAh"
        } 
    },
    { 
        id: 'xiaomi-pad-6',
        name: "Xiaomi Pad 6", 
        brand: "Xiaomi", 
        price: 28999, // Estimated for 256GB
        img: "https://placehold.co/600x400/7d7d7d/ffffff?text=Xiaomi+Pad+6", 
        specs: { 
            cpu: "Snapdragon 870", 
            ram: "8GB", 
            storage: "256GB", 
            display: '11.0-inch LCD (144Hz)',
            camera: "50MP + 2MP Rear",
            battery: "8,600 mAh"
        } 
    },
    { 
        id: 'samsung-galaxy-tab-s6-lite',
        name: "Samsung Galaxy Tab S6 Lite", 
        brand: "Samsung", 
        price: 22999, // Estimated
        img: "https://placehold.co/600x400/7d7d7d/ffffff?text=Tab+S6+Lite", 
        specs: { 
            cpu: "Exynos 9611", 
            ram: "4GB", 
            storage: "64GB (Expandable)", 
            display: '10.4-inch TFT',
            camera: "8MP Rear",
            battery: "7,040 mAh (15W)"
        } 
    },
    { 
        id: 'redmi-pad-pro-5g',
        name: "Redmi Pad Pro 5G", 
        brand: "Xiaomi", 
        price: 29999, // Estimated
        img: "https://placehold.co/600x400/7d7d7d/ffffff?text=Redmi+Pad+Pro", 
        specs: { 
            cpu: "Snapdragon 7s Gen 2", 
            ram: "8GB", 
            storage: "128GB", 
            display: '12.1-inch LCD (120Hz)',
            camera: "8MP Rear, 8MP Front",
            battery: "10,000 mAh (33W)"
        } 
    },
    { 
        id: 'acer-iconia-tab-im11',
        name: "Acer Iconia Tab iM11", 
        brand: "Acer", 
        price: 24999, // Estimated
        img: "https://placehold.co/600x400/7d7d7d/ffffff?text=Iconia+Tab", 
        specs: { 
            cpu: "MediaTek Helio G99", 
            ram: "8GB", 
            storage: "256GB (Expandable)", 
            display: '11.45-inch 2.2K IPS',
            camera: "16MP Rear",
            battery: "7,400 mAh (18W)"
        } 
    },
    { 
        id: 'apple-ipad-11th-gen',
        name: "Apple iPad 11th Gen (2025)", 
        brand: "Apple", 
        price: 45000, // Estimated
        img: "https://placehold.co/600x400/5c5c5c/ffffff?text=iPad+11th+Gen", 
        specs: { 
            cpu: "Apple A16 Bionic", 
            ram: "6GB", 
            storage: "128GB", 
            display: '11.0-inch Liquid Retina',
            camera: "12MP Rear, 12MP Front",
            battery: "~28.93 Wh (45W)"
        } 
    },
    { 
        id: 'samsung-galaxy-tab-a9-plus',
        name: "Samsung Galaxy Tab A9 Plus", 
        brand: "Samsung", 
        price: 20999, // Estimated
        img: "https://placehold.co/600x400/7d7d7d/ffffff?text=Tab+A9+", 
        specs: { 
            cpu: "Snapdragon 695", 
            ram: "8GB", 
            storage: "128GB (Expandable)", 
            display: '11.0-inch TFT (90Hz)',
            camera: "8MP Rear",
            battery: "7,040 mAh (15W)"
        } 
    },
    { 
        id: 'samsung-galaxy-tab-s9-fe-plus',
        name: "Samsung Galaxy Tab S9 FE+", 
        brand: "Samsung", 
        price: 46999, // Estimated
        img: "https://placehold.co/600x400/5c5c5c/ffffff?text=Tab+S9+FE+", 
        specs: { 
            cpu: "Exynos 1380", 
            ram: "8GB", 
            storage: "128GB (Expandable)", 
            display: '12.4-inch IPS (90Hz)',
            camera: "8MP + 8MP Rear",
            battery: "10,090 mAh"
        } 
    },
    { 
        id: 'xiaomi-pad-7',
        name: "Xiaomi Pad 7", 
        brand: "Xiaomi", 
        price: 39999, // Estimated
        img: "https://placehold.co/600x400/5c5c5c/ffffff?text=Xiaomi+Pad+7", 
        specs: { 
            cpu: "Snapdragon 7+ Gen 3", 
            ram: "8GB", 
            storage: "128GB", 
            display: '11.2-inch LCD (144Hz)',
            camera: "13MP Rear",
            battery: "8,850 mAh (45W)"
        } 
    },
    { 
        id: 'apple-ipad-air-2020',
        name: "Apple iPad Air (2020)", 
        brand: "Apple", 
        price: 49900, // Estimated
        img: "https://placehold.co/600x400/3b3b3b/ffffff?text=iPad+Air+2020", 
        specs: { 
            cpu: "Apple A14 Bionic", 
            ram: "4GB", 
            storage: "64GB / 256GB", 
            display: '10.9-inch Liquid Retina',
            camera: "12MP Rear",
            battery: "~7,600 mAh"
        } 
    },
    { 
        id: 'lenovo-yoga-tab-plus',
        name: "Lenovo Yoga Tab Plus", 
        brand: "Lenovo", 
        price: 79999, // Estimated
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=Yoga+Tab+Plus", 
        specs: { 
            cpu: "Snapdragon 8 Gen 3", 
            ram: "16GB", 
            storage: "256GB", 
            display: '12.7-inch IPS (144Hz)',
            camera: "13MP + 2MP Rear",
            battery: "10,200 mAh (45W)"
        } 
    },
    { 
        id: 'lenovo-tab-p12-pro',
        name: "Lenovo Tab P12 Pro", 
        brand: "Lenovo", 
        price: 65000, // Estimated
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=Tab+P12+Pro", 
        specs: { 
            cpu: "Snapdragon 870", 
            ram: "8GB", 
            storage: "256GB (Expandable)", 
            display: '12.6-inch 2K AMOLED (120Hz)',
            camera: "13MP + 5MP Rear",
            battery: "10,200 mAh (45W)"
        } 
    },
    { 
        id: 'samsung-galaxy-tab-s7-plus',
        name: "Samsung Galaxy Tab S7+", 
        brand: "Samsung", 
        price: 57000, // Approx
        img: "https://placehold.co/600x400/3b3b3b/ffffff?text=Tab+S7+", 
        specs: { 
            cpu: "Snapdragon 865+", 
            ram: "8GB", 
            storage: "256GB (Expandable)", 
            display: '12.4-inch Super AMOLED (120Hz)',
            camera: "13MP + 5MP Rear",
            battery: "10,090 mAh (45W)"
        } 
    },
    { 
        id: 'apple-ipad-air-2022',
        name: "Apple iPad Air (2022)", 
        brand: "Apple", 
        price: 57500, // Approx
        img: "https://placehold.co/600x400/3b3b3b/ffffff?text=iPad+Air+2022", 
        specs: { 
            cpu: "Apple M1", 
            ram: "8GB", 
            storage: "256GB", 
            display: '10.9-inch Liquid Retina',
            camera: "12MP Rear, 12MP Front",
            battery: "~7,600 mAh (20W)"
        } 
    },
    { 
        id: 'apple-ipad-10th-gen',
        name: "Apple iPad 10th Gen", 
        brand: "Apple", 
        price: 52500, // Approx
        img: "https://placehold.co/600x400/3b3b3b/ffffff?text=iPad+10th+Gen", 
        specs: { 
            cpu: "Apple A14 Bionic", 
            ram: "4GB", 
            storage: "256GB", 
            display: '10.9-inch IPS LCD',
            camera: "12MP Rear, 12MP Front",
            battery: "~3,969 mAh"
        } 
    },
    { 
        id: 'samsung-galaxy-tab-s9',
        name: "Samsung Galaxy Tab S9", 
        brand: "Samsung", 
        price: 72999, // Approx
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=Tab+S9", 
        specs: { 
            cpu: "Snapdragon 8 Gen 2", 
            ram: "8GB", 
            storage: "128GB (Expandable)", 
            display: '11.0-inch Dynamic AMOLED 2X',
            camera: "13MP Rear",
            battery: "8,400 mAh (45W)"
        } 
    },
    { 
        id: 'apple-ipad-air-m2',
        name: "Apple iPad Air (M2)", 
        brand: "Apple", 
        price: 69900, // Approx
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=iPad+Air+M2", 
        specs: { 
            cpu: "Apple M2", 
            ram: "8GB", 
            storage: "128GB / 256GB", 
            display: '11-inch Liquid Retina',
            camera: "12MP Rear, 12MP Front",
            battery: "~7,607 mAh (20W)"
        } 
    },
    { 
        id: 'realme-pad',
        name: "Realme Pad", 
        brand: "Realme", 
        price: 15999, // Approx
        img: "https://placehold.co/600x400/bfbfbf/ffffff?text=Realme+Pad", 
        specs: { 
            cpu: "MediaTek Helio G80", 
            ram: "4GB / 6GB", 
            storage: "64GB / 128GB", 
            display: '10.4-inch WUXGA+',
            camera: "8MP Rear",
            battery: "7,100 mAh (18W)"
        } 
    },
    { 
        id: 'samsung-galaxy-tab-a7-2020',
        name: "Samsung Galaxy Tab A7 (2020)", 
        brand: "Samsung", 
        price: 14999, // Approx
        img: "https://placehold.co/600x400/bfbfbf/ffffff?text=Tab+A7", 
        specs: { 
            cpu: "Snapdragon 662", 
            ram: "3GB / 4GB", 
            storage: "32GB / 64GB", 
            display: '10.4-inch IPS LCD',
            camera: "8MP Rear",
            battery: "7,040 mAh (15W)"
        } 
    },
    { 
        id: 'lenovo-m10-fhd-rel',
        name: "Lenovo M10 FHD REL", 
        brand: "Lenovo", 
        price: 13999, // Approx
        img: "https://placehold.co/600x400/bfbfbf/ffffff?text=Lenovo+M10", 
        specs: { 
            cpu: "Snapdragon 450", 
            ram: "2GB", 
            storage: "32GB", 
            display: '10.1-inch FHD IPS',
            camera: "8MP Rear",
            battery: "7,000 mAh"
        } 
    },
    { 
        id: 'oneplus-pad',
        name: "OnePlus Pad", 
        brand: "OnePlus", 
        price: 37999, // Approx
        img: "https://placehold.co/600x400/5c5c5c/ffffff?text=OnePlus+Pad", 
        specs: { 
            cpu: "MediaTek Dimensity 9000", 
            ram: "8GB / 12GB", 
            storage: "128GB / 256GB", 
            display: '11.61-inch 2.8K LCD (144Hz)',
            camera: "13MP Rear",
            battery: "9,510 mAh (67W)"
        } 
    },
    { 
        id: 'lenovo-smartchoice-idea-tab-pro',
        name: "Lenovo Smartchoice Idea Tab Pro", 
        brand: "Lenovo", 
        price: 49999, // Approx
        img: "https://placehold.co/600x400/3b3b3b/ffffff?text=Idea+Tab+Pro", 
        specs: { 
            cpu: "MediaTek Dimensity 8300", 
            ram: "12GB", 
            storage: "256GB (Expandable)", 
            display: '12.7-inch 3K IPS (144Hz)',
            camera: "13MP Rear",
            battery: "10,200 mAh (45W)"
        } 
    },
    { 
        id: 'samsung-galaxy-tab-s9-ultra',
        name: "Samsung Galaxy Tab S9 Ultra", 
        brand: "Samsung", 
        price: 100999, 
        img: "https://placehold.co/600x400/000000/ffffff?text=Tab+S9+Ultra", 
        specs: { 
            cpu: "Snapdragon 8 Gen 2", 
            ram: "12GB / 16GB", 
            storage: "256GB / 512GB", 
            display: '14.6-inch Dynamic AMOLED 2X',
            camera: "13MP + 8MP Rear",
            battery: "11,200 mAh (45W)"
        } 
    },
    { 
        id: 'apple-ipad-pro-11-2022',
        name: "Apple iPad Pro 11-inch (2022)", 
        brand: "Apple", 
        price: 91900, 
        img: "https://placehold.co/600x400/000000/ffffff?text=iPad+Pro+11", 
        specs: { 
            cpu: "Apple M2", 
            ram: "8GB / 16GB", 
            storage: "Up to 2TB", 
            display: '11-inch Liquid Retina (120Hz)',
            camera: "12MP Rear",
            battery: "~7,597 mAh (20W)"
        } 
    }
];
