import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen  text-black px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl  p-10 backdrop-blur-sm">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">NOTE</h1>
        <p className="mt-6 text-lg leading-8 text-black/75">
          This is an unofficial website of the THE GREAT CHASE Restaurant. I
          will love to create a reservation system for the restaurant if they
          buy this website from me. Please contact me if you are interested in
          buying this website and creating a reservation system for the
          restaurant. Thank you for visiting the website and I hope to hear from
          you soon.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl border border-black bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/90"
          >
            Return Home
          </Link>
          <Link
            href="/Menu"
            className="inline-flex items-center justify-center rounded-2xl border border-black bg-transparent px-5 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
          >
            View Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
