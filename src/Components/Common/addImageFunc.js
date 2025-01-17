import burger1 from "../../assets/burgers/photo1.png";
import burger2 from "../../assets/burgers/photo2.png";
import burger3 from "../../assets/burgers/photo3.png";
import burger4 from "../../assets/burgers/photo4.png";
import burger5 from "../../assets/burgers/photo5.png";
import burger6 from "../../assets/burgers/photo6.png";

import combo1 from "../../assets/combo/combo1.webp";
import combo2 from "../../assets/combo/combo2.webp";
import combo3 from "../../assets/combo/combo3.webp";
import combo4 from "../../assets/combo/combo4.webp";
import combo5 from "../../assets/combo/combo5.webp";
import combo6 from "../../assets/combo/combo6.webp";

import shaurma1 from "../../assets/shaurma/shaurma1.jpg";
import shaurma2 from "../../assets/shaurma/shaurma2.jpg";
import shaurma3 from "../../assets/shaurma/shaurma3.png";
import shaurma4 from "../../assets/shaurma/shaurma4.jpg";
import shaurma5 from "../../assets/shaurma/shaurma5.jpg";
import shaurma6 from "../../assets/shaurma/shaurma6.jpg";

import pizza1 from "../../assets/pizza/pizza1.jpeg";
import pizza2 from "../../assets/pizza/pizza2.jpeg";
import pizza3 from "../../assets/pizza/pizza3.jpg";
import pizza4 from "../../assets/pizza/pizza4.jpg";
import pizza5 from "../../assets/pizza/pizza5.jpeg";
import pizza6 from "../../assets/pizza/pizza7.jpg";

import dessert1 from "../../assets/desserts/desserts1.jpg";
import dessert2 from "../../assets/desserts/desserts2.jpg";
import dessert3 from "../../assets/desserts/desserts3.jpg";
import dessert4 from "../../assets/desserts/desserts4.jpg";
import dessert5 from "../../assets/desserts/desserts5.jpg";
import dessert6 from "../../assets/desserts/desserts7.jpg";


import vok1 from "../../assets/wok/wok1.webp";
import vok2 from "../../assets/wok/wok2.jpg";
import vok3 from "../../assets/wok/wok3.jpg";



import sauce1 from "../../assets/sauce/sauce1.png";
import sauce2 from "../../assets/sauce/sauce2.png";
import sauce3 from "../../assets/sauce/sauce3.png";


import hotdog1 from "../../assets/hot-dogs/hot-dog1.webp";
import hotdog2 from "../../assets/hot-dogs/hot-dog2.png";
import hotdog3 from "../../assets/hot-dogs/hot-dog3.png";



import snack1 from "../../assets/snacks/snack1.jpeg";
import snack2 from "../../assets/snacks/snack2.jpeg";
import snack3 from "../../assets/snacks/snack3.png";


const allImages = {
  burgers: [burger1, burger2, burger3, burger4, burger5, burger6],
  snacks: [snack1, snack2, snack3],
  hotdogs: [hotdog1, hotdog2, hotdog3],
  combo: [combo1, combo2, combo3, combo4, combo5, combo6],
  shaurma: [shaurma1, shaurma2, shaurma3, shaurma4, shaurma5, shaurma6],
  pizza: [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6],
  dessert: [dessert1, dessert2, dessert3, dessert4, dessert5, dessert6],
  vok: [vok1, vok2, vok3],
  sauce: [sauce1, sauce2, sauce3]
};

export default function addImage(obj) {
  const {data, title}= obj
  return data.map((item, index) => {
    item.img = allImages[title][index];
    return item;
  });
}
