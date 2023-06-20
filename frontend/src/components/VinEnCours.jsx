export default function VinEnCours() {
  return (
    <div className="mt-8 flex w-full justify-center">
      <div className="flex items-center w-3/4 gap-4">
        <img className="h-[144px]" src="/assets/images/whitewine1.jpg" alt="" />
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Vin 1</h2>
          <div className="flex gap-2">
            <h3 className="font-bold">Année :</h3>
            <p>2014</p>
          </div>
          <h3 className="font-bold">Vignoble</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos optio
            quam numquam et beatae deleniti.
          </p>
        </div>
      </div>
    </div>
  );
}
