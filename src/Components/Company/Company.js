import React from "react";

function Company() {
  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-24">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="mb-8 md:mb-12">
            <h2 class="mb-4 text-center text-2xl font-bold text-neutral-600 md:mb-6 lg:text-3xl">
              Company We Deal With :
            </h2>

            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
            <div class="flex flex-col items-center hover:shadow-sm hover:shadow-blue-500 justify-center rounded-lg bg-gray-100 p-4 lg:p-8">
              <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                200
              </div>
              <div class="text-sm font-semibold sm:text-base">People</div>
            </div>

            <div class="flex flex-col items-center hover:shadow-sm hover:shadow-orange-500 justify-center rounded-lg bg-gray-100 p-4 md:p-8">
              <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                500+
              </div>
              <div class="text-sm font-semibold sm:text-base">People</div>
            </div>

            <div class="flex flex-col items-center  hover:shadow-sm hover:shadow-green-500 justify-center rounded-lg bg-gray-100 p-4 md:p-8">
              <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                1000+
              </div>
              <div class="text-sm font-semibold sm:text-base">Customers</div>
            </div>

            <div class="flex flex-col items-center hover:shadow-sm hover:shadow-neutral-500 justify-center rounded-lg bg-gray-100 p-4 md:p-8">
              <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                A couple
              </div>
              <div class="text-sm font-semibold sm:text-base">
                Coffee breaks
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;