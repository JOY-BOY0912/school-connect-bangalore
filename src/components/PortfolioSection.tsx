const portfolioItems = [
  {
    name: "Green Valley Public School",
    type: "CBSE · Whitefield",
    color: "bg-primary/5",
    url: "https://greenvalleybalaghat.co.in/",
  },
  {
    name: "Sri Vidya Academy",
    type: "State Board · Rajajinagar",
    color: "bg-accent/10",
    url: "https://srivani.edu.in/ramavana/",
  },
  {
    name: "Hope International School",
    type: "CBSE · Electronic City",
    color: "bg-primary/5",
    url: "https://www.hopeinternationalschool.org/",
  },
  {
    name: "Saraswathi Vidyalaya",
    type: "State Board · Basavanagudi",
    color: "bg-accent/10",
    url: "https://www.saraswathividyalaya.edu.in/",
  },
];

const PortfolioSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Some Websites We've Built
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Clean, simple, mobile-friendly. That's all a school website needs to be.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {portfolioItems.map((item, i) => (
            <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow block">
              <div className={`${item.color} h-40 flex items-center justify-center`}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-lg bg-surface mx-auto mb-2 flex items-center justify-center shadow-sm">
                    <span className="font-heading font-bold text-primary text-lg">
                      {item.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">Preview</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-sm text-foreground">{item.name}</h3>
                <p className="text-xs text-muted-foreground">{item.type}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
