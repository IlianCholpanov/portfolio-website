import GithubIcon from "../../../public/github-icon.svg";
import Linkedin from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

function EmailSection() {
  return (
    <section className="grid md:grid-cols-2 my-12 md-my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m looking for internship opportunities, feel free to reach out
          to me for collaboration.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/IlianCholpanov">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/ilian-cholpanov-a4a12428b/">
            <Image src={Linkedin} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default EmailSection;
