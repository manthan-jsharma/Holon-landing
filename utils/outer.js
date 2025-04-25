import { openLink } from "./methods";

const outer = {
  title1: `G'day, I'm`,
  title2: "Manthan Sharma",
  decrypTexts: [
    "A Software Engineer",
    "A Full Stack Developer",
    "I build things for the web",
    "A Graphic Designer",
    "A Web2 Developer",
    "A Traveler",
    "Holon-Ai HAckathon",
    "AI-Agent For Digital Meetings",
  ],
  desciption: `Office workers in Hong Kong often attend fast-paced, multilingual meetings (English,
    Mandarin, Cantonese). Manually taking notes is inefficient and stressful, especially for
    less tech-savvy users..`,
  button: {
    label: "Web-App-Preview!",
    onClick: () => openLink("https://holon-ai-frontend.vercel.app/"),
  },
};

export default outer;
