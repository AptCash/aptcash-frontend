import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { Globe } from "@/components/landing/landing-globe";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-background">
        <header className="sticky top-0 z-40 border-b bg-background">
          <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <Icons.logo className="h-8 w-8 text-primary" />
              <span className="font-bold text-primary">APTCash</span>
            </Link>

            <nav className="flex items-center gap-12">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                Docs
              </Link>
              <Link href="/login">
                <Button>Login</Button>
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          <div className="container mx-auto max-w-6xl px-4 py-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col items-start justify-center gap-4">
                <h1 className="text-4xl font-bold">INR to APT Instantly</h1>
                <p className="text-muted-foreground">
                  AptCash is a decentralized payment platform built on the Aptos
                  blockchain, offering seamless integration of cryptocurrencies
                  and fiat currencies. Manage your digital assets and make
                  instant, transparent transactions in just 5 seconds.
                </p>
                <div className="flex gap-4">
                  <Button>
                    {/* <Icons.Wallet className="mr-2 h-4 w-4" /> */}
                    Get Started
                  </Button>
                  <Button variant="outline">
                    Learn more{" "}
                    {/* <Icons.LucideArrowRight className="ml-2 h-4 w-4" /> */}
                  </Button>
                </div>
              </div>
              {/* <div> */}
              {/* <Image
                  src="/landing-hero.svg"
                  alt="AptCash Hero Image"
                  width={600}
                  height={400}
                  className="rounded-lg"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                /> */}

              {/* <Globe /> */}
              {/* </div> */}
              <div className="flex h-[600px] w-[600px] justify-center md:mt-0 md:justify-start">
                <Globe />
              </div>
            </div>
          </div>
          <div className="bg-muted/20 py-12">
            <div className="container mx-auto max-w-6xl px-4">
              <h2 className="mb-8 text-center text-3xl font-bold">
                Key Features
              </h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center gap-4 rounded-lg bg-background p-6 shadow-sm">
                  <Icons.Receipt className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Reward Points</h3>
                  <p className="text-center text-muted-foreground">
                    Earn reward points for every transaction and redeem them for
                    various benefits.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4 rounded-lg bg-background p-6 shadow-sm">
                  <Icons.Receipt className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Transaction History</h3>
                  <p className="text-center text-muted-foreground">
                    Keep track of all your transactions and manage your
                    financial activities.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4 rounded-lg bg-background p-6 shadow-sm">
                  <Icons.Phone className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Pay by Phone Number</h3>
                  <p className="text-center text-muted-foreground">
                    Send and receive payments using just a phone number, no need
                    for complex wallet addresses.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4 rounded-lg bg-background p-6 shadow-sm">
                  <Icons.Scan className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Scan and Pay</h3>
                  <p className="text-center text-muted-foreground">
                    Easily make payments by scanning QR codes, providing a
                    seamless and secure transaction experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto max-w-6xl px-4 py-12">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Explore DeFi
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Lending</CardTitle>
                    <CardDescription>
                      Lend your crypto assets and earn interest.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">APY</span>
                        <span className="font-medium">8.5%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                          Total Lent
                        </span>
                        <span className="font-medium">$2.3M</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Borrowers</span>
                        <span className="font-medium">1,234</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Start Lending</Button>
                  </CardFooter>
                </Card>
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Staking</CardTitle>
                    <CardDescription>
                      Stake your crypto assets and earn rewards.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">APY</span>
                        <span className="font-medium">12.7%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                          Total Staked
                        </span>
                        <span className="font-medium">$4.1M</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Stakers</span>
                        <span className="font-medium">2,789</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Start Staking</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-muted/20 py-6">
          <div className="container mx-auto max-w-6xl px-4 text-center text-muted-foreground">
            &copy; 2023 AptCash. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
