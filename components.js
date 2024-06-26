const mainImage = document.getElementById("mainImage");
const mainImageDiv = document.getElementById("mainImageDiv");
const showFullImage = document.getElementById("showFullImage");
const lens = document.getElementById("magnifier");

class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<nav class="bg-white border-gray-200 dark:bg-gray-900 ">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="./index.html" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="./images/devkrupa.png" class="h-10" alt="Devkrupa Jali Logo" />
        <span class="self-center  relative text-3xl font-semibold whitespace-nowrap dark:text-white text-lblack"> <span class="font-script italic  ">Devkrupa</span>  <span class="text-sm absolute top-0  p-1  ">&reg </span> </span>
      </a>
      <button data-collapse-toggle="navbar-default" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          
          <li>
            <a href="./products.html"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-logo md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">PRODUCTS</a>
          </li>
          <li>
            <a href="./about.html"
              class="block py-2 px-3 text-gray-900  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-logo md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">ABOUT US</a>
          </li>
          <li>
            <a href="./contact.html"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-logo md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CONTACT US</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>`;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

<footer class="bg-white dark:bg-gray-900 ">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8  ">
        <div class="md:flex md:justify-between   ">

          <div class="mb-6 md:mb-0 gap-5 flex flex-col ">
               <a href="./index.html" class="flex items-center space-x-3 rtl:space-x-reverse">
                       <img src="./images/devkrupa.png" class="h-10" alt="Devkrupa Jali Logo" />
                       <span class="self-center  relative text-3xl font-semibold whitespace-nowrap dark:text-white  text-lblack"> <span class="font-script italic  ">Devkrupa</span>  <span class="text-sm absolute top-0  p-1  ">&reg </span> </span>
       
              </a>
              <h2 class="max-w-xl md:max-w-xs capitalize text-justify  text-base leading-relaxed">
                we   <strong class="text-lblack">"Devkrupa Welding Works"</strong>  Established in the year <strong class="text-lblack">1998</strong>, are highly
                recognized as the
                <strong class="text-lblack">Manufacturer</strong> and
                <strong class="text-lblack">Supplier</strong> of all types of Jali,
                including those used in
                <strong class="text-lblack">Flour Mills</strong>,
                <strong class="text-lblack">Pulverizers</strong>,
                <strong class="text-lblack">Chili Cutters</strong>, and
                <strong class="text-lblack">Gravy Machines</strong>.
              </h2>
          </div>
             
          <div class="flex flex-col md:flex-row gap-6 justify-center   ">
              <div class="">
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">QUICK LINKS </h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4 ">
                          <a href="./index.html" class="hover:underline hover:text-logo">HOME</a>
                      </li>
                      <li class="mb-4">
                          <a href="./products.html" class="hover:underline hover:text-logo">PRODUCTS</a>
                      </li>
                      <li class="mb-4">
                          <a href="./about.html" class="hover:underline hover:text-logo">ABOUT US</a>
                      </li>
                      <li class="mb-4">
                          <a href="./contact.html" class="hover:underline hover:text-logo">CONTACT US</a>
                      </li>
                  </ul>
              </div>
               <div class="" >
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">CONTACTS</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">

                      <li class="mb-4 max-w-xl md:max-w-xs   capitalize text-balance  leading-relaxed">
                      <a
                href="https://maps.app.goo.gl/BPDDpcvDwu3o5Cg98"
                target="_blank"
                class=" text-gray-500 hover:text-lblack"
              > <span class="text-logo flex items-center gap-2"> <svg
                  fill="#0080FF"
                  width="16px"
                  height="16px"
                  viewBox="0 0 32 32"
                  style="
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                    stroke-linejoin: round;
                    stroke-miterlimit: 2;
                  "
                  version="1.1"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:serif="http://www.serif.com/"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g id="Layer1">
                      <path
                        d="M16,2c-6.071,0 -11,4.929 -11,11c0,2.778 1.654,6.081 3.699,9.019c2.939,4.224 6.613,7.707 6.613,7.707c0.386,0.365 0.99,0.365 1.376,-0c0,-0 3.674,-3.483 6.613,-7.707c2.045,-2.938 3.699,-6.241 3.699,-9.019c0,-6.071 -4.929,-11 -11,-11Zm0,5.5c-3.036,0 -5.5,2.464 -5.5,5.5c0,3.036 2.464,5.5 5.5,5.5c3.036,-0 5.5,-2.464 5.5,-5.5c0,-3.036 -2.464,-5.5 -5.5,-5.5Zm0,2c1.932,0 3.5,1.568 3.5,3.5c0,1.932 -1.568,3.5 -3.5,3.5c-1.932,-0 -3.5,-1.568 -3.5,-3.5c0,-1.932 1.568,-3.5 3.5,-3.5Z"
                      ></path>
                    </g>
                  </g>
                </svg><span>ADDRESS:</span> </span>PATEL PAN STREET,SURVEY NO: 324P, PLOT NO:14,NEAR GUJARAT
                  ROADWAYS,DHEBAR ROAD,RAJKOT-36002.</a>
                 
                
              
                        </li>
                        <li class="mb-4">
                            <span class="text-logo  gap-2 flex items-center"> <svg
                  fill="#0080FF"
                  width="16px"
                  height="16px"
                  viewBox="-192 -192 2304.00 2304.00"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#0080FF"
                  transform="rotate(0)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="34.559999999999995"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
                      fill-rule="evenodd"
                    ></path>
                  </g>
                </svg><span>EMAIL: <a
                class="leading-relaxed text-gray-500  hover:text-lblack"
                href="mailto:devkrupajali@gmail.com"
                title="Send email to Devkrupa Jali"
                >devkrupajali@gmail.com
              </a></span></span> 
                        </li>
                        <li class="mb-4">
                            <span class="text-logo gap-2 flex items-center"> <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                      fill="#0080FF"
                    ></path>
                  </g>
                </svg>
                 <span>PHONE:   <a
                href="tel:+919825999415"
                class="leading-relaxed text-gray-500  hover:text-lblack"
                >+91 98259 99415</a
              ></span>
                 </span>  
               
                        </li>

                  

                    </ul>
                </div>
              
          </div>
          
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 relative">© 2024 
          <a href="./index.html" class="hover:underline "> <span class="italic text-xl font-script ">Devkrupa</span> <span class="absolute top-0">&reg</span></a>&nbsp;&nbsp;&nbsp;All Rights Reserved.
          </span>
         
          <div class="flex mt-4 sm:justify-center sm:mt-0 gap-2">
              <a href="https://www.facebook.com/people/Devkrupa-Jali/61561621826679/" target="_blank" class="text-gray-500 hover:text-logo dark:hover:text-white">
                  <svg class="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
</svg>

                  <span class="sr-only">Facebook page</span>
              </a>
              
          <a href="https://www.instagram.com/devkrupa_jali"  target="_blank" class="text-gray-500 hover:text-logo dark:hover:text-white">
                  <svg class="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
</svg>

                  <span class="sr-only">Instagram page</span>
             

<a href="https://twitter.com/devkrupajali" target="_blank" class="text-gray-500 hover:text-logo dark:hover:text-white">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
  </svg>
  <span class="sr-only">X page</span>
</a>
<a href="https://www.linkedin.com/in/devkrupa-jali/" target="_blank" class="text-gray-500 hover:text-logo dark:hover:text-white">
  <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.39 19h-3v-10h3v10zm-1.5-11.28c-.96 0-1.73-.78-1.73-1.73s.78-1.73 1.73-1.73 1.73.78 1.73 1.73-.78 1.73-1.73 1.73zm13.89 11.28h-3v-5.58c0-1.33-.02-3.04-1.85-3.04s-2.13 1.44-2.13 2.93v5.69h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
  </svg>
  <span class="sr-only">LinkedIn page</span>
</a>






             </div>
      </div>
    </div>
</footer>
`;
  }
}

class BackToTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
 <button
      type="button"
      data-twe-ripple-init
      data-twe-ripple-color="light"
      class="!fixed bottom-1 start-1 hidden rounded-full bg-logo p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-lblue hover:shadow-lg focus:bg-lblue focus:shadow-lg focus:outline-none focus:ring-0 active:bg-dblue active:shadow-lg"
      id="btn-back-to-top"
    >
      <span class="[&>svg]:w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </span>
    </button>
`;
  }
}

customElements.define("app-navbar", Navbar);
customElements.define("app-footer", Footer);
customElements.define("app-back-to-top", BackToTop);

// back to top functionallity
// Get the button
const mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.remove("hidden");
  } else {
    mybutton.classList.add("hidden");
  }
};
const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

window.addEventListener("scroll", scrollFunction);

// back to top functionallity

// products
// const productsSection = document.getElementById("products");

// Assuming you have a JSON array of products
// const products = [
//   {
//     imgSrc: "./PRODUCT PHOTO/WITH LOGO/1HP/COMBO.webp",
//     title: "Flourmill 1HP Jali Set  ",
//     description:
//       "Jali Set of 6 Jali (1, 2, 3, 4, 5, 6) | 1HP Sleeve | 1HP FLourmill Sleeve |",
//     urlSlug: "./product-flourmill-1hp-jali-set",
//   },
//   {
//     imgSrc: "./PRODUCT PHOTO/WITH LOGO/2HP/COMBO.webp",

//     title: "Pulverizer || Flourmill 2HP Jali Set",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     urlSlug: "./product-pulverizer-2hp-jali-set",
//   },
//   {
//     imgSrc: "./PRODUCT PHOTO/WITH LOGO/3HP/COMBO.webp",

//     title: "Pulverizer 3HP Jali Set",
//     urlSlug: "pulverizer-3hp-jali-set",

//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     imgSrc: "./PRODUCT PHOTO/WITH LOGO/4HP/COMBO.webp",

//     title: "Pulverizer 4HP Jali Set",
//     urlSlug: "pulverizer-4hp-jali-set",

//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     imgSrc: "./PRODUCT PHOTO/WITH LOGO/5HP/COMBO.webp",

//     title: "Pulverizer 5HP Jali Set",
//     urlSlug: "pulverizer-5hp-jali-set",

//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     imgSrc: "./PRODUCT PHOTO/WITH LOGO/SS2HP/COMBO.webp",

//     title: "Gravy Machine 1HP Jali Set",
//     urlSlug: "gravy-machine-1hp-jali-set",
//   },
//   {
//     imgSrc: "./PRODUCT PHOTO/WITH LOGO/SS2HP/COMBO.webp",

//     urlSlug: "gravy-machine-2hp-jali-set",
//     title: "Gravy Machine 2HP Jali Set",
//   },
//   {
//     imgSrc: "./PRODUCT PHOTO/WITH LOGO/SS3HP/COMBO.webp",
//     urlSlug: "gravy-machine-3hp-jali-set",
//     title: "Gravy Machine 3HP Jali Set",
//   },
//   {
//     imgSrc: "./PRODUCT PHOTO/WITH LOGO/SS5HP/COMBO.webp",

//     title: "Gravy Machine 5HP Jali Set",
//     urlSlug: "gravy-machine-5hp-jali-set",
//   },
//   {
//     imgSrc: "./PRODUCT PHOTO/WITH LOGO/CHILLICUTTER/COMBO.webp",

//     title: " Chili Cutter Jali Set",
//     urlSlug: "chili-cutter-jali-set",
//   },
// ];

// Select the grid container

// Function to create product card
// function createProductCard(product) {
//   const link = document.createElement("a");
//   link.href = `./${product.urlSlug}.html`;
//   link.className = "block";

//   const card = document.createElement("article");
//   card.className =
//     "bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative";
//   link.appendChild(card);

//   const imgContainer = document.createElement("div");
//   imgContainer.className =
//     "w-11/12 h-[210px]  overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4";

//   const img = document.createElement("img");
//   img.src = product.imgSrc;
//   img.alt = product.title;
//   img.className = "h-full w-full object-contain  ";

//   imgContainer.appendChild(img);

//   const content = document.createElement("div");
//   const title = document.createElement("h3");
//   title.className = "text-lg font-extrabold text-logo h-16 text-center";
//   title.textContent = product.title;

//   const description = document.createElement("h4");
//   description.className = "text-gray-600 text-sm mt-2";
//   description.textContent = product.description;

//   content.appendChild(title);
//   // content.appendChild(description);
//   card.appendChild(imgContainer);
//   card.appendChild(content);

//   return link;
// }
// let abhay=""
// if (productsSection) {
//   products.forEach((product) => {
//     const productCard = createProductCard(product);
//     productsSection.appendChild(productCard);
//     abhay=abhay + productCard.outerHTML;

//   });
//   console.log(abhay);
// }

// products

// image chainging logic

function changeImage(element) {
  const imgElement = element.querySelector("img");
  const imgSrc = imgElement.getAttribute("src");
  const altText = imgElement.getAttribute("alt");

  if (mainImage) {
    mainImage.setAttribute("src", imgSrc);
    mainImage.setAttribute("alt", altText);
  }
}
// image chainging logic
