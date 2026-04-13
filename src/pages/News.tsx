import { useState } from "react";
import { Search, Globe, ChevronDown, Menu, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NAV_LINKS = ["About us", "News", "Our Landscapes"];

const STORIES = [
  {
    image: "https://wildimpact.earth/wp-content/uploads/sites/13/Africa-Botswana-Thriving-Communities-Okavango-Delta-Food-Security-And-Agriculture-2025-1.jpg",
    title: "Empowering Resilience in the Okavango Delta",
    subtitle: "Critical Challenges in a Unique Ecosystem",
  },
  {
    image: "https://wildimpact.earth/wp-content/uploads/sites/13/Africa-Botswana-Okavango-Delta-2025-Shorobe-Water-Project-_26.jpg",
    title: "Water Crisis in Nxabe",
    subtitle: "Building Water Security in Botswana's Okavango Delta",
  },
  {
    image: "https://wildimpact.earth/wp-content/uploads/sites/13/Southern-Africa-Mozambique-Bazaruto-Archipelago-CRC-Hippo-Water-Rollers-2024_5-1.jpg",
    title: "Introducing the Hippo Water Rollers",
    subtitle: "A Practical Innovation",
  },
];

const PODCASTS = [
  {
    title: "A champion for marine conservation with Tessa Hempson",
    duration: "47 min",
    description: "Oceans Without Borders Programme Manager and Principal Scientist Tessa Hempson speaks about a lifelong passion for the oceans.",
  },
  {
    title: "A modern Maasai preserving the Mara with Simon Saitoti",
    duration: "56 min",
    description: "Listen to Simon Saitoti reflect on his rural Maasai childhood and how he persevered to become Regional Programme Manager.",
  },
  {
    title: "Connecting communities and conservation with Bheki Ntuli",
    duration: "44 min",
    description: "Bheki Ntuli speaks about the changes he has seen in the rural communities in South Africa's KwaZulu-Natal Province.",
  },
];

const VIDEOS = [
  {
    title: "Moya Primary School",
    subtitle: "Moya Community",
    description: "Moya Primary School is situated in Moya community, adjacent to &Beyond Lake Manyara Tree Lodge, established in 2003.",
  },
  {
    title: "Coral nurseries",
    subtitle: "Mnemba Island",
    description: "Coral reef restoration is a beacon of hope for threatened coral populations on Mnemba Island local reef.",
  },
  {
    title: "Oceans Without Borders | Artificial Coral Reef",
    subtitle: "Mnemba Island",
    description: "The construction of an artificial reef structure is currently in development at a suitable site.",
  },
];

const News = () => {
  const [storiesExpanded, setStoriesExpanded] = useState(false);
  const [podcastsExpanded, setPodcastsExpanded] = useState(false);

  const visibleStories = storiesExpanded ? STORIES : STORIES.slice(0, 3);
  const visiblePodcasts = podcastsExpanded ? PODCASTS : PODCASTS.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/wild-impact/images/t_Website-1920x1080-fill-gravity=auto-Q_Auto=Best/v1749030421/Africa/South-Africa/Africa-South-Africa-Greater-Kruger-Tlhavekisa-Community-Gottenburg-HBC-2025-Seedlings-_6/Africa-South-Africa-Greater-Kruger-Tlhavekisa-Community-Gottenburg-HBC-2025-Seedlings-_6.jpg"
            alt="News hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative z-10 flex items-end h-full max-w-[1400px] mx-auto px-6 pb-16">
          <h1 className="text-5xl md:text-6xl text-white font-light">News</h1>
        </div>
      </section>

      {/* Intro Text */}
      <section className="max-w-[900px] mx-auto px-6 py-16">
        <h4 className="text-xl md:text-2xl font-light text-foreground mb-6 leading-relaxed">
          Welcome to Wild Impact Content page where you can read, listen and watch
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Every impact has a voice, and this is where you'll hear it. Our Stories, Podcasts, and Videos bring you closer to the people, places, and purpose behind Wild Impact's work. From inspiring community stories and honest conversations to on-the-ground moments captured in motion, this space is a living archive of change in action.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Explore real experiences, powerful insights, and shared journeys that celebrate resilience, growth, and hope. Whether you're here to listen, watch, or read, these stories invite you to connect, reflect, and be part of the impact we're creating together.
        </p>
      </section>

      {/* Stories Section */}
      <section>
        {/* Stories Banner */}
        <div className="relative h-[200px]">
          <img
            src="https://res.cloudinary.com/wild-impact/images/t_Website-1920x1080-fill-gravity=auto-Q_Auto=Best/v1749030421/Africa/South-Africa/Africa-South-Africa-Greater-Kruger-Tlhavekisa-Community-Gottenburg-HBC-2025-Seedlings-_6/Africa-South-Africa-Greater-Kruger-Tlhavekisa-Community-Gottenburg-HBC-2025-Seedlings-_6.jpg"
            alt="Stories section"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center max-w-[1400px] mx-auto px-6">
            <h2 className="text-3xl text-white font-light">Stories</h2>
          </div>
        </div>

        {/* Story Cards */}
        <div className="max-w-[1400px] mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleStories.map((story, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="overflow-hidden mb-4">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{story.title}</h3>
                <p className="text-sm text-muted-foreground mb-4" style={{ fontFamily: "'Open Sans', sans-serif" }}>{story.subtitle}</p>
                <a href="#" className="text-sm text-primary hover:underline font-medium" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  Read More
                </a>
              </div>
            ))}
          </div>
          {STORIES.length > 3 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setStoriesExpanded(!storiesExpanded)}
                className="px-8 py-3 border border-foreground text-sm font-semibold text-foreground hover:bg-foreground hover:text-background transition-colors"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                {storiesExpanded ? "Show less" : "Load more"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Podcast Section */}
      <section>
        {/* Podcast Banner */}
        <div className="relative h-[200px]">
          <img
            src="https://res.cloudinary.com/wild-impact/images/v1744793696/Africa/Tanzania/Africa-Tanzania-Lake-Manyara-Moya-Community-2024-Hippo-Water-Rollers-_6/Africa-Tanzania-Lake-Manyara-Moya-Community-2024-Hippo-Water-Rollers-_6.jpg"
            alt="Podcast section"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center max-w-[1400px] mx-auto px-6">
            <h2 className="text-3xl text-white font-light">Podcast</h2>
          </div>
        </div>

        {/* Podcast Cards */}
        <div className="max-w-[1400px] mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visiblePodcasts.map((podcast, idx) => (
              <div key={idx} className="group cursor-pointer bg-card border border-border p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <img
                      src="https://img.transistorcdn.com/rf35xuJljbaX0WmuY9XNN7Z0mHNbWVE-hItx4bqg-CI/rs:fill:0:0:1/w:400/h:400/q:60/mb:500000/aHR0cHM6Ly9pbWct/dXBsb2FkLXByb2R1/Y3Rpb24udHJhbnNp/c3Rvci5mbS9jN2U2/MDc2ODhhNGJkMWM5/NDE3NTlhODQzYTEx/M2MwNC5qcGc.webp"
                      alt="Podcast artwork"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-foreground leading-tight line-clamp-2">{podcast.title}</h3>
                    <span className="text-xs text-muted-foreground mt-1 block" style={{ fontFamily: "'Open Sans', sans-serif" }}>{podcast.duration}</span>
                  </div>
                </div>
                {/* Mini player bar */}
                <div className="flex items-center gap-3">
                  <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 hover:bg-primary/90 transition-colors">
                    <Play className="w-3.5 h-3.5 text-primary-foreground ml-0.5" />
                  </button>
                  <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-0 bg-primary rounded-full" />
                  </div>
                  <span className="text-[11px] text-muted-foreground" style={{ fontFamily: "'Open Sans', sans-serif" }}>{podcast.duration}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-4 leading-relaxed line-clamp-3" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  {podcast.description}
                </p>
                <a href="#" className="text-sm text-primary hover:underline font-medium mt-3 inline-block" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  Read More
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => setPodcastsExpanded(!podcastsExpanded)}
              className="px-8 py-3 border border-foreground text-sm font-semibold text-foreground hover:bg-foreground hover:text-background transition-colors"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              {podcastsExpanded ? "Show less" : "Load more"}
            </button>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section>
        {/* YouTube Banner */}
        <div className="relative h-[200px]">
          <img
            src="https://res.cloudinary.com/wild-impact/images/t_Website-1920x1080-fill-gravity=auto-Q_Auto=Best/v1727767988/Africa/Africa-South_Africa-Greater-Kruger-Conserving-Echo-Systems-ECHO-Drive-Ngala/Africa-South_Africa-Greater-Kruger-Conserving-Echo-Systems-ECHO-Drive-Ngala.jpg"
            alt="YouTube section"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center max-w-[1400px] mx-auto px-6">
            <h2 className="text-3xl text-white font-light">YouTube</h2>
          </div>
        </div>

        {/* Video Cards */}
        <div className="max-w-[1400px] mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VIDEOS.map((video, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-4 bg-muted aspect-video flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
                <h4 className="text-xs text-muted-foreground uppercase tracking-wider mb-1" style={{ fontFamily: "'Open Sans', sans-serif" }}>{video.title}</h4>
                <h3 className="text-lg font-semibold text-foreground mb-2">{video.subtitle}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-3" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  {video.description}
                </p>
                <a href="#" className="text-sm text-primary hover:underline font-medium" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default News;
