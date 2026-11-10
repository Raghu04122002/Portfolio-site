import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Raghavender Reddy Sudireddy — Full-Stack Engineer & SaaS Architect',description:'Full-stack engineer building scalable SaaS platforms, intelligent AI experiences, and real-world digital products.',openGraph:{title:'Raghavender Reddy Sudireddy — The Systems Edition',description:'Engineering complex systems into simple experiences.',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
