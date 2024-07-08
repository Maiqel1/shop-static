import React from 'react';
// import displayPic1 from '../assets/images/img6.png';
// import displayPic2 from '../assets/images/img7.png';
// import displayPic3 from '../assets/images/img5.png';

function DisplaySection() {
  return (
    <div className='d-none d-sm-none d-md-none d-lg-block'>
      <div className='d-flex flex-column flex-md-row align-items-center g-0'>
        <div className='flex-fill displayImg1'>
          {/* <img className='img-fluid' src={displayPic1} alt="Display 1" /> */}
          <div className='bg-white displayImg1Div '>Men</div>
        </div>
        <div className='flex-fill displayImg2'>
          {/* <img className='img-fluid' src={displayPic2} alt="Display 2" /> */}
          <div className='bg-white displayImg2Div '>Sneakers</div>

        </div>
        <div className='flex-fill displayImg3'>
          {/* <img className='img-fluid' src={displayPic3} alt="Display 3" /> */}
          <div className='bg-white displayImg3Div '>Women</div>

        </div>
      </div>
    </div>
  );
}

export default DisplaySection;



// function DisplaySection() {
//   return (
//     <div className='row g-0'>
//       <div className='col-12 col-md-4 mx-auto col-lg-4'>
//         <img className='img-fluid w-100' src={displayPic1} alt="Display 1" />
//       </div>
//       <div className='col-12 col-md-4 mx-auto my-3 my-md-0 my-lg-0 col-lg-4'>
//         <img className='img-fluid w-100' src={displayPic2} alt="Display 2" />
//       </div>
//       <div className='col-12 col-md-4 mx-auto col-lg-4'>
//         <img className='img-fluid w-100' src={displayPic3} alt="Display 3" />
//       </div>
//     </div>
//   );
// }

// export default DisplaySection;
