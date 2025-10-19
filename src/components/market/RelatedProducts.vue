<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

conconst { t } = useI18n()
const products = ref([
  {
    id: "653a14c7a05a1ab3a7d71541",
    name: "iPhone 15 Pro Max MagSafe Compatible Crystal Clear Case EX1027",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2024-11/81b84dc8-9b64-4053-8305-ac08b1b577c2_output.png?format=webp",
    href: "/product/iphone-15-pro-max-magsafe-compatible-crystal-clear-case-ex1027/653a14c7a05a1ab3a7d71541?mpLevel=mp+category",
    rating: null,
    ratingCount: 0,
  },
  {
    id: "66c761d1f168b6de215e086a",
    name: "Apple Type C Wired Earpods",
    price: "109 QR",
    img: "https://images.snoonu.com/brand_product/2024-11/e054c106-7add-403f-913d-c59de96a3adc_output.png?format=webp",
    href: "/product/apple-type-c-wired-earpods/66c761d1f168b6de215e086a?mpLevel=mp+category",
    rating: 4.7,
    ratingCount: 192,
  },
  {
    id: "66dafcf17409355ca225195e",
    name: "Sony PlayStation Portal Remote Player For PlayStation 5",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2025-07/a0dfdfe0-f74c-4c9d-a240-ce0be7f03f06_output.png?format=webp",
    href: "/product/sony-playstation-portal-remote-player-for-playstation-5/66dafcf17409355ca225195e?mpLevel=mp+category",
    rating: 5,
    ratingCount: 3,
  },
  {
    id: "66ec290e807841bb3eb72079",
    name: "Apple iPhone 16 Pro 128GB - Desert Titanium",
    price: "4349 QR",
    img: "https://images.snoonu.com/brand_product/2025-03/8052cede-fa86-4c20-97b8-f6659e52b31c_output.png?format=webp",
    href: "/product/apple-iphone-16-pro-128gb---desert-titanium/66ec290e807841bb3eb72079?mpLevel=mp+category",
    rating: 5,
    ratingCount: 7,
  },
  {
    id: "66ed8fb32c6abae9ea0a59dc",
    name: "Apple iPhone 16 Pro Max 512GB - Desert Titanium",
    price: "5499 QR",
    img: "https://images.snoonu.com/brand_product/2025-03/72f6ae00-9741-4dc3-b8d7-0a95d3e49547_output.png?format=webp",
    href: "/product/apple-iphone-16-pro-max-512gb---desert-titanium/66ed8fb32c6abae9ea0a59dc?mpLevel=mp+category",
    rating: 5,
    ratingCount: 10,
  },
  {
    id: "61703460f20d64b40ff10300",
    name: "Apple iPhone 13 128GB - Midnight",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2024-08/1c13ca64-e0b6-4743-820e-8ecbec2a0a55_output.png?format=webp",
    href: "/product/apple-iphone-13-128gb---midnight/61703460f20d64b40ff10300?mpLevel=mp+category",
    rating: 5,
    ratingCount: 9,
  },
  {
    id: "66c761d1f168b6de215e0869",
    name: "Apple Lightning Wired Earpods",
    price: "109 QR",
    img: "https://images.snoonu.com/brand_product/2025-08/15501e40-2e73-4031-bdf7-0ba6e0db5c3b_output.png?format=webp",
    href: "/product/apple-lightning-wired-earpods/66c761d1f168b6de215e0869?mpLevel=mp+category",
    rating: 4.7,
    ratingCount: 168,
  },
  {
    id: "672cb4262c27f2e7b2da6265",
    name: "Sony PlayStation 5 Pro Digital Console",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2025-04/6d8fbd8d-4278-48f5-8e12-f6852fd59e82_output.png?format=webp",
    href: "/product/sony-playstation-5-pro-digital-console/672cb4262c27f2e7b2da6265?mpLevel=mp+category",
    rating: 5,
    ratingCount: 2,
  },
  {
    id: "63032e773a271863018e39ea",
    name: "PlayStation Gift Card 10 USD - Qatar (Valid For Qatar Account)",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2024-09/ba3ffa8c-71d4-4e9b-9745-3650b98fe58f_output.png?format=webp",
    href: "/product/playstation-gift-card-10-usd---qatar/63032e773a271863018e39ea?mpLevel=mp+category",
    rating: 4.6,
    ratingCount: 67,
  },
  {
    id: "63032e773a271863018e3a2d",
    name: "PlayStation Gift Card 50 USD - Qatar (Valid For Qatar Account)",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2024-09/980f9198-bad8-4c6a-be03-66955d5ca04e_output.png?format=webp",
    href: "/product/playstation-gift-card-50-usd---qatar/63032e773a271863018e3a2d?mpLevel=mp+category",
    rating: 4.6,
    ratingCount: 44,
  },
  {
    id: "6680045322355445b9c715d9",
    name: "Huawei Pura 70 Ultra 16GB 512GB - Black",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2025-04/f1ae70cd-7b9a-42b3-a797-f7c6bdcaea3d_output.png?format=webp",
    href: "/product/huawei-pura-70-ultra-16gb-512gb---black/6680045322355445b9c715d9?mpLevel=mp+category",
    rating: null,
    ratingCount: 5,
  },
  {
    id: "63032e773a271863018e39ed",
    name: "PlayStation Gift Card 10 USD - USA (Valid For USA Account)",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2024-09/dd08c85a-d602-49f7-a2d8-b621d006ad42_output.png?format=webp",
    href: "/product/playstation-gift-card-10-usd---usa/63032e773a271863018e39ed?mpLevel=mp+category",
    rating: 4.7,
    ratingCount: 51,
  },
  {
    id: "667fc0b27c1e761393f7711e",
    name: "Cartier - phone",
    price: "null QR",
    img: "https://images.snoonu.com/product/2024-11/5e3eca1b-c116-48d5-9291-a5089ebfed5e_newcartier.jpg?format=webp",
    href: "/product/cartier---phone/667fc0b27c1e761393f7711e?mpLevel=mp+category",
    rating: 5,
    ratingCount: 3,
  },
  {
    id: "630b8c0c8a7cae61f3242cb3",
    name: "PlayStation Gift Card 10 USD - Qatar",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2024-09/7c656963-cfc1-4513-9d5b-f2f892fbacd7_output.png?format=webp",
    href: "/product/playstation-gift-card-10-usd---qatar/630b8c0c8a7cae61f3242cb3?mpLevel=mp+category",
    rating: 4.5,
    ratingCount: 30,
  },
  {
    id: "63ee586ce3315110c4c9869d",
    name: "Fortnite Pc 13500 V-Bucks Card (Usa)",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2025-04/9994d30f-6b2d-4023-83d2-81d6cb757197_output.png?format=webp",
    href: "/product/fortnite-pc-13500-v-bucks-card/63ee586ce3315110c4c9869d?mpLevel=mp+category",
    rating: 5,
    ratingCount: 4,
  },
  {
    id: "63032f6f875e63435398e3b2",
    name: "Nintendo Switch OLED - Blue & Red",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2024-09/03c8053b-db8b-408a-8195-aeedfd31433c_output.png?format=webp",
    href: "/product/nintendo-switch-oled---blue-and-red/63032f6f875e63435398e3b2?mpLevel=mp+category",
    rating: 5,
    ratingCount: 5,
  },
  {
    id: "6534c7d24d0ef7dca685df93",
    name: "Apple Original Earpods With Usb-C Connector",
    price: "84 QR",
    img: "https://images.snoonu.com/brand_product/2024-11/bc41206b-aa32-49d3-88a2-5e8f1ddd0ce1_output.png?format=webp",
    href: "/product/apple-original-earpods-with-usb-c-connector/6534c7d24d0ef7dca685df93?mpLevel=mp+category",
    rating: 4.8,
    ratingCount: 67,
  },
  {
    id: "6810c63c8f1b250ae542582b",
    name: "SONY PS5 CONSOLE DIGITAL",
    price: "null QR",
    img: "https://images.snoonu.com/product/2025-4/0b982732-5c51-419d-ab5c-adcd192da7d5_digi.JPG?format=webp",
    href: "/product/sony-ps5-console-digital/6810c63c8f1b250ae542582b?mpLevel=mp+category",
    rating: 5,
    ratingCount: 1,
  },
  {
    id: "66ec290f807841bb3eb7209a",
    name: "iPhone 16 Pro - Desert Titanium - 512GB",
    price: "5999 QR",
    img: "https://images.snoonu.com/brand_product/2025-03/b0d89cbd-e02f-4d71-b19a-48ececb4fae8_output.png?format=webp",
    href: "/product/iphone-16-pro---desert-titanium---512gb/66ec290f807841bb3eb7209a?mpLevel=mp+category",
    rating: 5,
    ratingCount: 4,
  },
  {
    id: "66527892d1610440b9d14e30",
    name: "Sony Playstation 5 Dualsense Wireless Controller - White",
    price: "369 QR",
    img: "https://images.snoonu.com/brand_product/2024-09/3fda706c-4961-4ad4-80f0-08ae06354eea_output.png?format=webp",
    href: "/product/sony-playstation-5-dualsense-wireless-controller---white/66527892d1610440b9d14e30?mpLevel=mp+category",
    rating: 4.9,
    ratingCount: 21,
  },
  {
    id: "63032e773a271863018e39f2",
    name: "PlayStation Gift Card 100 USD - Qatar (Valid For Qatar Account)",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2024-09/12793996-579c-4b3f-a6b7-1b6ed8a4116a_output.png?format=webp",
    href: "/product/playstation-gift-card-100-usd---qatar/63032e773a271863018e39f2?mpLevel=mp+category",
    rating: 4.6,
    ratingCount: 14,
  },
  {
    id: "674c9da63231df554179d198",
    name: "Anker A3949 Soundcore R50I",
    price: "239 QR",
    img: "https://images.snoonu.com/brand_product/2025-04/51a3d746-0844-4c20-ab9b-ab290e222944_output.png?format=webp",
    href: "/product/anker-a3949-soundcore-r50i/674c9da63231df554179d198?mpLevel=mp+category",
    rating: 4.4,
    ratingCount: 14,
  },
  {
    id: "67359e92654a51e2f0b3a663",
    name: "Apple iPhone 16 - Black - 128GB",
    price: "3199 QR",
    img: "https://images.snoonu.com/brand_product/2025-08/4885cd4c-2bf1-4e89-9dc1-d6eeb07241a1_output.png?format=webp",
    href: "/product/apple-iphone-16---black---128gb/67359e92654a51e2f0b3a663?mpLevel=mp+category",
    rating: 4.9,
    ratingCount: 12,
  },
  {
    id: "679743d9925841908e90896d",
    name: "Samsung Galaxy S25 Ultra 256GB ROM 12GB RAM Smartphone - Titanium Whitesilver",
    price: "5499 QR",
    img: "https://images.snoonu.com/brand_product/2025-06/4e303b52-7cff-4c60-8c0a-383c11a78c41_output.png?format=webp",
    href: "/product/samsung-galaxy-s25-ultra-256gb-rom-12gb-ram-smartphone---titanium-whitesilver/679743d9925841908e90896d?mpLevel=mp+category",
    rating: 5,
    ratingCount: 1,
  },
  {
    id: "67289ae5773f7100d93af7b7",
    name: "PlayStation PS5 Pro Digital Console",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2024-12/2b81f364-3689-47c5-b9b2-af0a73e493fd_output.png?format=webp",
    href: "/product/playstation-ps5-pro-digital-console/67289ae5773f7100d93af7b7?mpLevel=mp+category",
    rating: 4.3,
    ratingCount: 3,
  },
  {
    id: "6758548b3829cd69cb69d900",
    name: "Samsung Galaxy S24Fe 5G 256Gb Graphite",
    price: "2689 QR",
    img: "https://images.snoonu.com/images/12d74920-129b-4e67-8b48-f469aab20f57_MSSHPS721B25GP_1.jpg?format=webp",
    href: "/product/samsung-galaxy-s24fe-5g-256gb-graphite/6758548b3829cd69cb69d900?mpLevel=mp+category",
    rating: 5,
    ratingCount: 1,
  },
  {
    id: "655c9c127d3e433bac2954d8",
    name: "Cronus Zen",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2024-09/ff04fff7-4560-4c68-bcfc-2139e89d02f1_output.png?format=webp",
    href: "/product/cronus-zen/655c9c127d3e433bac2954d8?mpLevel=mp+category",
    rating: 3.7,
    ratingCount: 3,
  },
  {
    id: "67359e92654a51e2f0b3a668",
    name: "Apple iPhone 16 Pro 256GB - Natural Titanium",
    price: "4799 QR",
    img: "https://images.snoonu.com/brand_product/2024-11/961b9b9f-7477-451f-a857-32bcc72e387d_output.png?format=webp",
    href: "/product/apple-iphone-16-pro-256gb---natural-titanium/67359e92654a51e2f0b3a668?mpLevel=mp+category",
    rating: 4.6,
    ratingCount: 18,
  },
  {
    id: "678a6dd06c3fb2f7a3944b0e",
    name: "Wonderchef Digital Airfryer 4.5Ltr",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2025-01/72983934-452f-477d-9a10-7c4f89e45356_output.png?format=webp",
    href: "/product/wonderchef-digital-airfryer-45ltr/678a6dd06c3fb2f7a3944b0e?mpLevel=mp+category",
    rating: null,
    ratingCount: 0,
  },
  {
    id: "67b2666b6858303ad1b33f1c",
    name: "Bukhooor Rotational Incense Burner - Black Sr",
    price: "169 QR",
    img: "https://images.snoonu.com/brand_product/2025-02/6f538c9e-3462-4c9c-b525-67b9552bdfcc_output.png?format=webp",
    href: "/product/bukhooor-rotational-incense-burner---black-sr/67b2666b6858303ad1b33f1c?mpLevel=mp+category",
    rating: 5,
    ratingCount: 1,
  },
  {
    id: "67359e92654a51e2f0b3a665",
    name: "Apple iPhone 16 - Pink - 128GB",
    price: "3199 QR",
    img: "https://images.snoonu.com/brand_product/2025-06/56b15043-63fc-4581-adfa-9c69165ef00c_output.png?format=webp",
    href: "/product/apple-iphone-16---pink---128gb/67359e92654a51e2f0b3a665?mpLevel=mp+category",
    rating: 5,
    ratingCount: 5,
  },
  {
    id: "6759a4ab2b235fe9cace1fee",
    name: "Apple USB-C Airpods Max - Blue - USB-C",
    price: "2249 QR",
    img: "https://images.snoonu.com/brand_product/2025-06/c6f0dc26-44e7-455d-b49e-8b689b435250_output.png?format=webp",
    href: "/product/apple-usb-c-airpods-max---blue---usb-c/6759a4ab2b235fe9cace1fee?mpLevel=mp+category",
    rating: null,
    ratingCount: 0,
  },
  {
    id: "674de5265a593c2ea1dfa7c8",
    name: "Quidditch Champions Ps5",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2025-04/00ef42c4-8568-4787-be47-612ce3834f79_output.png?format=webp",
    href: "/product/quidditch-champions-ps5/674de5265a593c2ea1dfa7c8?mpLevel=mp+category",
    rating: 5,
    ratingCount: 2,
  },
  {
    id: "671d60caf232624e52d87b47",
    name: "Oculus Meta Quest 3S Virtual Reality Headset 128Gb",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2025-07/c9efc695-2ca8-4a18-9736-11b0ec94dfbe_output.png?format=webp",
    href: "/product/oculus-meta-quest-3s-virtual-reality-headset-128gb/671d60caf232624e52d87b47?mpLevel=mp+category",
    rating: 5,
    ratingCount: 8,
  },
  {
    id: "6759a4ab2b235fe9cace1fe9",
    name: "Apple Airpods 4 with Active Noise Cancellation",
    price: "799 QR",
    img: "https://images.snoonu.com/brand_product/2025-06/25196dc5-1de2-4c61-9cbe-f27452dae654_output.png?format=webp",
    href: "/product/apple-airpods-4-with-active-noise-cancellation/6759a4ab2b235fe9cace1fe9?mpLevel=mp+category",
    rating: 4.5,
    ratingCount: 28,
  },
  {
    id: "63032e773a271863018e3a30",
    name: "PlayStation Gift Card 50 USD - USA (Valid For USA Account)",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2024-09/8f303572-781d-4252-8ff2-d8feeb36051e_output.png?format=webp",
    href: "/product/playstation-gift-card-50-usd---usa/63032e773a271863018e3a30?mpLevel=mp+category",
    rating: 4.8,
    ratingCount: 28,
  },
  {
    id: "66d7f5958f4cd5486264f5e4",
    name: "Samsung Galaxy S24 Ultra, 5G, 256Gb, Gray",
    price: "5149 QR",
    img: "https://images.snoonu.com/images/8b481d8b-c5e9-4c82-a980-207c6a95ff70_MSSHPS928B25G.jpg?format=webp",
    href: "/product/samsung-galaxy-s24-ultra-5g-256gb-gray/66d7f5958f4cd5486264f5e4?mpLevel=mp+category",
    rating: 5,
    ratingCount: 2,
  },
  {
    id: "63032e773a271863018e39cd",
    name: "Apple iTunes Gift Card 50 USD - USA (Valid For USA Account)",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2024-09/58aa1ae3-f0a7-4699-b9f3-13c113722070_output.png?format=webp",
    href: "/product/apple-itunes-gift-card-50-usd---usa/63032e773a271863018e39cd?mpLevel=mp+category",
    rating: 4.7,
    ratingCount: 43,
  },
  {
    id: "65575e29d167b177f6fc1ed9",
    name: "Fujifilm Instax Mini Film Sheets 10Pcs",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2024-11/f1ba4378-f451-45b0-bd22-ca1e4927b141_output.png?format=webp",
    href: "/product/fujifilm-instax-mini-film-sheets-10pcs/65575e29d167b177f6fc1ed9?mpLevel=mp+category",
    rating: 4.7,
    ratingCount: 65,
  },
  {
    id: "66c761d1f168b6de215e085b",
    name: "Apple USB-C to Lightning Cable - 1m (old)",
    price: "109 QR",
    img: "https://images.snoonu.com/brand_product/2025-08/3034b6ba-a9a1-4642-a707-7e601245db77_output.png?format=webp",
    href: "/product/apple-usb-c-to-lightning-cable---1m/66c761d1f168b6de215e085b?mpLevel=mp+category",
    rating: 4.6,
    ratingCount: 40,
  },
  {
    id: "63032e773a271863018e3a0a",
    name: "PlayStation Gift Card 25 USD - USA (Valid For USA Account)",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2024-09/fe6ffe8a-1285-4176-92a0-98871194a54e_output.png?format=webp",
    href: "/product/playstation-gift-card-25-usd---usa/63032e773a271863018e3a0a?mpLevel=mp+category",
    rating: 4.4,
    ratingCount: 16,
  },
  {
    id: "64c24843892fc08037ac80cb",
    name: "PlayStation Gift Card 200 USD - Qatar (Valid For Qatar Account)",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2024-09/06b2b639-d804-4568-9a11-2bc97144c308_output.png?format=webp",
    href: "/product/playstation-gift-card-200-usd---qatar/64c24843892fc08037ac80cb?mpLevel=mp+category",
    rating: 5,
    ratingCount: 3,
  },
  {
    id: "6759a4ab2b235fe9cace1fea",
    name: "Apple USB-C Airpods Max - Midnight - USB-C",
    price: "2249 QR",
    img: "https://images.snoonu.com/brand_product/2025-06/0053f4f4-01f1-469d-9abb-cba747cc7e3d_output.png?format=webp",
    href: "/product/apple-usb-c-airpods-max---midnight---usb-c/6759a4ab2b235fe9cace1fea?mpLevel=mp+category",
    rating: 5,
    ratingCount: 7,
  },
  {
    id: "631f0c8ad66b36e3defd80c4",
    name: "PlayStation Gift Card 10 USD - USA",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2024-09/a36c4420-1022-4862-8fe7-6e35835e1f1d_output.png?format=webp",
    href: "/product/playstation-gift-card-10-usd---usa/631f0c8ad66b36e3defd80c4?mpLevel=mp+category",
    rating: 4.7,
    ratingCount: 26,
  },
  {
    id: "65cf9401d83c249b6ebbdf5f",
    name: "PS5 Access Controller",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2024-11/9728153a-2055-4373-8988-fa610f0ba7db_output.png?format=webp",
    href: "/product/ps5-access-controller/65cf9401d83c249b6ebbdf5f?mpLevel=mp+category",
    rating: null,
    ratingCount: 0,
  },
  {
    id: "645bf19a40797a53ce36f874",
    name: "PlayStation Network Card $100 (Qatar)",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2024-09/4349ec92-92ee-4f93-9991-162ac4cdaa24_output.png?format=webp",
    href: "/product/playstation-network-card-100/645bf19a40797a53ce36f874?mpLevel=mp+category",
    rating: null,
    ratingCount: 0,
  },
  {
    id: "64a4681f344e3be1e997653a",
    name: "Ooredoo Flexi Qar 200",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2025-04/9fdf2e89-a786-4215-997c-a60d17037bc3_output.png?format=webp",
    href: "/product/ooredoo-flexi-qar-200/64a4681f344e3be1e997653a?mpLevel=mp+category",
    rating: 5,
    ratingCount: 1,
  },
  {
    id: "63032e773a271863018e39bf",
    name: "Apple iTunes Gift Card 15 USD - USA",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2024-09/b5d2b977-2f03-452a-bbdc-80668b88201c_output.png?format=webp",
    href: "/product/apple-itunes-gift-card-15-usd---usa/63032e773a271863018e39bf?mpLevel=mp+category",
    rating: 4.5,
    ratingCount: 29,
  },
  {
    id: "634ff4cc742c4306cabfe0b0",
    name: "Steam Gift Card 100 QAR - Qatar",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2024-09/e0778850-5893-4661-a6d6-37b3e31a8598_output.png?format=webp",
    href: "/product/steam-gift-card-100-qar---qatar/634ff4cc742c4306cabfe0b0?mpLevel=mp+category",
    rating: 4.9,
    ratingCount: 18,
  },
  {
    id: "688f7c8d735f3b214896341d",
    name: "Ray-Ban Wayfarer Smart Glasses RW4006, Shiny Black, G-15 Green",
    price: "1999 QR",
    img: "https://images.snoonu.com/brand_product/2025-08/2e911e66-760d-4511-b28f-3d55d5308d72_output.png?format=webp",
    href: "/product/ray-ban-wayfarer-smart-glasses-rw4006-shiny-black-g-15-green/688f7c8d735f3b214896341d?mpLevel=mp+category",
    rating: 5,
    ratingCount: 1,
  },
  {
    id: "67c96dac5d29fc324ec6b1c7",
    name: "Al Shabah smart choice Flying Insects Killer 3800V -White",
    price: "null QR",
    img: "https://images.snoonu.com/product/2025-3/2718bd8c-5538-4287-b6d1-f4633f4a75cb_AlShabahsmartchoiceFlyingInsectsKiller3800VWhite.jpeg?format=webp",
    href: "/product/al-shabah-smart-choice-flying-insects-killer-3800v--white/67c96dac5d29fc324ec6b1c7?mpLevel=mp+category",
    rating: 4,
    ratingCount: 26,
  },
  {
    id: "678a6dd06c3fb2f7a3944b08",
    name: "Wonderchef Crimson Edge Sanjiv Kapur Tandoor Family Size",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2025-02/03d627d6-acd9-46a0-b2a8-f8f40e25259b_output.png?format=webp",
    href: "/product/wonderchef-crimson-edge-sanjiv-kapur-tandoor-family-size/678a6dd06c3fb2f7a3944b08?mpLevel=mp+category",
    rating: null,
    ratingCount: 0,
  },
  {
    id: "630b8dcfed2b5b02ca282da7",
    name: "PlayStation Gift Card 20 USD - Qatar",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2024-09/58830c39-d03a-43de-88df-196c7f40d56f_output.png?format=webp",
    href: "/product/playstation-gift-card-20-usd---qatar/630b8dcfed2b5b02ca282da7?mpLevel=mp+category",
    rating: 4.6,
    ratingCount: 26,
  },
  {
    id: "67b5d2dab73c7c0029dceb4c",
    name: "Apple Airtag",
    price: "139 QR",
    img: "https://images.snoonu.com/brand_product/2025-02/fbdf9788-edc3-4ec8-9be6-7ec8f4c246fb_output.png?format=webp",
    href: "/product/apple-airtag/67b5d2dab73c7c0029dceb4c?mpLevel=mp+category",
    rating: 4.6,
    ratingCount: 24,
  },
  {
    id: "678766d0517a46e2ac828dac",
    name: "آبل آيباد إير 2024 بمعالج ام 2 وواي فاي و128 جيجابايت، مقاس 13 إنش - أزرق",
    price: "2999 QR",
    img: "https://images.snoonu.com/brand_product/2025-08/ad60346b-3e95-4aa8-a562-a8e0cecc35e7_output.png?format=webp",
    href: "/product/آبل-آيباد-إير-2024-بمعالج-ام-2-وواي-فاي-و128-جيجابايت-مقاس-13-إنش---أزرق/678766d0517a46e2ac828dac?mpLevel=mp+category",
    rating: 5,
    ratingCount: 1,
  },
  {
    id: "672a17e4135ed5b04d3a8eff",
    name: "PlayStation 5 DualSense Wireless Controller -CHROMA INDIGO",
    price: "null QR",
    img: "https://images.snoonu.com/brand_product/2025-04/bde06c25-5615-44bf-8d87-e3d4fe14f2f0_output.png?format=webp",
    href: "/product/playstation-5-dualsense-wireless-controller--chroma-indigo/672a17e4135ed5b04d3a8eff?mpLevel=mp+category",
    rating: 5,
    ratingCount: 4,
  },
]);
</script>

