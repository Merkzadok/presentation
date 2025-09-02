// import React from "react";

// interface SlideProps {
//   slide: {
//     title: string;
//     content: string;
//     image: string;
//     imageAlt: string;
//   };
//   isActive: boolean;
// }

// const Slide: React.FC<SlideProps> = ({ slide, isActive }) => {
//   return (
//     <div className="min-w-full h-full flex flex-col lg:flex-row">
//       {/* Text Section */}
//       <div className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-16">
//         <div
//           className={`max-w-2xl transition-all duration-1000 ${
//             isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//         >
//           <h1
//             className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 md:mb-8
//                          leading-tight"
//           >
//             <span className="bg-gradient-to-r from-teal-300 via-green-300 to-green-500 bg-clip-text text-transparent">
//               {slide.title}
//             </span>
//           </h1>

//           <p
//             className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12
//                         leading-relaxed font-light whitespace-pre-line"
//           >
//             {slide.content}
//           </p>
//         </div>
//       </div>

//       {/* Image Section */}
//       <div className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-16">
//         <div
//           className={`relative w-full max-w-lg lg:max-w-xl transition-all duration-1000 delay-300 ${
//             isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
//           }`}
//         >
//           <div
//             className="relative overflow-hidden rounded-2xl shadow-2xl
//                           transform transition-all duration-500 hover:scale-105
//                           hover:shadow-primary/20"
//           >
//             <img
//               src={slide.image}
//               alt={slide.imageAlt}
//               className="w-full h-64 md:h-80 lg:h-96 object-cover
//                          transition-transform duration-700 hover:scale-110"
//               loading="lazy"
//             />

//             {/* Image Overlay */}
//             <div
//               className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent
//                            opacity-0 hover:opacity-100 transition-opacity duration-300"
//             />
//           </div>

//           {/* Decorative Elements */}
//           <div
//             className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20
//                           rounded-full blur-xl animate-pulse"
//           />
//           <div
//             className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20
//                           rounded-full blur-xl animate-pulse delay-1000"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slide;
import React from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

interface SlideProps {
  slide: {
    title: string;
    content: string;
    image: string;
    imageAlt: string;
    isTeamSlide?: boolean;
    teamMembers?: TeamMember[];
  };
  isActive: boolean;
}

const TeamMemberCard: React.FC<{
  member: TeamMember;
  index: number;
  isActive: boolean;
}> = ({ member, index, isActive }) => {
  return (
    <div
      className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm 
                  rounded-xl p-6 border border-white/20 hover:border-green-400/50
                  transition-all duration-500 hover:transform hover:scale-105
                  hover:shadow-xl hover:shadow-green-400/20 group
                  ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
      style={{
        transitionDelay: isActive ? `${index * 150}ms` : "0ms",
      }}
    >
      <div className="relative mb-4 mx-auto w-24 h-24 rounded-full overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-300 
                     group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://ui-avatars.com/api/?name=${member.name}&background=10b981&color=ffffff&size=96`;
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-green-600/30 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      <div className="text-center">
        <h3
          className="text-white font-semibold text-lg mb-1 group-hover:text-green-300 
                       transition-colors duration-300"
        >
          {member.name}
        </h3>
        <p className="text-green-400 font-medium text-sm mb-2">{member.role}</p>
        <p className="text-white/70 text-xs leading-relaxed">
          {member.description}
        </p>
      </div>

      {/* Decorative elements */}
      <div
        className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full 
                      opacity-0 group-hover:opacity-100 transition-all duration-300 
                      group-hover:animate-pulse"
      />
    </div>
  );
};

const Slide: React.FC<SlideProps> = ({ slide, isActive }) => {
  if (slide.isTeamSlide) {
    return (
      <div className="min-w-full h-full flex flex-col justify-center p-6 md:p-12 lg:p-16">
        {/* Title Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1
            className={`text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 
                         leading-tight transition-all duration-1000 ${
                           isActive
                             ? "opacity-100 translate-y-0"
                             : "opacity-0 translate-y-8"
                         }`}
          >
            <span className="bg-gradient-to-r from-teal-300 via-green-300 to-green-500 bg-clip-text text-transparent">
              {slide.title}
            </span>
          </h1>

          <p
            className={`text-lg md:text-xl text-white/90 max-w-2xl mx-auto 
                        leading-relaxed font-light whitespace-pre-line
                        transition-all duration-1000 delay-200 ${
                          isActive
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                        }`}
          >
            {slide.content}
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="flex-1 flex items-center justify-center">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 
                          max-w-6xl w-full"
          >
            {slide.teamMembers?.map((member, index) => (
              <TeamMemberCard
                key={index}
                member={member}
                index={index}
                isActive={isActive}
              />
            ))}
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-400/10 
                          rounded-full blur-3xl animate-pulse"
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-teal-400/10 
                          rounded-full blur-3xl animate-pulse delay-1000"
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                          w-64 h-64 bg-green-300/5 rounded-full blur-3xl animate-pulse delay-2000"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-w-full h-full flex flex-col lg:flex-row">
      {/* Text Section */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-16">
        <div
          className={`max-w-2xl transition-all duration-1000 ${
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1
            className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 md:mb-8 
                         leading-tight"
          >
            <span className="bg-gradient-to-r from-teal-300 via-green-300 to-green-500 bg-clip-text text-transparent">
              {slide.title}
            </span>
          </h1>

          <p
            className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 
                        leading-relaxed font-light whitespace-pre-line"
          >
            {slide.content}
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-16">
        <div
          className={`relative w-full max-w-lg lg:max-w-xl transition-all duration-1000 delay-300 ${
            isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <div
            className="relative overflow-hidden rounded-2xl shadow-2xl 
                          transform transition-all duration-500 hover:scale-105 
                          hover:shadow-primary/20"
          >
            <img
              src={slide.image}
              alt={slide.imageAlt}
              className="w-full h-64 md:h-80 lg:h-96 object-cover 
                         transition-transform duration-700 hover:scale-110"
              loading="lazy"
            />

            {/* Image Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent 
                           opacity-0 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          {/* Decorative Elements */}
          <div
            className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 
                          rounded-full blur-xl animate-pulse"
          />
          <div
            className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 
                          rounded-full blur-xl animate-pulse delay-1000"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide;
