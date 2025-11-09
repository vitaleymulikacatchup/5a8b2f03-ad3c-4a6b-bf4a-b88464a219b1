"use client"

import { ChefHat, Handshake, Heart, MapPin, Star } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TagAbout from '@/components/sections/about/TagAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="medium"
      sizing="large"
      background="animatedAurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Menu", id: "products" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Golden Crust Bakery"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Fresh Baked Daily with Love"
          description="Experience the warmth of artisan breads, pastries, and cakes crafted with traditional techniques and the finest ingredients"
          tag="Artisan Bakery"
          tagIcon={Heart}
          buttons={[
            { text: "View Menu", href: "products" },
            { text: "Order Now", href: "contact" }
          ]}
          imageSrc="https://pixabay.com/get/gf0d5deafbb51c8b1bc485a865686e2f7796a944cb3d9c8b9e6ffd545ebea7a505e8c14ffb7aa1f0d16aee4b2e5e983fe6df842b75dcc0e9d434b44bc8450cbde_1280.jpg"
          imageAlt="Fresh baked goods display"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="At Golden Crust Bakery, we believe in the magic that happens when traditional craftsmanship meets modern passion. Every morning, our bakers arrive before dawn to create fresh, handcrafted breads and pastries that bring families together and brighten your day."
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree
          title="Featured Favorites"
          description="Handpicked selections from our daily fresh bakery collection"
          tag="Today's Menu"
          tagIcon={ChefHat}
          products={[
            {
              id: "croissant",
              name: "Butter Croissants",
              price: "$3.50",
              imageSrc: "https://pixabay.com/get/gc9547eafa5649bf67522680faaebca62394285c1b63e9ddc9445494b7d987c5a956ab72769ba8371a510da2494e4ebdc13ce4ca52099517bf21928a64f18c562_1280.jpg",
              imageAlt: "Golden butter croissants",
              initialQuantity: 1
            },
            {
              id: "artisan-bread",
              name: "Artisan Sourdough Loaf",
              price: "$8.00",
              imageSrc: "https://pixabay.com/get/gd55bdbadb1b60e08c58c1d4bed330debf7eaaceb4f452caabbd0a343c262b21e0b894b37486cd17c179d9d94f73a3d83215f0fe875b2f78487bb1e7e61276f4e_1280.jpg",
              imageAlt: "Fresh sourdough bread",
              initialQuantity: 1
            },
            {
              id: "chocolate-cake",
              name: "Chocolate Ganache Cake",
              price: "$25.00",
              imageSrc: "https://pixabay.com/get/g5a01a821bb6b9b16491fe2c4990cfa3f3c7ef223a40667ea768b001fb4a2edd45371e17933971f7597694e93c156fe35b211b82d8b117e32447a6bd192d656e0_1280.jpg",
              imageAlt: "Rich chocolate cake slice",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real reviews from our valued bakery family"
          tag="Customer Love"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Local Resident",
              company: "Downtown Area",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gb624e7338caae812b52dc52cb9f2d8f155a6827eb95f02b9407808be3e250af3868dfe1408d1bf8a0c855062bee3800b0f46c58a8f8fd6486fdba47efeaa34b0_1280.jpg",
              imageAlt: "Sarah Johnson portrait"
            },
            {
              id: "2",
              name: "Mike Chen",
              role: "Business Owner",
              company: "Corner Cafe",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gdb073dac44b87a3ef9278561679aee60e4337e7820b2875bf158e41a37c01e41b709cb55d84cc08d3e8857c5f8d376cfde29f77c9a38ee7c91683fd1b9d71f48_1280.jpg",
              imageAlt: "Mike Chen portrait"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Event Planner",
              company: "Celebrations Co",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g2b6c19da38c0ff04a5278f360deccf77b1cbeb2f55f821b0528030d165b01bb2e2133f419c5c77e03d7878079744cebadd74e448f8f6020e73ce1df62bb61a4b_1280.jpg",
              imageAlt: "Emma Rodriguez portrait"
            },
            {
              id: "4",
              name: "David Wilson",
              role: "Food Blogger",
              company: "City Eats",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g9947b2ef488990e2785362fcd5b349d00271689cf9c951ac08b860f8b050d19d6dd7b67326183ccf6d6b737204991954d840bdf694a2f34085414be528043225_1280.jpg",
              imageAlt: "David Wilson portrait"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Local Businesses"
          description="Proudly serving cafes, restaurants, and hotels throughout the city"
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            "https://pixabay.com/get/g974c6740815b48e0ed94875b099f258e6e9a27a50fef21180e645d0306a1337e664f7b5ff6211d1362e27e390af2bcb116cbe4c0c421a58091ee9c75df55d845_1280.jpg",
            "https://pixabay.com/get/g60db1b369b9e467717f304517032638543ff059ea4b17866cd3c0c5b50dcfa83ad7d26c03a32e1a214d770061fe9b05eb6fe3f8de73fd864371658b52998ab10_1280.jpg",
            "https://pixabay.com/get/g41dde9ac47bc6116eb74cc614a5c59ea4c85f29cd804199423729dd615d1a7fe58e9ba5d33bb65404cc4ca2d5880bc12e12f8b255f51191babd1af501c277b1e_1280.jpg",
            "https://pixabay.com/get/gb29f749f419241ffee23cdd3381e3fcd910cbd6e24a02f530fb736190707a3404486f0004417d8bb787118ba6bd6f4133166844eac0c942c63f020fefe72fd5a_1280.jpg",
            "https://pixabay.com/get/gcc00ae7b012904d4a82fa0884498e52e67544c4165552a7bd5243ac93897f75ca05fd02f11643abecd4befd3ce8b5c5d37bdbaabf1fa5a0b2bb817b7e6bfbc0e_1280.jpg"
          ]}
          speed={30}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Visit Us"
          tagIcon={MapPin}
          title="Fresh Daily at Your Service"
          description="Join our newsletter for daily specials, seasonal treats, and exclusive baking tips delivered fresh to your inbox"
          inputPlaceholder="Your email for fresh updates"
          buttonText="Get Fresh Updates"
          termsText="We respect your privacy and will only send you delicious updates. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Golden Crust Bakery"
          copyrightText="© 2025 Golden Crust Bakery. All rights reserved."
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Fresh Breads", href: "products" },
                { label: "Pastries", href: "products" },
                { label: "Cakes & Desserts", href: "products" },
                { label: "Daily Specials", href: "products" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Baking Process", href: "about" },
                { label: "Ingredients", href: "about" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Custom Cakes", href: "contact" },
                { label: "Catering", href: "contact" },
                { label: "Wholesale", href: "contact" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Location", href: "contact" },
                { label: "Hours", href: "contact" },
                { label: "Order Online", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: "Instagram",
              href: "https://instagram.com/goldencrustbakery",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: "Facebook",
              href: "https://facebook.com/goldencrustbakery",
              ariaLabel: "Like us on Facebook"
            },
            {
              icon: "Phone",
              href: "tel:+15551234567",
              ariaLabel: "Call us"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}