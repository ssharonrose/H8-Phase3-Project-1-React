import { Carousel } from 'flowbite';
import { useEffect } from "react";

const MyCarousel = () => {

    // useEffect(() => {
    //     Carousel.init();
    //   }, []);


    return (
        <>
            {/* <h1>HALOOOOO</h1> */}
            <div className="rounded-lg mt-10">
                <div id="default-carousel" data-carousel="slide">
                    {/* <!-- Item 1 --> */}
                    <div className="hidden overflow-hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://cdn0-production-images-kly.akamaized.net/zwMPQXTi4hGuH7fVJyS3p6JtokI=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2161358/original/062411400_1525585991-z_6__6_.jpg" className=" mx-auto my-auto block w-[1180px] h-[610px]" alt="..." />
                    </div>
                    {/* <!-- Item 2 --> */}
                    <div className="hidden overflow-hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://cdn0-production-images-kly.akamaized.net/zwMPQXTi4hGuH7fVJyS3p6JtokI=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2161358/original/062411400_1525585991-z_6__6_.jpg" className="mx-auto my-auto block w-[1180px] h-[610px]" alt="..." />
                    </div>
                    {/* <!-- Item 3 --> */}
                    <div className="hidden overflow-hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://cdn0-production-images-kly.akamaized.net/zwMPQXTi4hGuH7fVJyS3p6JtokI=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2161358/original/062411400_1525585991-z_6__6_.jpg" className=" mx-auto my-auto block w-[1180px] h-[610px]" alt="..." />
                    </div>
                </div>
                {/* <!-- Slider indicators --> */}
                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 left-1/2" style={{ bottom: "150px" }}>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current>
                    </button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                </div>
                {/* <!-- Slider controls --> */}
                <button type="button" className="absolute top-0 left-40 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-40 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </>
    );
};

export default MyCarousel;
