// // import React, { useState } from 'react';
// // import project1 from './project1.jpeg';

// // const Projects = () => {
// //   const projectUrl = 'https://sunny-mooncake-ff20b1.netlify.app/';

// //   const [isFullScreen, setIsFullScreen] = useState(false);
// //   const [fullScreenImage, setFullScreenImage] = useState(null);

// //   const toggleFullScreen = (image) => {
// //     setFullScreenImage(image);
// //     setIsFullScreen(!isFullScreen);
// //   };

// //   return (
// //     <div className="container mt-5">
// //       <h1>Projects</h1>
// //       <div className="row">
// //         <div className="col-md-4">
// //           <div className="card mb-4">
// //             <div className="card-body">
// //               <h5 className="card-title">Project 1</h5>
// //               <img
// //                 src={project1}
// //                 style={{ width: "100%" }}
// //                 alt="Project 1"
// //                 onClick={() => toggleFullScreen(project1)}
// //               />
// //               <p className="card-text">
// //                 A system/web application where you have basic components of website with Navigation bar flexible for all types of screens.
// //                 • Website has all required fields like navigation bar, services, contact, about us page
// //               </p>
// //               <a href={projectUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
// //                 Visit Website
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="col-md-4">
// //           <div className="card mb-4">
// //             <div className="card-body">
// //               <h5 className="card-title">Project 2</h5>
// //               <p className="card-text">Description of Project 2.</p>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="col-md-4">
// //           <div className="card mb-4">
// //             <div className="card-body">
// //               <h5 className="card-title">Project 3</h5>
// //               <p className="card-text">Description of Project 3.</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       {isFullScreen && (
// //         <div className="full-screen-overlay" onClick={() => toggleFullScreen(null)}>
// //           <div className="full-screen-image-container">
// //             <img
// //               src={fullScreenImage}
// //               alt="Full Screen"
// //               className="full-screen-image"
// //             />
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Projects;
// import React, { useState } from 'react';
// import project1 from './project1.jpeg';
// import ImageModal from './imagemodal'; // Import the ImageModal component

// const Projects = () => {
//   const projectUrl = 'https://sunny-mooncake-ff20b1.netlify.app/';

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [fullScreenImage, setFullScreenImage] = useState(null);

//   const openModal = (image) => {
//     setFullScreenImage(image);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setFullScreenImage(null);
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="container mt-5">
//       <h1>Projects</h1>
//       <div className="row">
//         <div className="col-md-4">
//           <div className="card mb-4">
//             <div className="card-body">
//               <h5 className="card-title">Project 1</h5>
//               <img
//                 src={project1}
//                 style={{ width: "100%", cursor: "pointer" }}
//                 alt="Project 1"
//                 onClick={() => openModal(project1)}
//               />
//               <p className="card-text">
//                 A system/web application where you have basic components of website with Navigation bar flexible for all types of screens.
//                 • Website has all required fields like navigation bar, services, contact, about us page
//               </p>
//               <a href={projectUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
//                 Visit Website
//               </a>
//             </div>
//           </div>
//         </div>
//         {/* Other projects... */}
//       </div>

//       {isModalOpen && (
//         <ImageModal image={fullScreenImage} onClose={closeModal} />
//       )}
//     </div>
//   );
// };

// export default Projects;

import React, { useState } from 'react';
import project1 from './project1.jpeg';

const Projects = () => {
  const projectUrl = 'https://sunny-mooncake-ff20b1.netlify.app/';

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const toggleFullScreen = (image) => {
    setFullScreenImage(image);
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="container mt-5">
      <h1>Projects</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Project 1</h5>
              <img
                src={project1}
                style={{ width: "100%", cursor: "pointer" }}
                alt="Project 1"
                onClick={() => toggleFullScreen(project1)}
              />
              <p className="card-text">
                A system/web application where you have basic components of a website with a Navigation bar flexible for all types of screens.
                • Website has all required fields like navigation bar, services, contact, about us page
              </p>
              <a href={projectUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </div>
          </div>
        </div>
        {/* Other projects... */}
      </div>

      {isFullScreen && (
        <div className="full-screen-modal">
          <div className="full-screen-image-container">
            <img
              src={fullScreenImage}
              alt="Full Screen"
              className="full-screen-image"
            />
            <button onClick={() => toggleFullScreen(null)} className="close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
