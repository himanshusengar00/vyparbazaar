
import HomePage from "../../components/Homepage/Homepage";
function Home() {
  const categories = [
    {
      id: 1,
      title: "Atta, Rice, Oil & Dals",
      imageUrl: "https://m.media-amazon.com/images/I/51eW6u5RiRL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
    },
    {
      id: 2,
      title: "Packaged food",
      imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5f1fc9117554247.6077f6096c5ca.jpg",
    },
    {
      id: 3,
      title: "Fruit & Vegetables",
      imageUrl: "https://www.portneuf.org/sites/default/files/wp-content/uploads/2018/09/Apple-Fruit-Veggie-Image-261x300.jpg",
    },
    {
      id: 4,
      title: "Frozen Food",
      imageUrl: "https://i.pinimg.com/474x/58/86/a3/5886a373fd91fde298d13dad978d569b.jpg",
    },
    {
      id: 5,
      title: "Cleaning Essentials",
      imageUrl: "https://img.lovepik.com/png/20231013/3d-cleaning-supplies-elements-gloves-yellow-cleaning-agent_194555_wh1200.png",
    },
  ];
  

  return (
    <div>
      {/* <CarouselBanner /> */}
      {/* <Directory categories={categories} /> */}
      <HomePage/>
      {/* <Newsletter /> */}
    </div>
  );
}

export default Home;
