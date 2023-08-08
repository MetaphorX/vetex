import Feed from "@components/Feed";
import Link from "next/link";

const Home = () => (
  
  <>
  <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Animal Care is Important as
        <br className="hidden lg:inline-block" />
        Human Care
      </h1>
      <p className="mb-8 leading-relaxed">
        Book a session with us today, to check the health status of your pet or farm animal
      </p>
      <div className="flex justify-center">
        <Link href={'/create-prompt'}>
        <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
          Book an Appointment
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-contain object-contain rounded"
        alt="hero"
        src="https://berkeleyhumane.org/wp-content/uploads/2020/05/Dog-and-Cat-together-scaled-e1588793238449-1024x535.jpg"
      />
    </div>
  </div>
</section>
<section className="text-gray-600 body-font border-t ">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-green-500 mb-20">
            Animals Health is Important
           
          </h1>
    
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-500 text-white mb-4 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Medical Checkup
                </h2>
                <p className="leading-relaxed text-base">
                Medical checkups are an important tool for detecting and preventing health problems, and they allow healthcare professionals to provide personalized advice on maintaining good health and preventing future health issues. It is recommended that individuals receive regular medical checkups as part of their overall healthcare routine.
                </p>
                <a className="mt-3 text-green-500 inline-flex items-center">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-500 text-white mb-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Emergencies and Surgery
                </h2>
                <p className="leading-relaxed text-base">
                mergency surgery is a type of surgery that is performed when a pet's life or health is in immediate danger and cannot wait for a scheduled procedure. Examples of emergency surgeries include those for traumatic injuries, ruptured organs, and acute infections. Emergency surgery is typically performed in a hospital or emergency room setting by a skilled surgical team, including a surgeon, anesthesiologist, and other medical professionals
                </p>
                <a className="mt-3 text-green-500 inline-flex items-center">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-500 text-white mb-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Home Checkups and Visitation
                </h2>
                <p className="leading-relaxed text-base">
                Medical home checkups and visitations are a type of healthcare service where a healthcare professional visits a patient's home to provide medical care. This type of care is especially important for individuals who are unable to leave their homes due to illness, injury, or other physical limitations.
                </p>
                <a className="mt-3 text-green-500 inline-flex items-center">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



    {/* <Feed /> */}
  


  </>
);

export default Home;
