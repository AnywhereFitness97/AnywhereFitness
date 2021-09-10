import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../components/forms/PaymentForm";

const PUBLIC_KEY =
	"pk_test_51JX7hRHWCnAE4ORt0PA57S6hNjw1QWNDjLoOCghfvCYDqvoskdVhSnftOSPATfhkSh76E3mZlLDgWLOxZ7Z9LeUj00IQFccPtC";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	);
}