<template>
  <div class="MarketPlaceBlocks_wrapper MarketPlaceBlocks_withFilters">
    <form class="MarketplaceFilters_wrapper">
      <div class="PriceRangeFilter_group">
        <div class="PriceRangeFilter_header">
          <h5 class="Typography_h5">Price, QR</h5>
        </div>
        <div class="PriceRangeFilter_inputContainer">
          <div class="FloatingInput_control">
            <label> <p class="Typography_p9">Min</p> </label
            ><input
              type="text"
              placeholder="0"
              inputmode="numeric"
              name="minPrice"
              value=""
            />
          </div>
          <div class="FloatingInput_control">
            <label> <p class="Typography_p9">Max</p> </label
            ><input
              type="text"
              placeholder="210805"
              inputmode="numeric"
              name="maxPrice"
              value=""
            />
          </div>
        </div>
      </div>
      <div class="TagFilters_group__8E_A4">
        <div class="TagFilters_header">
          <h5 class="Typography_h5">Product Types</h5>
          <span
            data-test-id=""
            class="Icon_iconWrapper TagFilters_arrowIcon TagFilters_reverseIcon"
            ><svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="Icon_icon"
            >
              <path
                d="m12 13.232-6-6L4.232 9 12 16.768 19.768 9 18 7.232l-6 6Z"
                fill="currentColor"
              ></path></svg
          ></span>
        </div>
        <div class="Accordion_module_content">
          <div>
            <div class="TagFilters_list">
              <label for="152" class="TagFilters_filterItem">
                <div class="Checkbox_wrapper">
                  <input
                    id="152"
                    class="Checkbox_checkbox"
                    type="checkbox"
                    data-analytic-label="filterItem"
                    data-analytic-event-content="152"
                    name="152"
                    value="152"
                  /><span data-test-id="" class="Icon_iconWrapper Checkbox_icon"
                    ><svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="Icon_icon"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.673 5.348 7.5 15.521l-5.172-5.173L3.506 9.17 7.5 13.164l8.994-8.994 1.179 1.178Z"
                        fill="currentColor"
                      ></path></svg
                  ></span>
                </div>
                <p class="Typography_p7">Monitors</p> </label
              ><label for="107" class="TagFilters_filterItem">
                <div class="Checkbox_wrapper">
                  <input
                    id="107"
                    class="Checkbox_checkbox"
                    type="checkbox"
                    data-analytic-label="filterItem"
                    data-analytic-event-content="107"
                    name="107"
                    value="107"
                  /><span data-test-id="" class="Icon_iconWrapper Checkbox_icon"
                    ><svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="Icon_icon"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.673 5.348 7.5 15.521l-5.172-5.173L3.506 9.17 7.5 13.164l8.994-8.994 1.179 1.178Z"
                        fill="currentColor"
                      ></path></svg
                  ></span>
                </div>
                <p class="Typography_p7">Mouse</p> </label
              ><label for="90" class="TagFilters_filterItem">
                <div class="Checkbox_wrapper">
                  <input
                    id="90"
                    class="Checkbox_checkbox"
                    type="checkbox"
                    data-analytic-label="filterItem"
                    data-analytic-event-content="90"
                    name="90"
                    value="90"
                  /><span data-test-id="" class="Icon_iconWrapper Checkbox_icon"
                    ><svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="Icon_icon"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.673 5.348 7.5 15.521l-5.172-5.173L3.506 9.17 7.5 13.164l8.994-8.994 1.179 1.178Z"
                        fill="currentColor"
                      ></path></svg
                  ></span>
                </div>
                <p class="Typography_p7">Adapters</p> </label
              ><label for="163" class="TagFilters_filterItem">
                <div class="Checkbox_wrapper">
                  <input
                    id="163"
                    class="Checkbox_checkbox"
                    type="checkbox"
                    data-analytic-label="filterItem"
                    data-analytic-event-content="163"
                    name="163"
                    value="163"
                  /><span data-test-id="" class="Icon_iconWrapper Checkbox_icon"
                    ><svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="Icon_icon"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.673 5.348 7.5 15.521l-5.172-5.173L3.506 9.17 7.5 13.164l8.994-8.994 1.179 1.178Z"
                        fill="currentColor"
                      ></path></svg
                  ></span>
                </div>
                <p class="Typography_p7">Chargers</p> </label
              ><label for="158" class="TagFilters_filterItem">
                <div class="Checkbox_wrapper">
                  <input
                    id="158"
                    class="Checkbox_checkbox"
                    type="checkbox"
                    data-analytic-label="filterItem"
                    data-analytic-event-content="158"
                    name="158"
                    value="158"
                  /><span data-test-id="" class="Icon_iconWrapper Checkbox_icon"
                    ><svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="Icon_icon"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.673 5.348 7.5 15.521l-5.172-5.173L3.506 9.17 7.5 13.164l8.994-8.994 1.179 1.178Z"
                        fill="currentColor"
                      ></path></svg
                  ></span>
                </div>
                <p class="Typography_p7">Portable Speakers</p>
              </label>
            </div>
          </div>
          <p class="Typography_p6 TagFilters_seeMore">See more</p>
        </div>
      </div>
      <div class="TagFilters_group__8E_A4">
        <div class="TagFilters_header">
          <h5 class="Typography_h5">Specifications</h5>
          <span
            data-test-id=""
            class="Icon_iconWrapper TagFilters_arrowIcon TagFilters_reverseIcon"
            ><svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="Icon_icon"
            >
              <path
                d="m12 13.232-6-6L4.232 9 12 16.768 19.768 9 18 7.232l-6 6Z"
                fill="currentColor"
              ></path></svg
          ></span>
        </div>
        <div class="Accordion_module_content">
          <div>
            <div class="TagFilters_list">
              <label for="71" class="TagFilters_filterItem">
                <div class="Checkbox_wrapper">
                  <input
                    id="71"
                    class="Checkbox_checkbox"
                    type="checkbox"
                    data-analytic-label="filterItem"
                    data-analytic-event-content="71"
                    name="71"
                    value="71"
                  /><span data-test-id="" class="Icon_iconWrapper Checkbox_icon"
                    ><svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="Icon_icon"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.673 5.348 7.5 15.521l-5.172-5.173L3.506 9.17 7.5 13.164l8.994-8.994 1.179 1.178Z"
                        fill="currentColor"
                      ></path></svg
                  ></span>
                </div>
                <p class="Typography_p7">Pro Max</p> </label
              ><label for="68" class="TagFilters_filterItem">
                <div class="Checkbox_wrapper">
                  <input
                    id="68"
                    class="Checkbox_checkbox"
                    type="checkbox"
                    data-analytic-label="filterItem"
                    data-analytic-event-content="68"
                    name="68"
                    value="68"
                  /><span data-test-id="" class="Icon_iconWrapper Checkbox_icon"
                    ><svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="Icon_icon"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.673 5.348 7.5 15.521l-5.172-5.173L3.506 9.17 7.5 13.164l8.994-8.994 1.179 1.178Z"
                        fill="currentColor"
                      ></path></svg
                  ></span>
                </div>
                <p class="Typography_p7">1 TB</p> </label
              ><label for="70" class="TagFilters_filterItem">
                <div class="Checkbox_wrapper">
                  <input
                    id="70"
                    class="Checkbox_checkbox"
                    type="checkbox"
                    data-analytic-label="filterItem"
                    data-analytic-event-content="70"
                    name="70"
                    value="70"
                  /><span data-test-id="" class="Icon_iconWrapper Checkbox_icon"
                    ><svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="Icon_icon"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.673 5.348 7.5 15.521l-5.172-5.173L3.506 9.17 7.5 13.164l8.994-8.994 1.179 1.178Z"
                        fill="currentColor"
                      ></path></svg
                  ></span>
                </div>
                <p class="Typography_p7">Pro</p> </label
              ><label for="69" class="TagFilters_filterItem">
                <div class="Checkbox_wrapper">
                  <input
                    id="69"
                    class="Checkbox_checkbox"
                    type="checkbox"
                    data-analytic-label="filterItem"
                    data-analytic-event-content="69"
                    name="69"
                    value="69"
                  /><span data-test-id="" class="Icon_iconWrapper Checkbox_icon"
                    ><svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="Icon_icon"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.673 5.348 7.5 15.521l-5.172-5.173L3.506 9.17 7.5 13.164l8.994-8.994 1.179 1.178Z"
                        fill="currentColor"
                      ></path></svg
                  ></span>
                </div>
                <p class="Typography_p7">Dual Sim</p> </label
              ><label for="65" class="TagFilters_filterItem">
                <div class="Checkbox_wrapper">
                  <input
                    id="65"
                    class="Checkbox_checkbox"
                    type="checkbox"
                    data-analytic-label="filterItem"
                    data-analytic-event-content="65"
                    name="65"
                    value="65"
                  /><span data-test-id="" class="Icon_iconWrapper Checkbox_icon"
                    ><svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="Icon_icon"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.673 5.348 7.5 15.521l-5.172-5.173L3.506 9.17 7.5 13.164l8.994-8.994 1.179 1.178Z"
                        fill="currentColor"
                      ></path></svg
                  ></span>
                </div>
                <p class="Typography_p7">128GB</p>
              </label>
            </div>
          </div>
          <p class="Typography_p6 TagFilters_seeMore">See more</p>
        </div>
      </div>
      <div class="TagFilters_group__8E_A4">
        <div class="TagFilters_header">
          <h5 class="Typography_h5">Brands</h5>
          <span
            data-test-id=""
            class="Icon_iconWrapper TagFilters_arrowIcon TagFilters_reverseIcon"
            ><svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="Icon_icon"
            >
              <path
                d="m12 13.232-6-6L4.232 9 12 16.768 19.768 9 18 7.232l-6 6Z"
                fill="currentColor"
              ></path></svg
          ></span>
        </div>
        <div class="Accordion_module_content">
          <div>
            <div class="TagFilters_list">
              <label for="1" class="TagFilters_filterItem">
                <div class="Checkbox_wrapper">
                  <input
                    id="1"
                    class="Checkbox_checkbox"
                    type="checkbox"
                    data-analytic-label="filterItem"
                    data-analytic-event-content="1"
                    name="1"
                    value="1"
                  /><span data-test-id="" class="Icon_iconWrapper Checkbox_icon"
                    ><svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="Icon_icon"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.673 5.348 7.5 15.521l-5.172-5.173L3.506 9.17 7.5 13.164l8.994-8.994 1.179 1.178Z"
                        fill="currentColor"
                      ></path></svg
                  ></span>
                </div>
                <p class="Typography_p7">Apple</p> </label
              ><label for="2" class="TagFilters_filterItem">
                <div class="Checkbox_wrapper">
                  <input
                    id="2"
                    class="Checkbox_checkbox"
                    type="checkbox"
                    data-analytic-label="filterItem"
                    data-analytic-event-content="2"
                    name="2"
                    value="2"
                  /><span data-test-id="" class="Icon_iconWrapper Checkbox_icon"
                    ><svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="Icon_icon"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.673 5.348 7.5 15.521l-5.172-5.173L3.506 9.17 7.5 13.164l8.994-8.994 1.179 1.178Z"
                        fill="currentColor"
                      ></path></svg
                  ></span>
                </div>
                <p class="Typography_p7">Samsung</p> </label
              ><label for="27" class="TagFilters_filterItem">
                <div class="Checkbox_wrapper">
                  <input
                    id="27"
                    class="Checkbox_checkbox"
                    type="checkbox"
                    data-analytic-label="filterItem"
                    data-analytic-event-content="27"
                    name="27"
                    value="27"
                  /><span data-test-id="" class="Icon_iconWrapper Checkbox_icon"
                    ><svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="Icon_icon"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.673 5.348 7.5 15.521l-5.172-5.173L3.506 9.17 7.5 13.164l8.994-8.994 1.179 1.178Z"
                        fill="currentColor"
                      ></path></svg
                  ></span>
                </div>
                <p class="Typography_p7">Sony</p> </label
              ><label for="28" class="TagFilters_filterItem">
                <div class="Checkbox_wrapper">
                  <input
                    id="28"
                    class="Checkbox_checkbox"
                    type="checkbox"
                    data-analytic-label="filterItem"
                    data-analytic-event-content="28"
                    name="28"
                    value="28"
                  /><span data-test-id="" class="Icon_iconWrapper Checkbox_icon"
                    ><svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="Icon_icon"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.673 5.348 7.5 15.521l-5.172-5.173L3.506 9.17 7.5 13.164l8.994-8.994 1.179 1.178Z"
                        fill="currentColor"
                      ></path></svg
                  ></span>
                </div>
                <p class="Typography_p7">Playstation</p> </label
              ><label for="29" class="TagFilters_filterItem">
                <div class="Checkbox_wrapper">
                  <input
                    id="29"
                    class="Checkbox_checkbox"
                    type="checkbox"
                    data-analytic-label="filterItem"
                    data-analytic-event-content="29"
                    name="29"
                    value="29"
                  /><span data-test-id="" class="Icon_iconWrapper Checkbox_icon"
                    ><svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="Icon_icon"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.673 5.348 7.5 15.521l-5.172-5.173L3.506 9.17 7.5 13.164l8.994-8.994 1.179 1.178Z"
                        fill="currentColor"
                      ></path></svg
                  ></span>
                </div>
                <p class="Typography_p7">Xbox</p>
              </label>
            </div>
          </div>
          <p class="Typography_p6 TagFilters_seeMore">See more</p>
        </div>
      </div>
      <div class="TagFilters_group__8E_A4">
        <div class="TagFilters_header">
          <h5 class="Typography_h5">Colour</h5>
          <span
            data-test-id=""
            class="Icon_iconWrapper TagFilters_arrowIcon TagFilters_reverseIcon"
            ><svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="Icon_icon"
            >
              <path
                d="m12 13.232-6-6L4.232 9 12 16.768 19.768 9 18 7.232l-6 6Z"
                fill="currentColor"
              ></path></svg
          ></span>
        </div>
        <div class="Accordion_module_content">
          <div>
            <div class="TagFilters_list">
              <label for="353" class="TagFilters_filterItem">
                <div class="Checkbox_wrapper">
                  <input
                    id="353"
                    class="Checkbox_checkbox"
                    type="checkbox"
                    data-analytic-label="filterItem"
                    data-analytic-event-content="353"
                    name="353"
                    value="353"
                  /><span data-test-id="" class="Icon_iconWrapper Checkbox_icon"
                    ><svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="Icon_icon"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.673 5.348 7.5 15.521l-5.172-5.173L3.506 9.17 7.5 13.164l8.994-8.994 1.179 1.178Z"
                        fill="currentColor"
                      ></path></svg
                  ></span>
                </div>
                <p class="Typography_p7">Black</p> </label
              ><label for="354" class="TagFilters_filterItem">
                <div class="Checkbox_wrapper">
                  <input
                    id="354"
                    class="Checkbox_checkbox"
                    type="checkbox"
                    data-analytic-label="filterItem"
                    data-analytic-event-content="354"
                    name="354"
                    value="354"
                  /><span data-test-id="" class="Icon_iconWrapper Checkbox_icon"
                    ><svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="Icon_icon"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.673 5.348 7.5 15.521l-5.172-5.173L3.506 9.17 7.5 13.164l8.994-8.994 1.179 1.178Z"
                        fill="currentColor"
                      ></path></svg
                  ></span>
                </div>
                <p class="Typography_p7">Blue</p> </label
              ><label for="355" class="TagFilters_filterItem">
                <div class="Checkbox_wrapper">
                  <input
                    id="355"
                    class="Checkbox_checkbox"
                    type="checkbox"
                    data-analytic-label="filterItem"
                    data-analytic-event-content="355"
                    name="355"
                    value="355"
                  /><span data-test-id="" class="Icon_iconWrapper Checkbox_icon"
                    ><svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="Icon_icon"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.673 5.348 7.5 15.521l-5.172-5.173L3.506 9.17 7.5 13.164l8.994-8.994 1.179 1.178Z"
                        fill="currentColor"
                      ></path></svg
                  ></span>
                </div>
                <p class="Typography_p7">Silver</p>
              </label>
            </div>
          </div>
          <p class="Typography_p6 TagFilters_seeMore">See more</p>
        </div>
      </div>
    </form>
    <div class="sortOptionsPortalContainer">
      <div class="MarketplaceFiltersHeader_wrapper">
        <div
          style="display: flex"
          data-analytic-label="fastFilter"
          data-analytic-event-content="1"
          data-analytic-event-action="filter_apply"
          class="SortBy_container SortBy_filter"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.54181 3.16714V17.1671H4.45848V3.16714H6.54181Z"
              fill="black"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.5418 17.0005V3.00047H13.4585V17.0005H15.5418Z"
              fill="black"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.50015 1.77344L10.6922 6.38859L9.3081 7.94569L5.50015 4.56084L1.6922 7.94569L0.308105 6.38859L5.50015 1.77344Z"
              fill="black"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.5001 18.3942L19.6922 13.779L18.3081 12.2219L14.5001 15.6068L10.6922 12.2219L9.30809 13.779L14.5001 18.3942Z"
              fill="black"
            ></path>
          </svg>
          <p class="Typography_p5">Sort</p>
        </div>
        <div
          data-analytic-label="fastFilter"
          data-analytic-event-content="2"
          data-analytic-event-action="filter_apply"
          class="FastFilters_filter"
        >
          <span data-test-id="" class="Icon_iconWrapper FastFilters_icon"
            ><svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="Icon_icon"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 .666a7.333 7.333 0 1 0 0 14.667A7.333 7.333 0 0 0 8 .666ZM6.289 5.359c0 .972-.766 1.76-1.711 1.76-.945 0-1.712-.788-1.712-1.76S3.633 3.6 4.579 3.6s1.71.788 1.71 1.76ZM9.107 3.6h3.17l-5.384 8.8H3.722l5.385-8.8Zm2.315 8.8c.945 0 1.711-.788 1.711-1.76s-.766-1.76-1.71-1.76c-.946 0-1.712.788-1.712 1.76s.766 1.76 1.711 1.76Z"
                fill="#D90217"
              ></path>
              <path
                d="M4.578 7.12c.945 0 1.711-.788 1.711-1.76S5.523 3.6 4.578 3.6c-.945 0-1.711.788-1.711 1.76s.766 1.76 1.71 1.76ZM12.278 3.6H9.107l-5.385 8.8h3.171l5.385-8.8ZM13.133 10.64c0 .972-.766 1.76-1.71 1.76-.946 0-1.712-.788-1.712-1.76s.766-1.76 1.711-1.76c.945 0 1.711.788 1.711 1.76Z"
                fill="#fff"
              ></path></svg
          ></span>
          <p class="Typography_p5">Promo</p>
        </div>
        <div
          data-analytic-label="fastFilter"
          data-analytic-event-content="1"
          data-analytic-event-action="filter_apply"
          class="FastFilters_filter"
        >
          <span data-test-id="" class="Icon_iconWrapper FastFilters_icon"
            ><svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="Icon_icon"
            >
              <g clip-path="url(#free_delivery_blue_circle_svg__a)">
                <path
                  d="M19.167 10A9.167 9.167 0 1 1 .834 10a9.167 9.167 0 0 1 18.333 0Z"
                  fill="#017BFF"
                ></path>
                <path
                  d="m10.764 6.18-8.403 5.347 7.444-1.308-.569 3.6L17.64 8.47 10.2 9.77l.565-3.59Z"
                  fill="#fff"
                ></path>
              </g>
              <defs>
                <clipPath id="free_delivery_blue_circle_svg__a">
                  <path fill="#fff" d="M0 0h20v20H0z"></path>
                </clipPath>
              </defs></svg
          ></span>
          <p class="Typography_p5">Free Delivery</p>
        </div>
      </div>
      <div
        class="MarketPlaceBlocks_blocksPlaceholder"
        id="marketplace-blocks-container-top-id"
      ></div>
      <div class="ProductList_header___Cxqp">
        <h2 class="Typography_h2 ProductList_title">School-Ready Tech</h2>
      </div>
      <div class="ProductGroup_group___f4Kx">
        <ProductCard
          v-for="p in products.slice(0, 6)"
          :key="p.id"
          :product="p"
        />
      </div>
      <div class="ProductList_header___Cxqp">
        <h2 class="Typography_h2 ProductList_title">Back to School 💻🖨️</h2>
        <a
          rel="noopener noreferrer"
          data-analytic-label="seeAll"
          href="/selections/back-to-school"
          ><button
            class="Button_button Button_secondary Button_small SeeAll_button"
            data-analytic-label="seeAllButton"
          >
            <span class="Button_content">See all</span>
          </button></a
        >
      </div>
      <div class="ProductGroup_group___f4Kx">
        <ProductCard
          v-for="p in products.slice(6, 12)"
          :key="p.id"
          :product="p"
        />
      </div>
      <div class="ProductGroup_group___f4Kx">
        <ProductCard v-for="p in products" :key="p.id" :product="p" />
      </div>
      <div></div>
    </div>
  </div>
