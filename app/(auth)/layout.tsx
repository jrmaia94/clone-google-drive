import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="bg-brand p-10 hidden w-1/2 items-center justify-center lg:flex xl:w-2/5">
        <div className="flex flex-col items-center max-h-[800px] max-w-[430px] space-y-12">
          <div className="flex items-center gap-5">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={82}
              height={82}
              className="h-auto"
            />
            <h2 className="text-white h2">Meu Drive</h2>
          </div>
          <div className="space-y-5 text-white">
            <h1 className="h1">
              Organize seus arquivos da melhor maneira possível
            </h1>
            <p className="body-1">
              Esse é o lugar pra organizar todos seus arquivos.
            </p>
          </div>
          <Image
            src={"/illustration.png"}
            alt="Files"
            width={342}
            height={342}
            className="transition-all hover:rotate-2 hover:scale-105"
          />
        </div>
      </section>
      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={400}
            height={400}
            className="h-auto w-[200px] lg:w-[250px]"
          />
        </div>
        {children}
      </section>
    </div>
  );
};

export default Layout;
