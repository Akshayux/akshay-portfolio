import type {MetadataRoute} from 'next';

const siteUrl='https://www.akshayvenkat.com';

export default function sitemap():MetadataRoute.Sitemap{
  return [
    {url:siteUrl,lastModified:new Date(),changeFrequency:'monthly',priority:1},
    {url:`${siteUrl}/work`,lastModified:new Date(),changeFrequency:'monthly',priority:.9},
    {url:`${siteUrl}/work/luxtj`,lastModified:new Date(),changeFrequency:'monthly',priority:.8},
    {url:`${siteUrl}/work/luxtj-extranet`,lastModified:new Date(),changeFrequency:'monthly',priority:.8},
    {url:`${siteUrl}/work/scotcare`,lastModified:new Date(),changeFrequency:'monthly',priority:.8},
    {url:`${siteUrl}/work/simpo-ai`,lastModified:new Date(),changeFrequency:'monthly',priority:.8},
    {url:`${siteUrl}/about`,lastModified:new Date(),changeFrequency:'monthly',priority:.7},
    {url:`${siteUrl}/contact`,lastModified:new Date(),changeFrequency:'yearly',priority:.6},
    {url:`${siteUrl}/resume`,lastModified:new Date(),changeFrequency:'monthly',priority:.6},
  ];
}
