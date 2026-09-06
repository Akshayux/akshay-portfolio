import type {MetadataRoute} from 'next';

export default function robots():MetadataRoute.Robots{
  return {
    rules:{userAgent:'*',allow:'/'},
    sitemap:'https://alex-morgan-product-portfolio.akshay2310.chatgpt.site/sitemap.xml',
  };
}
