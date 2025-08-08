const phones = [
    { 
        id: 'samsung-galaxy-f15',
        name: "Samsung Galaxy F15 5G", 
        brand: "Samsung", 
        price: 13499, 
        img: "https://placehold.co/600x400/bfbfbf/ffffff?text=Galaxy+F15", 
        specs: { 
            cpu: "MediaTek Dimensity 6100+", 
            ram: "4GB / 6GB", 
            storage: "128GB", 
            display: '6.5" Super AMOLED (90Hz)',
            camera: "50MP + 5MP + 2MP",
            battery: "6,000mAh (25W)"
        } 
    },
    { 
        id: 'motorola-g34',
        name: "Motorola G34 5G", 
        brand: "Motorola", 
        price: 11999,
        img: "https://placehold.co/600x400/bfbfbf/ffffff?text=Moto+G34", 
        specs: { 
            cpu: "Snapdragon 695", 
            ram: "8GB", 
            storage: "128GB", 
            display: '6.5" HD+ LCD (120Hz)',
            camera: "50MP + 2MP",
            battery: "5,000mAh (20W)"
        } 
    },
    { 
        id: 'realme-narzo-70x',
        name: "Realme Narzo 70x 5G", 
        brand: "Realme", 
        price: 13499,
        img: "https://placehold.co/600x400/bfbfbf/ffffff?text=Narzo+70x", 
        specs: { 
            cpu: "MediaTek Dimensity 6300", 
            ram: "6GB / 8GB", 
            storage: "128GB", 
            display: '6.72" FHD+ LCD (120Hz)',
            camera: "50MP + 2MP",
            battery: "5,000mAh (45W)"
        } 
    },
    { 
        id: 'poco-m6-pro',
        name: "Poco M6 Pro 5G", 
        brand: "Poco", 
        price: 10999,
        img: "https://placehold.co/600x400/bfbfbf/ffffff?text=Poco+M6+Pro", 
        specs: { 
            cpu: "Snapdragon 4 Gen 2", 
            ram: "4GB / 6GB / 8GB", 
            storage: "128GB / 256GB", 
            display: '6.79" FHD+ LCD (90Hz)',
            camera: "50MP + 2MP",
            battery: "5,000mAh (18W)"
        } 
    },
    // Under 25,000
    { 
        id: 'poco-x7-pro',
        name: "Poco X7 Pro 5G", 
        brand: "Poco", 
        price: 22899, 
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=Poco+X7+Pro", 
        specs: { 
            cpu: "MediaTek Dimensity 8400 Ultra", 
            ram: "8GB / 12GB", 
            storage: "256GB", 
            display: '6.73" 1.5K AMOLED (120Hz)',
            camera: "50MP + 8MP",
            battery: "6,550mAh (90W)"
        } 
    },
    { 
        id: 'oneplus-nord-ce5',
        name: "OnePlus Nord CE5", 
        brand: "OnePlus", 
        price: 24999, // Estimated
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=Nord+CE5", 
        specs: { 
            cpu: "MediaTek Dimensity 8350 Apex", 
            ram: "8GB", 
            storage: "128GB", 
            display: '6.43" Fluid AMOLED',
            camera: "64MP + 8MP + 2MP",
            battery: "4,500mAh"
        } 
    },
    { 
        id: 'poco-x7-pro',
        name: "Poco X7 Pro 5G", 
        brand: "Poco", 
        price: 22899, 
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=Poco+X7+Pro", 
        specs: { 
            cpu: "MediaTek Dimensity 8400 Ultra", 
            ram: "8GB / 12GB", 
            storage: "256GB", 
            display: '6.73" 1.5K AMOLED (120Hz)',
            camera: "50MP + 8MP",
            battery: "6,550mAh (90W)"
        } 
    },
    { 
        id: 'oneplus-nord-ce5',
        name: "OnePlus Nord CE5", 
        brand: "OnePlus", 
        price: 24999, // Estimated
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=Nord+CE5", 
        specs: { 
            cpu: "MediaTek Dimensity 8350 Apex", 
            ram: "8GB", 
            storage: "128GB", 
            display: '6.43" Fluid AMOLED',
            camera: "64MP + 8MP + 2MP",
            battery: "4,500mAh"
        } 
    },
    { 
        id: 'iqoo-neo-10r',
        name: "iQOO Neo 10R", 
        brand: "iQOO", 
        price: 28999, // Estimated
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=iQOO+Neo+10R", 
        specs: { 
            cpu: "Snapdragon 8s Gen 3", 
            ram: "12GB", 
            storage: "256GB", 
            display: '6.78" HDR AMOLED (144Hz)',
            camera: "50MP + 8MP",
            battery: "6,400mAh"
        } 
    },
    { 
        id: 'motorola-edge-60-fusion',
        name: "Motorola Edge 60 Fusion", 
        brand: "Motorola", 
        price: 26999, // Estimated
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=Edge+60+Fusion", 
        specs: { 
            cpu: "MediaTek Dimensity 7400", 
            ram: "8GB / 12GB", 
            storage: "256GB", 
            display: '6.67" P-OLED Curved (120Hz)',
            camera: "50MP Triple Camera",
            battery: "5,200mAh (68W)"
        } 
    },
    { 
        id: 'vivo-t4-5g',
        name: "Vivo T4 5G", 
        brand: "Vivo", 
        price: 25999, // Estimated
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=Vivo+T4", 
        specs: { 
            cpu: "Snapdragon 7s Gen3", 
            ram: "8GB + 8GB Virtual", 
            storage: "128GB", 
            display: '6.77" AMOLED (120Hz)',
            camera: "50MP + 2MP",
            battery: "7,300mAh (90W)"
        } 
    },
    { 
        id: 'poco-f7',
        name: "Poco F7", 
        brand: "Poco", 
        price: 31999, 
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=Poco+F7", 
        specs: { 
            cpu: "Snapdragon 8s Gen 4", 
            ram: "12GB", 
            storage: "512GB", 
            display: '6.83" 1.5K AMOLED (120Hz)',
            camera: "50MP + 8MP",
            battery: "7,550mAh (90W)"
        } 
    },
    { 
        id: 'iqoo-neo-10-2025',
        name: "iQOO Neo 10 (2025)", 
        brand: "iQOO", 
        price: 33999, // Estimated
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=iQOO+Neo+10", 
        specs: { 
            cpu: "Snapdragon 8s Gen 4", 
            ram: "12GB / 16GB", 
            storage: "256GB / 512GB", 
            display: '6.78" HDR AMOLED (144Hz)',
            camera: "50MP + 8MP",
            battery: "7,000mAh (120W)"
        } 
    },
    { 
        id: 'oneplus-nord-5',
        name: "OnePlus Nord 5", 
        brand: "OnePlus", 
        price: 31999, 
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=Nord+5", 
        specs: { 
            cpu: "Snapdragon 8s Gen 3", 
            ram: "12GB", 
            storage: "512GB", 
            display: '6.83" 1.5K AMOLED (144Hz)',
            camera: "50MP + 8MP",
            battery: "6,800mAh (80W)"
        } 
    },
    { 
        id: 'motorola-edge-60-pro',
        name: "Motorola Edge 60 Pro", 
        brand: "Motorola", 
        price: 29999, 
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=Edge+60+Pro", 
        specs: { 
            cpu: "Dimensity 8350 Extreme", 
            ram: "12GB / 16GB", 
            storage: "256GB / 512GB", 
            display: '6.67" pOLED (120Hz)',
            camera: "50MP + 50MP + 10MP",
            battery: "6,000mAh (90W)"
        } 
    },
    { 
        id: 'xiaomi-14-civi',
        name: "Xiaomi 14 Civi", 
        brand: "Xiaomi", 
        price: 42999, 
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=Xiaomi+14+Civi", 
        specs: { 
            cpu: "Snapdragon 8s Gen 3", 
            ram: "8GB", 
            storage: "256GB / 512GB", 
            display: '6.55" 1.5K AMOLED (120Hz)',
            camera: "50MP + 12MP + 50MP",
            battery: "4,700mAh (67W)"
        } 
    },
    { 
        id: 'oneplus-12r',
        name: "OnePlus 12R", 
        brand: "OnePlus", 
        price: 39999, // Approx
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=OnePlus+12R", 
        specs: { 
            cpu: "Snapdragon 8 Gen 2", 
            ram: "8GB / 16GB", 
            storage: "128GB / 256GB", 
            display: '6.78" LTPO4 AMOLED (120Hz)',
            camera: "50MP + 8MP + 2MP",
            battery: "5,500mAh (100W)"
        } 
    },
    { 
        id: 'vivo-t4-ultra',
        name: "Vivo T4 Ultra", 
        brand: "Vivo", 
        price: 45000, // Estimated
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=Vivo+T4+Ultra", 
        specs: { 
            cpu: "Dimensity 9300+", 
            ram: "12GB", 
            storage: "256GB / 512GB", 
            display: '6.67" 1.5K AMOLED (120Hz)',
            camera: "50MP + 8MP + 50MP",
            battery: "5,500mAh (90W)"
        } 
    },
    { 
        id: 'oppo-reno-14',
        name: "Oppo Reno 14", 
        brand: "Oppo", 
        price: 40000, // Estimated
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=Reno+14", 
        specs: { 
            cpu: "Dimensity 8350", 
            ram: "8GB + 8GB Virtual", 
            storage: "256GB", 
            display: '6.59" AMOLED (120Hz)',
            camera: "50MP + 50MP + 8MP",
            battery: "6,000mAh (80W)"
        } 
    },
    { 
        id: 'realme-gt-7-pro',
        name: "Realme GT 7 Pro", 
        brand: "Realme", 
        price: 50000, // Estimated
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=GT+7+Pro", 
        specs: { 
            cpu: "Snapdragon 8 Elite", 
            ram: "12GB / 16GB", 
            storage: "256GB / 512GB", 
            display: '6.78" LTPO AMOLED (120Hz)',
            camera: "50MP + 8MP + 50MP",
            battery: "5,800mAh (120W)"
        } 
    },
    { 
        id: 'samsung-galaxy-s22-ultra',
        name: "Samsung Galaxy S22 Ultra", 
        brand: "Samsung", 
        price: 62999, 
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=S22+Ultra", 
        specs: { 
            cpu: "Snapdragon 8 Gen 1", 
            ram: "12GB", 
            storage: "256GB / 512GB", 
            display: '6.8" Dynamic AMOLED 2X',
            camera: "108MP Quad Camera",
            battery: "5,000mAh (45W)"
        } 
    },
    { 
        id: 'oneplus-12',
        name: "OnePlus 12", 
        brand: "OnePlus", 
        price: 64999, 
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=OnePlus+12", 
        specs: { 
            cpu: "Snapdragon 8 Gen 3", 
            ram: "12GB / 16GB", 
            storage: "256GB / 512GB", 
            display: '6.82" QHD+ LTPO4 AMOLED',
            camera: "50MP + 48MP + 64MP",
            battery: "5,400mAh (100W)"
        } 
    },
    { 
        id: 'apple-iphone-15',
        name: "Apple iPhone 15", 
        brand: "Apple", 
        price: 61400, 
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=iPhone+15", 
        specs: { 
            cpu: "Apple A16 Bionic", 
            ram: "6GB", 
            storage: "128GB / 256GB", 
            display: '6.1" Super Retina XDR',
            camera: "48MP + 12MP",
            battery: "3,349mAh (20W)"
        } 
    },
    { 
        id: 'vivo-x90-pro',
        name: "Vivo X90 Pro", 
        brand: "Vivo", 
        price: 49999, 
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=Vivo+X90+Pro", 
        specs: { 
            cpu: "Dimensity 9200", 
            ram: "12GB", 
            storage: "256GB", 
            display: '6.78" FHD+ AMOLED',
            camera: "50MP + 50MP + 12MP",
            battery: "4,870mAh"
        } 
    },
    { 
        id: 'google-pixel-8',
        name: "Google Pixel 8", 
        brand: "Google", 
        price: 43999, 
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=Pixel+8", 
        specs: { 
            cpu: "Google Tensor G3", 
            ram: "8GB", 
            storage: "128GB / 256GB", 
            display: '6.2" FHD+ OLED (120Hz)',
            camera: "50MP + 12MP",
            battery: "4,575mAh (27W)"
        } 
    },
    { 
        id: 'samsung-galaxy-s25-ultra',
        name: "Samsung Galaxy S25 Ultra", 
        brand: "Samsung", 
        price: 109990, 
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=S25+Ultra", 
        specs: { 
            cpu: "Snapdragon 8 Elite", 
            ram: "12GB", 
            storage: "256GB / 512GB", 
            display: '6.9" QHD+ Dynamic AMOLED',
            camera: "200MP Quad Camera",
            battery: "5,000mAh (45W)"
        } 
    },
    { 
        id: 'samsung-galaxy-s25',
        name: "Samsung Galaxy S25", 
        brand: "Samsung", 
        price: 80999, 
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=S25", 
        specs: { 
            cpu: "Exynos 2200", 
            ram: "12GB", 
            storage: "128GB / 256GB", 
            display: '6.2" FHD+ LTPO AMOLED',
            camera: "50MP + 12MP + 10MP",
            battery: "4,000mAh"
        } 
    },
    { 
        id: 'apple-iphone-16',
        name: "Apple iPhone 16", 
        brand: "Apple", 
        price: 70000, // Estimated
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=iPhone+16", 
        specs: { 
            cpu: "Apple A18 Bionic", 
            ram: "8GB", 
            storage: "128GB / 256GB", 
            display: '6.1" Super Retina XDR',
            camera: "48MP + 12MP",
            battery: "3,561mAh (20W)"
        } 
    },
    { 
        id: 'samsung-galaxy-s23-ultra',
        name: "Samsung Galaxy S23 Ultra", 
        brand: "Samsung", 
        price: 82000, // Approx
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=S23+Ultra", 
        specs: { 
            cpu: "Snapdragon 8 Gen 2", 
            ram: "12GB", 
            storage: "256GB / 512GB", 
            display: '6.8" QHD+ Dynamic AMOLED',
            camera: "200MP Quad Camera",
            battery: "5,000mAh (45W)"
        } 
    },
    { 
        id: 'apple-iphone-15-plus',
        name: "Apple iPhone 15 Plus", 
        brand: "Apple", 
        price: 70000, // Approx
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=iPhone+15+Plus", 
        specs: { 
            cpu: "Apple A16 Bionic", 
            ram: "6GB", 
            storage: "128GB / 256GB", 
            display: '6.7" Super Retina XDR',
            camera: "48MP + 12MP",
            battery: "4,383mAh (20W)"
        } 
    },
    { 
        id: 'asus-rog-phone-9',
        name: "Asus ROG Phone 9", 
        brand: "Asus", 
        price: 75000, // Estimated
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=ROG+Phone+9", 
        specs: { 
            cpu: "Snapdragon 8 Elite", 
            ram: "12GB / 16GB", 
            storage: "256GB / 512GB", 
            display: '6.78" AMOLED (185Hz)',
            camera: "50MP + 13MP + 5MP",
            battery: "5,800mAh"
        } 
    },
    { 
        id: 'vivo-x100-pro-plus',
        name: "Vivo X100 Pro+", 
        brand: "Vivo", 
        price: 80000, // Estimated
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=Vivo+X100+Pro+", 
        specs: { 
            cpu: "Snapdragon 8 Gen 3", 
            ram: "12GB", 
            storage: "256GB / 512GB", 
            display: '6.78" AMOLED (120Hz)',
            camera: "108MP Quad Camera",
            battery: "5,000mAh (120W)"
        } 
    },
    { 
        id: 'realme-gt-neo-7-pro',
        name: "Realme GT Neo 7 Pro", 
        brand: "Realme", 
        price: 60000, // Estimated
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=GT+Neo+7+Pro", 
        specs: { 
            cpu: "Snapdragon 8 Elite", 
            ram: "12GB / 16GB", 
            storage: "256GB / 512GB", 
            display: '6.78" LTPO AMOLED (120Hz)',
            camera: "50MP + 8MP + 50MP",
            battery: "5,800mAh (100W)"
        } 
    },
    { 
        id: 'samsung-galaxy-s25-5g',
        name: "Samsung Galaxy S25 5G", 
        brand: "Samsung", 
        price: 63997, 
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=S25+5G", 
        specs: { 
            cpu: "Snapdragon 8 Elite", 
            ram: "12GB", 
            storage: "128GB / 256GB", 
            display: '6.2" Dynamic LTPO AMOLED',
            camera: "50MP + 12MP + 10MP",
            battery: "4,000mAh (25W)"
        } 
    },
    { 
        id: 'oneplus-13s',
        name: "OnePlus 13s", 
        brand: "OnePlus", 
        price: 54999, 
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=OnePlus+13s", 
        specs: { 
            cpu: "Snapdragon 8 Elite", 
            ram: "12GB", 
            storage: "256GB / 512GB", 
            display: '6.32" LTPO AMOLED (120Hz)',
            camera: "50MP + 50MP",
            battery: "5,850mAh (80W)"
        } 
    },
    { 
        id: 'vivo-x200-pro',
        name: "Vivo X200 Pro", 
        brand: "Vivo", 
        price: 70000, // Estimated
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=Vivo+X200+Pro", 
        specs: { 
            cpu: "Dimensity 9400+", 
            ram: "16GB", 
            storage: "512GB", 
            display: '6.78" 1.5K LTPO AMOLED',
            camera: "50MP + 50MP + 12MP",
            battery: "6,000mAh (90W)"
        } 
    },
    { 
        id: 'iqoo-13-5g',
        name: "iQOO 13 5G", 
        brand: "iQOO", 
        price: 65000, // Estimated
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=iQOO+13", 
        specs: { 
            cpu: "Snapdragon 8 Gen 4", 
            ram: "16GB", 
            storage: "1TB", 
            display: '6.78" 2K AMOLED (144Hz)',
            camera: "50MP Triple Camera",
            battery: "Large (100W)"
        } 
    },
    { 
        id: 'samsung-galaxy-z-fold-7',
        name: "Samsung Galaxy Z Fold 7", 
        brand: "Samsung", 
        price: 174999, 
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=Z+Fold+7", 
        specs: { 
            cpu: "Snapdragon 8 Elite", 
            ram: "12GB", 
            storage: "256GB / 512GB", 
            display: '8.0" Foldable AMOLED',
            camera: "200MP + 12MP + 10MP",
            battery: "4,400mAh (25W)"
        } 
    },
    { 
        id: 'apple-iphone-16-pro-max',
        name: "Apple iPhone 16 Pro Max", 
        brand: "Apple", 
        price: 132900, 
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=iPhone+16+Pro+Max", 
        specs: { 
            cpu: "A18 Bionic", 
            ram: "8GB", 
            storage: "256GB / 512GB", 
            display: '6.7" Super Retina XDR',
            camera: "48MP + 48MP + 12MP",
            battery: "4,500mAh"
        } 
    },
    { 
        id: 'vivo-x-fold-5',
        name: "Vivo X Fold 5 5G", 
        brand: "Vivo", 
        price: 149999, 
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=X+Fold+5", 
        specs: { 
            cpu: "Snapdragon 8 Gen 3", 
            ram: "16GB", 
            storage: "512GB", 
            display: '8.03" Foldable',
            camera: "50MP Triple Camera",
            battery: "6,000mAh (80W)"
        } 
    },
    { 
        id: 'xiaomi-15-ultra',
        name: "Xiaomi 15 Ultra", 
        brand: "Xiaomi", 
        price: 109998, 
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=Xiaomi+15+Ultra", 
        specs: { 
            cpu: "Snapdragon 8 Elite", 
            ram: "16GB", 
            storage: "512GB", 
            display: '6.73" AMOLED (120Hz)',
            camera: "50MP Quad Camera",
            battery: "5,410mAh (90W)"
        } 
    },
    { 
        id: 'samsung-galaxy-z-flip-7',
        name: "Samsung Galaxy Z Flip7 5G", 
        brand: "Samsung", 
        price: 109999, 
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=Z+Flip+7", 
        specs: { 
            cpu: "Exynos 2500", 
            ram: "12GB", 
            storage: "512GB", 
            display: '6.7" Foldable AMOLED',
            camera: "50MP",
            battery: "Moderate"
        } 
    },
    { 
        id: 'oneplus-open',
        name: "OnePlus Open", 
        brand: "OnePlus", 
        price: 99999, 
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=OnePlus+Open", 
        specs: { 
            cpu: "Snapdragon 8 Gen 2", 
            ram: "16GB", 
            storage: "512GB", 
            display: '7.82" Foldable AMOLED',
            camera: "Triple Camera",
            battery: "4,805mAh (67W)"
        } 
    },
    { 
        id: 'nothing-phone-3',
        name: "Nothing Phone 3", 
        brand: "Nothing", 
        price: 92000, // Estimated
        img: "https://placehold.co/600x400/1a1a1a/ffffff?text=Nothing+Phone+3", 
        specs: { 
            cpu: "Snapdragon 8 Elite", 
            ram: "12GB", 
            storage: "512GB", 
            display: '6.77" AMOLED (120Hz)',
            camera: "50MP Triple Camera",
            battery: "5,000mAh"
        } 
    }
];
