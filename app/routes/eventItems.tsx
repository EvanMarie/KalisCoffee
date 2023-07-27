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
      "Our poetry nights, fondly known as 'Verses in the Vortex', not only offer an intimate platform for both budding and seasoned poets to share their work but also foster an environment that encourages camaraderie and connection. From the soft whispers of a heartfelt sonnet to the powerful roar of transformative verses, we paint a canvas of shared emotions, experiences, and viewpoints.",
      "As the evening unfolds, you'll find yourself immersed in the magic of spoken word, sipping on a cup of our divine brew, and bonding with others over the shared stories. At Kali's Coffee, it's not unusual for guests to arrive as strangers and leave as friends, bonded by the power of words and the mutual understanding they inspire. Come, gather round, and let the verses draw you into the vortex.",
    ],
    eventTime:
      "Join us every Tuesday at 7 PM for an evening of expressive verses and soul-stirring brews.",
    eventImage: "/images/poetryNight.png",
  },
  {
    eventTitle: "Book Club",
    eventDescription: [
      "The Kali's Coffee Book Club, affectionately known as 'The Prose Portal', is more than just a gathering of literature enthusiasts - it's a nexus of meaningful connections and expanding perspectives. As we journey together through the pages of a pre-selected book each month, we delve into its themes, characters, and narratives, sparking insightful conversations and personal revelations.",
      "Yet, our book club goes beyond literature. It's about building connections and community. As members explore different perspectives, dissect characters, or debate themes, they are encouraged to share their own stories, fostering deeper relationships. The shared experience of reading and discussing a book serves not only as a catalyst for intellectual stimulation but also for community-building. This fosters a sense of belonging among our diverse patrons, as we turn not just pages, but also towards each other in understanding and camaraderie.",
    ],
    eventTime:
      "Unravel narratives with us on the first Wednesday of every month at 6 PM, accompanied by your favorite cup of coffee.",
    eventImage: "/images/bookClub.png",
  },
  {
    eventTitle: "Live Music",
    eventDescription: [
      "At Kali's Coffee, we believe that enjoying a divine cup of coffee is an experience that should be paired with soul-stirring music. That's why we have curated 'Rhythms and Brews' - evenings of live music that transform our cafe into a stage showcasing local talent spanning various genres. From the soothing strums of an acoustic guitar to the pulse-quickening beats of a live band, our music nights are as diverse and enriching as our coffee blends.",
      "However, 'Rhythms and Brews' is more than just an evening of music. It's a testament to the power of shared melodies and shared moments. As music fills the air, it brings our patrons together, creating an atmosphere where joy, sorrow, triumph, and love intermingle and resonate. This harmonious community, where each note played and each word sung contributes to the larger narrative, epitomizes what Kali's Coffee stands for.",
      "We are not just a café; we are a space where individuals become part of a larger, connected community, infused with the transformative energy of Kali, and the comforting warmth of exceptional coffee. Come be a part of these unique experiences, celebrate our dynamic community, and let the music stir your spirit as you savor your favorite brew.",
    ],
    eventTime:
      "Liven up your Friday evenings with soulful tunes and vibrant brews starting at 8 PM.",

    eventImage: "/images/musicNight.png",
  },
  {
    eventTitle: "Movie Night",
    eventDescription: [
      "At Kali's Coffee, we understand that a good movie, much like a good cup of coffee, has the power to transport and transform. With this belief, we've brought to life 'Frames and Brews' - evenings dedicated to cinema that turn our cafe into a mini theater. From heartwarming classics to compelling indie productions, our movie nights encompass a wide array of cinematic experiences.",
      "However, 'Frames and Brews' is more than just a movie showing. It's an opportunity to share stories and experiences, much like sharing a pot of our divine brew. As the reel rolls, it brings together our patrons in a shared journey through the highs and lows, the laughs and tears of the onscreen narrative. This communal connection, where each frame, each dialogue, and each scene contributes to our collective experience, embodies what Kali's Coffee is all about.",
      "We are not just a café; we are a space where individuals become part of a larger, connected community, infused with the transformative energy of Kali, and the warmth of excellent coffee. So come, immerse yourself in these unique cinematic experiences, celebrate our vibrant community, and let the magic of movies and the aroma of our brews captivate you.",
    ],
    eventTime:
      "Enjoy captivating cinema and exceptional coffee on the last Sunday of each month. The projector rolls at 6 PM sharp.",

    eventImage: "/images/movieNight.png",
  },
];
