import React from "react";
import balconyImage from "../assets/images/balcony.jpg"

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Exploring the Best of Our City",
      excerpt: "Discover the must-visit spots near our hotel for an unforgettable stay.",
      image: balconyImage,
    },
    {
      id: 2,
      title: "Relax and Unwind at Our Spa",
      excerpt: "Experience ultimate relaxation with our exclusive spa packages.",
      image: balconyImage,
    },
    {
      id: 3,
      title: "Local Culinary Delights",
      excerpt: "A guide to the finest dining experiences in the neighborhood.",
      image: balconyImage,
    },
  ];

  return (
    <section id="blog" className="py-24 bg-cream">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Hotel Blog
          </h2>
          <p className="text-gray-600 mt-4">
            Stay updated with the latest news, tips, and experiences from our hotel.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Blog Post Image */}
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              {/* Blog Post Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-600 mt-2">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-block mt-4 text-orange-500 font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
