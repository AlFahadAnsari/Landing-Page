import React from "react";
import avatar from "../assets/avatar.webp";

const Client_page = () => {
  return (
    <>
      <h1 className="text-center font-bold text-2xl my-4">
        What Our Clients Are Saying
      </h1>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 lg:gap-16 md:gap-12 sm:gap-8 px-4">
        <div className="p-6 border rounded-lg shadow-md bg-white">
          <p>
            "So glad we chose to pass off our ad campaign management to
            StubGroup. Our account manager is quick to put any requests on our
            campaigns into effect, and more importantly, they give us the
            information we need to understand our ad campaigns."
          </p>
          <div className="flex items-center mt-4">
            <img
              src={avatar}
              alt="Client Avatar"
              className="w-12 h-12 rounded-full mr-4"
            />
            <p>
              <span className="font-bold">Mac Spiller</span> - Maddox Industrial
              Transformer
            </p>
          </div>
        </div>

        <div className="p-6 border rounded-lg shadow-md bg-white">
          <p>
            "StubGroup has significantly improved our ad performance. Their team
            is responsive, professional, and always available to provide the
            insights we need."
          </p>
          <div className="flex items-center mt-4">
            <img
              src={avatar}
              alt="Client Avatar"
              className="w-12 h-12 rounded-full mr-4"
            />
            <p>
              <span className="font-bold">Jane Doe</span> - ACME Corp
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 lg:gap-16 md:gap-12 sm:gap-8 px-4 mt-5">
        <div className="p-6 border rounded-lg shadow-md bg-white">
          <p>
            "StubGroup's expertise has been invaluable to our business. Their
            dedication to understanding our needs and delivering results is
            unmatched."
          </p>
          <div className="flex items-center mt-4">
            <img
              src={avatar}
              alt="Client Avatar"
              className="w-12 h-12 rounded-full mr-4"
            />
            <p>
              <span className="font-bold">John Smith</span> - Tech Innovators
            </p>
          </div>
        </div>

        <div className="p-6 border rounded-lg shadow-md bg-white">
          <p>
            "Working with StubGroup has been a game-changer for our marketing
            strategy. Their insights and execution have led to a significant
            increase in our ROI."
          </p>
          <div className="flex items-center mt-4">
            <img
              src={avatar}
              alt="Client Avatar"
              className="w-12 h-12 rounded-full mr-4"
            />
            <p>
              <span className="font-bold">Emily Davis</span> - Creative Solutions
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client_page;