</template>

<style>
.BrandCard_brand {
  text-align: center;
  max-width: 132px;
}

@media (max-width: 1360px) {
  .BrandCard_brand {
    max-width: 120px;
  }
}

@media (max-width: 575px) {
  .BrandCard_brand {
    max-width: 112px;
  }
}

.BrandCard_imgWrap {
  position: relative;
  width: 132px;
  height: 132px;
  border-radius: 24px;
  overflow: hidden;
}

@media (max-width: 1024px) {
  .BrandCard_imgWrap {
    width: 120px;
    height: 120px;
  }
}

@media (max-width: 575px) {
  .BrandCard_imgWrap {
    width: 112px;
    height: 112px;
  }
}

.BrandCard_title {
  margin-top: 8px;
  margin-bottom: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@supports (-webkit-line-clamp: 1) {
  .BrandCard_title {
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
}

.BrandCard_label {
  white-space: nowrap;
  color: var(--text-secondary);
}

.FavouriteBrands_navButton {
  top: 34px;
  transform: none;
}

.MarketplaceFilters_wrapper {
  text-align: initial;
  height: max-content;
  position: -webkit-sticky;
  position: sticky;
  top: 10px;
  transition: top 0.3s ease-in-out;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.MarketplaceFilters_wrapper::-webkit-scrollbar {
  display: none;
}

.MarketplaceFilters_wrapper:has(> :only-child) {
  position: static;
}

@media (max-width: 1024px) {
  .MarketplaceFilters_wrapper {
    display: none;
  }
}

.MarketplaceFilters_headerVisible__nZ_vK {
  top: 130px;
}

@media (max-width: 1360px) {
  .MarketplaceFilters_headerVisible__nZ_vK {
    top: 200px;
  }
}

.MarketplaceFilters_group {
  margin-bottom: 24px;
}

.MarketplaceFilters_title {
  margin-bottom: 12px;
}

.MarketplaceFilters_filterItem {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 8px;
  padding: 4px 0;
}

.FloatingInput_control {
  position: relative;
}

.FloatingInput_control > label {
  position: absolute;
  pointer-events: none;
  inset-inline-start: 16px;
  inset-block-start: 10px;
  color: var(--border-and-divider-primary);
}

.FloatingInput_control > input {
  font-size: 16px;
  flex: 1 1;
  width: 100%;
  border-radius: 16px;
  background: var(--background-secondary);
  border: 1px solid var(--color-gray-200);
  padding: 26px 32px 10px 16px;
  outline: none;
}

.FloatingInput_control > input::-webkit-inner-spin-button,
.FloatingInput_control > input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.FloatingInput_control > input[type="number"] {
  -moz-appearance: textfield;
}

.FloatingInput_clear {
  cursor: pointer;
  position: absolute;
  top: 26px;
  inset-inline-end: 10px;
}

:root[lang="ar"] .FloatingInput_control {
  position: relative;
}

:root[lang="ar"] .FloatingInput_control > input {
  padding: 26px 16px 10px 32px;
}

:root[lang="ar"] .FloatingInput_clear {
  cursor: pointer;
  position: absolute;
  top: 33px;
  inset-inline-end: 10px;
}

.PriceRangeFilter_group {
  margin-bottom: 24px;
}

.PriceRangeFilter_group .PriceRangeFilter_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row;
  margin-bottom: 12px;
}

.PriceRangeFilter_inputContainer {
  display: flex;
  gap: 8px;
  width: 100%;
}

.PriceRangeFilter_inputContainer > * {
  flex: 1 1 auto;
}

.Accordion_module_enter__k_tBy {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 0.3s ease, max-height 0.3s ease;
}

.Accordion_module_enterActive {
  opacity: 1;
  max-height: 500px;
}

.Accordion_module_exit {
  opacity: 1;
  max-height: 500px;
  transition: opacity 0.3s ease, max-height 0.3s ease;
}

.Accordion_module_exitActive {
  opacity: 0;
  max-height: 0;
}

.Accordion_module_content {
  text-align: initial;
}

.SkeletonTagFilters_item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
}

.SkeletonTagFilters_item:nth-child(odd) .SkeletonTagFilters_title {
  width: 80%;
}

.SkeletonTagFilters_item:nth-child(2n) .SkeletonTagFilters_title {
  width: 60%;
}

.SkeletonTagFilters_checkbox {
  width: 24px;
  height: 24px;
}

.SkeletonTagFilters_title {
  -webkit-margin-end: 24px;
  margin-inline-end: 24px;
  height: 24px;
}

.TagFilters_group__8E_A4 {
  margin-bottom: 24px;
}

.TagFilters_group__8E_A4 .TagFilters_header {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row;
  margin-bottom: 12px;
}

.TagFilters_group__8E_A4 .TagFilters_arrowIcon {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}

.TagFilters_group__8E_A4 .TagFilters_reverseIcon {
  transform: rotate(180deg);
}

.TagFilters_group__8E_A4 .TagFilters_list {
  max-height: 224px;
  overflow: auto;
}

.TagFilters_group__8E_A4 .TagFilters_filterItem {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 8px;
  padding: 4px 0;
}

.TagFilters_group__8E_A4 .TagFilters_seeMore {
  margin-top: 4px;
  cursor: pointer;
  color: var(--control-primary);
}

.TagFilters_group__8E_A4 .TagFilters_search__am_xl {
  height: 40px;
  margin-bottom: 8px;
  border-radius: 24px;
}

.FastFilters_filter,
.TagFilters_group__8E_A4 .TagFilters_search__am_xl:focus {
  background: var(--background-secondary);
}

.FastFilters_filter {
  padding: 12px 16px;
  border-radius: 24px;
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 8px;
}

.FastFilters_filter.FastFilters_active {
  background: var(--constant-black);
  color: var(--constant-white);
}

@media (max-width: 575px) {
  .FastFilters_filter {
    padding: 10px 12px;
  }
}

.FastFilters_filter .FastFilters_crossIcon {
  color: var(--icon-tertiary);
}

.FastFilters_filter .FastFilters_icon {
  width: 20px;
  height: 20px;
}

@media (max-width: 575px) {
  .FastFilters_filter .FastFilters_icon {
    width: 16px;
    height: 16px;
  }
}

.SortBy_container {
  position: relative;
}

.SortBy_container.SortBy_active svg > path {
  fill: var(--background-primary);
}

.SortBy_options__srzG_ {
  position: absolute;
  background-color: var(--background-primary);
  width: 234px;
  top: 52px;
  z-index: 111;
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-radius: 16px;
  box-shadow: var(--box-shadow-56);
}

@media (max-width: 1024px) {
  .SortBy_options__srzG_ {
    top: 121px;
  }
}

.SortBy_options__srzG_ > * {
  padding: 12px;
  border-radius: 12px;
  color: #000;
  cursor: pointer;
}

.SortBy_options__srzG_ > .SortBy_selected__6aP_D {
  background: var(--background-secondary);
}

.SortBy_dimmer {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.SortBy_mobileDrawer {
  padding: 24px 16px;
  position: fixed;
  z-index: 11;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  border-radius: 32px 32px 0 0;
  display: flex;
  flex-direction: column;
}

.SortBy_mobileDrawer h2 {
  margin-top: 0;
}

.SortBy_mobileOptions__zqm_l {
  display: flex;
  flex-direction: column;
}

.SortBy_mobileOptions__zqm_l > label {
  border-bottom: 1px solid var(--border-and-divider-primary);
}

.SortBy_mobileOptions__zqm_l > label:last-of-type {
  border-bottom: none;
}

.SortBy_mobileOption {
  display: flex;
  justify-content: space-between;
  padding: 18px 0;
}

.SortBy_filter {
  padding: 12px 16px;
  border-radius: 24px;
  background: var(--background-secondary);
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 8px;
}

.SortBy_filter.SortBy_active {
  background: var(--constant-black);
  color: var(--constant-white);
}

@media (max-width: 575px) {
  .SortBy_filter {
    padding: 10px 12px;
  }
}

.SortBy_filter .SortBy_icon__5Pkc_ {
  width: 20px;
  height: 20px;
}

@media (max-width: 575px) {
  .SortBy_filter .SortBy_icon__5Pkc_ {
    width: 16px;
    height: 16px;
  }
}

.SortBy_crossIcon {
  color: var(--icon-tertiary);
}

.MarketplaceFiltersHeader_wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 8px;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  scrollbar-width: none;
}

.MarketplaceFiltersHeader_wrapper::-webkit-scrollbar {
  display: none;
}

.MarketplaceFiltersHeader_activeFilter {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 24px;
  background: var(--constant-black);
  color: var(--constant-white);
  flex-shrink: 0;
}

@media (max-width: 575px) {
  .MarketplaceFiltersHeader_activeFilter {
    padding: 10px 12px;
    gap: 4px;
  }
}

.MarketplaceFiltersHeader_cross {
  width: 20px;
  height: 20px;
  cursor: pointer;
  color: var(--icon-tertiary);
}

@media (max-width: 575px) {
  .MarketplaceFiltersHeader_cross {
    width: 16px;
    height: 16px;
  }
}

.MarketplaceMobileFilters_wrapper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 13;
  height: 100vh;
  max-height: unset;
  width: 100%;
  border-radius: 0;
  background: var(--background-primary);
  padding-bottom: 104px;
  overflow-y: auto;
}

