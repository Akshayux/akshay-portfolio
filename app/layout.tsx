import type {Metadata} from 'next';
import Motion from './motion';
import './globals.css';

export const metadata:Metadata={
  title:{default:'Akshay Venkata Narayana — Product Designer',template:'%s — Akshay Venkata Narayana'},
  description:'Product designer and UX strategist creating clear, connected digital experiences across complex systems.',
};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){
  return <html lang="en"><body><Motion>{children}</Motion></body></html>;
}
