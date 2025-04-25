import { openLink } from "./methods";

const handleIconClick = (icon) => {
  const links = {
    github: "https://github.com/manthan-jsharma",
    twitter: "https://x.com/sharma_man8668",
    linkedin: "https://www.linkedin.com/in/manthan-sharma-12b0332a7/",
  };
  openLink(links[icon]);
};

const sideElements = {
  emailButton: {
    label: "manthan.jsharma@gmail.com",
    onClick: () => openLink(""),
  },
  handleIconClick,
};

export default sideElements;
