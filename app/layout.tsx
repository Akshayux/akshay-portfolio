import type {Metadata} from 'next';
import Motion from './motion';
import './globals.css';

const siteUrl = 'https://www.akshayvenkat.com';

export const metadata:Metadata={
  metadataBase:new URL(siteUrl),
  title:{default:'Akshay Venkat | Product & UX Designer in Edinburgh, UK',template:'%s | Akshay Venkat'},
  description:'Akshay Venkat, also known as Akshay Venkata Narayana, is a Product & UX Designer in Edinburgh, UK, designing clear connected digital products across travel, SaaS and complex systems.',
  keywords:['Akshay Venkat','Akshay Venkata Narayana','Akshay Venkat UX Designer','Akshay Venkat Product Designer','Product Designer Edinburgh','UX Designer Edinburgh','Heriot-Watt University'],
  alternates:{canonical:'/'},
  robots:{index:true,follow:true},
  openGraph:{type:'website',url:siteUrl,siteName:'Akshay Venkat',title:'Akshay Venkat | Product & UX Designer in Edinburgh, UK',description:'Product & UX Designer creating clear connected digital products across travel, SaaS and complex systems.',images:[{url:'/akshay-portrait.jpg',width:1200,height:1200,alt:'Akshay Venkat, Product and UX Designer'}]},
  twitter:{card:'summary_large_image',title:'Akshay Venkat | Product & UX Designer in Edinburgh, UK',description:'Product & UX Designer creating clear connected digital products across travel, SaaS and complex systems.',images:['/akshay-portrait.jpg']},
  icons:{icon:'/akshay-logo.png'},
};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){
  const personSchema={
    '@context':'https://schema.org',
    '@type':'Person',
    name:'Akshay Venkat',
    alternateName:['Akshay Venkata Narayana','Akshay V.'],
    url:siteUrl,
    image:`${siteUrl}/akshay-portrait.jpg`,
    jobTitle:'Product & UX Designer',
    alumniOf:{'@type':'CollegeOrUniversity',name:'Heriot-Watt University'},
    address:{'@type':'PostalAddress',addressLocality:'Edinburgh',addressRegion:'Scotland',addressCountry:'GB'},
    sameAs:['https://linkedin.com/in/akshayproductdesigner','https://www.behance.net/akshayv7','https://medium.com/@akshayv2310','https://github.com/Akshayux'],
    knowsAbout:['Product design','UX design','UX research','Interaction design','Information architecture','Prototyping','Figma','Design systems'],
  };
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:`(()=>{try{const saved=localStorage.getItem('portfolio-theme');const theme=saved||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=theme}catch{}})()`}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(personSchema)}}/></head><body><Motion>{children}</Motion></body></html>;
}
