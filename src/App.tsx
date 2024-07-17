import React, { useState } from 'react';
import './App.css';
import Btn from './Btn';
import ImageSection from './ImageSection';

function App() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const NavItem = ({ href, text }: { href: string, text: string }) =>
    <a href={href} className="block p-2 w-full sm:w-auto rounded-sm text-xl font-semibold focus:ring hover:bg-gray-400 active:bg-gray-500 sm:ml-2">{text}</a>

  return <>
    <header className="relative">
      <div className={"absolute top-full left-0 w-full p-1 border-x border-b border-gray-900 shadow-xl bg-gray-300 sm:hidden " + (isBurgerOpen ? "visible" : "hidden")}>
        <div className="flex flex-col items-end text-right">
          <NavItem href="#" text="Home" />
          <NavItem href="#" text="About" />
          <NavItem href="#" text="Contact Us" />
        </div>
      </div>
      <div className="relative"> 
        <div className="border-b border-gray-900 bg-gray-300 p-4 sm:flex sm:justify-between sm:items-center">
          <div className="flex shrink-0 justify-between">
            <div>
              <img src="/img/logo.png" className="h-32 -mb-10" />
            </div>
            <button onClick={() => setIsBurgerOpen(!isBurgerOpen)} className="block fill-current text-gray-900 sm:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="text-center hidden w-full sm:flex justify-end sm:visible">
            <NavItem href="#" text="Home" />
            <NavItem href="#" text="About" />
            <NavItem href="#" text="Contact Us" />
          </div>
        </div>
      </div>
    </header>
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-center p-5 max-w-xl xl:max-w-6xl">

        <h1 className="text-4xl py-5 w-full text-center">Our Services</h1>

        <ImageSection
          image_src="/img/paving.jpg"
          image_alt="A paving crew."
          image_on_right={false}
          body={
            <>
              <h2 className="text-2xl">Commercial Paving</h2>
              <p className="font-light py-2 leading-tight text-base">Professional new construction parking lot or driveway paving for commercial properties. A nice, new parking lot or driveway stands out, but if you cheap out on paving, then your investment is soon to fail, as the lifespan depends 90% on the quality of the subgrade, compaction, and materials.</p>
              <Btn text="Learn more" />
            </>
          } />

        <ImageSection
          image_src="/img/sealcoating.jpg"
          image_alt="A sealing crew."
          image_on_right={true}
          body={
            <>
              <h2 className="text-2xl">Commercial Sealcoating</h2>
              <p className="font-light py-2 leading-tight text-base">Professional sealcoating services for commercial properties. Preserve the life of your asphalt and your investment. <span className="text-yellow-700">Regular sealcoating has been shown to reduce asphalt maintenance costs by 50% over a 10-year period.</span> <a className="text-blue-900 underline" href="#">Source</a></p>
              <Btn text="Learn more" />
            </>
          } />

        <ImageSection
          image_src="/img/striping.jpg"
          image_alt="A striping crew."
          image_on_right={false}
          body={
            <>
              <h2 className="text-2xl">Commercial Striping</h2>
              <p className="font-light py-2 leading-tight text-base">Professional striping services for commercial properties. High-quality striping is the first thing you notice on a parking lot. If your striping isn't good, then it makes everything else look bad. We're experts trained in commercial striping, taught by industry experts. Everything we do is ADA compliant.</p>
              <Btn text="Learn more" />
            </>
          } />

        <p className="max-w-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, possimus. Excepturi mollitia distinctio dolor a assumenda quis officiis laboriosam explicabo, veniam eligendi maxime sed animi, voluptatem earum aliquam voluptatum numquam.</p>
      </div>
    </div>
  </>;
}

export default App;
