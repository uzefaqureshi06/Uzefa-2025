import React from "react";

const Flipbook = () => {
  return (
    <div className="flipbook-container relative flex justify-center mt-10">
      <style>
        {`
        .gallery {
          --d: 10s;
          display: grid;
          place-items: center;
          width: 220px;
          margin-left: 0px;
        }

.gallery > img {
  grid-area: 1/1;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border: 5px solid transparent; /* Set transparent border */
  border-image: linear-gradient(45deg, red, black, white) 1;
  box-shadow: 0 0 4px #0007;
  z-index: 2;
  animation: slide var(--d) infinite, z-order var(--d) infinite steps(1);
}

        .gallery img:last-child {
          animation-name: slide, z-order-last;
        }

        .gallery > img:nth-child(1) { animation-delay: calc(0*var(--d)); --r: 16deg; }
        .gallery > img:nth-child(2) { animation-delay: calc(-0.2*var(--d)); --r: -1deg; }
        .gallery > img:nth-child(3) { animation-delay: calc(-0.4*var(--d)); --r: -19deg; }
        .gallery > img:nth-child(4) { animation-delay: calc(-0.6*var(--d)); --r: 6deg; }
        .gallery > img:nth-child(5) { animation-delay: calc(-0.8*var(--d)); --r: -8deg; }

        @keyframes slide {
          10% { transform: translateX(120%) rotate(var(--r)); }
          0%, 100%, 20% { transform: translateX(0%) rotate(var(--r)); }
        }

        @keyframes z-order {
          10%, 20% { z-index: 1; }
          80% { z-index: 2; }
        }

        @keyframes z-order-last {
          10%, 20% { z-index: 1; }
          90% { z-index: 2; }
        }

        #headline-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
          margin-bottom: 60px;
        }

        #shine {
          font-size: 60px;
          font-weight: bold;
          color: rgba(255, 0, 102, 0.3);
          z-index: 10;
          background: -webkit-gradient(linear, left top, right top, from(#222), to(#222), color-stop(0.5, #fff)) 0 0 no-repeat;
          -webkit-background-size: 150px;
          -webkit-background-clip: text;
          -webkit-animation-name: shine;
          -webkit-animation-duration: 3s;
          -webkit-animation-iteration-count: infinite;
        }

        @-webkit-keyframes shine {
          0%, 10% { background-position: -1000px; }
          20% { background-position: top left; }
          90% { background-position: top right; }
          100% { background-position: 1000px; }
        }
        `}
      </style>

      {/* Image Flipbook Gallery */}
      <div className="gallery">
        <img
          src="https://st4.depositphotos.com/12982378/23616/i/450/depositphotos_236165522-stock-photo-view-blue-cloudy-sky-airplane.jpg"
          alt="A lovely kiss in the night"
        />
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/023/947/250/small_2x/world-homeopathy-day-abstract-background-illustration-generative-ai-photo.jpg"
          alt="A woman inside a car"
        />
        <img
          src="https://c4.wallpaperflare.com/wallpaper/103/248/971/fitness-girls-hd-4k-wallpaper-preview.jpg"
          alt="A baby"
        />
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/213/462/desktop-wallpaper-gym-boy-fitness-boy-thumbnail.jpg"
          alt="A girl in the forest"
        />
        <img
          src="https://r2.starryai.com/results/1047212241/f0c4c609-170d-44cc-a795-2933f1b022d0.webp"
          alt="A girl"
        />
        <div>
+
        </div>
      </div>
    </div>
  );
};

export default Flipbook;
