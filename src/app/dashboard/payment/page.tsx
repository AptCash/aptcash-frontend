"use client";

import { useRouter } from "next/navigation";

import { getCurrentUser } from "@/lib/session";
import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios";
import braintree from "braintree-web";
import dropin, { Dropin } from "braintree-web-drop-in";
import { set } from "react-hook-form";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

const metadata = {
  title: "Payments Page",
  description: "Page to test payments.",
};

export default function PaymentsPage() {
  const [clientToken, setClientToken] = useState<string | null>(null);
  const [dropinInstance, setDropinInstance] = useState<Dropin | null>(null);

  useEffect(() => {
    async function fetchClientToken() {
      const res = await axiosInstance.get("/paypal/client-token");
      const clientToken = res.data as string;

      setClientToken(clientToken);
    }

    fetchClientToken();
  }, []);

  useEffect(() => {
    async function initDropIn() {
      if (!clientToken) return;

      const dropinInstance = await dropin.create({
        authorization: clientToken,
        container: "#dropin-container-div",
        paypal: {
          flow: "checkout",
          currency: "INR",
        },
      });

      setDropinInstance(dropinInstance);
    }

    initDropIn();
  }, [clientToken]);

  async function handlePayment() {
    if (!dropinInstance) return;

    try {
      const paymentPayload = await dropinInstance.requestPaymentMethod();

      const { nonce } = paymentPayload;

      const payload = {
        nonce,
        toAddress: 10000,
        aptAmount: 0.1,
      };

      const res = await axiosInstance.post("/paypal/checkout", payload);

      const data = res.data as {
        message: string;
      };

      toast({
        title: data.message,
      });
    } catch (err) {
      console.log(err);
      toast({
        title: "An error occurred.",
        variant: "destructive",
      });
    }
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Payments Test" text="Page to test payments." />

      {!clientToken && <p>Loading...</p>}

      <div className="max-w-screen-sm">
        <div id="dropin-container-div"></div>

        <Button onClick={handlePayment} className="w-full">
          Pay
        </Button>
      </div>
    </DashboardShell>
  );
}
