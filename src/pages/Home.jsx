import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import PolicyCard from '../components/PolicyCard'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import heroSliderData from '../assets/fake-data/hero-slider'
import policy from '../assets/fake-data/policy'
import productData from '../assets/fake-data/products'
import banner from '../assets/images/banner.png'
//import { useTranslation } from 'react-i18next';

//import { useTranslation, Trans } from 'react-i18next';
// const lngs = {
//     en: { nativeName: 'English' },
//     de: { nativeName: 'Deutsch' }
//   };

const Home = () => {
    //creating IP state
 // const [ip, setIP] = useState('');

  //creating function to load ip address from the API
  //const getData = async () => {
  //  const res = await axios.get('https://geolocation-db.com/json/')
   // console.log(res.data);
    //setIP(res.data.IPv4)
 // }
  
  //useEffect( () => {
  //  //passing getData method to the lifecycle method
    //getData()
//
 // }, [])
  //creating function to load ip address from the API
//   const getData = async () => {
//     const res = await axios.get('https://ipapi.co/currency/')
//     console.log(res.data);
  
//   }
  
//   useEffect( () => {
//     //passing getData method to the lifecycle method
//     getData()

//   }, [])
       
      // const [info,setinfo] = useState('');
      
  
     // const getsetting = async () => {
           
         //const res = await axios.get('https://geolocation-db.com/'+ip+'/json/')
         // console.log(res.data);
           // setIP(res.data.IPv4)
         //  }
//useEffect( () => {
          //   //passing getData method to the lifecycle method
           // getsetting()
       
          // }, [])
    //   this.props.buildings.map(this.renderBuildings, this)


    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // const getsettings= async()=>{
    // const rep = axios.get(` https://ipapi.co/${this.props.match.params.ip}/json/`);
    // console.log('************************************************')
    //      console.log(rep.data);
    //      setinfo(rep.data);
    //    }
    //    useEffect( () => {
    //      getData()
    //      if ( ip) {
    //          const res = axios.get(' https://ipapi.co/'+ip+'/json/');
    //      setinfo(res.data);}
    
    //   }, [ip],)
    //  useEffect( () => {
    //    const rep = axios.get(' https://ipapi.co/'+ip.IPv4+'/json/');
    //      setinfo(rep.data);
    //      },[ip]);
    //      console.log(setIP)
    //      console.log(setinfo)
    //      const { t, i18n } = useTranslation();
       
//    const { t, i18n } = useTranslation();

    return (
        
        <Helmet title="Trang chủ">
            {/* hero slider */}
            <HeroSlider
                data={heroSliderData}
                control={true}
                auto={false}
                timeOut={5000}
            />
            {/* end hero slider */}

            {/* policy section */}
            <Section>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            policy.map((item, index) => <Link key={index} to="/policy">
                                <PolicyCard
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </Link>)
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end policy section */}

            {/* best selling section */}
            <Section>
                <SectionTitle>
                best selling
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(4).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end best selling section */}

            {/* new arrival section */}
            <Section>
                <SectionTitle>
                New products
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(8).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end new arrival section */}
            
            {/* banner */}
            <Section>
                <SectionBody>
                    <Link to="/catalog">
                        <img src={banner} alt="" />
                    </Link>
                </SectionBody>
            </Section>
            {/* end banner */}

            {/* popular product section */}
            <Section>
                <SectionTitle>
                popular

                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(12).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end popular product section */}
        </Helmet>
    )
}

export default Home
