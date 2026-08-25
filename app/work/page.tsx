import type {Metadata} from 'next';
import {ConnectPanel,PageFooter,ProjectCard,SiteHeader} from '../components';

export const metadata:Metadata={title:'Work',description:'Selected end-to-end product design case studies by Akshay Venkata Narayana.'};

export default function WorkPage(){return <main className="work-page">
  <SiteHeader/>
  <h1 className="page-wordmark reveal">WORK</h1>
  <section className="work-list page-shell">
    {[1,2,3,4,5].map((number)=><ProjectCard key={number} index={1} identity={number===1}/>)}
  </section>
  <div className="page-shell work-connect"><ConnectPanel/><PageFooter/></div>
</main>}