@supports (height: 100dvh) {
  .MarketplaceMobileFilters_wrapper {
    height: 100dvh;
  }
}

.MarketplaceMobileFilters_header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row;
  padding: 24px 16px;
  position: relative;
}

.MarketplaceMobileFilters_close {
  position: absolute;
  inset-inline-start: 16px;
  top: 16px;
  padding: 12px;
  background: var(--control-secondary);
  border-radius: 24px;
}

.MarketplaceMobileFilters_fastFilters {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  margin-top: 16px;
  margin-bottom: 16px;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  scrollbar-width: none;
}

.MarketplaceMobileFilters_fastFilters::-webkit-scrollbar {
  display: none;
}

.MarketplaceMobileFilters_fastFilters div:first-child {
  -webkit-margin-start: 16px;
  margin-inline-start: 16px;
}

.MarketplaceMobileFilters_footer {
  position: fixed;
  background: var(--background-primary);
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  box-shadow: var(--box-shadow-top-28);
}

.MarketplaceMobileFilters_footer .MarketplaceMobileFilters_buttons {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 8px;
}

.MarketplaceMobileFilters_priceRangeContainer {
  padding: 16px;
}

.Chip_wrapper___tdyO {
  position: relative;
  display: inline-flex;
}

.Chip_label {
  padding: 12px 16px;
  color: var(--text-primary);
  background: var(--background-secondary);
  border-radius: 24px;
  cursor: pointer;
}

