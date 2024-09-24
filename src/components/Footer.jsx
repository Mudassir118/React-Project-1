import React from "react";
import DownloadButton from "./DownloadButton";

const Footer = () => {
  return (
    <footer class="bg-white dark:bg-black h-max">
      <div class="mx-auto w-full max-w-screen-2xl p-4 py-5 lg:py-10 sm:px-10">
        <div class="md:flex md:justify-between">
          <div class="mb-6  md:mb-0  flex flex-col  items-start">
            <a href="https://flowbite.com/" class="flex items-center mb-10 ">
              <span class="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">
                🍕
              </span>
            </a>

            <div className="w-max justify-between flex-row flex gap-2">
              <DownloadButton
                text="Donwload on the"
                storename="App Store"
                icon="./assets/apple.png"
              />
              <DownloadButton
                text="Get it on"
                storename="Google Play"
                icon="./assets/playstore.png"
              />
            </div>
          </div>
          <div class="grid grid-cols-4 gap-8 sm:gap-6 sm:grid-cols-4">
            <div>
              <h2 class="mb-10 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Quick Links
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="https://flowbite.com/" class="hover:underline">
                    Features
                  </a>
                </li>
                <li class="mb-4">
                  <a href="https://tailwindcss.com/" class="hover:underline">
                    Food Menu
                  </a>
                </li>
                <li class="mb-4">
                  <a href="https://tailwindcss.com/" class="hover:underline">
                    Offer
                  </a>
                </li>
                <li class="mb-4">
                  <a href="https://tailwindcss.com/" class="hover:underline">
                    Review
                  </a>
                </li>
                <li class="mb-4">
                  <a href="https://tailwindcss.com/" class="hover:underline">
                    Rider
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-10 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Get to Know us
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    class="hover:underline "
                  >
                    Gift Cards
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    class="hover:underline"
                  >
                    DoorDash Stories
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    class="hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    class="hover:underline"
                  >
                    Glassdoor
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    class="hover:underline"
                  >
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-10 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                News
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    class="hover:underline "
                  >
                    Blog
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    class="hover:underline"
                  >
                    FAQ
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    class="hover:underline"
                  >
                    Lift Media
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    class="hover:underline"
                  >
                    Press
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    class="hover:underline"
                  >
                    Presse kit
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-10 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Support 24
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Pizza
            </a>
            . All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0  justify-around">
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <span class="text-lg">Privacy</span>
            </a>
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <span class="text-lg">Policy</span>
            </a>
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <span class="text-lg">Services</span>
            </a>
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <span class="text-lg">Contact</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
