import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import plus from "../imageGallery/plus.png";
import Community from "../navbar/Community";

const imageGroups = [
  [
    { src: plus, name: "ADD", isAdd: true },
    { src: "https://i.pinimg.com/736x/81/2e/fb/812efbde02c193af043f514a4c460121.jpg", name: "Business", path: "/allBlogs?category=67d5469a8a560c894c08649e" },
    { src: "https://i.pinimg.com/736x/b4/a9/00/b4a900efc626c50ae07dceccbb3c8072.jpg", name: "Health"  , path: "/allBlogs?category=67d546af8a560c894c0864a0"},
  ],
  [
    { src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60", name: "Food & Cooking", path: "/allBlogs?category=67d546818a560c894c086498"},
    { src: "https://i.pinimg.com/736x/3b/a1/80/3ba180c303457e69b52a239a3fd8fb28.jpg", name: "GYM" , path: "/allBlogs?category=67d546d68a560c894c0864a6" } ,
    { src: "https://i.pinimg.com/736x/21/9c/52/219c5293d39b0b835fc6b7699bd4b3c3.jpg", name: "Entertainment" , path: "/allBlogs?category=67d54d528a560c894c0864af"},
  ],
  [
    { src: "https://i.pinimg.com/736x/f6/3e/a4/f63ea4d1956893bc67daff70d13b390f.jpg", name: "Education" , path: "/allBlogs?category=education"},
    { src: "https://i.pinimg.com/736x/40/78/e2/4078e2f7a62704154c433c0172b2643e.jpg", name: "Technology"  , path: "/allBlogs?category=67d546c08a560c894c0864a2"},
    { src: "https://i.pinimg.com/736x/c2/7f/50/c27f501636324b8fe1195a559c818f1a.jpg", name: "Science"  , path: "/allBlogs?category=67d5468b8a560c894c08649a"},
  ],
  [
    { src: "https://i.pinimg.com/736x/13/9e/dc/139edc995133aabdfbdc04360daef61d.jpg", name: "Bitcoin" , path: "/allBlogs?category=67d546cd8a560c894c0864a4" },
    { src: "https://i.pinimg.com/736x/90/5e/1c/905e1c9b56960da040b4ff61b48e661e.jpg", name: "DIY" , path: "/allBlogs?category=67da17527ffe420d9b12bda4"},
    { src: "https://i.pinimg.com/736x/ec/2e/84/ec2e84020e83be0a1d27b6067b8bb1b5.jpg", name: "Travelling" , path: "/allBlogs?category=67d546938a560c894c08649c"},
  ],
];

const MasonryGridGallery = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
const handleClick =(path)=>{
navigate(path)
}
  useEffect(() => {
    // Preload images
    const loadImages = async () => {
      const promises = imageGroups.flat().map((img) => {
        return new Promise((resolve) => {
          const image = new Image();
          image.src = img.src;
          image.onload = resolve;
          image.onerror = resolve;
        });
      });

      await Promise.all(promises);
      setLoading(false);
    };

    loadImages();
  }, []);

  return (
    <>
      {loading ? (
        // ✅ Loader ✅
        <div className="flex justify-center items-center h-screen w-screen bg-black">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-[9rem]">
          {imageGroups.map((group, index) => (
            <div key={index} className="grid gap-4">
              {group.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className={`relative group ${
                    image.isAdd ? "border-4 rounded-[10px] border-dashed border bg-black cursor-pointer" : ""
                  }`}
                  onClick={() => {
                    if (image.isAdd) {
                      navigate("/add"); 
                    } else {
                      handleClick(image.path); 
                    }
                  }}
                >
                  <img
                    className="h-auto w-full rounded-lg object-cover object-center"
                    src={image.src}
                    alt={image.name}
                 
                  />
                  <div
                    className={`${
                      image.isAdd ? "rounded-[10px]" : ""
                    } absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`}
                  >
                    <span className="text-white text-lg font-semibold">{image.name}</span>
                  </div>
                </div>
              ))}
            </div>
            
          ))}
    
 
        </div>
      )}
      <Community/>
  
    </>
  );
};

export default MasonryGridGallery;