@media (max-width: 575px) {
  .Chip_label {
    padding: 10px 12px;
  }
}

.Chip_selected {
  background: var(--control-active);
  color: var(--text-invert-primary);
}

.Chip_input {
  width: 0;
  height: 0;
  padding: 0;
  opacity: 0;
  margin: 0;
}

.SkeletonMobileTagFilters_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row;
  gap: 64px;
  padding: 16px;
}

.SkeletonMobileTagFilters_title {
  width: 100%;
  max-width: 80%;
  height: 24px;
}

.SkeletonMobileTagFilters_checkbox {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
}

.FilterByType_wrapper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 14;
  height: 100vh;
  max-height: unset;
  width: 100%;
  border-radius: 0;
  background: var(--background-primary);
  padding-top: 132px;
  padding-bottom: 88px;
  overflow-y: auto;
}

@supports (height: 100dvh) {
  .FilterByType_wrapper {
    height: 100dvh;
  }
}

.FilterByType_header {
  width: 100%;
  padding: 24px 16px 8px;
  position: fixed;
  top: 0;
  background: var(--background-primary);
  z-index: 2;
}

.FilterByType_header .FilterByType_close {
  position: absolute;
  inset-block-start: 16px;
  top: 16px;
  padding: 12px;
  background: var(--control-secondary);
  border-radius: 24px;
}

