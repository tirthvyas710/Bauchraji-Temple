import axios from "axios";
import React, { useState } from "react";
import logo from "../assets/maintenance.jpg";

const DonateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      amount: e.target.amount.value * 100,
      name: e.target.name.value,
      email: e.target.email.value,
    };
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    // console.log(payload);

    const result = await axios.post(
      "https://bauchraji-temple.onrender.com/payment/orders",
      payload
    );
    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_hW8CeOp0cGDiV0", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Bauchraji Temple",
      description: "Donation Test",
      image: { logo },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(
          "https://bauchraji-temple.onrender.com/payment/success",
          data
        );

        alert(result.data.msg);
      },
      prefill: {
        name: payload.name,
        email: payload.email,
        contact: "9104904657",
      },
      notes: {
        address: "Soumya Dey Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    // alert(`Thank you, ${formData.name}, for donating ₹${formData.amount}!`);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('../public/bg1.webp')] bg-cover bg-center bg-no-repeat">
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-md p-6 bg-white bg-opacity-90 shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Want to be a Helping Hand?
        </h2>

        {/* Name Field */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Amount Field */}
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-gray-700 font-medium mb-2"
          >
            Amount (₹)
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter amount to donate"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Donate Now
        </button>
      </form>
    </div>
  );
};

const Page5 = () => {
  return <DonateForm />;
};

export default Page5;
