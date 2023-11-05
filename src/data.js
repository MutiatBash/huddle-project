import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCookieBite,
  faShieldHalved,
  faRotate,
  faLink,
  faServer,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
// import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";

export const clients = [
  {
    id: 1,
    src: "/images/client1.JPG",
    name: "Theresa Webb",
    role: "President of Sales at Binford Ltd",
    comment:
      "The attendants were very receptive while we talked about my issues, we discussed the root of the problem, what were the current challenges and the way forward from those challenges. Their method of approaching legal issues is so impressive, can't recommend TRPLAW enough.",
  },
  {
    id: 2,
    src: "/images/client2.JPG",
    name: "Annette Black",
    role: "Brand Manager at J&M Enterprise",
    comment:
      "The lawyers were very receptive while we talked about my issues, we discussed the root of the problem, what were the current challenges and the way forward from those challenges. Their method of approaching legal issues is so impressive, can't recommend TRPLAW enough.",
  },
  {
    id: 3,
    src: "/images/client5.JPG",
    name: "Annette Black",
    role: "Brand Manager at J&M Enterprise",
    comment:
      "The lawyers were very receptive while we talked about my issues, we discussed the root of the problem, what were the current challenges and the way forward from those challenges. Their method of approaching legal issues is so impressive, can't recommend TRPLAW enough.",
  },
  {
    id: 4,
    src: "/images/client2.JPG",
    name: "Annette Black",
    role: "Brand Manager at J&M Enterprise",
    comment:
      "The lawyers were very receptive while we talked about my issues, we discussed the root of the problem, what were the current challenges and the way forward from those challenges. Their method of approaching legal issues is so impressive, can't recommend TRPLAW enough.",
  },
  {
    id: 5,
    src: "/images/client1.JPG",
    name: "Theresa Webb",
    role: "President of Sales at Binford",
    comment:
      "The attendants were very receptive while we talked about my issues, we discussed the root of the problem, what were the current challenges and the way forward from those challenges. Their method of approaching legal issues is so impressive, can't recommend TRPLAW enough.",
  },
];

export const termsData = [
  {
    id: 1,
    Icon: faLock,
    title: "Data Protection and Security",
    details:
      "We take the security of your data seriously and implement appropriate measures to protect it. These measures include encryption, access controls, regular security assessments, and employee training.",
  },
  {
    id: 2,
    Icon: faShieldHalved,
    title: "Your Data Rights",
    details:
      "You have certain rights regarding your personal data, including the right to access, rectify, delete, or object to the processing of your data. You can exercise these rights by contacting us using the information provided below.",
  },
  {
    id: 3,
    Icon: faCookieBite,
    title: "Cookies and Tracking",
    details: ` We use cookies and similar technologies for various purposes,
            including analytics and personalization. You can manage your cookie
            preferences in your browser settings.`,
  },
  {
    id: 4,
    Icon: faLink,
    title: "Third-Party Links and Services",
    details: `Our website may contain links to third-party websites or services.
            We are not responsible for the privacy practices or content of these
            third parties. We encourage you to review their privacy policies
            before using their services.`,
  },
  {
    id: 5,
    Icon: faServer,
    title: "Data Retention",
    details: `We retain your data for as long as necessary to fulfill the purposes
            outlined in this Privacy Policy. When data is no longer needed, it
            will be securely deleted.`,
  },
  {
    id: 6,
    Icon: faRotate,
    title: "Updates to this Privacy Policy",
    details: `We may update this Privacy Policy periodically to reflect changes in
            our practices. The Last Updated date at the top of the policy will
            indicate the latest revision.`,
  },
];

