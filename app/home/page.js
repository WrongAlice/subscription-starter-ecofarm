import Head from 'next/head'
import Image from 'next/image'
import styles from './home.module.css'


// &rarr;

// import Head from 'next/head';

export default function Home() {
  return (
   <div className={styles.root}>
        <section id="top" className={styles.top}>
          <div className="bg-opacity-80 text-white text-center p-8">
            <h1 className="text-5xl">Farm To Table</h1>
            <h2 className="text-3xl">Ethical Fresh Products<br />Delivered To Your Door</h2>
          </div>
          </section>
         
        <section id="farm" className={styles.ff} >
          <h2>Farm Fresh</h2>
        

          <div className={styles.container}>
            <div className={styles.box}>
          <div className="flex justify-around mt-8">
          <div className="w-1/5 border-2 border-gray-700 text-center p-4 bg-white">
    <i className="fas fa-cheese text-5xl"></i>
      <h3 className="text-xl">Veggies</h3>
     </div>
     </div>
    </div>
   
            <div className={styles.box}>
          <div className="flex justify-around mt-8">
    <div className="w-1/4 bg-white border-2 border-gray-400 text-center p-4">
    <i className="fas fa-cheese text-5xl"></i>
      <h3 className="text-xl">Eggs</h3>
     </div>
     </div>
    </div>
 
            <div className={styles.box}>
          <div className="flex justify-around mt-8">
    <div className="w-1/4 bg-white border-2 border-gray-400 text-center p-4">
    <i className="fas fa-cheese text-5xl"></i>
      <h3 className="text-xl">Produce</h3>
     </div>
     </div>
    </div>


   
            <div className={styles.box}>
          <div className="flex justify-around mt-8">
    <div className="w-1/4 bg-white border-2 border-gray-400 text-center p-4">
    <i className="fas fa-cheese text-5xl"></i>
      <h3 className="text-xl">Flowersß</h3>
     </div>
     </div>
    </div>
    </div>

        </section>
        <section className={styles.heroImage}>
          {/* This is a blank section - our bg image will go here */}
        </section>
        <section id="about" className={styles.about}>
          {/* Build the about section, give the box around the text a class of text */}
          <i className="fas fa-paw"></i>
          <p>Our Story</p>
          Cauliflower a seeds quail. Lettus gobblers pens, radish on kidney beans, llamas pick up truck. Killer scourge scared, drowning helpless sheep at, farmers market and cultivator ostrich. Outhouse at nails mower. Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony robins peacocks an kale. Oranges cucumbers rhubarb gourds watermelon. Petting zoo at carrots alligators quack. Haybine carrots soybeans, owl.
        </section>
        <section className={styles.gallery}>
          <div className={styles.farm}>
            <div className={styles.hide}>
              <h2>Organic Farming Methods</h2>
            </div>
          </div>
          <div className={styles.cook}>
            <div className={styles.hide}>
              <h2>Eco Friendly Workshops</h2>
            </div>
          </div>
          <div className={styles.produce}>
            <div className={styles.hide}>
              <h2>The Produce</h2>
            </div>
          </div>
          <div className={styles.animals}>
            <div className={styles.hide}>
              <h2>Events</h2>
            </div>
          </div>
        </section>
        <section id="contact" className="bg-white py-16 text-black">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-extrabold mb-8">Come Visit Us!</h2>
    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <div className="text-center">
              <i className="far fa-tractor text-3xl mb-2"></i>
              <h3 className="text-xl font-semibold">Find Us At:</h3>
              <p className="mb-2">
                123 Cottonwood Rd. Prince Edward County, Ontario Canada K1X 0H8
              </p>
              <p className="mb-2">
                <a href="tel:888-888-8888" className="text-blue-500 hover:underline">
                  888-888-8888
                </a>
              </p>
              <p>
                <a
                  href="mailto:peter.rabbit@farmtotable.com"
                  className="text-blue-500 hover:underline"
                >
                  peter.rabbit@farmtotable.com
                </a>
              </p>
            </div>
            <div className="text-center">
            <div className="md:w-28">
                <img
                  src="https://github.com/BrityHemming/farm-to-table-practice-project/blob/solution/farm-to-table/images/landscape.jpg?raw=true"
                  alt="tractor towing bails of hay across a field of wheat"
                />
              </div>
            </div>
          
    </div>
  </div>
</section>

        
      </div>
  
  );
}
