import React from 'react'
import Button from './Button'

const SearchBar = ({name, btntext}) => {
  return (
    <form class="w-full  ">
    <label
      for="default-search"
      class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
    >
      {name}
    </label>
    <div class="relative">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          class="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        class="block w-full p-5 h-max ps-10 text-sm text-gray-900  rounded-[56px] bg-gray-50 "
        placeholder="Enter your delivery location"
        required
      />
      <div className='end-0 bottom-0 absolute'>
      <Button text={btntext} isBg />
      </div>
    </div>
  </form>
  )
}

export default SearchBar