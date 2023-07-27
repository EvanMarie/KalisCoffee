export interface EventItem {
  eventTitle: string;
  eventDescription: string[];
  eventImage: string;
  eventTime?: string;
}

export const EventItems = [
  {
    eventTitle: "Poetry Reading",
    eventDescription: [
      "We call it 'Verses in the Vortex'. Poetry night not only offers an intimate platform for both budding and seasoned poets to share their work but also foster an environment that encourages camaraderie and connection.",
    ],
    eventTime:
      "Join us every Tuesday at 7 PM for an evening of expressive verses and soul-stirring brews.",
    eventImage: "/images/poetryNight.png",
  },
  {
    eventTitle: "Book Club",
    eventDescription: [
      "'The Prose Portal', is more than just a gathering of literature enthusiasts - it's a nexus of meaningful connections and expanding perspectives. We explore the pages of a pre-selected book each month, delving into its themes, characters, and narratives.",
    ],
    eventTime:
      "Unravel narratives with us on the first Wednesday of every month at 6 PM, accompanied by your favorite cup of coffee.",
    eventImage: "/images/bookClub.png",
  },
  {
    eventTitle: "Live Music",
    eventDescription: [
      "At Kali's Coffee, we believe that enjoying a divine cup of coffee is an experience that should be paired with soul-stirring music. That's why we have curated 'Rhythms and Brews' - evenings of live music that transform our cafe into a stage showcasing local talent spanning various genres.",
    ],
    eventTime:
      "Liven up your Friday evenings with soulful tunes and vibrant brews starting at 8 PM.",

    eventImage: "/images/musicNight.png",
  },
  {
    eventTitle: "Movie Night",
    eventDescription: [
      "At Kali's Coffee, we understand that a good movie, much like a good cup of coffee, has the power to transport and transform. With this belief, we've brought to life 'Frames and Brews' - evenings dedicated to cinema that turn our cafe into a mini theater.",
    ],
    eventTime:
      "Enjoy captivating cinema and exceptional coffee on the last Sunday of each month. The projector rolls at 6 PM sharp.",

    eventImage: "/images/movieNight.png",
  },
];
