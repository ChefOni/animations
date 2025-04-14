import AbodeCards from "../app/abode/AbodeCards.tsx";
import StripeCards from "../app/stripe/Stripe.tsx"
const Home = () => {
    return (
        <div className="w-full gap-6 my-8 flex flex-col  items-center justify-center">
            {/*<AbodeCards/>*/}
            <StripeCards/>
        </div>
    )
}

export default Home