.FilterByType_header .FilterByType_title {
  text-align: center;
}

.FilterByType_header .FilterByType_search {
  margin-top: 32px;
  border-radius: 24px;
}

.FilterByType_filterItem___vDg7 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row;
  gap: 8px;
  padding: 16px;
  position: relative;
}

.FilterByType_filterItem___vDg7:after {
  display: block;
  content: "";
  position: absolute;
  width: calc(100% - 32px);
  bottom: 0;
  left: 16px;
  right: 16px;
  border: 1px solid var(--border-and-divider-secondary);
}

.FilterByType_noResults {
  margin-top: 128px;
}

.FilterByType_footer {
  position: fixed;
  background: var(--background-primary);
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  box-shadow: var(--box-shadow-top-28);
}

.FilterByType_footer .FilterByType_buttons__0_nAM {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 8px;
}

:root[lang="ar"] .FilterByType_close {
  transform: scaleX(-1);
}

:root[lang="ar"] .FilterByType_title {
  text-align: center;
}

.MobileTagFilters_group {
  padding: 16px;
}

.MobileTagFilters_title {
  margin-bottom: 16px;
}

.MobileTagFilters_chips {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: wrap;
  flex-wrap: wrap;
  gap: 8px;
}

.MobileTagFilters_seeMore__l_20W {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 4px;
  padding: 10px 12px;
  border: 1px solid var(--border-and-divider-primary);
  border-radius: 24px;
}

