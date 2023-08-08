import Feed from "@components/Feed";
import React from "react";

const Admin = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-green-500">
            All Appointments
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            View all appointments
          </p>
        </div>
            <Feed />

      </div>
    </section>
  );
};

export default Admin;
