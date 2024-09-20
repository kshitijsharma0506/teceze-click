import { Infinity, Zap, Waves, Rocket, Calendar, DollarSign, Settings, PiggyBank, Crown } from 'lucide-react';


const styles = {
  container: {
    backgroundColor: '#0e0e0e',
    color: 'white',
    minHeight: '100vh',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  },
  section: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  heading: {
    color: '#b1f95c',
    fontSize: '1.2rem',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },
  capabilitiesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '1rem',
    marginBottom: '3rem',
  },
  capability: {
    backgroundColor: '#b1f95c',
    color: 'black',
    borderRadius: '9999px',
    padding: '0.5rem 1rem',
    textAlign: 'center',
  },
  benefitsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
    alignItems: 'center',
  },
  benefitsTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#b1f95c',
    color: 'black',
    border: 'none',
    borderRadius: '9999px',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

const DesignCapabilities = () => {
  const capabilities = [
    "Web design & UI", "Social media visuals", "Infographics", "Design system",
    "Email design", "Stationery", "Icons", "Packaging & merch", "Signage",
    "Brochures", "Logos & branding", "Digital ads", "Wireframes"
  ];

  const features = [
    {
      icon: <Infinity className="w-8 h-8 text-lime-400" />,
      title: "1. On-demand requests",
      description: "Put all your requests in the design queue in Trello, and we'll knock them out 1 by 1.",
    },
    {
      icon: <Zap className="w-8 h-8 text-lime-400" />,
      title: "2. Top-notch quality",
      description: "High-end work from a dedicated team of senior designers that's always available when you need it.",
    },
    {
      icon: <Waves className="w-8 h-8 text-lime-400" />,
      title: "3. Powered by - Webflow",
      description: "We build every site on Webflow, making them dynamic, accessible, and easily scalable. It's easy for you like Squarespace but better.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-lime-400" />,
      title: "4. Fast. Responsive. Reliable.",
      description: "Get regular updates on your projects and can expect to receive your designs within 2-3 days.",
    },
    {
      icon: <Calendar className="w-8 h-8 text-lime-400" />,
      title: "5. No Lock in contracts",
      description: "Pay the same every month, no surprises. You can use it for as long as you want and cancel anytime.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-lime-400" />,
      title: "6. Great value for money",
      description: "Get the power of dedicated design team at fraction of the cost of full-time employee. ($54k/yr vs. $112k/yr).",
    },
    {
      icon: <Settings className="w-8 h-8 text-lime-400" />,
      title: "7. Customized for you",
      description: "We design and build custom for you. We're never starting from a template unless you want that; you don't, right?",
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-lime-400" />,
      title: "8. Creative paying",
      description: "We're here when you need us and not on payroll when you don't.",
    },
    {
      icon: <Crown className="w-8 h-8 text-lime-400" />,
      title: "9. Expert turnovers",
      description: "You're getting 10+ years of design experience with every request. No hand-holding required.",
    },
  ];


  return (
    <>
      <div style={styles.container}>
        <div style={styles.section}>
          <h2 style={styles.heading}>OUR CAPABILITIES</h2>
          <h1 style={styles.title}>We can help you with...</h1>
          <div style={styles.capabilitiesGrid}>
            {capabilities.map((capability, index) => (
              <div key={index} style={styles.capability}>{capability}</div>
            ))}
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.heading}>BENEFITS</h2>
          <div style={styles.benefitsContainer}>
            <div>
              <h2 style={styles.benefitsTitle}>
                The design subscription that connects you to your dream team
              </h2>
            </div>
            <div>
              <p style={{ marginBottom: '1rem' }}>
                A subscription can alleviate the stress of staffing, managing expenses, or making design calls like a Creative Director.
              </p>
              <button style={styles.button}>See Pricing</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="border-b border-gray-700 pb-6 md:border-b-0 md:border-r last:border-r-0">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-lime-400">{feature.title}</h3>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default DesignCapabilities;
