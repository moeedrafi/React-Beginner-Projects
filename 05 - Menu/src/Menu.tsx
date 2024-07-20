interface MenuProps {
  title: string;
  price: number;
  img: string;
  desc: string;
}

const Menu = ({ desc, img, price, title }: MenuProps) => {
  return (
    <div className="mt-5 shadow-md">
      <img src={img} alt={title} className="w-full h-[300px] rounded-md" />
      <div className="mt-5 px-3 flex justify-between items-center">
        <h4 className="capitalize text-lg font-semibold">{title}</h4>
        <p className="bg-orange-400 rounded-md text-white tracking-widest px-2 py-1">
          ${price}
        </p>
      </div>
      <p className="my-5 px-3 font-light text-sm">{desc}</p>
    </div>
  );
};

export default Menu;
