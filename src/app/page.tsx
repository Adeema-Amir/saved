import CustomerReview from './components/CustomerReview';
import GoogleMap from './components/GoogleMap';

export default function Home() {
  return (
    <>
      <CustomerReview />
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p>ONLINE CAR STORE</p>
        </div>
      </main>
     */}
      <GoogleMap />

    </>
  );
}
