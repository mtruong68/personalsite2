interface workpage {
  title: string;
  link: string;
  images: string[];
  tech: string,
  text: string;
}

export const workData:workpage[] = [
  {
    title: 'Redress',
    link: 'https://www.makeyourjeans.redress.com.hk/',
    images: ["redress_2.jpeg", "redress.jpeg", "redress_3.jpeg"],
    tech: 'React, Next.js, Three.js, GSAP, Redux',
    text: '3D educational game about the environmental impact of making jeans',
    slug: "redress"
  },
  {
    title: 'CHIII',
    link: 'https://www.chiiidesign.com/',
    images: ["chiii_01.png", "chiii_02.png", "chiii_03.png"],
    tech: 'React, Next.js',
    text: 'Website for design studio CHIII',
    slug: "chiii"
  },
  {
    title: 'CITIC',
    link: 'https://www.citic.com/ar2021/en/',
    images: ["citic.png"],
    tech: 'Vue.js, Nuxt, GSAP',
    text: 'Annual report website for CITIC',
    slug: "citic"
  },
  {
    title: 'TSH',
    link: 'https://www.theshophouse.hk/',
    images: ["tsh_0.jpeg", "tsh_1.jpeg", "tsh_2.jpeg"],
    tech: 'Wordpress, Shopify',
    text: 'Website and Shopify website for The Shophouse',
    slug: 'tsh'
  },
  {
    title: 'Building Hyperlink',
    link: 'https://buildinghyperlink.com/',
    images: ["building-hyperlink.png", "building-hyperlink_2.png", "building-hyperlink_3.png"],
    tech: 'HTML, CSS, JS',
    text: 'Web art experience',
    slug: "building-hyperlink"
  },
  {
    title:"William Lim",
    link: 'https://www.williamlim.art/',
    images: ["william-lim_01.jpg", "william-lim_02.jpg"],
    tech: 'React, Next.js',
    text: 'Website for artist William Lim',
    slug: 'william-lim'
  },
  {
    title:"IFC",
    link: 'https://ifc.com.hk/en/mall/',
    images: ["ifc_1.png", "ifc_2.jpg"],
    tech: 'React, Next.js',
    text: 'Minisites for events at the IFC Mall',
    slug: 'ifc'
  },
  {
    title: 'Off the Record',
    link: 'https://studyhall.xyz/off-the-record/',
    images: ["off-the-record.jpg"],
    tech: 'Twine',
    text: 'Narrative game about the experience of journalists of color',
    slug: 'off-the-record'
  }
]
