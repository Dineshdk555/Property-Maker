import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'


const QuickView = ({ property, setOpen, open }) => {

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    X
                  </button>
                  <div>
                    <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                      <img
                        alt=""
                        src={property?.imageSrc}
                        className="h-56 rounded-md object-cover"
                      />
                      <div className="mt-2">
                        <dl>
                          <div>
                            <dd className="text-sm text-gray-500">{property?.price}</dd>
                          </div>

                          <div>
                            <dd className="font-medium"> {property?.Address}</dd>
                          </div>
                        </dl>


                        <div className="mt-6 flex items-center gap-8 text-xs">
                          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg
                              className="size-4 text-indigo-700"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                              />
                            </svg>

                            <div className="mt-1.5 sm:mt-0">
                              <p className="text-gray-500">Parking</p>

                              <p className="font-medium">2 spaces</p>
                            </div>
                          </div>

                          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg
                              className="size-4 text-indigo-700"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                              />
                            </svg>

                            <div className="mt-1.5 sm:mt-0">
                              <p className="text-gray-500">Bathroom</p>

                              <p className="font-medium">2 rooms</p>
                            </div>
                          </div>

                          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg
                              className="size-4 text-indigo-700"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                              />
                            </svg>

                            <div className="mt-1.5 sm:mt-0">
                              <p className="text-gray-500">Bedroom</p>

                              <p className="font-medium">4 rooms</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default QuickView;