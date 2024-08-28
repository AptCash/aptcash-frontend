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
      });

      setDropinInstance(dropinInstance);
    }

    initDropIn();
  }, [clientToken]);

  return (
    <DashboardShell>
      <DashboardHeader heading="Payments Test" text="Page to test payments." />

      {!clientToken && <p>Loading...</p>}

      <div id="#dropin-container-div"></div>
    </DashboardShell>
  );
}
