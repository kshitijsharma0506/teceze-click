import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Standard",
      tag: "Most Popular",
      price: "$2,995/m",
      description: "One request at a time. For companies who need on-going design support.",
      subtext: "Pause or cancel anytime",
      features: [
        "1x active task at a time",
        "Unlimited revisions",
        "Basic SEO",
        "Daily comms through Slack",
        "Work with Expert",
        "2-3 days turn around time",
        "Top tier design"
      ]
    },
    {
      name: "Growth",
      tag: "Best value",
      price: "$4,795/m",
      description: "Double the requests. For companies with increasing design needs. Limited spots.",
      subtext: "Pause or cancel anytime",
      features: [
        "2x active task at a time",
        "Unlimited revisions",
        "Dedicated SEO Analyst",
        "Daily comms through Slack",
        "Work with Expert",
        "2-3 days turn around time",
        "Top tier Content Writer"
      ]
    },
    {
      name: "Basic - Weekly",
      price: "$890/m",
      description: "Perfect if you want to try the subscription out or only have a few one-off tasks.",
      subtext: "Paid per weekly",
      features: [
        "Fixed Scope of work",
        "2 rounds of revisions",
        "Advance SEO",
        "Daily comms through Slack",
        "1x designer and 1x SEO person",
        "2-5 days turn around time",
        "Top Content Writer & design"
      ]
    }
  ];

  return (
    <div className="bg-black text-white p-8">
      <div className="text-center mb-12">
        <p className="text-lime-400 mb-2">CLEAR & SIMPLE PRICING</p>
        <h2 className="text-4xl font-bold mb-4">Simple pricing to level up your brand.</h2>
        <p className="text-gray-400">
          Senior experts. On-demand requests. Fast turnarounds. Flat monthly fee. Cancel anytime.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="bg-gray-900 rounded-lg p-6 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              {plan.tag && (
                <span className={`text-xs px-2 py-1 rounded ${plan.tag === "Most Popular" ? "bg-lime-400 text-black" : "bg-gray-700 text-white"}`}>
                  {plan.tag}
                </span>
              )}
            </div>
            <p className="text-gray-400 mb-4">{plan.description}</p>
            <div className="text-4xl font-bold mb-2">{plan.price}</div>
            <p className="text-sm text-gray-400 mb-6">{plan.subtext}</p>
            <ul className="space-y-2 mb-6 flex-grow">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <Check className="text-lime-400 mr-2" size={16} />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-2 mb-2 border border-gray-600 rounded text-white hover:bg-gray-800 transition">
              Book A Call
            </button>
            <button className="w-full py-2 bg-lime-400 rounded text-black font-semibold hover:bg-lime-500 transition">
              Click to buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;