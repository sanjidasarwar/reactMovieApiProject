import CelebrityList from "./CelebrityList";

function CelebritySection() {
    return ( 
        <section className="md:container md:mx-auto py-8">
        <div className="sectionHead flex justify-between mb-8">
          <h3 className="text-2xl font-bold text-white relative after:content-[''] after:absolute after:top-8 after:left-0 after:w-16 after:h-1 after:bg-white">
            Celebrities
          </h3>
        </div>
  
        <CelebrityList />
      </section>
     );
}

export default CelebritySection;