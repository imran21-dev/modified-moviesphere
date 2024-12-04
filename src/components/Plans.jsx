import { GoDotFill } from "react-icons/go";


const Plans = () => {
    const premiumPlans = [
        {
          name: "Silver Plan",
          price: "$9.99",
          exp: '/month',
          slogan:'Affordable and perfect for solo movie nights.' ,
          features: [
            "Access to HD movies",
            "Stream on 1 device at a time",
            "Limited offline downloads"
          ],
          description: "Perfect for individuals who want high-quality streaming with an affordable price tag."
        },
        {
          name: "Gold Plan",
          slogan:'The ideal plan for families and HD lovers.' ,
          price: "$14.99",
          exp: '/month',
          features: [
            "Access to HD and 4K movies",
            "Stream on up to 2 devices at a time",
            "Unlimited offline downloads"
          ],
          description: "Ideal for couples or small families who enjoy watching movies together in high definition."
        },
        {
          name: "Platinum Plan",
          slogan:'Premium content for ultimate movie enthusiasts.' ,
          price: "$19.99",
          exp: '/month',
          features: [
            "Access to HD, 4K, and exclusive premium content",
            "Stream on up to 4 devices at a time",
            "Unlimited offline downloads",
            "Ad-free experience"
          ],
          description: "The ultimate plan for movie enthusiasts who want the best quality and exclusive content."
        }
      ];
      
    return (
        <div className="w-11/12 mx-auto text-center">
            <h1 className="text-4xl font-semibold pt-20 pb-4">Choose a plan thats suits for you</h1>
            <p>Pick the perfect plan tailored to your entertainment needs and enjoy premium movie streaming your way!</p>
           <div className="grid grid-cols-3 gap-6 mx-auto py-8 w-9/12">
           {
             premiumPlans.map(plan => <div className="border text-left flex flex-col justify-between border-secondary px-6 py-10" key={plan.name}>
               <section>
               <h1 className="text-2xl font-semibold">{plan.name}</h1>
                <p className="py-3">{plan.slogan}</p>
                <h1 className="text-4xl font-bold text-accent/90">{plan.price}<span className="text-sm text-neutral/70 font-medium">{plan.exp}</span></h1>
                <ul className="pt-5 ">
                    {
                    plan.features.map(feature => <li className="flex py-1 items-center gap-2" key={feature}><GoDotFill className="text-accent/90" />{feature}</li>)
                    }
                </ul>
               </section>
                <button className="btn mt-5 btn-outline border-accent/90 rounded-none">Choose Plan</button>
             </div>)
            }
           </div>
        </div>
    );
};

export default Plans;