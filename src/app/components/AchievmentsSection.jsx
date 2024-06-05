"use client";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievmentsList = [
  {
    metric: "Projects",
    value: "3",
  },
  {
    metric: "Commits",
    value: "600",
    postfix: "+",
  },
  {
    metric: "Years of experience",
    value: "2",
  },
];

function AchievmentsSection() {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievmentsList.map((achievment, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievment.value)}
                  locale="eu-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tension: 140 * (index + 1),
                    };
                  }}
                />
                {achievment.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievment.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AchievmentsSection;
