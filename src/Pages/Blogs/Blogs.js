import React from "react";

import Compare from "../../assets/images/blog/compare.jpg";

const Blogs = () => {
  return (
    <div className="mt-12">
      <div className="card w-5/6 bg-base-100 shadow-xl mx-auto">
        <div className="card-body">
          <h2 className="card-title">1.What are the different ways to manage a state in a React application?</h2>
          <p>There are four main types of state you need to properly manage in your React apps:</p>
          <h2 className="text-xl font-semibold">Local State</h2>
          <h2 className="text-xl font-semibold">Global State</h2>
          <h2 className="text-xl font-semibold">Server State</h2>
          <h2 className="text-xl font-semibold">URL State</h2>

          <div className="mt-12">
            <h1 className="text-xl font-semibold">2.How does prototypical inheritance work?</h1>
            <p>
              The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object
              can inherit the properties and methods of another object.
            </p>
          </div>

          <div className="mt-12">
            <h1 className="text-xl font-semibold">3.What is a unit test? Why should we write unit tests?</h1>
            <p>
              The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an
              important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult
              to find in later testing stages.
            </p>
          </div>

          <div className="mt-12">
            <h1 className="text-xl font-semibold">4.React vs. Angular vs. Vue?</h1>
            <img src={Compare} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