export const products = {
  popular: [
    {
      id: 1,
      src: "/images/spring-roll1.JPG",
      title: "Spring Rolls & Sauce",
      details:
        "Cripsy and delicious spring rolls filled with a blend of vegetables and served with a savory dipping sauce",
      price: `${1},${500}`,
      rating: "4.78",
    },
    {
      id: 2,
      src: "/images/finger-combo.JPG",
      title: "Finger-licking Combo",
      details:
        "A satisfying combination of sausage, kebabs, wings and crispy chips, perfect for sharing",
      price: "5,000",
      rating: "4.90",
    },
    {
      id: 3,
      src: "/images/samosa1.JPG",
      title: "Samosa & Beef",
      details:
        "Spiced potato & pea-filled samosas, deep-fried to perfection and served hot with minced beef",
      price: "1,500",
      rating: "4.60",
    },
    {
      id: 4,
      src: "/images/yam-fish.JPG",
      title: "Fish & Yam sticks",
      details:
        "Crispy fried yam paired with tender fish , served with a special sauce for a delightful meal",
      price: "3,000",
      rating: "4.78",
    },
    {
      id: 5,
      src: "/images/smoked-liver.JPG",
      title: "Smoked Liver",
      details:
        "Savory smoked liver served with a hint of smoky flavour and a side of sauce",
      price: "2,500",
      rating: "4.58",
    },
    {
      id: 6,
      src: "/images/spring-roll3.JPG",
      title: "Spring Rolls",
      details:
        "Cripsy and delicious spring rolls filled with a blend of vegetables",
      price: "2,500",
      rating: "4.88",
    },
    {
      id: 7,
      src: "/images/puff-puff2.JPG",
      title: "Sweetened Puff-puff",
      details:
        "Sweet and fluffy puff-puff balls, with frosted sugar for a delighful taste",
      price: "2,500",
      rating: "4.75",
    },
    {
      id: 8,
      src: "/images/smokey-wings1.JPG",
      title: "Roasted Wings",
      details:
        "Delicious and perfectly roasted chicken wings with a variety of flavours to choose from",
      price: "2,500",
      rating: "4.95",
    },
  ],
  special: [
    {
      id: 1,
      src: "/images/gizdodo2.JPG",
      title: "Peppered Gizzard",
      details: "",
      price: `${1},${500}`,
    },
    {
      id: 2,
      src: "/images/chicken-balls.JPG",
      title: "Chicken Balls",
      details:
        "Chicken balls filled with protein and prepared with tender chicken breasts",
      price: "5,000",
    },
    {
      id: 3,
      src: "/images/grilled-lamb.JPG",
      title: "Grilled Lamb",
      details:
        "Tender lamb marinated with a unique blend of spices and grilled to give a smoky flavour.",
      price: "1,500",
    },
    {
      id: 4,
      src: "/images/scotch-egg1.JPG",
      title: "Scotch Egg",
      details:
        "A classic scotch egg, with a perfectly cooked egg encased in seasoned sausage meat and golden breadcrumbs",
      price: "3,000",
    },
    {
      id: 5,
      src: "/images/grilled-liver2.JPG",
      title: "Grilled Liver",
      details:
        "Savory liver served with a hint of smoky liver and dried pepper flakes",
      price: "2,500",
    },
    {
      id: 6,
      src: "/images/spring-roll2.JPG",
      title: "Spring Rolls",
      details:
        "Cripsy and delicious spring rolls filled with a blend of vegetables and served with a savory dipping sauce",
      price: "2,500",
    },
    {
      id: 7,
      src: "/images/caramel-drumsticks.JPG",
      title: "Caramel Drumsticks",
      details:
        "Caramel-coated drumsticks with a sweet and savory flavor, dipped in honey and barbeque sauce",
      price: "2,500",
    },
    {
      id: 8,
      src: "/images/gizdodo.JPG",
      title: "Plantain & Gizzard",
      details:
        "Fried plantain served with peppered gizzard, eaten as a meal or served as a side",
      price: "2,500",
    },
  ],
};

// export function getFoodDetails(id) {
//   let foodViewed = products.popular.find((food) => food.id === id);
//   if (!foodViewed) {
//     foodViewed = products.special.find((food) => food.id === id);
//   }
//   return foodViewed;
// }

// export function getFoodDetails(category, foodId) {
//   const foodViewed = products[category];
//   return foodViewed?.find((food) => food.id === parseInt(foodId, 10));
// }
