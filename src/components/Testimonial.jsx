import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Testimonial() {
  return (
    <div>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        freeMode={true}
        modules={[FreeMode, Pagination, Navigation]}
        autoplay={{ delay: 5000 }}
        style={{ display: 'flex', flexDirection: 'row' }}
        className="max-w-[50%] lg:max-w-[60%]">

        <SwiperSlide>
          <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none m-10">
            <div class="flex gap-4">
              <img class="w-12 h-12 rounded-full" src="../..//images/USERICON(1).png" alt="user avatar" width="400" height="400" loading="lazy" />
              <div>
                <h6 class="text-lg font-medium text-gray-700 dark:text-white">Mohit Gangwar</h6>
                <p class="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
              </div>
            </div>
            <p class="mt-8">As a startup enthusiast, I'm highly impressed by the dedication and vision of the team at Mera Rojgar Mera Adhikar. Their commitment to serving migrant workers and providing valuable resources to both workers and employers is truly commendable</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none m-10">
            <div class="flex gap-4">
              <img class="w-12 h-12 rounded-full" src="../..//images/USERICON(1).png" alt="user avatar" width="200" height="200" loading="lazy" />
              <div>
                <h6 class="text-lg font-medium text-gray-700 dark:text-white">Abhishek Singh</h6>
                <p class="text-sm text-gray-500 dark:text-gray-300">Marketing</p>
              </div>
            </div>
            <p class="mt-8"> I had the opportunity to interact with the team at Mera Rojgar Mera Adhikar during the early stages of their project, and I must say, I'm impressed by their passion and dedication. Their focus on providing support to migrant workers while also catering to the needs of employers reflects their commitment to creating a more inclusive and equitable</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none m-10">
            <div class="flex gap-4">
              <img class="w-12 h-12 rounded-full" src="../..//images/USERICON(1).png" alt="user avatar" width="200" height="200" loading="lazy"/>
                <div>
                  <h6 class="text-lg font-medium text-gray-700 dark:text-white">Rahul Shukla</h6>
                  <p class="text-sm text-gray-500 dark:text-gray-300">Developer</p>
                </div>
            </div>
            <p class="mt-8">Right Path Predictor Pvt Ltd (MRMA) is taking a bold step towards addressing the challenges faced by migrant workers, and I'm excited to be a part of their journey. Their dedication to leveraging technology for social good and their emphasis on providing valuable services to workers and employers alike is truly inspiring.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none m-10">
            <div class="flex gap-4">
              <img class="w-12 h-12 rounded-full" src="../..//images/USERICON(1).png" alt="user avatar" width="200" height="200" loading="lazy"/>
                <div>
                  <h6 class="text-lg font-medium text-gray-700 dark:text-white">Anurag Awasthi</h6>
                  <p class="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                </div>
            </div>
            <p class="mt-8">Anticipating the release of Mera Rojgar Mera Adhikar platform! With its focus on migrant workers' needs, I'm confident it'll make job searching easier and more accessible for workers.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none m-10">
            <div class="flex gap-4">
              <img class="w-12 h-12 rounded-full" src="../..//images/USERICON(1).png" alt="user avatar" width="400" height="400" loading="lazy"/>
                <div>
                  <h6 class="text-lg font-medium text-gray-700 dark:text-white">Shivam</h6>
                  <p class="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                </div>
            </div>
            <p class="mt-8">टीम के माध्यम से पता चला कि 'मेरा रोजगार मेरा अधिकार' प्लेटफ़ॉर्म मजदूरों के लिए विभिन्न सुविधाओं और लाभों के साथ आ रहा है। हम सभी उत्साहित हैं कि इसमें काम करने का इंतजार कर रहे हैं।</p>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

