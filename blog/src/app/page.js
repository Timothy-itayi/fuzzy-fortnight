'use client'
import ProjectsDisplay from "@/cards";
import Image from "next/image";
import {useState , useEffect} from 'react'

export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) return null;
  return (
 <div>
  <div className="border border-blue-300 border-md flex justify-center px-4">
  <h1 className='font-bold text-8xl flex-wrap justify-center text-center:md m-4:md '>
Project-Midnight

  </h1>
  </div>

  <div>
    <ProjectsDisplay/>

  </div>

    </div>
  );
}
