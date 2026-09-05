'use client';

import ArrowIcon from '../arrow-icon';

export default function ResumeActions(){return <button className="resume-print" type="button" onClick={()=>window.print()} data-cursor-label="Download">Print / Save as PDF <ArrowIcon/></button>}
