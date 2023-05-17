interface artpage {
  title: string;
  link: string | null;
  images: string[];
  text: string;
  slug: string,
}

interface workpage {
  title: string;
  link: string;
  images: string[];
  tech: string,
  text: string;
}

export const artData:artpage[] = [
  {
    title: 'Alexa, the Acousmatic Voice',
    link: 'https://acousmatic-alexa.glitch.me/',
    images: ["alexa.png"],
    text: 'Web sound sequencer and essay about the source of Amazon\'s Alexa',
    slug: "alexa"
  },
  {
    title: 'Art-Discontent',
    link: 'https://art-discontent.com/',
    images: ["art-discontent.jpg", "art-discontent_2.jpg", "art-discontent_3.jpg"],
    text: 'Profiles on young artistic practices. Website, interviews, and articles created by me.',
    slug: 'art-discontent'
  },
  {
    title: 'Vaporwave, the Eclectic Aesthetic about Time',
    link: 'https://vaporwave-generator.glitch.me/',
    images: ["vaporwave_1.jpg", "vaporwave_2.jpg", "vaporwave_3.jpg"],
    text: 'Web Image Generator and essay about the visual inspirations of Vaporwave aesthetics',
    slug: "vaporwave"
  },
  {
    title: 'Sketchbooks',
    images: ["s1.jpeg", "s2.jpeg", "s3.jpeg", "s4.jpeg" , "s5.jpeg", "s6.jpeg", "s7.jpeg", "s8.jpeg", "s9.jpeg", "s10.jpeg", "s12.jpeg"],
    text: 'Various prints, zines, and sketchbooks in an online format.',
    slug: 'sketchbooks'
  },
  {
    title: 'Vaporsquare',
    images: ["hw1.png", "cmr2.gif", "crg2.gif" , "cyg2.gif", "cyr2.gif"],
    text: 'An interactive installation exploring promised technological paradise, obsolescense, and unknown systems.',
    slug: "vaporsquare"
  },
  {
    title:"Copy/Paste",
    images: ["c1.jpeg", "c2.jpeg", "c4.jpeg" , "c5.jpeg", "c8.jpeg", "c10.jpeg", "c12.jpeg"],
    text: 'Series of mixed media collages made from children\'s books then digitally altered',
    slug: 'copy-paste'
  },
  {
    title:"ICT VR",
    link: 'https://www.youtube.com/watch?v=Dvz5tDsmNiM&feature=youtu.be',
    images: ["make-it-neat-preview.gif"],
    text: 'VR Games created for the Institute of Creative Technology for physical therapy resesarch. Uses hand tracking to track how patients practice various arm motions.',
    slug: 'ict-vr'
  },
  {
    title: 'Sketches',
    images: ["mix.jpeg", "tiger1.jpeg", "vaporwave.jpeg", "tiger3.jpeg", "house2.jpeg"],
    text: 'Various sketches',
    slug: 'sketches'
  }
]
