const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "50K+", label: "Tickets Resolved" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];

const Stats = () => {
  return (
    <section className="py-24 max-w-[1440px] mx-auto px-4">
      <div className="container-app">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl shadow-sm border border-border"
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
