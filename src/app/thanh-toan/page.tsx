import CheckoutForm from "./checkout-form";
import CheckoutSteps from "./checkout-steps";
import OrderSummary from "./order-sumary";


export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src="/logo.svg" alt="LILI Premium Jewelry" className="h-12" />
        </div>

        {/* Checkout Steps */}
        <div className="mb-8">
          <CheckoutSteps />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <CheckoutForm />
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  )
}

