/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

function page() {
   return (
      <>
         <br /><br /><br /><br />
         <center>
            <h1 className='text-3xl font-medium'>Product Details</h1>
         </center>
         <br />

         <div className="font-[sans-serif] bg-white">
            <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
               <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                  <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                     
                     {/* <div className="py-10 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative"> */}
                        <img src="https://cdn.inventoryrsc.com/311984168_65b4712e40d11b65eafc5ef5.jpg" alt="Product" className=" rounded object-cover" />
                     {/* </div> */}
                     <div className="mt-6 flex gap-6 mx-auto">
                        <div className="rounded-xl  p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                           <img src="https://cdn.inventoryrsc.com/311984168_65b4712f40d11b65eafc5ef6.jpg" alt="Product2" className="w-56  xl:h-40 lg:h-36 rounded-xl cursor-pointer" />
                        </div>
                        <div className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                           <img src="https://cdn.inventoryrsc.com/311984168_65b4712f40d11b65eafc5ef7.jpg" alt="Product2" className="w-56 h-40 rounded-xl cursor-pointer" />
                        </div>
                     </div>
                     <div className="mt-6 flex gap-6 mx-auto">
                      
                        <div className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                           <img src="https://cdn.inventoryrsc.com/311984168_65b4713040d11b65eafc5ef8.jpg" alt="Product2" className="w-56 h-40 rounded-xl cursor-pointer" />
                        </div>
                        <div className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                           <img src="https://cdn.inventoryrsc.com/311984168_65b4713140d11b65eafc5ef9.jpg" alt="Product2" className="w-56 h-40 rounded-xl cursor-pointer" />
                        </div>
                     </div>
                  </div>
                  <div className="lg:col-span-2">
                     <h2 className="text-2xl font-extrabold text-[#333]">Mustang GT</h2>
                     <div className="flex flex-wrap gap-4 mt-6">
                        <p className="text-[#333] text-2xl">$1200</p>
                        {/* <p className="text-gray-400 text-xl"><s>$1500</s>
                           <span className="text-sm ml-1">Tax included</span></p> */}
                     </div>
                     {/* <div className="flex space-x-2 mt-4">
                        <svg className="w-5 fill-[#333]" viewBox="0 0 14 13" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg className="w-5 fill-[#333]" viewBox="0 0 14 13" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg className="w-5 fill-[#333]" viewBox="0 0 14 13" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg className="w-5 fill-[#333]" viewBox="0 0 14 13" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <h4 className="text-[#333] text-base">500 Reviews</h4>
                     </div> */}
                     {/* <div className="mt-10">
                        <h3 className="text-lg font-bold text-gray-800">Choose a Color</h3>
                        <div className="flex flex-wrap gap-4 mt-4">
                           <button type="button" className="w-12 h-12 bg-black border-2 border-white hover:border-gray-800 rounded-full shrink-0"></button>
                           <button type="button" className="w-12 h-12 bg-gray-300 border-2 border-white hover:border-gray-800 rounded-full shrink-0"></button>
                           <button type="button" className="w-12 h-12 bg-gray-100 border-2 border-white hover:border-gray-800 rounded-full shrink-0"></button>
                           <button type="button" className="w-12 h-12 bg-blue-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"></button>
                        </div>
                     </div> */}
                     <div className="flex flex-wrap gap-4 mt-10">
                        <button type="button" className="min-w-[200px] px-4 py-3 bg-[#333] hover:bg-[#111] text-white text-sm font-bold rounded">Buy now</button>
                        {/* <button type="button" className="min-w-[200px] px-4 py-2.5 border border-[#333] bg-transparent hover:bg-gray-50 text-[#333] text-sm font-bold rounded">Add to cart</button> */}
                     </div>
                     <div className="mt-24">
                        <div className="flex items-start">
                           <div className="">
                              <h4 className="text-2xl font-bold text-[#333]">Description</h4>
                         
                              <p className="text-md mt-4 text-[#333]">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                           </div>
                        </div>
                        {/* <button type="button" className="w-full mt-10 px-4 py-2.5 bg-transparent hover:bg-gray-50 border border-[#333] text-[#333] font-bold rounded">Read all reviews</button> */}
                     </div>
                     
                  </div>
                  
               </div>
               <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                  <h3 className="text-lg font-bold text-[#333]">Product information</h3>
                  <ul className="mt-6 space-y-6 text-[#333]">
                     <li className="text-sm">Dealer ID <span className="ml-4 float-right">63414</span></li>
                     <li className="text-sm">Type <span className="ml-4 float-right">New</span></li>
                     <li className="text-sm">Stock <span className="ml-4 float-right">P13679</span></li>
                     <li className="text-sm">Year <span className="ml-4 float-right">2024</span></li>
                     <li className="text-sm">Make <span className="ml-4 float-right">Ford</span></li>
                     <li className="text-sm">Model <span className="ml-4 float-right">Mustang</span></li>
                     <li className="text-sm">Body <span className="ml-4 float-right">Coupe</span></li>
                     <li className="text-sm">Trim <span className="ml-4 float-right">EcoBoost</span></li>
                     <li className="text-sm">Doors <span className="ml-4 float-right">4</span></li>
                     <li className="text-sm">Exterior Color <span className="ml-4 float-right">Grabber Blue Matelic</span></li>
                  </ul>
               </div>
               <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                  <h3 className="text-lg font-bold text-[#333]">Reviews(10)</h3>
                  <div className="grid md:grid-cols-2 gap-12 mt-6">
                     <div>
                        <div className="space-y-3">
                           <div className="flex items-center">
                              <p className="text-sm text-[#333] font-bold">5.0</p>
                              <svg className="w-5 fill-[#333] ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                              </svg>
                              <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                 <div className="w-2/3 h-full rounded bg-[#333]"></div>
                              </div>
                              <p className="text-sm text-[#333] font-bold ml-3">66%</p>
                           </div>
                           <div className="flex items-center">
                              <p className="text-sm text-[#333] font-bold">4.0</p>
                              <svg className="w-5 fill-[#333] ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                              </svg>
                              <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                 <div className="w-1/3 h-full rounded bg-[#333]"></div>
                              </div>
                              <p className="text-sm text-[#333] font-bold ml-3">33%</p>
                           </div>
                           <div className="flex items-center">
                              <p className="text-sm text-[#333] font-bold">3.0</p>
                              <svg className="w-5 fill-[#333] ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                              </svg>
                              <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                 <div className="w-1/6 h-full rounded bg-[#333]"></div>
                              </div>
                              <p className="text-sm text-[#333] font-bold ml-3">16%</p>
                           </div>
                           <div className="flex items-center">
                              <p className="text-sm text-[#333] font-bold">2.0</p>
                              <svg className="w-5 fill-[#333] ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                              </svg>
                              <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                 <div className="w-1/12 h-full rounded bg-[#333]"></div>
                              </div>
                              <p className="text-sm text-[#333] font-bold ml-3">8%</p>
                           </div>
                           <div className="flex items-center">
                              <p className="text-sm text-[#333] font-bold">1.0</p>
                              <svg className="w-5 fill-[#333] ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                              </svg>
                              <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                 <div className="w-[6%] h-full rounded bg-[#333]"></div>
                              </div>
                              <p className="text-sm text-[#333] font-bold ml-3">6%</p>
                           </div>
                        </div>
                     </div>
                     <div className="">
                        <div className="flex items-start">
                           <img src="https://readymadeui.com/team-2.webp" className="w-12 h-12 rounded-full border-2 border-white" />
                           <div className="ml-3">
                              <h4 className="text-sm font-bold text-[#333]">John Doe</h4>
                              <div className="flex space-x-1 mt-1">
                                 <svg className="w-4 fill-[#333]" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                 </svg>
                                 <svg className="w-4 fill-[#333]" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                 </svg>
                                 <svg className="w-4 fill-[#333]" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                 </svg>
                                 <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                 </svg>
                                 <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                 </svg>
                                 <p className="text-xs !ml-2 font-semibold text-[#333]">2 mins ago</p>
                              </div>
                              <p className="text-sm mt-4 text-[#333]">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                           </div>
                        </div>
                        <button type="button" className="w-full mt-10 px-4 py-2.5 bg-transparent hover:bg-gray-50 border border-[#333] text-[#333] font-bold rounded">Read all reviews</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </>
   )
}

export default page