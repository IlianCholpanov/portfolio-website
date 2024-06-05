const achievmentsList = [
  {
    metric: "Projects",
    value: "3",
  },
  {
    metric: "Commits",
    value: "600+",
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
              <h2 className="text-white text-4xl font-bold">
                {achievment.value}
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
