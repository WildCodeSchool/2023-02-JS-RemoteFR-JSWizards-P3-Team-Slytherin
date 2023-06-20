function Page404() {
  return (
    <div className="w-screen absolute right-0 bottom-0 top-0 px-8 bg-[black] flex justify-center pt-24 page404">
      <div className="flex flex-col gap-8 items-center justify-center">
        <h2 className="text-secondary text-3xl">DÉSOLÉ !</h2>
        <h3 className="text-secondary whitespace-nowrap text-base md:text-xl">
          LA PAGE QUE VOUS RECHERCHEZ N’EXISTE PAS.
        </h3>
        <img
          src="/assets/404/bg_404.png"
          className="h-1/2 max-h-[50vh] object-cover object-center"
          alt="404"
        />
      </div>
    </div>
  );
}

export default Page404;
