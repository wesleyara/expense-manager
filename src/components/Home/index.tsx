import Image from "next/image";
import { useRouter } from "next/router";

import { SHome } from "./style";

export function HomePage() {
  const router = useRouter();

  function handleNavigate() {
    router.push("/dashboard");
  }

  return (
    <SHome>
      <main>
        <div>
          <h1>Track your Expenses to Save Money</h1>
          <span>Helps you to organize your income and expenses</span>
        </div>
        <div className="btBox">
          <button onClick={handleNavigate}>Free to test</button>
          <span>- Web, iOs and Android</span>
        </div>
      </main>
      <aside>
        <span>
          <Image
            src="/assets/images/ilustration-home.svg"
            alt="ilustration home"
            width={100}
            height={100}
            layout="responsive"
          />
        </span>
      </aside>
    </SHome>
  );
}
