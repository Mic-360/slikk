import AdsColumn from '@/components/ads-column';
import Banner from '@/components/banner';
import Catalogue from '@/components/catalogue';
import Categories from '@/components/categories';
import Collections from '@/components/collections';
import Curated from '@/components/curated';
import FestiveColumn from '@/components/festive-column';
import Gifts from '@/components/gifts';

const Home = () => {
  return (
    <main id='home-top' className='min-h-screen'>
      <Banner />
      <AdsColumn />
      <Catalogue />
      <Categories />
      <Curated />
      <FestiveColumn />
      <Collections />
      <Gifts />
    </main>
  );
};

export default Home;