:root[lang="ar"] .MobileTagFilters_icon {
  transform: scaleX(-1);
}

.MarketplaceMobileFiltersHeader_wrapper {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 4;
  margin-right: var(--content-wrapper-side-padding-negative);
  margin-left: var(--content-wrapper-side-padding-negative);
  transition: top 0.3s ease-in-out;
}

.MarketplaceMobileFiltersHeader_scrolledToTop {
  background: var(--background-primary);
  box-shadow: var(--box-shadow-36);
}

.MarketplaceMobileFiltersHeader_isHeaderShown {
  top: 191px;
}

@media (max-width: 575px) {
  .MarketplaceMobileFiltersHeader_isHeaderShown {
    top: 160px;
  }
}

.MarketplaceMobileFiltersHeader_header {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-areas: "sort search filters";
  padding: 16px var(--content-wrapper-side-padding);
}

.MarketplaceMobileFiltersHeader_sort {
  grid-area: sort;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 8px;
  justify-self: flex-start;
  display: none;
}

@media (max-width: 575px) {
  .MarketplaceMobileFiltersHeader_sort {
    display: flex;
  }
}

.MarketplaceMobileFiltersHeader_filters {
  grid-area: filters;
  -webkit-margin-start: auto;
  margin-inline-start: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 8px;
}

.MarketplaceMobileFiltersHeader_tags {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  padding-top: 16px;
  padding-bottom: 16px;
  border-top: 1px solid var(--border-and-divider-secondary);
  margin: 0 12px;
}

.MarketplaceMobileFiltersHeader_icon {
  width: 16px;
  height: 16px;
}

.Banner_imageWrapper {
  width: 392px;
  height: 153px;
  position: relative;
  border-radius: 40px;
  overflow: hidden;
}

@media (max-width: 1360px) {
  .Banner_imageWrapper {
    width: 352px;
    height: 137px;
    border-radius: 32px;
  }
}

@media (max-width: 575px) {
  .Banner_imageWrapper {
    width: 336px;
    height: 131px;
  }
}

.Banner_imageWrapper.Banner_fullWidth {
  width: 100%;
  height: 100%;
  border-radius: 0;
}

.TimedBannerList_wrapper {
  margin-top: 86px;
  margin-bottom: 86px;
}

@media (max-width: 1024px) {
  .TimedBannerList_wrapper {
    margin-top: 48px;
    margin-bottom: 48px;
  }
}

