import previewGreenvalley from "@/assets/preview-greenvalley.jpg";
import previewRoyal from "@/assets/preview-royal.png";
import previewNewOxford from "@/assets/preview-newoxford.png";

const portfolioItems = [
  {
    name: "Green Valley Public School",
    type: "CBSE · Whitefield",
    url: "https://greenvalleybalaghat.co.in/",
    image: previewGreenvalley,
  },
  {
    name: "Royal Public School",
    type: "CBSE · J P Nagar",
    url: "https://royalpublicschooljpn.in",
    image: previewRoyal,
  },
  {
    name: "New Oxford School",
    type: "CBSE · Sarjapura",
    url: "https://newoxfordschool.in",
    image: previewNewOxford,
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {portfolioItems.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow block group"
            >
              <div className="h-40 overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={`${item.name} website preview`}
                  loading="lazy"
                  width={640}
                  height={512}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
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
