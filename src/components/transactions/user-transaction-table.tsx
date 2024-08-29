"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { TUserTransaction } from "../../../types/entities";
import { axiosInstance } from "@/lib/axios";
import { toast } from "../ui/use-toast";

export default function UserTransactionsTable() {
  const [userTxns, setUserTxns] = useState<TUserTransaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);

        const res = await axiosInstance.get("/transactions/user/all");
        const data = res.data as TUserTransaction[];

        setUserTxns(data);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Failed to load transactions",
        });
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Table>
      <TableCaption>A list of your recent transactions.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>TxHash</TableHead>
          <TableHead className="text-right">+APT</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {userTxns.map((txn, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{txn.id}</TableCell>
            <TableCell>{txn.status}</TableCell>
            <TableCell>{txn.createdAt}</TableCell>
            <TableCell>{txn.aptosPayment.txHash}</TableCell>
            <TableCell className="text-right">
              +{txn.aptosPayment.aptosAmount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
