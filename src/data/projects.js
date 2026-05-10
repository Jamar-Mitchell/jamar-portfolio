import holmImg from "../assets/holm.png";
import renderImg from "../assets/RenderATL_Logo.jpg";
import hbcuImg from "../assets/hbcumade.png";
import stemImg from "../assets/stemposure.png";
import dbImg from "../assets/drunkenbee.webp";
import rvLogo from "../assets/rendezview-text-logo.svg";

const projects = [
  {
    id: 6,
    title: "RendezView",
    description:
      "AI-powered event planning platform designed to improve vendor conversion rates through intelligent recommendations.",
    category: "AI Platform",
    tags: ["AI/ML", "Event Planning", "Recommendations"],
    metrics: ["40% User Interest", "$100K+ Potential", "25% Conversion Boost"],
    image: rvLogo,
    avatarFill: true,
    link: "https://rendezview.app",
  },
  {
    id: 1,
    title: "Holm",
    description:
      "Modern platform with user authentication, gallery features, and subscription-based services designed for creative professionals.",
    category: "Creative Platform",
    tags: ["Authentication", "Gallery", "Subscription", "Modern Design"],
    metrics: ["User Auth System", "Gallery Platform", "Subscription Model"],
    image: holmImg,
    imageFit: "cover",
    link: "https://holm.site",
  },
  {
    id: 2,
    title: "Render Atlanta",
    description:
      "Provided comprehensive IT services and technical infrastructure support for Atlanta's premier tech conference with 10,000+ attendees and 120+ speakers.",
    category: "Event Technology",
    tags: ["IT Services", "Event Infrastructure", "Large Scale"],
    metrics: ["10,000+ Attendees", "120+ Speakers", "2-Day Conference"],
    image: renderImg,
    imageFit: "cover",
    link: "https://renderatl.com/",
  },
  {
    id: 3,
    title: "HBCUMade",
    description:
      "A digital marketplace celebrating and empowering HBCU entrepreneurs by connecting them with customers who value Black excellence and HBCU culture.",
    category: "Marketplace",
    tags: ["E-Commerce", "Marketplace", "HBCU", "Community"],
    metrics: ["HBCU Entrepreneurs", "Digital Marketplace", "Cultural Commerce"],
    image: hbcuImg,
    avatarZoom: true,
    link: "https://www.hbcumade.app/",
  },
  {
    id: 4,
    title: "Stemposure",
    description:
      "Built a dynamic platform connecting thousands of Black & Brown STEM professionals with career opportunities and industry insights.",
    category: "Community Platform",
    tags: ["React", "Node.js", "Community", "Events"],
    metrics: ["300+ Event RSVPs", "20% MoM Growth", "Thousands Connected"],
    image: stemImg,
    link: null,
  },
  {
    id: 5,
    title: "DrunkenBee",
    description:
      "E-commerce platform with multi-channel sales integration and optimized for search visibility and customer retention.",
    category: "E-Commerce",
    tags: ["E-Commerce", "SEO", "Multi-Channel", "Analytics"],
    metrics: ["10K+ Search Impressions", "4+ Sales Channels", "35% Retention"],
    image: dbImg,
    link: "https://drunkenbeegame.com/",
  },
];

export default projects;
