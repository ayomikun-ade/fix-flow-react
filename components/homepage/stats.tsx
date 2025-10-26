const stats = [
  { value: "100", label: "Active Users" },
  { value: "1K", label: "Tickets Resolved" },
  { value: "4.5", label: "Star Reviews" },
  { value: "24/7", label: "Support" },
];

const Stats = () => {
  return (
    <section className="py-24 max-w-[1440px] mx-auto px-4 relative">
      <div className="container-app">
        <div className="w-40 h-40 rounded-full bg-[#f2f2f2] absolute left-0 top-0" />
        <div className="w-40 h-40 rounded-full bg-[#f2f2f2] absolute right-0 bottom-0" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center z-10 p-6 rounded-xl bg-white shadow-sm border border-border hover:scale-105 transition-transform duration-400"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
