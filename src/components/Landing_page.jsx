import React from "react";
import landingImg from "../assets/login.png";
import Client_page from "./Client_page";

const Landing_page = () => {
  return (
    <div className="mt-5 container mx-auto p-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <p className="bg-gradient-to-r from-emerald-500 to-emerald-900 text-white rounded p-1">
            STUBGORUP
          </p>
        </div>
        <div className="mt-2 md:mt-0">
          <p>7(50)022336</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-5">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 lg:pr-4">
          <h1 className="font-bold text-2xl mb-2">
            Make more money from Google AdWords
          </h1>
          <ul className="list-decimal pl-5 mb-4 flex flex-col gap-4">
            <li>Cut wasted spend</li>
            <li>Beat your competition</li>
            <li>
              Find out how much business AdWords is really sending you
              (Including phone calls)
            </li>
          </ul>

          <p className="mb-4">
            Our team of AdWords and PPC advertising experts—ranked by Google in
            the top 3% of Google's Partners worldwide—have done this for
            countless small, medium, and large businesses around the world.
          </p>

          <img
            src={landingImg}
            alt="images"
            className="h-auto w-full lg:h-[20rem] lg:w-[40rem] mb-4 object-contain"
          />

          <h1 className="font-bold text-xl mb-2">
            Not Using Google AdWords Yet?
          </h1>

          <ul className="list-decimal pl-5 flex flex-col gap-4">
            <li>Let's talk about the best strategy for you</li>
            <li>
              We can research your market and give you broad search volume and
              cost-per-click estimates.
            </li>
            <li>
              We'll explain how Google AdWords works, and the best way to use it
              to make you money.
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 lg:pl-4 mt-5 lg:mt-0">
          <div className="bg-emerald-700 text-white p-4 rounded">
            <h3 className="font-bold text-2xl mb-2 text-center">
              Request Your Free Evaluation
            </h3>
            <p className="text-center">
              Find out how to save and make more money
            </p>
            <p className="text-center">
              from Google AdWords{" "}
              <span className="border-b-2">$500 value!</span>
            </p>
          </div>
          <div className="bg-emerald-300  rounded">
            <form action="" className="p-5">
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border rounded"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border rounded"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-2 border rounded"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="website"
                >
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  className="w-full p-2 border rounded"
                />
              </div>
            </form>
          </div>
          <div className="bg-emerald-700 text-white p-4 rounded flex flex-col items-center ">
            <button className="bg-orange-500 border-1 border-black p-2 font-bold mb-2">
              GET A FREE EVALUATION
            </button>
            <p className="text-center font-bold">We Guarantee 100% Privacy</p>
            <p className="text-center">Your information will not be shared</p>

            <p className="mt-2 text-xl font-bold">Call Us with Questions!</p>
            <p>Phone: (888) 545-8404</p>
            <p>Hours: 9am-5pm (CT)</p>
            <p>Days: Monday-Friday</p>
          </div>
        </div>
      </div>
      <hr className="mt-5" />

      <Client_page />
    </div>
  );
};

export default Landing_page;
