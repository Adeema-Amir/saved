/* eslint-disable @next/next/no-img-element */
import React from 'react'

function page() {
  return (

    <>
      {/* <div className="row text-[#384047] font-sans w-96">
        <div className="col-md-12">
          <form action="" method="">
            <fieldset>
              <h1 className='text-center mt-0 mb-[30px] mx-0'> Sign Up </h1>
             
              <label htmlFor="name" className='block mb-2'>Name:</label>
              <input type="text" className='text-base h-auto w-full bg-[#e8eeef] text-[#8a97a0] shadow-[0_1px_0_rgba(0,0,0,0.03)_inset] mb-[30px] m-0 p-[15px] border-[none]' id="name" name="user_name" />

              <label htmlFor="email" className='block mb-2'>Email:</label>
              <input type="email" className='text-base h-auto w-full bg-[#e8eeef] text-[#8a97a0] shadow-[0_1px_0_rgba(0,0,0,0.03)_inset] mb-[30px] m-0 p-[15px] border-[none]' id="email" name="user_email" />

              <label htmlFor="password" className='block mb-2'>Password:</label>
              <input type="password" className='text-base h-auto w-full bg-[#e8eeef] text-[#8a97a0] shadow-[0_1px_0_rgba(0,0,0,0.03)_inset] mb-[30px] m-0 p-[15px] border-[none]' id="password" name="user_password" />

              <button type="submit" className="text-white bg-[#4bc970] text-lg text-center not-italic w-full border shadow-[0_-1px_0_rgba(255,255,255,0.1)_inset] mb-2.5 pt-[19px] pb-[18px] px-[39px] rounded-[5px] border-solid border-[#3ac162] border-[1px_1px_3px]">Sign Up</button>
            </fieldset>
          </form>
        </div>
      </div> */}
      <div className="font-[sans-serif] text-[#333]">
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
            <div className="md:max-w-md w-full sm:px-6 py-4">
              <form>
                <div className="mb-12">
                  <h3 className="text-3xl font-extrabold">Contact Us</h3>
                </div>
                <div>
                  <label className="text-sm block mb-2">Customer Name</label>
                  <div className="relative flex items-center">
                    <input name="customer_name" type="text" required className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none" placeholder="Enter Customer Name" />
                  </div>
                </div>

                <div className="mt-8">
                  <label className="text-sm block mb-2">Phone Number</label>
                  <div className="relative flex items-center">
                    <input name="phone_number" required className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none" placeholder="Enter Phone Number" />
                  </div>

                  <div className="mt-8">
                    <label className="text-sm block mb-2">Email Address</label>
                    <div className="relative flex items-center">
                      <input name="email_address" required className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none" placeholder="Enter Email Address" />
                    </div>
                  </div>
                </div>
                <br /><br />
                <button type="button" className="w-full shadow-xl py-2.5 px-4 text-md font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  Send your message
                </button>

              </form>
            </div>
            <div className="md:h-full max-md:mt-10 rounded-xl lg:p-12 p-8">
              <img src="./contact.png" className="w-full h-full object-contain" alt="login-image" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default page;