@media (max-width: 575px) {
  .TimedBannerList_wrapper {
    display: none;
  }
}

.SliderIndicator_dots {
  position: absolute;
}

.SliderIndicator_dots .SliderIndicator_dot {
  border: none;
  outline: none;
  background: rgba(0, 0, 0, 0);
  padding: 0;
  cursor: pointer;
  position: relative;
}

.SliderIndicator_dots .SliderIndicator_dot:focus {
  outline: none;
}

.SliderIndicator_dots:before {
  content: "";
  position: absolute;
  background: var(--background-overlay-black);
  opacity: 0.3;
  border-radius: 100px;
}

.SliderIndicator_dots.SliderIndicator_vertical {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column;
  inset-inline-start: 12px;
  top: 50%;
  transform: translateY(-50%);
}

.SliderIndicator_dots.SliderIndicator_vertical:before {
  left: 4px;
  width: 2px;
  height: 100%;
}

.SliderIndicator_dots.SliderIndicator_vertical .SliderIndicator_dot {
  height: 27px;
  width: 10px;
}

.SliderIndicator_dots.SliderIndicator_horizontal {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
}

.SliderIndicator_dots.SliderIndicator_horizontal:before {
  bottom: 4px;
  width: 100%;
  height: 2px;
}

.SliderIndicator_dots.SliderIndicator_horizontal .SliderIndicator_dot {
  width: 27px;
  height: 10px;
}

.SliderIndicator_dots.SliderIndicator_rtl__uVG_Q {
  direction: rtl;
}

.SliderIndicator_indicator {
  position: absolute;
  background: var(--background-inverted);
  transition: all 0.3s ease;
  border-radius: 100px;
  cursor: pointer;
}

.SliderIndicator_indicator.SliderIndicator_vertical {
  left: 4px;
  width: 2px;
  height: 27px;
}

.SliderIndicator_indicator.SliderIndicator_horizontal {
  bottom: 4px;
  width: 27px;
  height: 2px;
}

.TimedBannerSlider_wrapper__u_uRY {
  display: none;
}

@media (max-width: 575px) {
  .TimedBannerSlider_wrapper__u_uRY {
    display: block;
    margin-top: 40px;
    margin-bottom: 40px;
  }
}

.TimedBannerSlider_slider {
  aspect-ratio: 336/131;
  border-radius: 32px;
  direction: ltr;
}

.MarketPlaceBlocks_wrapper {
  margin-top: 32px;
  margin-bottom: 40px;
}

@media (max-width: 1024px) {
  .MarketPlaceBlocks_wrapper {
    display: block;
    margin-bottom: 32px;
  }
}

@media (max-width: 575px) {
  .MarketPlaceBlocks_wrapper {
    margin-top: 24px;
    margin-bottom: 24px;
  }
}

.MarketPlaceBlocks_wrapper.MarketPlaceBlocks_withFilters {
  display: grid;
  grid-template-columns: 256px minmax(0, 1fr);
  grid-gap: 24px;
  gap: 24px;
}

@media (max-width: 1024px) {
  .MarketPlaceBlocks_wrapper.MarketPlaceBlocks_withFilters {
    display: block;
  }
}

.MarketPlaceBlocks_title {
  margin-top: 48px;
  margin-bottom: 24px;
}

@media (max-width: 1024px) {
  .MarketPlaceBlocks_title {
    margin-bottom: 20px;
  }
}

@media (max-width: 575px) {
  .MarketPlaceBlocks_title {
    margin-top: 32px;
    margin-bottom: 16px;
  }
}

.MarketPlaceBlocks_banners {
  margin-top: 56px;
  margin-bottom: 56px;
}

@media (max-width: 1024px) {
  .MarketPlaceBlocks_banners {
    margin-top: 48px;
    margin-bottom: 48px;
  }
}

@media (max-width: 575px) {
  .MarketPlaceBlocks_banners {
    margin-top: 32px;
    margin-bottom: 32px;
  }
}

.MarketPlaceBlocks_loadingGroup {
  display: grid;
  grid-row-gap: 32px;
  grid-column-gap: 20px;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  margin-top: 32px;
}

@media (max-width: 1710px) {
  .MarketPlaceBlocks_loadingGroup {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}

@media (max-width: 1360px) {
  .MarketPlaceBlocks_loadingGroup {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .MarketPlaceBlocks_loadingGroup {
    grid-row-gap: 24px;
    grid-column-gap: 16px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 575px) {
  .MarketPlaceBlocks_loadingGroup {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.MarketPlaceBlocks_loadingGroup.MarketPlaceBlocks_withFilters {
  display: grid;
  grid-row-gap: 32px;
  grid-column-gap: 20px;
  grid-template-columns: repeat(6, minmax(0, 1fr));
}

@media (max-width: 1710px) {
  .MarketPlaceBlocks_loadingGroup.MarketPlaceBlocks_withFilters {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}

@media (max-width: 1360px) {
  .MarketPlaceBlocks_loadingGroup.MarketPlaceBlocks_withFilters {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 1024px) {
  .MarketPlaceBlocks_loadingGroup.MarketPlaceBlocks_withFilters {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .MarketPlaceBlocks_loadingGroup.MarketPlaceBlocks_withFilters {
    grid-row-gap: 24px;
    grid-column-gap: 16px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 575px) {
  .MarketPlaceBlocks_loadingGroup.MarketPlaceBlocks_withFilters {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .MarketPlaceBlocks_loadingGroup {
    margin-top: 16px;
  }
}

.MarketPlaceBlocks_blocksPlaceholder {
  position: absolute;
  top: -200px;
}

.MerchantBlock_wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  width: -moz-fit-content;
  width: fit-content;
  margin-top: 56px;
  margin-bottom: 16px;
}

@media (max-width: 1024px) {
  .MerchantBlock_wrapper {
    margin-top: 40px;
  }
}

@media (max-width: 575px) {
  .MerchantBlock_wrapper {
    margin-top: 32px;
  }
}

.MerchantBlock_imageWrapper {
  width: 144px;
  height: 72px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  -webkit-margin-end: 16px;
  margin-inline-end: 16px;
  flex-shrink: 0;
}

@media (max-width: 1024px) {
  .MerchantBlock_imageWrapper {
    width: 120px;
    height: 60px;
    border-radius: 16px;
  }
}

@media (max-width: 575px) {
  .MerchantBlock_imageWrapper {
    width: 104px;
    height: 52px;
  }
}

.MerchantBlock_imageWrapper:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.08);
}

.MerchantBlock_info {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column;
  gap: 4px;
}

.MerchantBlock_name {
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@supports (-webkit-line-clamp: 1) {
  .MerchantBlock_name {
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
}

.MerchantBlock_details {
  gap: 6px;
}

.MerchantBlock_details,
.MerchantBlock_rating {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
}

.MerchantBlock_rating {
  gap: 4px;
}

.MerchantBlock_dot {
  color: var(--text-secondary);
}

.MerchantBlock_starIcon {
  color: var(--constant-top-rated);
}

.ProductsCarousel_carousel {
  align-items: stretch;
  gap: 16px;
}

.ProductsCarousel_card {
  width: var(--carousel-card-width, 202px);
}

@media (max-width: 575px) {
  .ProductsCarousel_card {
    width: 148px;
  }
}

.ProductsCarousel_card .ProductsCarousel_image___oKiz:after {
  background: rgba(0, 0, 0, 0);
}

.ProductGroup_group___f4Kx {
  display: grid;
  grid-row-gap: 32px;
  grid-column-gap: 20px;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  margin-top: 32px;
}

@media (max-width: 1710px) {
  .ProductGroup_group___f4Kx {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}

@media (max-width: 1360px) {
  .ProductGroup_group___f4Kx {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 1024px) {
  .ProductGroup_group___f4Kx {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .ProductGroup_group___f4Kx {
    grid-row-gap: 24px;
    grid-column-gap: 16px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 575px) {
  .ProductGroup_group___f4Kx {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.ProductGroup_group___f4Kx.ProductGroup_fullWidth {
  display: grid;
  grid-row-gap: 32px;
  grid-column-gap: 20px;
  grid-template-columns: repeat(6, minmax(0, 1fr));
}

@media (max-width: 1710px) {
  .ProductGroup_group___f4Kx.ProductGroup_fullWidth {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}

@media (max-width: 1360px) {
  .ProductGroup_group___f4Kx.ProductGroup_fullWidth {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .ProductGroup_group___f4Kx.ProductGroup_fullWidth {
    grid-row-gap: 24px;
    grid-column-gap: 16px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 575px) {
  .ProductGroup_group___f4Kx.ProductGroup_fullWidth {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .ProductGroup_group___f4Kx {
    margin-top: 16px;
  }
}

.ProductList_header___Cxqp {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row;
  margin-top: 32px;
  margin-bottom: 24px;
}

@media (max-width: 575px) {
  .ProductList_header___Cxqp {
    margin-top: 16px;
    margin-bottom: 16px;
  }
}

.ProductList_title {
  margin: 0;
}
</style>
