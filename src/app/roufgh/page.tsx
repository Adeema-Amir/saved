/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react';
function MyPage() {
   
    return (
        <>
                <br /><br /><br /><br /><br />
                <p></p>
                <div className='grid gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
                    <div className="">
                        <h1 className='text-md font-medium px-6 text-slate-500 mt-4'>Search Term / Auction ID</h1>
                        <input className='px-4 ml-6 mt-3 h-12 w-23 bg-slate-50 rounded-xl' placeholder='Enter Keyword OR City' type="text" name="" id="" />
                    </div>
                    <div className="">
                        <h1 className='text-md font-medium px-6 text-slate-500 mt-4'>Region</h1>
                        <select className='px-4 ml-6 mt-3 h-12 w-64 bg-slate-50 rounded-xl' name="" id="">
                            <option value="">
                                Please Select
                            </option>
                            <option value="">
                                United States
                            </option>
                            <option value="">
                                U.S. Virgin Islands
                            </option>
                        </select>
                    </div>
                    <div className="">
                        <h1 className='text-md font-medium px-6 text-slate-500 mt-4'>State</h1>
                        <select className='px-4 ml-6 mt-3 h-12 w-64 bg-slate-50 rounded-xl' name="" id="">
                        <option value="">
                                Please Select
                            </option>
                            <option value="">Used</option>
                            <option value="">New</option>
                            <option value="">Used</option>
                            <option value="">New</option>
                            <option value="">Used</option>
                            <option value="">New</option>
                            <option value="">Used</option>
                            <option value="">New</option>
                            <option value="">Used</option>
                            <option value="">New</option>
                            <option value="">Used</option>
                            <option value="">New</option>
                        </select>
                    </div>
                    <div className="">
                        <h1 className='text-md font-medium px-6 text-slate-500 mt-4'>Zip</h1>
                        <input className='px-4 ml-6 mt-3 h-12 w-23 bg-slate-50 rounded-xl' placeholder='Enter Zip / Postal Code' type="text" name="" id="" />
                    </div>
                </div>
                <br />
                <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
                    <div className="">
                        <h1 className='text-md font-medium px-6 text-slate-500 mt-4'>Sort By</h1>
                        <select className='px-4 ml-6 mt-3 h-12 w-64 bg-slate-50 rounded-xl' name="" id="">
                        <option value="">
                                Please Select
                            </option>
                            <option value="">
                                Highest Bid
                            </option>
                            <option value="">
                                Lowest Bid
                            </option>
                            <option value="">
                                Newest
                            </option>
                            <option value="">
                                Closing Soon
                            </option>
                        </select>
                    </div>
                    <div className="">
                        <button
            className="mt-14 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-blue-700 uppercase transition bg-transparent border-2 border-blue-700 rounded ripple hover:bg-blue-100 focus:outline-none"
          >
            Submit
          </button>
                    </div>



                </div>
        </>
    );
}

export default MyPage;