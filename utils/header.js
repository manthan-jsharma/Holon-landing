import { openLink, scrollTo } from "./methods";

const header = {
  menus: [
    { title: "Home", id: "home" },
    { title: "About-Project", id: "my-self" },
    { title: "My Work", id: "my-work" },
    { title: "Experience", id: "experience" },

    { title: "Opinions", id: "reviews" },
  ],
  rightBtn: {
    label: "Website | Preview",
    onClick: () => openLink("https://holon-ai-frontend.vercel.app/"),
  },
  logo: {
    src: "/assets/Manthan(m).jpeg",
    alt: "afzalimdad9",
  },
  handleIconClick: () => scrollTo("home"),
  handleItemSelect: (menu) => scrollTo(menu.id),
};

export default header;
