import { Link } from "react-router-dom";

export default function CertificateDetails() {
  return (
    <div className="min-h-screen bg-[#070b18] text-white">

      <div className="max-w-6xl mx-auto p-10">

        <Link
          to="/"
          className="text-cyan-300"
        >
          ← Back
        </Link>

        <h1 className="text-5xl font-black mb-10 mt-6">
          AWS Certified Solutions Architect Associate
        </h1>

        <img
          src="/certificates/aws-saa.jpg"
          alt=""
          className="rounded-3xl"
        />

      </div>

    </div>
  );
}