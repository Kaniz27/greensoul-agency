import React from 'react';

export default function ImageCollection() {
  const images = [
    "https://cdn.educba.com/academy/wp-content/uploads/2023/07/Digital-Marketing-Stratergies-2.jpg",
    "https://daninstitute.com/wp-content/uploads/2021/08/the-best-digital-marketing-course-certifications-that-will-get-you-hired.jpg",
    "https://img.freepik.com/premium-photo/digital-marketing-business-group-meeting-sitting-together_1297061-9525.jpg",
    "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/10/Digital-Marketing.jpg",
  ];

  return (
    <div className="flex w-full">
      {images.map((url, index) => (
        <div key={index} className="w-1/4">
          <img
            src={url}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
