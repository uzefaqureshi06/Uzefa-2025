import React from "react";
import plus from '../imageGallery/plus.png'
const imageGroups = [
  [
   {
      src: "https://res.cloudinary.com/dxqt7tfgl/image/upload/v1742145892/Uzefa/rk73sev19fuj42huwlxw.png",
      name: "ADD",
      isAdd: true
    },
    
    {
    src: "https://i.pinimg.com/736x/81/2e/fb/812efbde02c193af043f514a4c460121.jpg",

name:"Business"
    },
    {
src:"https://i.pinimg.com/736x/e5/c5/fb/e5c5fbac4c578ce7f043f3a1839a9c2b.jpg",
name:"Health"
    },
    
  ],
  [
    {
        src:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    name:"Food&Cooking"
    },
    {
    src:"https://i.pinimg.com/736x/9f/c4/a6/9fc4a66bb39ea1ac2f81cddff46afca3.jpg",
    name:"GYM"
},
    
    {
   src: "https://i.pinimg.com/736x/b7/90/a5/b790a5f0481238f413bef52cd5fe4939.jpg",
    name:"Entertainment"
    }
    
  ],
  [
    {
        src:"https://i.pinimg.com/736x/f6/3e/a4/f63ea4d1956893bc67daff70d13b390f.jpg",
    name:"Education"
    },
    {
       src: "https://i.pinimg.com/736x/40/78/e2/4078e2f7a62704154c433c0172b2643e.jpg",
name:"Technology"
    },
    {

      src:  "https://i.pinimg.com/736x/39/26/d0/3926d061bfc3bec2a1766ce12f5b59f8.jpg",
name:"Science"
    }
  ],
  [
    {
      src:  "https://i.pinimg.com/736x/13/9e/dc/139edc995133aabdfbdc04360daef61d.jpg",
name:"Bitcoin"
    },
    {
      src: "https://img.freepik.com/free-photo/make-up-artist-applying-liquid-eyeliner-with-brush_1150-11740.jpg?t=st=1742139164~exp=1742142764~hmac=71f12ff002ce5b77553d529d539e003d204f63ba2e650ba0674fc1829ae4bc52&w=996",
       name:"Entertainment"
       },
       
    {
   src: "https://i.pinimg.com/736x/ee/b1/05/eeb105ed134a32db364a97d9333db57e.jpg",
name:"Travelling"
    }
  ],
];

const MasonryGridGallery = () => {
  return (

    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-[9rem]">
      {imageGroups.map((group, index) => (
        <div key={index} className="grid gap-4">
          {group.map((image, imgIndex) => (
         <div
         key={imgIndex}
         className={`relative group ${image.isAdd ? 'border-2 border-dashed border-white' : ''}`}
       >
              <img
                className="h-auto w-full rounded-lg object-cover object-center"
                src={image.src}
                alt={image.name}
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-lg font-semibold">{image.name}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MasonryGridGallery;
